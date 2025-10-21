"use client";

import { motion } from "framer-motion";
import { Phone, Video } from "lucide-react";

export default function PricingHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-accent-purple/5 to-accent-coral/10 pointer-events-none" />
      
      {/* Decorative blur circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent-purple/15 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-accent-coral/20 to-accent-salmon/20 border border-accent-coral/30 backdrop-blur-sm mb-8"
          >
            <Phone className="w-4 h-4 text-accent-coral" />
            <span className="text-sm font-medium text-white">Par téléphone ou visioconférence</span>
            <Video className="w-4 h-4 text-accent-blue" />
          </motion.div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">
            Nos Tarifs
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary mb-4 font-light">
            Consultations confidentielles et sécurisées, adaptées à vos besoins.
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {[
              { icon: Phone, label: "Consultation téléphonique" },
              { icon: Video, label: "Visioconférence sécurisée" },
              { icon: "🔒", label: "100% confidentiel" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
              >
                {typeof item.icon === "string" ? (
                  <span className="text-lg">{item.icon}</span>
                ) : (
                  <item.icon className="w-4 h-4 text-accent-blue" />
                )}
                <span className="text-sm text-white/90">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}