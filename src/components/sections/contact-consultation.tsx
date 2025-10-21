"use client";

import { motion } from "framer-motion";
import { Phone, Check } from "lucide-react";

const ContactConsultation = () => {
  return (
    <section className="bg-gradient-to-b from-bg-primary to-bg-secondary py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent-coral to-accent-salmon mb-6 shadow-lg">
                <Phone className="w-10 h-10 text-white" />
              </div>

              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                Consultation Découverte
              </h2>
              
              <p className="text-lg text-gray-300 mb-4">
                15 minutes gratuites par téléphone
              </p>

              <div className="inline-flex items-center gap-2 px-6 py-2 bg-success-green/20 border border-success-green/30 rounded-full mb-6">
                <Check className="w-5 h-5 text-success-green" />
                <span className="text-success-green font-semibold">100% Gratuit</span>
              </div>

              <a
                href="tel:0695212325"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-accent-blue via-accent-purple to-accent-coral px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-button-glow hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Réserver maintenant
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactConsultation;