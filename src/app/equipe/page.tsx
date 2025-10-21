import dynamic from "next/dynamic";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

const TeamSection = dynamic(() => import("@/components/sections/team"), {
  loading: () => <div className="min-h-screen bg-bg-primary" />,
});

export const metadata: Metadata = {
  title: "Notre Équipe - Julien Hoang Détective Privé",
  description: "Un cabinet spécialisé dans la victimologie, alliant expertise en investigation privée et accompagnement psychologique pour une prise en charge globale des victimes.",
  openGraph: {
    title: "Notre Équipe - Julien Hoang Détective Privé",
    description: "Un cabinet spécialisé dans la victimologie, alliant expertise en investigation privée et accompagnement psychologique pour une prise en charge globale des victimes.",
  },
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <Breadcrumb items={[{ label: "Équipe" }]} />
      <main>
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}