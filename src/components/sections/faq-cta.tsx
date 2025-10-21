"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote, Phone } from "lucide-react";

const FAQCta = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent-blue/20 via-accent-purple/20 to-accent-coral/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-display text-white">
            Vous ne trouvez pas la réponse à votre question ?
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-text-secondary mb-10 leading-relaxed">
            N'hésitez pas à me contacter pour un entretien confidentiel et personnalisé
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-coral text-white rounded-xl font-semibold text-lg shadow-[0_8px_25px_rgba(74,144,226,0.3)] hover:shadow-[0_12px_35px_rgba(147,51,234,0.4)] transition-all duration-300 overflow-hidden group bg-[length:200%_auto] hover:bg-right"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <MessageSquareQuote className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Me contacter</span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="tel:+33612345678"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>Appeler directement</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQCta;