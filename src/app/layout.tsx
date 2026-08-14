import type { Metadata, Viewport } from "next";
import "./globals.css";
import { UNSPLASH_IMAGES } from "@/data/unsplashImages";

export const viewport: Viewport = {
  themeColor: "#040711",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ekchakra.com"),
  title: {
    default: "EKCHAKRA International Pvt Ltd | Global Conglomerate & Export Powerhouse",
    template: "%s | EKCHAKRA International Pvt Ltd",
  },
  description:
    "AN ISO 9001:2015 CERTIFIED ENTERPRISE. EKCHAKRA unites clean energy (PAA Solar TOPCon panels & hybrid inverters), agro & spice exports (Basmati rice, Makhana, Spices, Ghee), luxury tourism (RJ Travel), heritage crafts (Shilp Craft), sustainable apparel, legal counsel (AAP Ka Haq), and structural steel engineering (BK Metal) under one global supply chain.",
  keywords: [
    "EKCHAKRA International",
    "PAA Solar",
    "TOPCon solar panels",
    "hybrid solar inverter",
    "LiFePO4 battery storage",
    "Basmati rice export India",
    "1121 Basmati rice",
    "Phool Makhana fox nuts",
    "Indian spices exporter",
    "Guntur red chili powder",
    "dehydrated garlic powder",
    "Moringa drumstick powder",
    "Guar gum powder",
    "Vedic bilona ghee",
    "Shilp Craft brass sculptures",
    "RJ Travel Junction MICE",
    "Delight Apparel organic cotton",
    "AAP Ka Haq legal advisory",
    "BK Metal solar mounting structures",
    "ISO 9001 certified export company India",
    "APEDA FIEO DGFT certified exporter",
  ],
  authors: [{ name: "EKCHAKRA International Pvt Ltd", url: "https://www.ekchakra.com" }],
  creator: "EKCHAKRA International Pvt Ltd",
  publisher: "EKCHAKRA International Pvt Ltd",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ekchakra.com",
    siteName: "EKCHAKRA International Pvt Ltd",
    title: "EKCHAKRA International | Global Conglomerate & Multi-Sector Export Leader",
    description:
      "One Wheel. Infinite Horizons. An ISO 9001:2015 certified conglomerate powering clean energy infrastructure, farm-direct agro exports, global tourism, artisanal crafts, and industrial manufacturing.",
    images: [
      {
        url: UNSPLASH_IMAGES.heroConglomerate,
        width: 1200,
        height: 630,
        alt: "EKCHAKRA International Conglomerate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EKCHAKRA International | Global Multi-Sector Conglomerate",
    description:
      "AN ISO 9001:2015 CERTIFIED ENTERPRISE. Powering clean energy, agricultural commodities, tourism, artisanal heritage, and industrial engineering worldwide.",
    images: [UNSPLASH_IMAGES.heroConglomerate],
    creator: "@EkchakraGlobal",
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
  alternates: {
    canonical: "https://www.ekchakra.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Comprehensive Schema.org JSON-LD Structured Data
  const jsonLdCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "EKCHAKRA International Pvt Ltd",
    "alternateName": "EKCHAKRA Group",
    "url": "https://www.ekchakra.com",
    "logo": "https://www.ekchakra.com/logo.png",
    "description":
      "An ISO 9001:2015 certified diversified Indian multinational enterprise operating across Solar Clean Tech (PAA Solar), Agro Commodities & Spices Export, Luxury Tourism (RJ Travel Junction), Artisanal Heritage (Shilp Craft), Sustainable Fashion (Delight Apparel), Corporate Legal Architecture (AAP Ka Haq), and Heavy Steel Fabrication (BK Metal).",
    "founder": {
      "@type": "Person",
      "name": "Mr. Pandey",
      "jobTitle": "Group Director",
    },
    "knowsAbout": [
      "Solar Photovoltaic Engineering",
      "Agricultural Commodity Exports",
      "Phytosanitary & Food Safety Compliance",
      "International Trade Law & Incoterms",
      "Artisanal Metal & Wood Craft",
      "Sustainable Organic Textiles",
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "ISO 9001:2015 Quality Management System Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "IEC (Import Export Code) - DGFT Govt of India",
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "FIEO (Federation of Indian Export Organisations)",
      },
    ],
    "subOrganization": [
      {
        "@type": "Organization",
        "name": "PAA Solar",
        "description": "Clean tech division manufacturing TOPCon N-type solar modules and hybrid energy storage.",
      },
      {
        "@type": "Organization",
        "name": "Ekchakra Export",
        "description": "Agro-export division exporting GI-tagged Basmati rice, fox nuts (Makhana), and pure Indian spices.",
      },
      {
        "@type": "Organization",
        "name": "RJ Travel Junction",
        "description": "International and domestic corporate MICE and luxury tourism operator.",
      },
      {
        "@type": "Organization",
        "name": "Shilp Craft",
        "description": "Artisanal brass, bronze, and wood heritage craft export house.",
      },
      {
        "@type": "Organization",
        "name": "Delight Apparel",
        "description": "Sustainable organic cotton fashion and textile manufacturer.",
      },
      {
        "@type": "Organization",
        "name": "AAP KA HAQ",
        "description": "Corporate law and international trade arbitration consultancy.",
      },
      {
        "@type": "Organization",
        "name": "BK Metal",
        "description": "Hot-dip galvanized steel solar mounting and structural engineering facility.",
      },
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-11-EKCHAKRA",
      "contactType": "customer service",
      "email": "export@ekchakra.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Hindi"],
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCorporation) }}
        />
      </head>
      <body className="bg-[#040711] text-slate-100 antialiased selection:bg-amber-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
