"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, Shield } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    color: "from-accent-coral to-accent-salmon",
    title: "Téléphone",
    line1: "06 95 21 23 25",
    line2: "Disponible du lundi au vendredi, 9h-18h",
    href: "tel:0695212325",
  },
  {
    icon: Mail,
    color: "from-accent-blue to-blue-600",
    title: "Email",
    line1: "contact@detective-conseil.fr",
    line2: "Réponse sous 24h maximum",
    href: "mailto:contact@detective-conseil.fr",
  },
  {
    icon: Clock,
    color: "from-accent-purple to-purple-600",
    title: "Horaires",
    line1: "Lun - Ven : 9h - 18h",
    line2: "Urgences : 24h/24, 7j/7",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-bg-primary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Informations de contact</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactDetails.map((item, index) => {
              const CardContent = () => (
                <>
                  <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center shadow-lg bg-gradient-to-br ${item.color}`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200 font-semibold">{item.line1}</p>
                  <p className="text-sm text-gray-400 mt-1">{item.line2}</p>
                </>
              );

              const cardClasses = "glass-card rounded-3xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-glow";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {item.href ? (
                    <a href={item.href} className={`block ${cardClasses}`}>
                      <CardContent />
                    </a>
                  ) : (
                    <div className={cardClasses}>
                      <CardContent />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass-card rounded-3xl p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-success-green to-green-600 mb-4 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Confidentialité garantie
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tous nos échanges sont strictement confidentiels et protégés par le secret professionnel. 
              Vos informations personnelles ne seront jamais divulguées.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;