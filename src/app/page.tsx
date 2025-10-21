import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import StatsSection from "@/components/sections/stats";
import AboutSection from "@/components/sections/about";

export const metadata: Metadata = {
  title: "Julien Hoang – Détective Privé Victimologue à Biarritz",
  description:
    "Vous n'êtes plus seul(e) face à l'injustice. Détective privé et victimologue agréé CNAPS, 15 ans d'expérience. Accompagnement des victimes, constitution de dossier, collecte de preuves.",
  openGraph: {
    title: "Julien Hoang – Détective Privé Victimologue",
    description:
      "Vous n'êtes plus seul(e) face à l'injustice. Accompagnement des victimes, constitution de dossier, collecte de preuves.",
    url: "https://your-domain.example/",
    type: "website",
  },
};

// Add baseUrl for JSON-LD
const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.example").replace(/\/$/, "");

// Dynamic imports for below-the-fold content
const ServicesSection = dynamic(() => import("@/components/sections/services"), {
  loading: () => <div className="min-h-screen bg-bg-primary" />,
});
const CtaReadySection = dynamic(() => import("@/components/sections/cta-ready"), {
  loading: () => <div className="min-h-[400px] bg-bg-light" />,
});
const FAQSection = dynamic(() => import("@/components/sections/faq"), {
  loading: () => <div className="min-h-screen bg-bg-light" />,
});
const ContactSection = dynamic(() => import("@/components/sections/contact"), {
  loading: () => <div className="min-h-screen bg-bg-primary" />,
});
const Footer = dynamic(() => import("@/components/sections/footer"));

export default function Home() {
  return (
    <div id="accueil" className="min-h-screen bg-bg-primary">
      <Navigation />
      <main>
        {/* schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Julien Hoang – Détective Privé Victimologue",
              url: `${baseUrl}/`,
              description:
                "Détective privé et victimologue agréé CNAPS, 15 ans d'expérience. Accompagnement des victimes, constitution de dossier, collecte de preuves.",
              areaServed: "France",
              sameAs: [] as string[],
            }),
          }}
        />
        <Hero />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <CtaReadySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}