"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/equipe", label: "Équipe" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  // Détecter si on est sur une page avec breadcrumb (toutes sauf l'accueil)
  const isHomePage = pathname === "/";
  const shouldBeOpaque = !isHomePage || isScrolled;

  // La hauteur est contrôlée par le padding `py-3` (12px + 40px icon + 12px = 64px)
  const headerHeightClass = "h-16"; // h-16 = 64px

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      // Header toujours sticky, opaque sauf sur la page d'accueil (au top)
      className={`fixed top-0 left-0 right-0 z-[var(--z-header)] transition-all duration-300 ${headerHeightClass} ${
        isHomePage
          ? isScrolled
            ? "bg-bg-primary/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
          : "bg-bg-primary shadow-xl border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-full">
        {/* `h-full` et `items-center` pour centrer verticalement */}
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/" className="flex items-center gap-3 group relative z-10 text-white">
              <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/40 via-[#EA6C4F]/30 to-[#4A90E2]/40 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                <div className="relative w-full h-full rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl group-hover:border-[#EA6C4F]/30 transition-all duration-300">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo-1760976383180.webp"
                    alt="Logo Julien Hoang - Détective Victimologue"
                    fill
                    className="object-contain p-1.5 filter brightness-110 group-hover:brightness-125 transition-all duration-300"
                    priority
                  />
                </div>
              </div>
              
              <div className="block">
                <div className="font-bold drop-shadow-lg leading-tight text-lg sm:text-xl">
                  Julien HOANG
                </div>
                <div className="font-medium text-white/90 drop-shadow leading-tight text-xs sm:text-base">
                  Détective Spécialisé
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-white relative group text-sm xl:text-base drop-shadow-lg hover:drop-shadow-xl transition-all duration-200"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-[#E85D4D] rounded-full w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            <a href="tel:0695212325" className="flex items-center gap-2 font-semibold text-white drop-shadow-lg hover:drop-shadow-xl transition-all duration-200">
              <Phone className="w-4 h-4 xl:w-5 xl:h-5" />
              <span className="text-sm xl:text-base">06 95 21 23 25</span>
            </a>
            <a href="#contact" className="relative px-5 xl:px-7 py-2.5 xl:py-3 bg-gradient-to-r from-[#4A90E2] via-[#EA6C4F] to-[#E85D4D] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm xl:text-base overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <span className="relative flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Contact
              </span>
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-200 drop-shadow-lg"
            aria-label="Ouvrir le menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-bg-primary lg:hidden"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsMobileMenuOpen(false);
              }
            }}
          >
            <div className="h-full overflow-y-auto overscroll-contain">
              <div className="container mx-auto px-4 sm:px-6 min-h-full flex flex-col items-center justify-center text-center py-20">
                <button
                  className="absolute top-7 right-5 p-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Fermer le menu"
                >
                  <X className="w-8 h-8" />
                </button>
                <motion.nav 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, staggerChildren: 0.05 }}
                  className="flex flex-col gap-8 mb-12"
                >
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="font-bold text-3xl text-white hover:text-[#EA6C4F] transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
                <motion.a 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  href="#contact" 
                  className="relative px-8 py-4 bg-gradient-to-r from-[#4A90E2] via-[#EA6C4F] to-[#E85D4D] text-white rounded-xl font-semibold shadow-lg text-xl" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}