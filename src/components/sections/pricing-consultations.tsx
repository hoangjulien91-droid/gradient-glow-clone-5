"use client";

import { motion } from "framer-motion";
import { Check, Phone, Video, FileText, Package, Heart } from "lucide-react";
import Link from "next/link";

const consultations = [
  {
    category: "Consultations Principales",
    items: [
      {
        label: "Gratuit",
        title: "Consultation Découverte",
        subtitle: "Premier Contact Gratuit",
        price: "Gratuite",
        duration: "15 min",
        description: "Premier échange téléphonique pour comprendre votre situation et vous orienter efficacement.",
        features: [
          "Écoute bienveillante de votre situation",
          "Premiers conseils pratiques",
          "Orientation personnalisée",
          "Explication de la démarche",
        ],
        icon: Phone,
        color: "success-green",
      },
      {
        label: "Populaire",
        title: "Consultation Téléphonique ou Visio",
        subtitle: "Accompagnement à Distance",
        price: "70 €",
        duration: "1h",
        description: "Consultation complète par téléphone ou visioconférence pour analyser votre situation et définir une stratégie.",
        features: [
          "Analyse complète de votre dossier",
          "Stratégie de collecte de preuves",
          "Plan d'action détaillé",
          "Supports visuels (visio) et documentation",
        ],
        icon: Video,
        color: "accent-blue",
        popular: true,
      },
      {
        title: "Analyse Écrite du Dossier",
        subtitle: "Rapport Professionnel",
        price: "200 €",
        duration: "Livré sous 48h",
        description: "Analyse écrite complète de votre situation avec recommandations et stratégie détaillée.",
        features: [
          "Rapport d'analyse détaillé",
          "Recommandations personnalisées",
          "Stratégie probatoire",
          "Liste des actions prioritaires",
        ],
        icon: FileText,
        color: "accent-purple",
      },
      {
        label: "Économie 150 €",
        title: "Pack Suivi Judiciaire",
        subtitle: "Accompagnement Global",
        price: "450 €",
        originalPrice: "600 €",
        duration: "5 séances",
        validity: "Validité 3 mois",
        description: "Accompagnement global comprenant un suivi judiciaire complet.",
        features: [
          "5 consultations victimologie d'1h",
          "Suivi judiciaire complet",
          "Aide à la rédaction de plaintes",
          "Stratégie probatoire complète",
          "Rapport synthétique pour avocat",
        ],
        icon: Package,
        color: "accent-coral",
        savings: true,
      },
    ],
  },
  {
    category: "Consultations Psychologie",
    description: "Soutien psychologique spécialisé par Audrey, psychologue clinicienne",
    items: [
      {
        title: "Consultation avec Audrey (Psychologue)",
        subtitle: "Soutien psychologique spécialisé pour victimes",
        price: "60 €",
        duration: "60 min",
        description: "",
        features: [],
        icon: Heart,
        color: "accent-salmon",
        cta: "Prendre rendez-vous",
      },
    ],
  },
  {
    category: "Options Supplémentaires",
    items: [
      {
        title: "Rapport écrit après séance",
        price: "+50 €",
        description: "Document récapitulatif détaillé",
        features: [],
        addon: true,
      },
      {
        title: "Journal de Résilience",
        price: "Offert",
        description: "Pour tout pack réservé",
        features: [],
        addon: true,
        free: true,
      },
    ],
  },
];

export default function PricingConsultations() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container relative z-10">
        {/* Categories */}
        {consultations.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20 last:mb-0">
            {/* Category header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-display">
                {category.category}
              </h2>
              {category.description && (
                <p className="text-lg text-text-secondary">{category.description}</p>
              )}
            </motion.div>

            {/* Cards grid */}
            <div className={`grid gap-8 ${category.items.length > 2 ? "md:grid-cols-2 lg:grid-cols-2" : "md:grid-cols-2"} max-w-6xl mx-auto`}>
              {category.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-3xl p-8 transition-all duration-300 ${
                    item.addon
                      ? "bg-bg-secondary border border-white/10"
                      : "glass-card hover:shadow-glow"
                  } ${item.popular ? "ring-2 ring-accent-blue" : ""}`}
                >
                  {/* Badge */}
                  {item.label && (
                    <div
                      className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-semibold ${
                        item.savings
                          ? "bg-gradient-to-r from-accent-coral to-accent-salmon text-white"
                          : item.popular
                          ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white"
                          : "bg-success-green text-white"
                      }`}
                    >
                      {item.label}
                    </div>
                  )}

                  {/* Icon */}
                  {item.icon && !item.addon && (
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${item.color} to-${item.color}/70 flex items-center justify-center mb-6`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-base text-text-secondary mb-4">{item.subtitle}</p>
                  )}

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-2">
                    {item.originalPrice && (
                      <span className="text-2xl text-text-muted line-through">{item.originalPrice}</span>
                    )}
                    <span className={`text-4xl font-bold ${item.free ? "text-success-green" : "text-white"}`}>
                      {item.price}
                    </span>
                  </div>

                  {/* Duration/Validity */}
                  {item.duration && (
                    <p className="text-text-secondary mb-4">{item.duration}</p>
                  )}
                  {item.validity && (
                    <p className="text-sm text-text-muted mb-4">{item.validity}</p>
                  )}

                  {/* Description */}
                  {item.description && (
                    <p className="text-text-secondary mb-6">{item.description}</p>
                  )}

                  {/* Features */}
                  {item.features.length > 0 && (
                    <div className="space-y-3 mb-6">
                      <p className="text-sm font-semibold text-white">Inclut :</p>
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  {item.cta && (
                    <Link
                      href="#contact"
                      className="block w-full text-center px-6 py-3 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-coral text-white rounded-xl font-semibold shadow-lg hover:shadow-button-glow transition-all duration-300"
                    >
                      {item.cta}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Clients sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Particuliers */}
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3 font-display">Particuliers</h3>
            <p className="text-text-secondary">
              Consultations de détective victimologue: découverte, téléphone/Visio, analyse écrite, pack suivi judiciaire
            </p>
          </div>

          {/* Entreprises */}
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3 font-display">Entreprises</h3>
            <p className="text-text-secondary">
              Solutions RPS, audits, formations et accompagnement en conformité légale
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}