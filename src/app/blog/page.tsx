import dynamic from "next/dynamic";
import { AutoPageLayout } from "@/components/layout";
import type { Metadata } from "next";
import { fetchBlogPosts } from "./page.server";
import type { SanityBlogPost } from "@/lib/sanity";
import type { PostListItem } from "@/lib/sanity.queries";

// ✅ Performance: ISR avec revalidation toutes les heures
export const revalidate = 3600; // 1 heure au lieu de 60s

const BlogHero = dynamic(() => import("@/components/sections/blog-hero"), {
  loading: () => <div className="min-h-screen bg-bg-primary" />,
});

const BlogGrid = dynamic(() => import("@/components/sections/blog-grid"), {
  loading: () => <div className="min-h-[400px] bg-bg-light" />,
});

export const metadata: Metadata = {
  title: "Blog - Julien Hoang Détective Privé",
  description: "Actualités, conseils et guides sur la victimologie, les enquêtes privées et la protection des victimes. Articles d'expert par Julien Hoang, détective privé agréé CNAPS.",
  openGraph: {
    title: "Blog - Julien Hoang Détective Privé",
    description: "Actualités, conseils et guides sur la victimologie, les enquêtes privées et la protection des victimes.",
  },
};

// Adapter les posts de Sanity au format attendu par BlogGrid
function adaptPosts(posts: PostListItem[]): SanityBlogPost[] {
  return posts.map(post => ({
    _id: post._id,
    title: post.title,
    slug: post.slug,
    publishedAt: post.publishedAt || '',
    excerpt: post.excerpt || '',
    body: undefined,
    mainImage: post.mainImage ? { asset: { url: post.mainImage.asset?.url || '' } } : { asset: { url: '' } },
    author: post.author ? { name: post.author.name, image: post.author.image } : { name: '' },
    categories: Array.isArray(post.categories) 
      ? post.categories.map((cat, idx) => typeof cat === 'string' 
          ? { _id: `cat-${idx}`, title: cat, slug: { current: cat.toLowerCase().replace(/\s+/g, '-') } } 
          : cat)
      : [],
    readingTime: post.readingMinutes || 5,
  }));
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts();
  const adaptedPosts = adaptPosts(posts);
  return (
    <AutoPageLayout>
      <BlogHero />
      <BlogGrid posts={adaptedPosts} />
    </AutoPageLayout>
  );
}