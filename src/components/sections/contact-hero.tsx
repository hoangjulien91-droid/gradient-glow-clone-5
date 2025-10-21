"use client";

import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="bg-bg-primary pt-32 sm:pt-40 pb-20 sm:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent-blue/30 to-transparent top-0 left-1/4 blur-[120px]"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-coral/20 to-transparent top-1/4 right-1/4 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Contactez-moi</span>
          </h1>
          <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed">
            Vous avez besoin d'aide ou de conseils ? Je suis là pour vous écouter et vous accompagner dans vos démarches. 
            <span className="block mt-2 text-accent-coral font-semibold">Toutes nos consultations sont strictement confidentielles.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;