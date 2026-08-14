'use client';

import React, { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GallerySection from '@/components/home/GallerySection';
import RfqModal from '@/components/home/RfqModal';
import { Image as ImageIcon } from 'lucide-react';

export default function GalleryPage() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-white">
      <TopBar onOpenRfq={() => setIsRfqOpen(true)} />
      <Navbar onOpenRfq={() => setIsRfqOpen(true)} />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-800 text-xs font-bold uppercase tracking-widest mb-4">
              <ImageIcon className="w-3.5 h-3.5 text-rose-700" />
              <span>MEDIA & VISUAL ASSETS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              Corporate Media, Posters & Videos
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mt-4 font-normal leading-relaxed">
              Explore high-resolution visual posters and video streams covering our solar manufacturing, sortex grain sorting, handcrafted artisanal studios, and global exhibitions.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <GallerySection />
      </main>

      <Footer />
      <RfqModal isOpen={isRfqOpen} onClose={() => setIsRfqOpen(false)} />
    </div>
  );
}
