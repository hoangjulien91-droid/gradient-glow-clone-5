"use client";

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Shield,
  TriangleAlert,
  Search,
  ShieldCheck,
  FileText,
  Users,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Service = {
  icon: React.ElementType;
  iconBgColor: string;
  iconColor: string;
  title: string;
  subtitle: string;
  features: string[];
};

const servicesData: Service[] = [
  {
    icon: Shield,
    iconBgColor: 'bg-accent-coral/10',
    iconColor: 'text-accent-coral',
    title: 'Violences Conjugales',
    subtitle: 'Protection et accompagnement juridique complet',
    features: [
      'Collecte de preuves recevables',
      'Évaluation des risques',
      'Accompagnement psychologique',
      'Constitution de dossier juridique',
    ],
  },
  {
    icon: TriangleAlert,
    iconBgColor: 'bg-warning-orange/10',
    iconColor: 'text-warning-orange',
    title: 'Harcèlement',
    subtitle: 'Enquête et documentation des faits de harcèlement',
    features: [
      'Surveillance et filature',
      'Documentation photographique',
      'Témoignages et preuves',
      'Rapport détaillé pour autorités',
    ],
  },
  {
    icon: Search,
    iconBgColor: 'bg-accent-blue/10',
    iconColor: 'text-accent-blue',
    title: 'Arnaques & Escroqueries',
    subtitle: 'Investigation financière et recherche de preuves',
    features: [
      'Analyse des transactions',
      'Identification des responsables',
      'Récupération d\'informations',
      'Expertise judiciaire',
    ],
  },
  {
    icon: ShieldCheck,
    iconBgColor: 'bg-info-cyan/10',
    iconColor: 'text-info-cyan',
    title: 'Protection & Prévention',
    subtitle: 'Mesures préventives et sécurisation',
    features: [
      'Audit de sécurité personnel',
      'Détection de menaces',
      'Conseils de protection',
      'Surveillance préventive',
    ],
  },
  {
    icon: FileText,
    iconBgColor: 'bg-accent-purple/10',
    iconColor: 'text-accent-purple',
    title: 'Constitution de Dossier',
    subtitle: 'Préparation complète pour procédures judiciaires',
    features: [
      'Rassemblement de preuves',
      'Rapport d\'expertise',
      'Documentation juridique',
      'Support avocat',
    ],
  },
  {
    icon: Users,
    iconBgColor: 'bg-pink-500/10',
    iconColor: 'text-pink-500',
    title: 'Accompagnement Global',
    subtitle: 'Suivi personnalisé tout au long de votre parcours',
    features: [
      'Écoute et conseil',
      'Coordination avec professionnels',
      'Suivi post-enquête',
      'Disponibilité 24/7',
    ],
  },
];

const ServiceCard: FC<{ service: Service }> = ({ service }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', damping: 15, stiffness: 100 },
      },
    }}
    className="group relative bg-white dark:bg-bg-secondary rounded-3xl p-8 overflow-hidden transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:shadow-glow hover:-translate-y-2 h-full flex flex-col"
  >
    <div className="relative z-10 flex flex-col flex-1">
      <div
        className={cn(
          'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-inset ring-white/10 transform transition-transform duration-300 group-hover:scale-110',
          service.iconBgColor
        )}
      >
        <service.icon className={cn('w-8 h-8 transition-transform duration-300 group-hover:scale-110', service.iconColor)} />
      </div>
      <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-text-primary mb-2">
        {service.title}
      </h3>
      <p className="font-semibold text-slate-600 dark:text-text-secondary mb-6">
        {service.subtitle}
      </p>
      <ul className="space-y-3 mt-auto">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-success-green bg-success-green/10 rounded-full p-0.5 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-gray-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ServicesSection = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="services" className="bg-bg-primary py-28 sm:py-36 relative overflow-hidden scroll-mt-24" ref={ref}>
        <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-br from-accent-blue/10 to-transparent -top-20 -left-40 blur-3xl"></div>
            <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-accent-purple/5 to-transparent -bottom-20 -right-40 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent mb-4">
                  Mes Services Spécialisés
                </h2>
                <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
                  Un accompagnement complet et humain pour défendre vos droits
                </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {servicesData.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </motion.div>

            <motion.div
              className="mt-16 lg:mt-24"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="glass-card rounded-3xl lg:rounded-[32px] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-6 lg:gap-8">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center bg-accent-blue shadow-[0_0_30px_rgba(74,144,226,0.4)]">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
                      Besoin d'un accompagnement personnalisé ?
                    </h4>
                    <p className="text-gray-300 max-w-lg">
                      Chaque situation est unique. Parlons ensemble de votre cas lors d'une consultation confidentielle.
                    </p>
                  </div>
                </div>
                <Link
                  href="#contact"
                  aria-label="Demander une consultation"
                  className="inline-flex items-center justify-center flex-shrink-0 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent-blue via-accent-purple to-accent-coral shadow-lg hover:shadow-button-glow transition-transform duration-300 hover:scale-105"
                >
                  Demander une consultation
                </Link>
              </div>
            </motion.div>
        </div>
    </section>
  );
};

export default ServicesSection;