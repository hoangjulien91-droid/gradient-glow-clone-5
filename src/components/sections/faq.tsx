"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquareQuote, ArrowRight } from 'lucide-react';

const faqData = [
    {
        question: "Qu'est-ce qu'un détective victimologue ?",
        answer: "C'est un détective privé qui, en plus de ses compétences d'enquêteur, a une formation spécialisée en victimologie. Cela me permet de comprendre les dynamiques spécifiques des victimes d'infractions (harcèlement, violences, escroqueries) et d'adapter mes méthodes pour collecter des preuves tout en offrant un soutien humain et respectueux."
    },
    {
        question: "Mes informations resteront-elles confidentielles ?",
        answer: "Absolument. Je suis soumis au secret professionnel le plus strict. La confidentialité est la base de notre relation de confiance. Toutes vos informations, ainsi que les résultats de l'enquête, sont traités avec la plus grande discrétion et ne sont partagés qu'avec votre accord explicite, par exemple avec votre avocat."
    },
    {
        question: "Combien coûte une enquête ?",
        answer: "Chaque situation est unique, donc les coûts varient. Après notre consultation découverte gratuite de 15 minutes, je vous fournirai un devis détaillé et transparent, sans engagement. Le tarif dépend de la complexité de l'affaire, des moyens à mettre en œuvre et de la durée estimée de l'enquête."
    },
    {
        question: "Les preuves que vous collectez sont-elles recevables en justice ?",
        answer: "Oui. En tant que détective privé agréé par le CNAPS, tous mes rapports d'enquête sont détaillés, circonstanciés et recevables devant les juridictions compétentes. Mon travail consiste précisément à assembler un dossier de preuves solide pour appuyer votre démarche légale."
    },
    {
        question: "Combien de temps dure une enquête ?",
        answer: "La durée d'une enquête dépend de nombreux facteurs, comme la nature de l'affaire et la disponibilité des informations. Certaines enquêtes peuvent être résolues en quelques jours, tandis que d'autres, plus complexes, peuvent prendre plusieurs semaines. Je vous donnerai une estimation réaliste dès le début de notre collaboration."
    },
    {
        question: "Puis-je vous contacter en dehors des horaires de bureau ?",
        answer: "Oui, je suis disponible 24/7 pour les urgences. Je comprends que certaines situations ne peuvent pas attendre. Pour les consultations non urgentes, je suis généralement joignable du lundi au vendredi de 9h à 19h. N'hésitez jamais à laisser un message ou envoyer un email, je vous répondrai dans les plus brefs délais."
    },
    {
        question: "Que se passe-t-il si je n'ai aucune preuve pour l'instant ?",
        answer: "C'est exactement là que j'interviens. Ne vous inquiétez pas si vous n'avez pas de preuves tangibles. Mon rôle est de vous aider à en trouver. La consultation initiale nous permettra d'évaluer votre situation et de déterminer la meilleure stratégie pour commencer à rassembler les éléments nécessaires."
    },
    {
        question: "Intervenez-vous uniquement dans le Pays Basque ?",
        answer: "Bien que basé à Biarritz dans le Pays Basque, ma zone d'intervention s'étend à toute la France et même à l'international si nécessaire. La technologie moderne et mon réseau de contacts me permettent de gérer des cas à distance et de me déplacer lorsque la situation l'exige."
    }
];


const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA] py-24 sm:py-32 relative overflow-hidden scroll-mt-24">
            <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-[#4A90E2]/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[#9333EA]/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6 font-display bg-gradient-to-r from-[#4A90E2] via-[#9333EA] to-[#EA6C4F] bg-clip-text text-transparent">
                        Questions Fréquentes
                    </h2>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
                        Les réponses aux questions que vous vous posez
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqData.map((faq, index) => (
                        <motion.div
                            layout
                            key={index}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
                            initial={{ borderRadius: 16 }}
                        >
                            <motion.button
                                layout
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full p-6 text-left"
                            >
                                <span className="font-semibold text-lg text-slate-800">{faq.question}</span>
                                <ChevronDown
                                    className={`w-6 h-6 text-[#4A90E2] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
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
                                        <p className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-lg text-slate-600 mb-6 font-semibold">
                        Vous ne trouvez pas la réponse à votre question ?
                    </p>
                    <a
                        href="#contact"
                        className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#4A90E2] via-[#9333EA] to-[#EA6C4F] text-white rounded-xl font-semibold text-lg shadow-[0_8px_25px_rgba(74,144,226,0.3)] hover:shadow-[0_12px_35px_rgba(147,51,234,0.4)] transition-all duration-300 overflow-hidden group bg-[length:200%_auto] hover:bg-right"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <MessageSquareQuote className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">Posez-moi directement votre question</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;