"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Shield } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative bg-bg-primary pt-32 pb-20 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-hero-overlay pointer-events-none" />

      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-coral/10 border border-accent-coral/20 mb-8"
          >
            <BookOpen className="w-4 h-4 text-accent-coral" />
            <span className="text-sm font-medium text-accent-coral">
              Articles & Conseils d'Expert
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-display font-bold text-text-primary mb-6 leading-tight"
          >
            Blog{" "}
            <span className="gradient-text">Victimologie</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Découvrez mes conseils, analyses et actualités sur la victimologie, 
            les enquêtes privées et la protection des droits des victimes.
          </motion.p>

          {/* Stats badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="glass-card px-6 py-4 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-coral/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent-coral" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-text-primary">50+</div>
                <div className="text-sm text-text-secondary">Articles</div>
              </div>
            </div>

            <div className="glass-card px-6 py-4 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent-blue" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-text-primary">15 ans</div>
                <div className="text-sm text-text-secondary">D'expertise</div>
              </div>
            </div>

            <div className="glass-card px-6 py-4 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent-purple" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-text-primary">100%</div>
                <div className="text-sm text-text-secondary">Gratuit</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}