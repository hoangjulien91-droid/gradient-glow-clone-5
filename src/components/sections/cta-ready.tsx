"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StarShape = ({ className }: { className: string }) => (
  <div
    className={className}
    style={{
      clipPath:
        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
      backgroundColor: "currentColor",
    }}
  ></div>
);

const CtaReadySection = () => {
  const { ref, inView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative bg-bg-light py-20 lg:py-28 overflow-hidden">
      {/* Decorative floating shapes */}
      <motion.div
        className="absolute z-0 top-[15%] left-[8%]"
        animate={{ y: [-20, 20], rotate: [-15, 15] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <StarShape className="w-16 h-16 text-accent-coral/10" />
      </motion.div>
      <motion.div
        className="absolute z-0 top-[30%] right-[10%]"
        animate={{ y: [15, -15], rotate: [20, -20] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <StarShape className="w-20 h-20 text-accent-blue/10" />
      </motion.div>
      <motion.div
        className="absolute z-0 bottom-[10%] left-[20%]"
        animate={{ y: [-10, 10], x: [-5, 5] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <div className="w-24 h-24 bg-accent-purple/5 blur-2xl rounded-full" />
      </motion.div>
      <motion.div
        className="absolute z-0 bottom-[20%] right-[15%]"
        animate={{ y: [12, -12], x: [8, -8] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <div className="w-28 h-28 bg-accent-blue/5 blur-2xl rounded-full" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto rounded-3xl bg-white/80 backdrop-blur-md shadow-2xl border border-gray-200/50 p-8 sm:p-12 lg:p-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="p-4 bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl shadow-inner">
              <Sparkles
                className="w-10 h-10 bg-gradient-to-r from-accent-blue to-accent-coral bg-clip-text text-transparent"
                strokeWidth={2}
              />
            </div>
          </motion.div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark mb-4">
            Prêt à faire valoir vos{" "}
            <span className="bg-gradient-to-r from-accent-coral to-accent-salmon bg-clip-text text-transparent">
              droits ?
            </span>
          </h2>

          <p className="text-lg lg:text-xl font-semibold text-accent-coral mb-6">
            Bénéficiez d'une consultation découverte gratuite de 15 minutes
          </p>

          <p className="text-sm text-text-muted mb-10">
            Sans engagement • Totalement confidentielle
          </p>

          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-coral text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-accent-purple/30 transition-all duration-300 transform hover:scale-105 text-base lg:text-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            <span className="relative flex items-center gap-2">
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-12 text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-success-green"></span>
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-blue"></span>
              <span>Agréé CNAPS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-coral"></span>
              <span>15 ans d'expérience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaReadySection;