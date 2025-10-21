import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "atgarfdr";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// ✅ Performance: Client avec CDN pour production, sans CDN pour preview
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: process.env.NODE_ENV === 'production', // CDN uniquement en prod
  perspective: 'published', // Données publiées uniquement
  // ✅ Performance: Stega pour Visual Editing sans ralentir
  stega: {
    enabled: process.env.NODE_ENV === 'development',
    studioUrl: '/studio',
  },
});

const builder = imageUrlBuilder({ projectId, dataset });

// ✅ Performance: Helper pour images Sanity optimisées
export function urlFor(source: Image | any) {
  try {
    return builder.image(source)
      .auto('format') // Format automatique (WebP/AVIF)
      .fit('max') // Préserver le ratio
      .quality(85); // Qualité optimale
  } catch (e) {
    console.error('Error building image URL:', e);
    return undefined as any;
  }
}