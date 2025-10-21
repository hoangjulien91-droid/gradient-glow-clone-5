"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Phone, MessageSquare, Shield } from "lucide-react";

const emergencyNumbers = [
  {
    icon: Phone,
    label: "Police",
    number: "17",
    description: "En cas de danger immédiat",
  },
  {
    icon: MessageSquare,
    label: "SMS d'urgence",
    number: "114",
    description: "Pour les personnes sourdes/malentendantes",
  },
  {
    icon: Shield,
    label: "Violences conjugales",
    number: "3919",
    description: "Écoute, information et orientation",
  },
];

const ContactEmergency = () => {
  return (
    <section className="bg-bg-secondary py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/30 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg animate-pulse">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">
                  🚨 Situation d'urgence ?
                </h2>
                <p className="text-gray-300 text-lg mt-1">
                  Si vous êtes en danger immédiat, contactez immédiatement :
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergencyNumbers.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card rounded-2xl p-6 text-center hover:border-red-500/50 transition-colors duration-300"
                >
                  <item.icon className="w-10 h-10 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold text-xl text-white mb-2">{item.label}</h3>
                  <div className="text-4xl font-bold text-red-400 mb-2">{item.number}</div>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactEmergency;