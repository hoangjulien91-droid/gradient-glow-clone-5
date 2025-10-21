import { getAllBlogPosts } from "@/lib/sanity";
export const revalidate = 60;
export async function fetchBlogPosts() {
  try {
    return await getAllBlogPosts();
  } catch (e) {
    console.error('Erreur lors de la récupération des posts Sanity:', e);
    return [];
  }
}