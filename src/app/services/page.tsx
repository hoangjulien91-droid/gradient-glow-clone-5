import { AutoPageLayout } from "@/components/layout";
import ServicesDetailSection from "@/components/sections/services-detail";
import CtaReadySection from "@/components/sections/cta-ready";

export default function ServicesPage() {
  return (
    // Le AutoPageLayout s'occupe de tout !
    <AutoPageLayout>
      <ServicesDetailSection />
      <CtaReadySection />
    </AutoPageLayout>
  );
}