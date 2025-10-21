import dynamic from "next/dynamic";
import { AutoPageLayout } from "@/components/layout";

const FAQHero = dynamic(() => import("@/components/sections/faq-hero"));
const FAQContent = dynamic(() => import("@/components/sections/faq-content"));
const FAQCta = dynamic(() => import("@/components/sections/faq-cta"));

export const metadata = {
  title: "FAQ - Détective Victimologue | Julien Hoang",
  description: "Toutes les réponses aux questions que vous vous posez sur mes services de détective victimologue. Consultations, tarifs, confidentialité, preuves recevables.",
};

export default function FAQPage() {
  return (
    <AutoPageLayout>
      <FAQHero />
      <FAQContent />
      <FAQCta />
    </AutoPageLayout>
  );
}