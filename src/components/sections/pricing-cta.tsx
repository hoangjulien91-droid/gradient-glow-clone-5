"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function PricingCta() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-coral/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-12 text-center"
        >
          {/* Icon */}
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent-coral to-accent-salmon flex items-center justify-center mx-auto mb-6 shadow-glow">
            <BookOpen className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            Prêt à reprendre le contrôle ?
          </h2>

          {/* Description */}
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre consultation confidentielle et commencez à construire votre stratégie de protection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-coral text-white rounded-xl font-semibold shadow-lg hover:shadow-button-glow transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <span className="relative flex items-center gap-2">
                Réserver ma consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/blog"
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Lire le blog
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}