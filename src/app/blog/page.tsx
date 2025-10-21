import dynamic from "next/dynamic";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { Metadata } from "next";
import { PostsList } from "./PostsList";
import { fetchBlogPosts } from "./page.server";

export const revalidate = 60;

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

export default async function BlogPage() {
  const posts = await fetchBlogPosts();
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <Breadcrumb items={[{ label: "Blog" }]} />
      <main>
        <BlogHero />
        {/* Existing mock grid remains for design; Sanity posts are listed below */}
        <BlogGrid />
        <PostsList posts={posts} />
      </main>
      <Footer />
    </div>
  );
}