import { getAllPosts } from "@/lib/sanity.queries";
export const revalidate = 60;
export async function fetchBlogPosts() {
  try {
    return await getAllPosts();
  } catch (e) {
    return [];
  }
}