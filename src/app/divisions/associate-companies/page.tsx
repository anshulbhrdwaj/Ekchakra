'use client';

import React, { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RfqModal from '@/components/home/RfqModal';
import {
  Sun,
  Wheat,
  Palette,
  Plane,
  Shirt,
  Scale,
  Hammer,
  Building2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ASSOCIATE_COMPANIES } from '@/data/companyData';

export default function AssociateCompaniesPage() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);

  const getCompanyIcon = (icon: string) => {
    switch (icon) {
      case 'SunMedium':
        return <Sun className="w-6 h-6 text-amber-600" />;
      case 'Wheat':
        return <Wheat className="w-6 h-6 text-emerald-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-sky-600" />;
      case 'Plane':
        return <Plane className="w-6 h-6 text-indigo-600" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-pink-600" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-purple-600" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-amber-700" />;
      default:
        return <Building2 className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-white">
      <TopBar onOpenRfq={() => setIsRfqOpen(true)} />
      <Navbar onOpenRfq={() => setIsRfqOpen(true)} />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold uppercase tracking-widest mb-4">
              <Building2 className="w-3.5 h-3.5 text-sky-700" />
              <span>EKCHAKRA ASSOCIATE COMPANIES & ENTITIES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              Synergistic Multi-Industry Ecosystem
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mt-4 font-normal leading-relaxed">
              Explore our specialized associate entities spanning renewable energy, agricultural commodities, artisanal crafts, hospitality tours, fashion apparel, corporate law, and structural metals.
            </p>
          </div>
        </section>

        {/* Associate Companies Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {ASSOCIATE_COMPANIES.map((comp) => (
              <div
                key={comp.id}
                id={comp.id}
                className="bg-slate-50 border border-slate-200 hover:border-amber-400 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    {getCompanyIcon(comp.icon)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">{comp.name}</h3>
                    <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mt-1">
                      {comp.sector}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 font-medium">
                      Managing Director: <strong className="text-slate-900">{comp.director}</strong>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Distribution & Operating Channels:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {comp.channels.map((chan, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-white text-slate-700 border border-slate-200 shadow-sm"
                        >
                          {chan}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-700 italic mb-2">
                      “{comp.tagline}”
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {comp.description}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <h5 className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                      Core Solutions & Capabilities:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {comp.services.map((serv, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-xs font-medium text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{serv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-slate-200">
                    <span className="text-xs text-slate-500 font-medium">EKCHAKRA Group Associate Entity</span>
                    <button
                      onClick={() => setIsRfqOpen(true)}
                      className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <span>Inquire with {comp.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <RfqModal isOpen={isRfqOpen} onClose={() => setIsRfqOpen(false)} />
    </div>
  );
}
