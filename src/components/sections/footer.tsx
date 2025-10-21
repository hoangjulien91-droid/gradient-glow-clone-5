import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, Home, Users as UsersIcon, MessageCircleQuestion, FileText, Briefcase, Building2 } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Équipe', href: '/equipe' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const servicesParticuliers = [
    { name: 'Violences conjugales', href: '/services#violences-conjugales' },
    { name: 'Cyberviolences', href: '/services#cyberviolences' },
    { name: 'Harcèlement professionnel', href: '/services#harcelement' },
    { name: 'Protection des mineurs', href: '/services#mineurs' },
    { name: 'Violences sexuelles', href: '/services#violences-sexuelles' },
    { name: 'Escroqueries & Fraudes', href: '/services#escroqueries' },
  ];

  const servicesEntreprises = [
    { name: 'Risques Psychosociaux', href: '/services#rps' },
    { name: 'Enquêtes internes', href: '/services#enquetes-internes' },
    { name: 'Prévention & Formation', href: '/services#prevention' },
  ];

  const ressources = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog & Actualités', href: '/blog' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Contact', href: '/contact' },
  ];
  
  const StarShape = ({ className }: { className?: string }) => (
    <div className={`absolute text-blue-400/10 text-4xl font-thin pointer-events-none select-none ${className}`} aria-hidden="true">
      *
    </div>
  );

  return (
    <footer className="bg-bg-primary text-text-secondary relative overflow-hidden">
      {/* Decorative floating shapes */}
      <StarShape className="top-[10%] left-[5%] rotate-45 text-lg" />
      <StarShape className="top-[15%] right-[10%] text-2xl" />
      <StarShape className="top-[50%] left-[20%] -rotate-12 text-sm" />
      <StarShape className="top-[70%] right-[30%] rotate-12" />
      <StarShape className="bottom-[10%] left-[35%] text-xl"/>
      <StarShape className="bottom-[5%] right-[5%] rotate-45"/>
      <StarShape className="top-[30%] left-[45%] text-xs" />
      <StarShape className="bottom-[20%] right-[45%] rotate-90 text-2xl" />

      {/* subtle top gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent-blue/0 via-accent-blue/40 via-50% to-accent-coral/0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-20 pb-8 sm:pt-24 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* Column 1: Brand */}
          <div className="md:col-span-6 lg:col-span-3 space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">JH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">Julien Hoang</h3>
                <p className="text-sm text-text-secondary">Détective Spécialisé</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed pr-4">
              Détective privé victimologue spécialisé dans l'accompagnement humain et juridique des victimes depuis plus de 15 ans.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-semibold text-sm text-white tracking-widest uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-secondary hover:text-white transition-colors duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Particuliers */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-semibold text-sm text-white tracking-widest uppercase mb-6">Particuliers</h4>
            <ul className="space-y-3">
              {servicesParticuliers.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-secondary hover:text-white transition-colors duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services Entreprises */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-semibold text-sm text-white tracking-widest uppercase mb-6">Entreprises</h4>
            <ul className="space-y-3">
              {servicesEntreprises.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-secondary hover:text-white transition-colors duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Ressources & Contact */}
          <div className="md:col-span-2 lg:col-span-3">
            <h4 className="font-semibold text-sm text-white tracking-widest uppercase mb-6">Ressources</h4>
            <ul className="space-y-3 mb-6">
              {ressources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-secondary hover:text-white transition-colors duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-bg-secondary flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent-blue" />
                </div>
                <a href="tel:0695212325" className="text-sm font-semibold text-white hover:text-accent-blue transition-colors">
                  06 95 21 23 25
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-bg-secondary flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent-blue" />
                </div>
                <a href="mailto:contact@julien-hoang-detective.fr" className="text-sm font-semibold text-white hover:text-accent-blue break-all transition-colors">
                  contact@julien-hoang-detective.fr
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-purple flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Biarritz, Pays Basque</p>
                  <p className="text-xs text-text-muted">France</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sitemap Section */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h4 className="font-semibold text-sm text-white tracking-widest uppercase mb-8 text-center">Plan du Site</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            <div>
              <Link href="/" className="inline-flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-blue/5 flex items-center justify-center group-hover:from-accent-blue/30 group-hover:to-accent-blue/10 transition-all duration-300">
                  <Home className="w-6 h-6 text-accent-blue" />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-white transition-colors">Accueil</span>
              </Link>
            </div>
            <div>
              <Link href="/services" className="inline-flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-coral/20 to-accent-coral/5 flex items-center justify-center group-hover:from-accent-coral/30 group-hover:to-accent-coral/10 transition-all duration-300">
                  <Briefcase className="w-6 h-6 text-accent-coral" />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-white transition-colors">Services</span>
              </Link>
            </div>
            <div>
              <Link href="/equipe" className="inline-flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-purple/5 flex items-center justify-center group-hover:from-accent-purple/30 group-hover:to-accent-purple/10 transition-all duration-300">
                  <UsersIcon className="w-6 h-6 text-accent-purple" />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-white transition-colors">Équipe</span>
              </Link>
            </div>
            <div>
              <Link href="/blog" className="inline-flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-info-cyan/20 to-info-cyan/5 flex items-center justify-center group-hover:from-info-cyan/30 group-hover:to-info-cyan/10 transition-all duration-300">
                  <FileText className="w-6 h-6 text-info-cyan" />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-white transition-colors">Blog</span>
              </Link>
            </div>
            <div>
              <Link href="/faq" className="inline-flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warning-orange/20 to-warning-orange/5 flex items-center justify-center group-hover:from-warning-orange/30 group-hover:to-warning-orange/10 transition-all duration-300">
                  <MessageCircleQuestion className="w-6 h-6 text-warning-orange" />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-white transition-colors">FAQ</span>
              </Link>
            </div>
            <div>
              <Link href="/contact" className="inline-flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success-green/20 to-success-green/5 flex items-center justify-center group-hover:from-success-green/30 group-hover:to-success-green/10 transition-all duration-300">
                  <Phone className="w-6 h-6 text-success-green" />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-white transition-colors">Contact</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left text-xs text-text-muted">
            © 2025 Julien Hoang - Détective Privé. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Shield className="w-4 h-4 text-accent-blue flex-shrink-0" />
            <span>Agréé CNAPS N° AGD-XXX-XXX-XX-XX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;