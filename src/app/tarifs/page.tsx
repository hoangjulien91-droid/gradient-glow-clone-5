import dynamic from "next/dynamic";
import Navigation from "@/components/sections/navigation";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import PricingHero from "@/components/sections/pricing-hero";
import PricingConsultations from "@/components/sections/pricing-consultations";
import PricingGuarantees from "@/components/sections/pricing-guarantees";
import PricingCta from "@/components/sections/pricing-cta";

const Footer = dynamic(() => import("@/components/sections/footer"));

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <Breadcrumb items={[{ label: "Tarifs" }]} />
      <main>
        <PricingHero />
        <PricingConsultations />
        <PricingGuarantees />
        <PricingCta />
      </main>
      <Footer />
    </div>
  );
}