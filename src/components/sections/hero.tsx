"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Shield, Sparkles, ArrowRight, Award, Clock, Check } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // ✅ Accessibilité: Respecter les préférences utilisateur
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // ✅ Performance: Désactiver le parallax si motion réduite
  const y1 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 100]);
  const y4 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -50]);

  // ✅ Accessibilité: Animations adaptatives selon préférences
  const fadeIn = (delay: number = 0) => ({
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: prefersReducedMotion 
      ? { duration: 0 } 
      : { duration: 0.5, delay },
    viewport: { once: true, amount: 0.2 }
  });

  // Animation simplifiée pour mobile sans délai
  const mobileQuickFade = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.4 },
    viewport: { once: true, amount: 0.1 }
  };

  return (
    <section id="accueil" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a]/95 via-[#1e293b]/93 to-[#2C3E50]/88 z-10"></div>
        {/* ✅ Performance CRITIQUE: Image Hero = LCP - PRIORITY obligatoire */}
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/45fe22ff-1e47-495b-9256-16a46314668c-website-fun-glow-upgrade-clone-vercel-app/assets/images/next-541561-hero-background-CWRRosAy-1-2.jpg?"
          alt=""
          fill
          className="object-cover brightness-[0.35]"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          aria-hidden="true"
        />
      </div>

      {/* ✅ Performance: Blur gradients conditionnels (coûteux sur mobile) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none hidden md:block">
        <motion.div style={{ y: y1 }} className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#4A7BA7]/40 to-[#3b82f6]/25 top-1/4 left-1/4 blur-[120px] will-change-transform"></motion.div>
        <motion.div style={{ y: y2 }} className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#EA6C4F]/35 to-[#ff8566]/20 top-1/2 right-1/4 blur-[100px] will-change-transform"></motion.div>
      </div>
      {/* Version mobile simplifiée sans parallax */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none md:hidden">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#4A7BA7]/30 to-[#3b82f6]/20 top-1/4 left-1/4 blur-[80px]"></div>
        <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#EA6C4F]/25 to-[#ff8566]/15 top-1/2 right-1/4 blur-[70px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 z-20 relative py-24 sm:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div {...fadeIn(0)} className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#FFE5DC] to-[#FFE4E1] rounded-full shadow-lg border border-[#EA6C4F]/30">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#EA6C4F]" />
              <span className="text-[#EA6C4F] font-bold text-xs sm:text-sm tracking-wide">Agréé CNAPS • 15 ans d'expérience</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight font-display">
                <span className="text-white drop-shadow-[0_4px_18px_rgba(255,255,255,0.5)] block">Détective Privé</span>
                <span className="relative inline-block mt-2">
                  <span className="bg-gradient-to-r from-[#EA6C4F] via-[#ff9b7d] to-[#ff8566] bg-clip-text text-transparent font-extrabold relative z-10">Victimologue</span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-100 italic font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Vous n'êtes plus seul(e) face à l'injustice.
              </p>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] max-w-xl">
                Spécialisé dans l'accompagnement des victimes, je vous aide à constituer un dossier solide pour faire valoir vos droits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="#contact" aria-label="Prendre une consultation découverte gratuite" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#4A7BA7] via-[#3b82f6] to-[#4A7BA7] text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-[0_8px_30px_rgba(74,123,167,0.4)] hover:shadow-[0_12px_40px_rgba(74,123,167,0.6)] flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 overflow-hidden bg-[length:200%_100%] hover:bg-[position:100%_0]">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative flex items-center gap-2 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                  <span>Consultation découverte gratuite</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              <a href="#services" aria-label="Découvrir mes services" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/15 backdrop-blur-md text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white/25 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg border border-white/30 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                Découvrir mes services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-4 sm:pt-8">
              <div className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/25 text-white text-center">
                <Award className="w-5 h-5 sm:w-7 sm:h-7 mb-1 sm:mb-2 mx-auto" />
                <p className="text-[10px] sm:text-xs font-bold leading-tight">15 ans d'expérience</p>
              </div>
              <div className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/25 text-white text-center">
                <Shield className="w-5 h-5 sm:w-7 sm:h-7 mb-1 sm:mb-2 mx-auto" />
                <p className="text-[10px] sm:text-xs font-bold leading-tight">Agréé CNAPS</p>
              </div>
              <div className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/25 text-white text-center">
                <Clock className="w-5 h-5 sm:w-7 sm:h-7 mb-1 sm:mb-2 mx-auto" />
                <p className="text-[10px] sm:text-xs font-bold leading-tight">24/7 Disponible</p>
              </div>
            </div>
          </motion.div>

          {/* Bloc optimisé pour mobile - affichage rapide sans délai */}
          <div className="relative w-full lg:sticky lg:top-28">
            {/* Version mobile avec animation rapide */}
            <motion.div 
              {...mobileQuickFade}
              className="lg:hidden bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-2 border-accent-coral/15"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-accent-coral to-accent-salmon rounded-2xl shadow-lg flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="text-xl font-bold font-display text-slate-800 mb-2 leading-tight">Je peux vous aider à sortir de cette situation.</h3>
                  <p className="text-gray-700 font-semibold text-sm">Je vous aide à reprendre le contrôle</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-6">
                {['Violences conjugales ou familiales', 'Harcèlement moral ou sexuel', 'Arnaques et escroqueries', 'Atteintes à votre réputation'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-coral to-[#ef8b7a] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-[#FFE5DC] to-[#FFE4E1] rounded-2xl p-5 border-2 border-accent-coral/25 shadow-inner">
                <div className="flex items-start gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-accent-coral flex-shrink-0" />
                  <h4 className="text-lg font-bold font-display text-slate-800 leading-tight">Consultation découverte gratuite</h4>
                </div>
                <p className="text-gray-700 text-sm mb-5 font-medium leading-relaxed">15 minutes pour discuter de votre situation en toute confidentialité</p>
                <a href="#contact" className="relative block w-full py-3.5 bg-gradient-to-r from-accent-coral via-accent-salmon to-accent-coral text-white rounded-xl font-bold text-center shadow-[0_8px_30px_rgba(234,108,79,0.4)] hover:shadow-[0_12px_40px_rgba(234,108,79,0.5)] text-base transition-all duration-300 group overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    Me contacter maintenant
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Version desktop avec animation normale */}
            <motion.div 
              {...fadeIn(0.2)} 
              className="hidden lg:block bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-2 border-accent-coral/15"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="p-4 bg-gradient-to-br from-accent-coral to-accent-salmon rounded-3xl shadow-lg flex-shrink-0">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="text-3xl font-bold font-display text-slate-800 mb-2 leading-tight">Je peux vous aider à sortir de cette situation.</h3>
                  <p className="text-gray-700 font-semibold text-lg">Je vous aide à reprendre le contrôle</p>
                </div>
              </div>
              
              <ul className="space-y-5 mb-6">
                {['Violences conjugales ou familiales', 'Harcèlement moral ou sexuel', 'Arnaques et escroqueries', 'Atteintes à votre réputation'].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-coral to-[#ef8b7a] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold text-base leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-[#FFE5DC] to-[#FFE4E1] rounded-3xl p-6 border-2 border-accent-coral/25 shadow-inner">
                <div className="flex items-start gap-4 mb-4">
                  <Sparkles className="w-7 h-7 text-accent-coral flex-shrink-0" />
                  <h4 className="text-xl font-bold font-display text-slate-800 leading-tight">Consultation découverte gratuite</h4>
                </div>
                <p className="text-gray-700 text-base mb-5 font-medium leading-relaxed">15 minutes pour discuter de votre situation en toute confidentialité</p>
                <a href="#contact" className="relative block w-full py-4 bg-gradient-to-r from-accent-coral via-accent-salmon to-accent-coral text-white rounded-2xl font-bold text-center shadow-[0_8px_30px_rgba(234,108,79,0.4)] hover:shadow-[0_12px_40px_rgba(234,108,79,0.5)] text-lg transition-all duration-300 group overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative flex items-center justify-center gap-3">
                    Me contacter maintenant
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/8"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;