import { AutoPageLayout } from "@/components/layout";
import PricingHero from "@/components/sections/pricing-hero";
import PricingConsultations from "@/components/sections/pricing-consultations";
import PricingGuarantees from "@/components/sections/pricing-guarantees";
import PricingCta from "@/components/sections/pricing-cta";

export default function TarifsPage() {
  return (
    <AutoPageLayout>
      <PricingHero />
      <PricingConsultations />
      <PricingGuarantees />
      <PricingCta />
    </AutoPageLayout>
  );
}