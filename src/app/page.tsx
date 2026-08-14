'use client';

import React, { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/home/AboutSection';
import DivisionsGrid from '@/components/home/DivisionsGrid';
import TeamSection from '@/components/home/TeamSection';
import CertificationsSection from '@/components/home/CertificationsSection';
import GallerySection from '@/components/home/GallerySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CsrSection from '@/components/home/CsrSection';
import FaqSection from '@/components/home/FaqSection';
import Footer from '@/components/layout/Footer';
import RfqModal from '@/components/home/RfqModal';

export default function HomePage() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqTargetProduct, setRfqTargetProduct] = useState<string | undefined>(undefined);

  const handleOpenRfq = (productName?: string) => {
    setRfqTargetProduct(productName);
    setIsRfqOpen(true);
  };

  const handleCloseRfq = () => {
    setIsRfqOpen(false);
    setRfqTargetProduct(undefined);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* WordPress Theme Top Bar */}
      <TopBar onOpenRfq={() => handleOpenRfq()} />

      {/* Main Sticky Header */}
      <Navbar onOpenRfq={() => handleOpenRfq()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Dynamic Hero Slider */}
        <HeroSlider onOpenRfq={() => handleOpenRfq()} />

        {/* Corporate Ethos & Sanskrit Meaning */}
        <AboutSection />

        {/* Multi-Vertical Product Catalog & Tabbed Grid */}
        <DivisionsGrid onOpenRfqWithProduct={(name) => handleOpenRfq(name)} />

        {/* Leadership & Executive Directors */}
        <TeamSection />

        {/* International Compliance & ISO 9001 */}
        <CertificationsSection />

        {/* Media Showcase: Posters & Videos */}
        <GallerySection />

        {/* Client Endorsements */}
        <TestimonialsSection />

        {/* Corporate Social Responsibility */}
        <CsrSection />

        {/* SEO FAQ Accordion */}
        <FaqSection />
      </main>

      {/* WordPress-Style 4-Column Footer */}
      <Footer />

      {/* Interactive RFQ Modal */}
      <RfqModal
        isOpen={isRfqOpen}
        onClose={handleCloseRfq}
        initialProduct={rfqTargetProduct}
      />
    </div>
  );
}
