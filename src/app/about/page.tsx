'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/home/AboutSection';
import TeamSection from '@/components/home/TeamSection';
import CsrSection from '@/components/home/CsrSection';
import RfqModal from '@/components/home/RfqModal';
import { Award, Compass, ShieldCheck, Building2 } from 'lucide-react';

export default function AboutPage() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-white">
      <TopBar onOpenRfq={() => setIsRfqOpen(true)} />
      <Navbar onOpenRfq={() => setIsRfqOpen(true)} />

      <main className="flex-1">
        {/* Page Hero Banner */}
        <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-widest mb-4">
              <Building2 className="w-3.5 h-3.5 text-amber-700" />
              <span>Corporate Heritage & Profile</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              About EKCHAKRA International Pvt LTD
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mt-4 font-normal leading-relaxed">
              An ISO 9001:2015 accredited multi-sector conglomerate empowering global trade through unified momentum, technological innovation, and ethical supply chains.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
          </div>
        </section>

        {/* Corporate Deep Dive */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Sanskrit Ethos</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  In Sanskrit, <em>Ekachakra</em> stands for "One Wheel" (<em>Eka</em> = One, <em>Chakra</em> = Wheel). Like an unbroken wheel carrying full momentum, Ekchakra unites diverse vertical capabilities into one dependable enterprise.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Quality Assurance</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Certified under ISO 9001:2015 with complete statutory authorization from the Directorate General of Foreign Trade (IEC), FIEO, MSME, and APEDA.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">2030 Global Vision</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To continuously expand our direct international footprint across 50+ nations while empowering rural farming clusters and master artisans with modern fair-trade export channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Ethos & Founder Message Component */}
        <AboutSection />

        {/* Leadership & Executive Board Component */}
        <TeamSection />

        {/* CSR Initiatives */}
        <CsrSection />
      </main>

      <Footer />
      <RfqModal isOpen={isRfqOpen} onClose={() => setIsRfqOpen(false)} />
    </div>
  );
}
