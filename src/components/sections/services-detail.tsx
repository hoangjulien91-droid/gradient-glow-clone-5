"use client";

import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Shield,
  Heart,
  DollarSign,
  Briefcase,
  Baby,
  AlertTriangle,
  Users,
  Building2,
  Wifi,
  ArrowRight,
  Phone,
  Clock,
  Award,
  ShieldCheck,
  Check,
  CreditCard,
  Scale,
  UserX,
  AlertCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Category = 'particuliers' | 'entreprises';

type ServiceDetail = {
  icon: React.ElementType;
  iconBgColor: string;
  iconColor: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  category: Category;
};

const servicesData: ServiceDetail[] = [
  // PARTICULIERS
  {
    icon: Shield,
    iconBgColor: 'bg-accent-coral/10',
    iconColor: 'text-accent-coral',
    title: 'Violences Conjugales',
    subtitle: 'Investigation et accompagnement pour les victimes de violences physiques, psychologiques ou économiques dans le cadre familial',
    description: 'Protection complète et constitution de dossier pour faire valoir vos droits',
    category: 'particuliers',
    features: [
      'Entretien confidentiel et évaluation des risques',
      'Collecte de preuves recevables en justice',
      'Surveillance discrète et témoignages',
      'Rapport complet pour ordonnance de protection',
      'Accompagnement vers les ressources d\'aide',
    ],
  },
  {
    icon: Wifi,
    iconBgColor: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
    title: 'Cyberviolences',
    subtitle: 'Lutte contre le harcèlement en ligne, revenge porn, usurpation d\'identité et menaces numériques',
    description: 'Protection de votre identité numérique et lutte contre les abus en ligne',
    category: 'particuliers',
    features: [
      'Traçage des auteurs de cyberviolences',
      'Préservation des preuves digitales',
      'Suppression de contenus malveillants',
      'Coordination avec les plateformes',
      'Conseils en cybersécurité personnelle',
    ],
  },
  {
    icon: DollarSign,
    iconBgColor: 'bg-warning-orange/10',
    iconColor: 'text-warning-orange',
    title: 'Violences Économiques',
    subtitle: 'Protection du patrimoine contre les manipulations financières, détournements et coercitions économiques',
    description: 'Sécurisation de vos biens et recouvrement de votre patrimoine',
    category: 'particuliers',
    features: [
      'Audit des documents financiers',
      'Recherche de biens dissimulés',
      'Évaluation des préjudices subis',
      'Assistance au recouvrement',
      'Sécurisation du patrimoine',
    ],
  },
  {
    icon: Briefcase,
    iconBgColor: 'bg-accent-blue/10',
    iconColor: 'text-accent-blue',
    title: 'Harcèlement Professionnel',
    subtitle: 'Documentation et résolution du harcèlement moral ou sexuel sur le lieu de travail',
    description: 'Constitution de dossier et accompagnement dans vos démarches professionnelles',
    category: 'particuliers',
    features: [
      'Collecte de témoignages et preuves',
      'Enquête sur l\'environnement professionnel',
      'Rapport impartial pour les tribunaux',
      'Accompagnement juridique',
      'Médiation si appropriée',
    ],
  },
  {
    icon: Baby,
    iconBgColor: 'bg-info-cyan/10',
    iconColor: 'text-info-cyan',
    title: 'Protection des Mineurs',
    subtitle: 'Enquêtes sensibles pour protéger les enfants en situation de danger ou d\'abus',
    description: 'Investigation discrète et protection des enfants en danger',
    category: 'particuliers',
    features: [
      'Évaluation des risques pour l\'enfant',
      'Surveillance de l\'environnement',
      'Collecte de preuves respectueuses',
      'Coordination avec les services sociaux',
      'Soutien aux familles',
    ],
  },
  {
    icon: Heart,
    iconBgColor: 'bg-pink-500/10',
    iconColor: 'text-pink-500',
    title: 'Violences Sexuelles',
    subtitle: 'Consultations pour victimes d\'agressions sexuelles, viols ou harcèlement sexuel, axées sur l\'accompagnement victimologique',
    description: 'Accompagnement spécialisé et soutien dans vos démarches',
    category: 'particuliers',
    features: [
      'Écoute et évaluation des traumatismes',
      'Conseils pour documenter les faits personnellement',
      'Orientation vers services médico-légaux',
      'Stratégies de réparation et soutien émotionnel',
    ],
  },
  {
    icon: UserX,
    iconBgColor: 'bg-red-500/10',
    iconColor: 'text-red-500',
    title: 'Harcèlement Moral et Stalking',
    subtitle: 'Consultations pour victimes de persécutions individuelles comme le stalking, avec guidance victimologique',
    description: 'Protection contre le harcèlement obsessionnel et le stalking',
    category: 'particuliers',
    features: [
      'Analyse des patterns de harcèlement via récit',
      'Conseils pour auto-protection et journalisation',
      'Évaluation des risques psychologiques',
      'Orientation vers ordonnances de protection',
    ],
  },
  {
    icon: CreditCard,
    iconBgColor: 'bg-yellow-500/10',
    iconColor: 'text-yellow-500',
    title: 'Escroqueries et Fraudes',
    subtitle: 'Consultations pour victimes de délits financiers frauduleux, focalisées sur la victimologie économique',
    description: 'Investigation financière et récupération de patrimoine',
    category: 'particuliers',
    features: [
      'Écoute des impacts financiers et émotionnels',
      'Conseils pour analyser transactions suspectes',
      'Guidance pour plaintes pénales',
      'Stratégies de récupération et prévention',
    ],
  },
  {
    icon: Users,
    iconBgColor: 'bg-indigo-500/10',
    iconColor: 'text-indigo-500',
    title: 'Violences contre les Personnes Âgées',
    subtitle: 'Consultations pour victimes ou familles concernées par maltraitances envers seniors (abus intra-familiaux)',
    description: 'Protection des seniors vulnérables et lutte contre la maltraitance',
    category: 'particuliers',
    features: [
      'Évaluation des vulnérabilités via entretiens',
      'Conseils pour documenter négligences',
      'Analyse des dynamiques familiales',
      'Orientation vers services sociaux protecteurs',
    ],
  },
  {
    icon: AlertTriangle,
    iconBgColor: 'bg-orange-500/10',
    iconColor: 'text-orange-500',
    title: 'Traite des Êtres Humains',
    subtitle: 'Consultations pour victimes d\'exploitation (trafic, travail forcé), en victimologie internationale',
    description: 'Accompagnement spécialisé pour victimes d\'exploitation humaine',
    category: 'particuliers',
    features: [
      'Écoute des expériences d\'exploitation',
      'Conseils pour identifier réseaux via signes',
      'Évaluation des préjudices humains',
      'Orientation vers organismes comme l\'OIM',
    ],
  },
  {
    icon: Scale,
    iconBgColor: 'bg-slate-500/10',
    iconColor: 'text-slate-500',
    title: 'Victimisation Secondaire',
    subtitle: 'Consultations pour victimes subissant des préjudices du système judiciaire (ex. : maltraitance lors de plaintes)',
    description: 'Accompagnement contre les dysfonctionnements institutionnels',
    category: 'particuliers',
    features: [
      'Analyse des dysfonctionnements institutionnels',
      'Conseils pour recours et documentation',
      'Évaluation des impacts cumulés',
      'Stratégies de réparation victimologique',
    ],
  },
  {
    icon: AlertCircle,
    iconBgColor: 'bg-red-600/10',
    iconColor: 'text-red-600',
    title: 'Situations d\'Urgence',
    subtitle: 'Intervention rapide 24h/24 pour les crises et situations de danger immédiat',
    description: 'Intervention d\'urgence et protection immédiate',
    category: 'particuliers',
    features: [
      'Hotline d\'urgence disponible 24/7',
      'Intervention immédiate',
      'Sécurisation des victimes',
      'Collecte de preuves en urgence',
      'Coordination avec les autorités',
    ],
  },
  // ENTREPRISES
  {
    icon: Building2,
    iconBgColor: 'bg-accent-blue/10',
    iconColor: 'text-accent-blue',
    title: 'Risques Psychosociaux et Victimologie en Entreprise',
    subtitle: 'Intervention rigoureuse et impartiale pour identifier, documenter et prévenir les violences en milieu professionnel',
    description: 'Solutions B2B pour prévenir et gérer les risques psychosociaux en conformité légale',
    category: 'entreprises',
    features: [
      'Enquêtes internes et documentation des violences au travail',
      'Évaluation des Risques Psychosociaux (RPS)',
      'Soutien individualisé aux victimes en entreprise',
      'Prévention et sensibilisation',
      'Médiation professionnelle',
    ],
  },
];

