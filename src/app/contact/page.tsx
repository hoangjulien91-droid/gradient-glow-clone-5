import dynamic from "next/dynamic";
import { AutoPageLayout } from "@/components/layout";

const ContactHero = dynamic(() => import("@/components/sections/contact-hero"));
const ContactSection = dynamic(() => import("@/components/sections/contact"));
const ContactConsultation = dynamic(() => import("@/components/sections/contact-consultation"));
const ContactEmergency = dynamic(() => import("@/components/sections/contact-emergency"));

export const metadata = {
  title: "Contact - Détective Victimologue | Julien Hoang",
  description: "Contactez-moi pour une consultation découverte gratuite. Toutes nos consultations sont strictement confidentielles. Disponible 24/7 pour les urgences.",
};

export default function ContactPage() {
  return (
    <AutoPageLayout>
      <ContactHero />
      <ContactSection />
      <ContactConsultation />
      <ContactEmergency />
    </AutoPageLayout>
  );
}