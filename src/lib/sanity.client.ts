import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "atgarfdr";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder({ projectId, dataset });

export function urlFor(source: Image | any) {
  try {
    return builder.image(source);
  } catch (e) {
    return undefined as any;
  }
}