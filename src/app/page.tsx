"use client";

import React, { useState } from "react";
import GlobalTradeBar from "@/components/layout/GlobalTradeBar";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import ConglomerateWheel from "@/components/home/ConglomerateWheel";
import SubsidiariesGrid from "@/components/home/SubsidiariesGrid";
import SolarCalculator from "@/components/home/SolarCalculator";
import AgroExportSection from "@/components/home/AgroExportSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import MissionVisionCSR from "@/components/home/MissionVisionCSR";
import CertificationsVault from "@/components/home/CertificationsVault";
import MediaGallery from "@/components/home/MediaGallery";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/layout/Footer";
import RFQModal from "@/components/home/RFQModal";

export default function HomePage() {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [selectedVerticalId, setSelectedVerticalId] = useState<string | undefined>();
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>();
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleOpenRFQ = (verticalId?: string, productId?: string) => {
    setSelectedVerticalId(verticalId);
    setSelectedProductId(productId);
    setRfqOpen(true);
  };

  const handleCloseRFQ = () => {
    setRfqOpen(false);
    setSelectedVerticalId(undefined);
    setSelectedProductId(undefined);
  };

  return (
    <div className="min-h-screen bg-[#040711] text-slate-100 selection:bg-amber-500/30 selection:text-white relative">
      
      {/* Top Live Ticker & World Clocks */}
      <GlobalTradeBar />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenRFQ={handleOpenRFQ} />

      {/* Main Page Flow */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <HeroSection 
          onOpenRFQ={handleOpenRFQ} 
          onOpenVideo={() => {
            const mediaSec = document.getElementById("media-gallery");
            mediaSec?.scrollIntoView({ behavior: "smooth" });
          }} 
        />

        {/* 2. The Sanskrit Philosophy & Manifesto */}
        <PhilosophySection onOpenRFQ={() => handleOpenRFQ()} />

        {/* 3. 360° Interactive Conglomerate Wheel HUD */}
        <ConglomerateWheel onOpenRFQ={handleOpenRFQ} />

        {/* 4. Deep-Dive Subsidiaries & Products Catalog */}
        <SubsidiariesGrid onOpenRFQ={handleOpenRFQ} />

        {/* 5. Interactive PAA Solar Yield & 30-Year ROI Calculator */}
        <SolarCalculator onOpenRFQ={handleOpenRFQ} />

        {/* 6. Agro Commodities, Spices & Superfoods Matrix */}
        <AgroExportSection onOpenRFQ={handleOpenRFQ} />

        {/* 7. Executive Leadership & Governance */}
        <LeadershipSection onOpenRFQ={() => handleOpenRFQ()} />

        {/* 8. Corporate Mission, Vision & CSR Programs */}
        <MissionVisionCSR />

        {/* 9. Statutory Compliance & Certifications Vault */}
        <CertificationsVault />

        {/* 10. Corporate Media & Poster Showcase */}
        <MediaGallery onOpenRFQ={() => handleOpenRFQ()} />

        {/* 11. Global Testimonials & Shipping Ports */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer onOpenRFQ={handleOpenRFQ} />

      {/* Interactive Global RFQ Builder Modal */}
      <RFQModal
        isOpen={rfqOpen}
        onClose={handleCloseRFQ}
        defaultVerticalId={selectedVerticalId}
        defaultProductId={selectedProductId}
      />

    </div>
  );
}
