import dynamic from "next/dynamic";
import { AutoPageLayout } from "@/components/layout";
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
    <AutoPageLayout>
      <TeamSection />
    </AutoPageLayout>
  );
}