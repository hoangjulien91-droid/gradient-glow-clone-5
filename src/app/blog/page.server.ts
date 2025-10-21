import { getAllPosts } from "@/lib/sanity.queries";

// ✅ Performance: ISR avec revalidation toutes les heures
export const revalidate = 3600; // 1 heure au lieu de 60s

/**
 * ✅ Server Component: Fetch des posts blog depuis Sanity
 * Utilise le cache Next.js avec tags pour revalidation on-demand
 */
export async function fetchBlogPosts() {
  try {
    return await getAllPosts();
  } catch (e) {
    console.error('Erreur lors de la récupération des posts Sanity:', e);
    return [];
  }
}