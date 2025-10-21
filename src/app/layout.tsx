import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julien Hoang - Détective Privé Victimologue | Biarritz",
  description: "Détective privé spécialisé en victimologie à Biarritz. Expert agréé CNAPS avec 15 ans d'expérience en accompagnement des victimes de violences, harcèlement et arnaques. Consultation découverte gratuite.",
  keywords: ["détective privé", "victimologue", "Biarritz", "enquête", "violences conjugales", "harcèlement", "arnaques", "CNAPS"],
  authors: [{ name: "Julien Hoang" }],
  openGraph: {
    title: "Julien Hoang - Détective Privé Victimologue",
    description: "Expert en victimologie à Biarritz. 15 ans d'expérience, agréé CNAPS. Accompagnement professionnel et humain pour toutes vos enquêtes.",
    url: "https://julienhoang-detective.fr",
    siteName: "Julien Hoang Détective",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Julien Hoang - Détective Privé Victimologue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julien Hoang - Détective Privé Victimologue",
    description: "Expert en victimologie à Biarritz. 15 ans d'expérience, agréé CNAPS.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}