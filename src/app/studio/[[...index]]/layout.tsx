import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio - Sanity",
  description: "Sanity Studio pour gérer le contenu du blog.",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
