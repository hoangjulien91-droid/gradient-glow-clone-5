import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { getPostBySlug } from "@/lib/sanity.queries";
import { PortableTextRenderer } from "@/components/sanity/portable-text";
import { urlFor } from "@/lib/sanity.client";
import { notFound } from "next/navigation";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article" };
  const ogUrl = post.ogImage
    ? urlFor(post.ogImage)?.width(1200).height(630).url()
    : post.mainImage
    ? urlFor(post.mainImage)?.width(1200).height(630).url()
    : undefined;
  return {
    title: post.seoTitle || `${post.title} - Blog`,
    description: post.seoDescription || post.excerpt || undefined,
    keywords: post.categories,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt || undefined,
      images: ogUrl ? [{ url: ogUrl }] : [],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const coverUrl = post.mainImage ? urlFor(post.mainImage)?.width(1600).height(900).url() : undefined;

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <main>
        <section className="container py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-[var(--color-text-primary)] font-display">{post.title}</h1>
            {post.publishedAt && (
              <p className="mb-6 text-sm text-[var(--color-text-secondary)]">
                Publié le {new Date(post.publishedAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
              </p>
            )}
            {coverUrl && (
              <div className="mb-8 overflow-hidden rounded-2xl border border-[var(--color-border)]">
                <Image src={coverUrl} alt={post.title} width={1600} height={900} className="h-auto w-full object-cover" />
              </div>
            )}
            <article className="prose prose-invert max-w-none prose-headings:font-display prose-a:text-[var(--color-accent)] prose-strong:text-white">
              <PortableTextRenderer value={post.body || []} />
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}