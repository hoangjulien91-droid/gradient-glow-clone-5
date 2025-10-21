// Configuration Sanity CMS
// À activer lors de l'intégration avec Sanity

import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "atgarfdr";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2025-01-20"; // Date du jour

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `false` si vous voulez du contenu en temps réel
});

// Queries GROQ pour récupérer les articles de blog
export const queries = {
  // Récupérer tous les articles de blog (avec pagination)
  getAllPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        url
      }
    },
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    categories[]->{
      title,
      slug
    },
    "readingTime": round(length(pt::text(body)) / 5 / 180 )
  }`,

  // Récupérer un article par son slug
  getPostBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    mainImage {
      asset->{
        url
      }
    },
    author->{
      name,
      bio,
      image {
        asset->{
          url
        }
      }
    },
    categories[]->{
      title,
      slug
    },
    "readingTime": round(length(pt::text(body)) / 5 / 180 )
  }`,

  // Récupérer les articles par catégorie
  getPostsByCategory: `*[_type == "post" && $category in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        url
      }
    },
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    categories[]->{
      title,
      slug
    },
    "readingTime": round(length(pt::text(body)) / 5 / 180 )
  }`,

  // Récupérer toutes les catégories
  getAllCategories: `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }`,

  // Récupérer les articles récents (limité)
  getRecentPosts: `*[_type == "post"] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        url
      }
    },
    categories[]->{
      title,
      slug
    },
    "readingTime": round(length(pt::text(body)) / 5 / 180 )
  }`,
};

// Fonctions helper pour récupérer les données
export async function getAllBlogPosts() {
  return await client.fetch(queries.getAllPosts);
}

export async function getBlogPostBySlug(slug: string) {
  return await client.fetch(queries.getPostBySlug, { slug });
}

export async function getBlogPostsByCategory(category: string) {
  return await client.fetch(queries.getPostsByCategory, { category });
}

export async function getAllCategories() {
  return await client.fetch(queries.getAllCategories);
}

export async function getRecentBlogPosts(limit: number = 3) {
  return await client.fetch(queries.getRecentPosts, { limit });
}

// Types TypeScript pour Sanity
export interface SanityImage {
  asset: {
    url: string;
  };
}

export interface SanityAuthor {
  name: string;
  bio?: string;
  image?: SanityImage;
}

export interface SanityCategory {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body?: any; // Portable Text
  mainImage: SanityImage;
  author: SanityAuthor;
  categories: SanityCategory[];
  readingTime: number;
}