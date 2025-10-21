import dynamic from "next/dynamic";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

// Dynamic import for below-the-fold content
const ServicesDetailSection = dynamic(() => import("@/components/sections/services-detail"), {
  loading: () => <div className="min-h-screen bg-bg-primary" />,
});

export const metadata: Metadata = {
  title: "Services Spécialisés - Julien Hoang Détective Privé",
  description: "Découvrez l'ensemble de nos services d'investigation et d'accompagnement : violences conjugales, harcèlement, arnaques, protection et constitution de dossier.",
  openGraph: {
    title: "Services Spécialisés - Julien Hoang Détective Privé",
    description: "Découvrez l'ensemble de nos services d'investigation et d'accompagnement : violences conjugales, harcèlement, arnaques, protection et constitution de dossier.",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <Breadcrumb items={[{ label: "Services" }]} />
      <main>
        <ServicesDetailSection />
      </main>
      <Footer />
    </div>
  );
}