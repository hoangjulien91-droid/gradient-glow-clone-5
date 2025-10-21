"use client";

import { motion } from "framer-motion";
import { MessageCircleQuestion } from "lucide-react";

const FAQHero = () => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-accent-blue/20 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-accent-purple/20 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple shadow-[0_8px_32px_rgba(74,144,226,0.3)]"
          >
            <MessageCircleQuestion className="w-10 h-10 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl lg:text-6xl font-bold mb-6 font-display text-white"
          >
            Foire Aux Questions
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl lg:text-2xl text-text-secondary leading-relaxed"
          >
            Toutes les réponses aux questions que vous vous posez sur mes services de{" "}
            <span className="text-accent-coral font-semibold">détective victimologue</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQHero;