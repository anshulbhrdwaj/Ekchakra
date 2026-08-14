import type { Metadata } from 'next';
import './globals.css';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://ekchakra.com'),
  title: {
    default: 'EKCHAKRA International Pvt LTD | One Wheel, Infinite Global Solutions | ISO 9001:2015',
    template: '%s | EKCHAKRA International Pvt LTD',
  },
  description:
    'EKCHAKRA International Pvt LTD is an ISO 9001:2015 certified global multi-sector conglomerate and export house. Leading international supplier of TOPCon N-Type Solar Panels, Hybrid Inverters, LiFePO4 Batteries, Indian Basmati Rice, Sortex Makhana, Pure Spices, Handicrafts, Fashion Apparel, and Turnkey Engineering.',
  keywords: [
    'Ekchakra International',
    'Ekchakra Group',
    'PAA Solar India',
    'TOPCon Solar Panels Manufacturer',
    'N-Type Solar Module Exporter',
    'Hybrid Solar Inverter India',
    'LiFePO4 Battery Storage Manufacturer',
    'Indian Basmati Rice Exporter',
    '1121 Basmati Rice Wholesale',
    'Sortex Makhana Fox Nuts Exporter',
    'Indian Spices Exporter Jeera Red Chilli Garam Masala',
    'Pure Desi Ghee Clarified Butter Export',
    'Organic Moringa Drumstick Powder',
    'Guar Gum Powder Exporter',
    'Organic Cow Dung Fertilizer NPK',
    'Shilp Craft Handicrafts Amazon',
    'Delight Apparel Garment Manufacturer',
    'RJ Travel Junction Corporate MICE',
    'AAP KA HAQ Legal Advisory',
    'BK Metal Galvanized Solar Structure',
    'ISO 9001:2015 Certified Export House India',
  ],
  authors: [{ name: 'EKCHAKRA International Pvt LTD', url: 'https://ekchakra.com' }],
  creator: 'EKCHAKRA International Pvt LTD',
  publisher: 'EKCHAKRA International Pvt LTD',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ekchakra.com',
    siteName: 'EKCHAKRA International Pvt LTD',
    title: 'EKCHAKRA International Pvt LTD | Multi-Sector Global Export Conglomerate',
    description:
      'AN ISO 9001:2015 Certified Enterprise delivering 360-degree solutions in Solar Power, FMCG Agro Commodities, Spices, Handicrafts, Fashion, and Global Trade.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'EKCHAKRA International Global Headquarters and Export Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EKCHAKRA International Pvt LTD | ISO 9001 Certified Global Conglomerate',
    description:
      'Premier exporter of TOPCon Solar PV, Sortex Basmati Rice, Organic Superfoods, Spices, and Handicrafts.',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ekchakra.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="antialiased bg-white text-slate-900 min-h-screen flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans">
        {children}
      </body>
    </html>
  );
}