const ServiceCard: FC<{ service: ServiceDetail }> = ({ service }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group glass-card rounded-3xl p-8 hover:shadow-glow transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-6">
        <div
          className={cn(
            'w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ring-1 ring-inset ring-white/10',
            service.iconBgColor
          )}
        >
          <service.icon className={cn('w-8 h-8', service.iconColor)} />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            {service.subtitle}
          </p>
        </div>
      </div>

      <ul className="space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-success-green bg-success-green/10 rounded-full p-0.5 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ServicesDetailSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('particuliers');

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredServices = servicesData.filter(s => s.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-primary pt-32 sm:pt-40 pb-20 sm:pb-28 relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-br from-accent-blue/20 to-transparent -top-40 -left-40 blur-3xl"></div>
          <div className="absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-br from-accent-purple/15 to-transparent -top-20 -right-40 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-coral/10 border border-accent-coral/20 mb-6">
              <Award className="w-4 h-4 text-accent-coral" />
              <span className="text-sm font-semibold text-accent-coral">
                Agréé CNAPS • 15 ans d'expérience
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
              Services Spécialisés en{' '}
              <span className="gradient-text">Investigation</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Accompagnement personnalisé pour particuliers et solutions professionnelles pour entreprises. 
              Expertise reconnue en victimologie et investigation.
            </p>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm sm:text-base">
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-accent-blue" />
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <ShieldCheck className="w-5 h-5 text-success-green" />
                <span>Confidentialité totale</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Heart className="w-5 h-5 text-accent-coral" />
                <span>Approche humaine</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-bg-primary py-8 sticky top-20 z-40 border-b border-white/5 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveCategory('particuliers')}
              className={cn(
                'px-8 py-3 rounded-xl font-semibold transition-all duration-300',
                activeCategory === 'particuliers'
                  ? 'bg-gradient-to-r from-accent-blue via-accent-purple to-accent-coral text-white shadow-lg'
                  : 'bg-bg-secondary text-gray-400 hover:text-white'
              )}
            >
              <Users className="w-5 h-5 inline-block mr-2" />
              Particuliers
            </button>
            <button
              onClick={() => setActiveCategory('entreprises')}
              className={cn(
                'px-8 py-3 rounded-xl font-semibold transition-all duration-300',
                activeCategory === 'entreprises'
                  ? 'bg-gradient-to-r from-accent-blue via-accent-purple to-accent-coral text-white shadow-lg'
                  : 'bg-bg-secondary text-gray-400 hover:text-white'
              )}
            >
              <Building2 className="w-5 h-5 inline-block mr-2" />
              Entreprises
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-bg-primary py-24 sm:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white text-center mb-4">
              {activeCategory === 'particuliers' ? 'Particuliers' : 'Entreprises'}
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
              {activeCategory === 'particuliers' 
                ? 'Accompagnement personnalisé pour surmonter les traumatismes et construire un dossier solide'
                : 'Solutions B2B pour prévenir et gérer les risques psychosociaux en conformité légale'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bg-primary py-24 sm:py-32 relative overflow-hidden" ref={ctaRef}>
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-br from-accent-coral/30 to-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="glass-card rounded-3xl lg:rounded-[40px] p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(74,144,226,0.4)]">
              <Phone className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
              Prêt à faire valoir vos{' '}
              <span className="gradient-text">droits</span> ?
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 mb-3">
              Bénéficiez d'une{' '}
              <span className="text-accent-coral font-semibold">
                consultation découverte gratuite de 15 minutes
              </span>
            </p>

            <p className="text-sm text-gray-400 mb-8">
              Sans engagement • Totalement confidentielle
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent-blue via-accent-purple to-accent-coral shadow-lg hover:shadow-button-glow transition-all duration-300 hover:scale-105 text-lg"
            >
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success-green animate-pulse"></div>
                <span className="text-gray-300">Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-blue"></div>
                <span className="text-gray-300">Agréé CNAPS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-coral"></div>
                <span className="text-gray-300">15 ans d'expérience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetailSection;