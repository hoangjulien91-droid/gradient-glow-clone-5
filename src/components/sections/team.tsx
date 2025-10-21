"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Heart, FileCheck, Radio, CheckCircle2, Users, Scale, Target, ArrowRight } from "lucide-react";

const julienImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/45fe22ff-1e47-495b-9256-16a46314668c-website-fun-glow-upgrade-clone-vercel-app/assets/images/photo_2025-09-19_00-05-57-2-1-1760907443105-3.jpg?";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 }
};

const julienSkills = [
  "Investigation privée certifiée",
  "Victimologie et accompagnement des victimes",
  "Collecte de preuves recevables en justice",
  "Surveillance et enquêtes sensibles",
  "Expertise en cyberviolences et crimes numériques",
  "Intervention d'urgence 24h/24"
];

const julienEducation = [
  "Master 2 en Science politique - Sécurité et Prévention de la Délinquance",
  "Licence professionnelle Sécurité des biens et des personnes - Activité juridique, directeur d'enquêtes privées",
  "Formation spécialisée en victimologie",
  "Certification en investigation privée",
  "Expertise en psycho-criminologie",
  "Formation continue en droit des victimes"
];

const audreySkills = [
  "Thérapie Cognitivo-Comportementale (TCC)",
  "Accompagnement des traumatismes",
  "Psychologie du travail et RPS",
  "Prévention des Risques Psychosociaux (RPS)",
  "Promotion de la Qualité de Vie et conditions de Travail (QVcT)",
  "Soutien aux victimes de violences",
  "Évaluation psychologique",
  "Thérapie de groupe et individuelle"
];

const audreyEducation = [
  "Master en Psychologie du Travail",
  "Spécialisation en TCC",
  "Formation en victimologie",
  "Expertise en risques psychosociaux",
  "Spécialisation en Qualité de Vie et conditions de Travail (QVcT)"
];

const TeamSection = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/30 to-bg-primary" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-coral/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent-coral/20 backdrop-blur-sm rounded-full text-accent-coral text-sm font-semibold mb-6 border border-accent-coral/30">
              Notre Équipe
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
              Un cabinet spécialisé
              <br />
              <span className="gradient-text">dans la victimologie</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Alliant expertise en investigation privée et accompagnement psychologique pour une prise en charge globale des victimes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Julien Hoang Section */}
      <section className="relative py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl border border-white/10 p-8 lg:p-12 shadow-glow">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <motion.div {...fadeInUp} className="relative">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={julienImageUrl}
                      alt="Julien Hoang"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="glass-card rounded-full px-4 py-2 border border-white/20 inline-block">
                      <p className="text-white text-sm font-semibold">15 ans d'expérience</p>
                    </div>
                    <div className="glass-card rounded-full px-4 py-2 border border-white/20 inline-block ml-2">
                      <p className="text-white text-sm font-semibold">Agréé CNAPS</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-8 space-y-8">
                <motion.div {...fadeInUp}>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary">
                    Julien Hoang
                  </h2>
                  <p className="text-2xl font-semibold text-accent-coral mt-2">
                    Détective Victimologue
                  </p>
                  <p className="text-lg text-text-secondary mt-6 leading-relaxed">
                    Spécialisé dans l'investigation privée et la victimologie, je combine expertise technique et approche humaine pour accompagner les victimes dans leur quête de justice et de réparation.
                  </p>
                </motion.div>

                <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-blue/5 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent-blue" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-text-primary">
                      Compétences & Expertise
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {julienSkills.map((skill, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent-coral flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-purple/5 flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-accent-purple" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-text-primary">
                      Formation & Background
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {julienEducation.map((edu, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{edu}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audrey Castets Section */}
      <section className="relative py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl border border-white/10 p-8 lg:p-12 shadow-glow">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8 space-y-8 order-2 lg:order-1">
                <motion.div {...fadeInUp}>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary">
                    Audrey Castets
                  </h2>
                  <p className="text-2xl font-semibold text-accent-coral mt-2">
                    Psychologue du Travail TCC
                  </p>
                  <p className="text-lg text-text-secondary mt-6 leading-relaxed">
                    Psychologue spécialisée en Thérapie Cognitivo-Comportementale (TCC), j'apporte un soutien psychologique complémentaire aux enquêtes menées par Julien pour une prise en charge globale des victimes.
                  </p>
                </motion.div>

                <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-coral/20 to-accent-coral/5 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-accent-coral" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-text-primary">
                      Compétences & Expertise
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {audreySkills.map((skill, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent-coral flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-purple/5 flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-accent-purple" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-text-primary">
                      Formation & Background
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {audreyEducation.map((edu, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{edu}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-4 order-1 lg:order-2">
                <motion.div {...fadeInUp} className="relative">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-accent-coral/20 to-accent-purple/20 flex items-center justify-center">
                    <Users className="w-32 h-32 text-white/50" />
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="glass-card rounded-full px-4 py-2 border border-white/20 inline-block">
                      <p className="text-white text-sm font-semibold">Spécialiste TCC</p>
                    </div>
                    <div className="glass-card rounded-full px-4 py-2 border border-white/20 inline-block ml-2">
                      <p className="text-white text-sm font-semibold">Psychologie du Travail</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-bg-primary to-bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Notre <span className="gradient-text">Collaboration</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div {...fadeInUp} className="glass-card p-8 rounded-3xl border border-white/10 hover:border-accent-blue/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-blue/5 flex items-center justify-center mb-6">
                <Scale className="w-7 h-7 text-accent-blue" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-text-primary mb-4">
                Une Approche Complémentaire
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Notre collaboration permet d'offrir une prise en charge complète : pendant que Julien mène les investigations et collecte les preuves, Audrey apporte le soutien psychologique nécessaire aux victimes pour les aider à traverser cette épreuve difficile.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Coordination entre investigation et soutien psychologique</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Approche respectueuse du rythme de la victime</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Évaluation conjointe des besoins</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-3xl border border-white/10 hover:border-accent-coral/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-coral/20 to-accent-coral/5 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent-coral" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-text-primary mb-4">
                Bénéfices pour les Victimes
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Cette synergie entre investigation et accompagnement psychologique permet aux victimes de bénéficier d'un soutien global, favorisant à la fois la construction d'un dossier solide et leur processus de guérison.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-coral flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Prise en charge globale et personnalisée</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-coral flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Réduction du stress lié aux procédures</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-coral flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Accompagnement dans la durée</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/50 to-bg-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-coral/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="glass-card p-12 lg:p-16 rounded-3xl border border-white/10 text-center shadow-glow max-w-4xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-coral/20 to-accent-blue/20 flex items-center justify-center mx-auto mb-6">
              <Radio className="w-8 h-8 text-accent-coral" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Besoin d'accompagnement ?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Notre équipe est là pour vous accompagner dans votre démarche de justice et de réparation. Contactez-nous pour discuter de votre situation en toute confidentialité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="relative px-8 py-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-coral text-white rounded-xl font-semibold shadow-lg hover:shadow-button-glow transition-all duration-300 group overflow-hidden inline-flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Nous contacter
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-transparent border-2 border-accent-coral text-accent-coral rounded-xl font-semibold hover:bg-accent-coral hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Voir nos tarifs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;