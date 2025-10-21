import dynamic from "next/dynamic";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const FAQHero = dynamic(() => import("@/components/sections/faq-hero"));
const FAQContent = dynamic(() => import("@/components/sections/faq-content"));
const FAQCta = dynamic(() => import("@/components/sections/faq-cta"));

export const metadata = {
  title: "FAQ - Détective Victimologue | Julien Hoang",
  description: "Toutes les réponses aux questions que vous vous posez sur mes services de détective victimologue. Consultations, tarifs, confidentialité, preuves recevables.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <Breadcrumb items={[{ label: "FAQ" }]} />
      <main>
        <FAQHero />
        <FAQContent />
        <FAQCta />
      </main>
      <Footer />
    </div>
  );
}