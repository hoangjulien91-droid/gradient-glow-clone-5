"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from "lucide-react";
import { useState } from "react";

// Types pour Sanity CMS (à utiliser lors de l'intégration)
export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  author: {
    name: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
  categories: Array<{
    title: string;
    slug: { current: string };
  }>;
  readingTime: number; // en minutes
}

// Données mockées (à remplacer par fetch Sanity)
const MOCK_POSTS: SanityBlogPost[] = [
  {
    _id: "1",
    title: "Comment constituer un dossier solide pour une plainte ?",
    slug: { current: "constituer-dossier-plainte" },
    publishedAt: "2025-01-15",
    excerpt: "Les étapes essentielles pour rassembler des preuves recevables et constituer un dossier complet avant de porter plainte.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      },
    },
    author: {
      name: "Julien Hoang",
    },
    categories: [
      { title: "Conseils Juridiques", slug: { current: "conseils-juridiques" } },
    ],
    readingTime: 8,
  },
  {
    _id: "2",
    title: "Violences conjugales : reconnaître les signaux d'alerte",
    slug: { current: "violences-conjugales-signaux-alerte" },
    publishedAt: "2025-01-10",
    excerpt: "Un guide pour identifier les comportements toxiques et les différentes formes de violences conjugales avant qu'il ne soit trop tard.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      },
    },
    author: {
      name: "Julien Hoang",
    },
    categories: [
      { title: "Victimologie", slug: { current: "victimologie" } },
    ],
    readingTime: 10,
  },
  {
    _id: "3",
    title: "Harcèlement moral au travail : que faire ?",
    slug: { current: "harcelement-moral-travail" },
    publishedAt: "2025-01-05",
    excerpt: "Vos droits, les démarches à suivre et comment rassembler des preuves en cas de harcèlement moral dans le cadre professionnel.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      },
    },
    author: {
      name: "Julien Hoang",
    },
    categories: [
      { title: "Harcèlement", slug: { current: "harcelement" } },
    ],
    readingTime: 12,
  },
  {
    _id: "4",
    title: "Arnaques en ligne : les nouveaux pièges à éviter en 2025",
    slug: { current: "arnaques-en-ligne-2025" },
    publishedAt: "2025-01-02",
    excerpt: "Découvrez les dernières techniques d'escroquerie sur internet et comment vous protéger efficacement contre ces menaces.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      },
    },
    author: {
      name: "Julien Hoang",
    },
    categories: [
      { title: "Arnaques", slug: { current: "arnaques" } },
    ],
    readingTime: 6,
  },
  {
    _id: "5",
    title: "Le rôle du détective privé dans les affaires familiales",
    slug: { current: "detective-prive-affaires-familiales" },
    publishedAt: "2024-12-28",
    excerpt: "Comment un détective privé peut vous aider dans les procédures de garde d'enfants, pension alimentaire ou divorce contentieux.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
      },
    },
    author: {
      name: "Julien Hoang",
    },
    categories: [
      { title: "Enquêtes Privées", slug: { current: "enquetes-privees" } },
    ],
    readingTime: 9,
  },
  {
    _id: "6",
    title: "Cyberharcèlement : comprendre et agir",
    slug: { current: "cyberharcelement-comprendre-agir" },
    publishedAt: "2024-12-20",
    excerpt: "Les formes de cyberharcèlement, leur impact psychologique et les recours juridiques disponibles pour les victimes.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      },
    },
    author: {
      name: "Julien Hoang",
    },
    categories: [
      { title: "Harcèlement", slug: { current: "harcelement" } },
    ],
    readingTime: 11,
  },
];

const CATEGORIES = [
  "Tous les articles",
  "Victimologie",
  "Conseils Juridiques",
  "Harcèlement",
  "Arnaques",
  "Enquêtes Privées",
];

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Tous les articles");

  const filteredPosts =
    selectedCategory === "Tous les articles"
      ? MOCK_POSTS
      : MOCK_POSTS.filter((post) =>
          post.categories.some((cat) => cat.title === selectedCategory)
        );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <section className="py-20 bg-bg-light">
      <div className="container max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap gap-3 justify-center"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "gradient-cta-bg text-white shadow-lg scale-105"
                  : "bg-white text-text-dark hover:bg-bg-secondary hover:text-white border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-accent-coral">
                    <Tag className="w-3 h-3" />
                    {post.categories[0].title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-text-muted">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-text-dark mb-3 line-clamp-2 group-hover:text-accent-coral transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-muted mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read more link */}
                <a
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center gap-2 text-accent-coral font-semibold hover:gap-3 transition-all group-hover:text-accent-blue"
                >
                  Lire l'article
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center glass-card rounded-3xl p-12 max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 rounded-full gradient-cta-bg flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-display font-bold text-text-primary mb-4">
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Au-delà des conseils en ligne, je propose un accompagnement sur mesure 
            pour votre situation spécifique.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-cta-bg text-white font-semibold hover:shadow-button-glow transition-all duration-300 hover:scale-105"
          >
            Prendre rendez-vous
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}