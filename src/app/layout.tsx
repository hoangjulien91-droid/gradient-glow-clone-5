import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

// ✅ Performance: Optimisation des fonts avec preload et ajustements
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  // ✅ Performance: Charger uniquement les poids utilisés
  weight: ["300", "400", "600", "700"],
  // ✅ Performance: Ajustements pour réduire CLS
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
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
      <head>
        {/* ✅ Performance: DNS Prefetch pour domaines externes */}
        <link rel="dns-prefetch" href="https://slelguoygbfzlpylpxfs.supabase.co" />
        <link rel="dns-prefetch" href="https://wpgtsqjcdosuegpophvv.supabase.co" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://slelguoygbfzlpylpxfs.supabase.co" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        {/* ✅ Performance: Charger le script en lazy (non-critique) */}
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="lazyOnload"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="false"
          data-custom-data='{"appName": "Julien Hoang Detective", "version": "1.0.0"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}