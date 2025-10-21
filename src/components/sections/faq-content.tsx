"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Scale, Brain, Eye, Shield, Phone, FileText, Clock, MapPin } from "lucide-react";

const faqData = [
  {
    question: "Qu'est-ce qu'un détective victimologue ?",
    answer: "Un détective victimologue est un professionnel qui combine l'expertise de l'investigation privée avec une compréhension approfondie des traumatismes subis par les victimes. Mon rôle est de collecter des preuves recevables tout en vous accompagnant humainement dans votre parcours de réparation et de justice.",
    icon: Eye
  },
  {
    question: "Quelle est la différence avec un avocat ou un psychologue ?",
    answer: "👨‍⚖️ L'avocat défend vos droits sur le plan juridique.\n\n🧠 Le psychologue vous aide à gérer vos traumatismes.\n\n🔎 Le détective victimologue documente les faits, collecte des preuves et facilite la mise en place d'un dossier solide, tout en vous orientant vers les bons professionnels.",
    icon: Scale
  },
  {
    question: "Mes informations restent-elles confidentielles ?",
    answer: "Oui, absolument. Toutes les informations que vous me confiez sont protégées par le secret professionnel. Rien n'est transmis sans votre accord explicite.",
    icon: Shield
  },
  {
    question: "Pouvez-vous intervenir rapidement en cas d'urgence ?",
    answer: "Oui. J'assure une disponibilité 24/7 pour les situations de danger immédiat (violences, menaces, harcèlement actif). Une intervention rapide permet de protéger les victimes et de préserver des preuves essentielles.",
    icon: Phone
  },
  {
    question: "Est-ce que vos preuves sont recevables en justice ?",
    answer: "Oui. Mes enquêtes suivent les règles légales en vigueur en France. Les preuves recueillies (rapports, constats, témoignages, éléments numériques) peuvent être utilisées devant les tribunaux, en appui d'une plainte ou d'une ordonnance de protection.",
    icon: FileText
  },
  {
    question: "Travaillez-vous avec des avocats ou des psychologues ?",
    answer: "Oui. Mon approche est collaborative. J'oriente mes clients, lorsque nécessaire, vers des avocats spécialisés et une psychologue du travail TCC avec qui je collabore de façon privilégiée. Cela permet une prise en charge globale : juridique, psychologique et sociale.",
    icon: Brain
  },
  {
    question: "Quelles violences prenez-vous en charge ?",
    answer: "Je peux intervenir sur :\n• Violences conjugales et familiales\n• Cyberviolences (harcèlement, revenge porn, usurpation d'identité)\n• Harcèlement moral ou sexuel au travail\n• Escroqueries et violences économiques\n• Maltraitance envers mineurs ou personnes âgées\n• Traite des êtres humains\n• Victimisation secondaire (abus du système judiciaire)",
    icon: Shield
  },
  {
    question: "Pouvez-vous agir dans un cadre professionnel (entreprise) ?",
    answer: "Oui. J'interviens aussi en milieu professionnel pour :\n• Enquêtes sur le harcèlement ou les violences internes\n• Évaluation des risques psychosociaux (RPS)\n• Prévention et sensibilisation des équipes\n• Soutien aux salariés victimes",
    icon: Scale
  },
  {
    question: "Combien coûtent vos services ?",
    answer: "Les tarifs varient selon la complexité de l'affaire (enquête courte, suivi prolongé, intervention d'urgence). J'applique des tarifs adaptés et je propose des solutions de financement pour que l'aide reste accessible.",
    icon: FileText
  },
  {
    question: "Pouvez-vous intervenir partout en France ?",
    answer: "Oui. Basé en région parisienne, je peux intervenir dans toute la France et à distance pour certaines enquêtes (cyberviolences, analyse de preuves numériques).",
    icon: MapPin
  },
  {
    question: "Je ne suis pas sûr(e) que ma situation relève de vos services, que faire ?",
    answer: "Vous pouvez me contacter pour un entretien confidentiel. Même si votre situation ne nécessite pas une enquête complète, je pourrai vous orienter vers les bonnes ressources (associations, psychologues, avocats).",
    icon: Phone
  },
  {
    question: "Est-ce que vous accompagnez aussi les familles des victimes ?",
    answer: "Oui. Les proches des victimes sont souvent affectés. Je peux les aider à comprendre la situation, à documenter certains faits et à accéder à des ressources adaptées.",
    icon: Brain
  },
  {
    question: "Combien de temps dure une enquête ?",
    answer: "Cela dépend : certaines enquêtes urgentes se bouclent en quelques jours (ex. : cyberviolence active), tandis que d'autres nécessitent plusieurs semaines pour réunir des preuves solides (ex. : harcèlement professionnel).",
    icon: Clock
  },
  {
    question: "Est-ce que vous pouvez témoigner devant un tribunal ?",
    answer: "Oui. Je peux intervenir comme témoignage professionnel et présenter les preuves recueillies dans le cadre de votre dossier.",
    icon: Scale
  },
  {
    question: "Quels outils innovants proposez-vous ?",
    answer: "J'ai développé le Journal de Résilience : un outil pratique pour documenter les faits de manière structurée, protéger vos droits et renforcer votre dossier judiciaire et psychologique.",
    icon: FileText
  }
];

const FAQContent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-bg-light via-white to-bg-light relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-accent-coral/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-20 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-accent-purple/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <motion.div
                layout
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <motion.button
                  layout
                  onClick={() => toggleFAQ(index)}
                  className="flex items-start gap-4 w-full p-6 text-left group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Question */}
                  <div className="flex-1">
                    <span className="font-semibold text-lg text-text-dark leading-tight block">
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className={`flex-shrink-0 w-6 h-6 text-accent-blue transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 pl-[72px]">
                        <p className="text-text-muted leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQContent;