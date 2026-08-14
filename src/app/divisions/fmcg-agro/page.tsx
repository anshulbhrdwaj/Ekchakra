'use client';

import React, { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RfqModal from '@/components/home/RfqModal';
import {
  Wheat,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Package,
  Sparkles,
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/companyData';

export default function FmcgAgroPage() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const agroProducts = PRODUCTS_CATALOG.filter((p) => p.category === 'fmcg');

  const openRfq = (productName?: string) => {
    setSelectedProduct(productName);
    setIsRfqOpen(true);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-white">
      <TopBar onOpenRfq={() => openRfq()} />
      <Navbar onOpenRfq={() => openRfq()} />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4">
              <Wheat className="w-3.5 h-3.5 text-emerald-700" />
              <span>EKCHAKRA FMCG & AGRICULTURAL EXPORT HOUSE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              Premium Basmati Rice, Organic Superfoods & Spices
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mt-4 font-normal leading-relaxed">
              Exporting the finest authentic Indian agro-commodities: aged 1121 Basmati & state rice, sortex Fox Nuts (Makhana), single-origin ground spices, pure Desi Ghee, Moringa superfood, and organic bio-fertilizers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button
                onClick={() => openRfq('Premium Indian Basmati & Non-Basmati Rice')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-emerald-600/20 transition-transform hover:scale-105"
              >
                Request Agro Export RFQ
              </button>
              <a
                href="#catalog"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs border border-slate-300 transition-colors shadow-sm"
              >
                View Full Agro Catalog
              </a>
            </div>
          </div>
        </section>

        {/* Quality Pillars */}
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">APEDA & FSSAI Compliant</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every consignment undergoes laboratory testing for pesticide residue, aflatoxin levels, and moisture control according to USFDA and EU standards.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">100% Sortex Optical Cleaning</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Advanced multi-camera optical sortex machinery ensures zero foreign matter, uniform grain length, and spotless aesthetic grading.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Custom Private Labeling</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete OEM packaging options from 50g retail barrier pouches to 50kg export master bags and palletized 40ft FCL container loads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Agro Products Catalog */}
        <section id="catalog" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-slate-900">
                FMCG, Agro Commodities & Spices Catalog
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Detailed harvest origin, processing methodologies, nutritional profiles, and available packaging.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {agroProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6 group hover:border-emerald-400 hover:shadow-xl transition-all"
                >
                  <div className="space-y-4">
                    <div className="h-52 rounded-2xl overflow-hidden relative border border-slate-200 bg-slate-100 shadow-inner">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url(${prod.imageUrl})` }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-sm">
                          {prod.badge || 'Agro Export'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{prod.fullDesc}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                        Key Export Features:
                      </div>
                      <div className="space-y-1.5">
                        {prod.features.map((f, i) => (
                          <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {prod.specs && (
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                        <div className="text-[11px] font-bold text-sky-700 uppercase tracking-wider mb-2">
                          Standard Grade & Specifications:
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(prod.specs).map(([k, v]) => (
                            <div key={k}>
                              <span className="text-slate-500 font-medium">{k}: </span>
                              <span className="text-slate-900 font-mono font-bold">{v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {prod.packaging && (
                      <div className="text-xs text-slate-600">
                        <strong className="text-slate-900">Packaging: </strong>
                        {prod.packaging.join(' • ')}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-emerald-700">ISO 9001 Tested</span>
                    <button
                      onClick={() => openRfq(prod.name)}
                      className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <span>Inquire Container MOQ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <RfqModal isOpen={isRfqOpen} onClose={() => setIsRfqOpen(false)} initialProduct={selectedProduct} />
    </div>
  );
}
