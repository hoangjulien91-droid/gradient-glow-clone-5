import { sanityClient } from "./sanity.client";
import { groq } from "next-sanity";

export type Author = {
  _id: string;
  name: string;
  image?: any;
  bio?: any[];
};

export type PostListItem = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: any;
  publishedAt?: string;
  author?: Author;
  categories?: string[];
  readingMinutes?: number;
};

export type Post = PostListItem & {
  body: any[];
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: any;
};

// ✅ Performance: Projection GROQ optimisée - seulement les champs nécessaires
const postFields = `{
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author->{_id, name, image},
  categories,
  "readingMinutes": round(length(pt::text(body)) / 5 / 200)
}`;

// ✅ Performance: Cache avec revalidation ISR
const REVALIDATE_TIME = 3600; // 1 heure

export async function getAllPosts(): Promise<PostListItem[]> {
  return sanityClient.fetch(
    groq`*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) ${postFields}`,
    {},
    {
      // ✅ Next.js 15: Cache et revalidation
      next: { 
        revalidate: REVALIDATE_TIME,
        tags: ['posts'] 
      },
    }
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      author->{_id, name, image},
      categories,
      "readingMinutes": round(length(pt::text(body)) / 5 / 200),
      seoTitle,
      seoDescription,
      ogImage,
      body
    }`,
    { slug },
    {
      // ✅ Cache avec tag spécifique pour invalidation ciblée
      next: { 
        revalidate: REVALIDATE_TIME,
        tags: ['post', `post-${slug}`] 
      },
    }
  );
}

export async function getRecentPosts(limit = 3): Promise<PostListItem[]> {
  return sanityClient.fetch(
    groq`*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) [0...${limit}] ${postFields}`,
    {},
    {
      next: { 
        revalidate: 1800, // 30 min pour les posts récents
        tags: ['recent-posts'] 
      },
    }
  );
}