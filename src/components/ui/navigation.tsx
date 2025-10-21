"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import useScrollDirection from "@/hooks/use-scroll-direction";
import useScrolled from "@/hooks/use-scrolled";

const navItems = [
  { href: "/", label: "Gallery" },
  { href: "/bento", label: "Bentos" },
  { href: "/casestudies", label: "Case Studies" },
  { href: "/contacts", label: "Contact" },
  { href: "/ctas", label: "CTAs" },
  { href: "/faqs", label: "FAQs" },
  { href: "/feature", label: "Features" },
  { href: "/footers", label: "Footers" },
  { href: "/hero", label: "Hero" },
  { href: "/navbars", label: "Navbars" },
  { href: "/pricing", label: "Pricing" },
  { href: "/stats", label: "Stats" },
  { href: "/team", label: "Team" },
  { href: "/testimonial", label: "Testimonials" },
];

export function Navigation() {
  const pathname = usePathname();
  const direction = useScrollDirection(50);
  const scrolled = useScrolled(10);

  // Only hide on small screens; on lg+ keep visible
  const shouldHide = direction === "down";
  const isHome = pathname === "/";
  const topOverlay = isHome && !scrolled; // homepage at top -> blend with hero

  // Compute background and whether to apply blur/border
  // When on homepage at top, use transparent so header overlays the hero image exactly
  const navBackground = topOverlay ? "transparent" : scrolled ? "var(--color-bg-primary)" : "var(--color-bg-primary)";
  const navHasBlur = !topOverlay && (scrolled || !isHome);

  return (
    <motion.nav
      initial={false}
      animate={{
        y: shouldHide ? "-100%" : "0%",
        opacity: shouldHide ? 0 : 1,
      }}
      transition={{ duration: 0.28, ease: "easeInOut" }}
      className={`sticky top-0 z-[var(--z-header)] w-full transition-colors duration-300 ${navHasBlur ? 'backdrop-blur-md' : ''}`}
      style={{
        transformOrigin: "top",
        background: navBackground,
      }}
    >
      <div
        className={`max-w-7xl mx-auto px-4 transition-all duration-200 ${
          scrolled
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-1">
            <Link
              href="/"
              className={`text-xl font-bold transition-colors ${topOverlay ? 'text-white hover:text-white/90' : 'text-gray-900 hover:text-gray-700'}`}
            >
              Orchids
            </Link>
          </div>
          <div className="flex items-center space-x-1 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  pathname === item.href
                    ? topOverlay
                      ? 'bg-white/10 text-white'
                      : 'bg-gray-900 text-white'
                    : topOverlay
                    ? 'text-white hover:text-white/90'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}