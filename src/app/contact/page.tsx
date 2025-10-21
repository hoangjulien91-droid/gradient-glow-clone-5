import dynamic from "next/dynamic";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";

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
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <Breadcrumb items={[{ label: "Contact" }]} />
      <main>
        <ContactHero />
        <ContactSection />
        <ContactConsultation />
        <ContactEmergency />
      </main>
      <Footer />
    </div>
  );
}