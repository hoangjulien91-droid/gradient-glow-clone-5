import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import type { SanityBlogPost } from "@/lib/sanity";

export function PostCard({ post }: { post: SanityBlogPost }) {
  const img = post.mainImage ? urlFor(post.mainImage)?.width(800).height(500).url() : undefined;
  const reading = Math.max(post.readingTime ?? 1, 1);
  return (
    <Link href={`/blog/${post.slug?.current}`} className="group block overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] transition-transform hover:-translate-y-1">
      {img && (
        <Image src={img} alt={post.title} width={800} height={500} className="h-56 w-full object-cover" />
      )}
      <div className="p-5">
        {post.categories && post.categories.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {post.categories.map((cat) => (
              <span key={cat} className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-primary)]/60 px-2.5 py-1 text-xs text-[var(--color-text-secondary)]">
                {cat}
              </span>
            ))}
          </div>
        )}
        <h3 className="mb-2 line-clamp-2 font-display text-xl text-white group-hover:text-[var(--color-accent)] transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="line-clamp-3 text-sm text-[var(--color-text-secondary)]">{post.excerpt}</p>
        )}
        <div className="mt-3 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
          {post.publishedAt ? (
            <p>
              {new Date(post.publishedAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
            </p>
          ) : <span />}
          <div className="flex items-center gap-2">
            {post.author?.name && <span className="truncate max-w-[120px]">Par {post.author.name}</span>}
            <span>•</span>
            <span>{reading} min</span>
          </div>
        </div>
      </div>
    </Link>
  );
}