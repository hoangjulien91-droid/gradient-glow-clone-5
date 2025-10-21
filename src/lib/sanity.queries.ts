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

export async function getAllPosts(): Promise<PostListItem[]> {
  return sanityClient.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) ${postFields}`
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
    { slug }
  );
}

export async function getRecentPosts(limit = 3): Promise<PostListItem[]> {
  return sanityClient.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) [0...$limit] ${postFields}`,
    { limit }
  );
}