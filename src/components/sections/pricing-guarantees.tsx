"use client";

import { motion } from "framer-motion";
import { Lock, CreditCard, Calendar } from "lucide-react";

const guarantees = [
  {
    icon: Lock,
    title: "100% Confidentiel",
    description: "Secret professionnel garanti",
    color: "accent-coral",
  },
  {
    icon: CreditCard,
    title: "Paiement Sécurisé",
    description: "CB, PayPal, virement",
    color: "accent-blue",
  },
  {
    icon: Calendar,
    title: "Réservation Simple",
    description: "Calendrier en ligne intégré",
    color: "accent-purple",
  },
];

export default function PricingGuarantees() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-bg-secondary to-bg-primary">
      {/* Decorative blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-display">
            🔐 Vos Garanties
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 text-center hover:shadow-glow transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${guarantee.color} to-${guarantee.color}/70 flex items-center justify-center mx-auto mb-6`}>
                <guarantee.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                {guarantee.title}
              </h3>
              <p className="text-text-secondary">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}