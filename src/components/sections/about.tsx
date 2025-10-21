"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scale, Heart } from "lucide-react";

const imageUrl =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/45fe22ff-1e47-495b-9256-16a46314668c-website-fun-glow-upgrade-clone-vercel-app/assets/images/photo_2025-09-19_00-05-57-2-1-1760907443105-3.jpg?";

const AboutSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <section
      id="equipe"
      ref={targetRef}
      className="relative bg-bg-primary py-28 sm:py-36 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary/50"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 -left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl opacity-50"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -right-1/4 w-96 h-96 bg-accent-coral/5 rounded-full blur-3xl opacity-50"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/5] rounded-3xl shadow-glow overflow-hidden"
            >
              <Image
                src={imageUrl}
                alt="Portrait de Julien Hoang, Détective Victimologue"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 40vw"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
              className="absolute bottom-4 -left-4 sm:bottom-6 sm:-left-6 flex flex-col items-start gap-3"
            >
              <div className="glass-card shadow-lg rounded-full px-4 py-2 border border-white/20">
                <p className="text-white text-xs sm:text-sm font-semibold">15 ans d'expérience</p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 100 }}
                className="glass-card shadow-lg rounded-full px-4 py-2 border border-white/20"
              >
                <p className="text-white text-xs sm:text-sm font-semibold">Formation victimologie</p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div style={{ y: textY }}>
            <motion.h2 {...fadeIn()} className="font-display text-4xl lg:text-5xl font-bold text-text-primary">
              Julien Hoang
            </motion.h2>
            <motion.p {...fadeIn(0.1)} className="mt-2 text-xl font-semibold text-accent-coral font-body">
              Détective Victimologue
            </motion.p>
            <motion.div {...fadeIn(0.2)} className="mt-8 space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Fort de <strong className="font-semibold text-text-primary">15 ans d'expérience</strong> en tant que détective privé, j'ai décidé de me spécialiser dans l'accompagnement des victimes après avoir constaté le manque de soutien professionnel dans ce domaine crucial.
              </p>
              <p>
                Ma formation en victimologie me permet d'adopter une approche unique, alliant rigueur juridique et sensibilité humaine, pour aider les personnes en situation de vulnérabilité à faire valoir leurs droits.
              </p>
              <p>
                Basé à <strong className="font-semibold text-text-primary">Biarritz</strong>, j'interviens dans tout le Pays Basque et au-delà pour vous apporter le soutien et l'expertise dont vous avez besoin dans les moments les plus difficiles.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-2 gap-8 mt-16 lg:mt-24"
        >
          <motion.div 
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-accent-blue/50 shadow-lg hover:shadow-glow transition-all duration-300 transform-gpu hover:-translate-y-2"
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-accent-blue/20 to-accent-blue/5">
              <Scale className="w-7 h-7 text-accent-blue" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2 text-text-primary">
              Approche Juridique
            </h3>
            <p className="text-text-secondary">
              Constitution de dossiers recevables en justice avec une méthodologie rigoureuse
            </p>
          </motion.div>

          <motion.div 
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-accent-coral/50 shadow-lg hover:shadow-glow transition-all duration-300 transform-gpu hover:-translate-y-2"
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-accent-coral/20 to-accent-coral/5">
              <Heart className="w-7 h-7 text-accent-coral" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2 text-text-primary">
              Accompagnement Humain
            </h3>
            <p className="text-text-secondary">
              Soutien empathique et respectueux tout au long de votre démarche
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;