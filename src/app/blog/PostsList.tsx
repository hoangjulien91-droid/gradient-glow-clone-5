import { PostCard } from "@/components/sanity/post-card";
import type { PostListItem } from "@/lib/sanity.queries";

export function PostsList({ posts }: { posts: PostListItem[] }) {
  if (!posts?.length) return null;
  return (
    <section className="container py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p._id} post={p} />
        ))}
      </div>
    </section>
  );
}