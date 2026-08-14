'use client';

import React, { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RfqModal from '@/components/home/RfqModal';
import {
  Sun,
  Zap,
  Battery,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/companyData';

export default function SolarDivisionPage() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const solarProducts = PRODUCTS_CATALOG.filter((p) => p.category === 'solar');

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-widest mb-4">
              <Sun className="w-3.5 h-3.5 text-amber-700" />
              <span>PAA SOLAR & EKCHAKRA CLEAN ENERGY DIVISION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              Tier-1 TOPCon Solar Modules & Smart Inverters
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mt-4 font-normal leading-relaxed">
              Engineered with Tunnel Oxide Passivated Contact (TOPCon) N-type silicon technology, sub-10ms UPS hybrid inverters, and 5,000+ cycle LiFePO4 battery storage for utility, commercial, and off-grid micro-grids.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button
                onClick={() => openRfq('TOPCon N-Type Solar PV Modules (500Wp – 640Wp+)')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-transform hover:scale-105"
              >
                Request Solar Quotation (RFQ)
              </button>
              <a
                href="#products"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs border border-slate-300 transition-colors shadow-sm"
              >
                View Technical Data Sheets
              </a>
            </div>
          </div>
        </section>

        {/* Solar Technical Highlights Grid */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">23.32% Module Efficiency</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ultra-thin 1-2nm silicon oxide tunnel layer minimizes carrier recombination, delivering maximum energy output per square meter.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">30-Year Performance Warranty</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Backed by minimal degradation (≤1% year 1, 0.4% annual drop through year 30) with bifacial dual-glass construction.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Sub-10ms UPS Switching</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hybrid inverters switch seamlessly between solar, battery storage, and utility grid during blackouts without resetting sensitive electronics.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center">
                  <Battery className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">5,000+ Cycle LiFePO4</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Safe lithium iron phosphate chemistry offering 90% Depth of Discharge, 95% round-trip efficiency, and 45% lighter weight than lead-acid.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Solar Products Section */}
        <section id="products" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Solar Technology & Power Conversion Catalog
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Detailed technical specifications, power curves, and engineering parameters.
              </p>
            </div>

            <div className="space-y-12">
              {solarProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-5 h-64 sm:h-72 rounded-2xl overflow-hidden relative border border-slate-200 bg-slate-100 shadow-inner">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${prod.imageUrl})` }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 shadow-sm">
                        {prod.badge || 'Solar Tech'}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">{prod.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{prod.fullDesc}</p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                        Core Technical Features:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {prod.features.map((f, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {prod.specs && (
                      <div className="pt-3 border-t border-slate-100">
                        <div className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">
                          Specification Matrix:
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {Object.entries(prod.specs).map(([k, v]) => (
                            <div key={k} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                              <div className="text-[10px] text-slate-500 font-semibold">{k}</div>
                              <div className="text-xs text-slate-900 font-mono font-bold mt-0.5">{v}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-4 flex items-center justify-end">
                      <button
                        onClick={() => openRfq(prod.name)}
                        className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm"
                      >
                        <span>Request Custom Quotation</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead-Acid vs LiFePO4 Comparison Matrix */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900">LiFePO4 Chemistry vs. Traditional Lead-Acid</h3>
              <p className="text-xs text-slate-500 mt-1">Why modern solar micro-grids specify Lithium Iron Phosphate.</p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-800 border-b border-slate-200 font-bold">
                    <th className="p-4">Parameter</th>
                    <th className="p-4 text-emerald-700">Ekchakra LiFePO4 Battery</th>
                    <th className="p-4 text-slate-500">Conventional Lead-Acid</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="p-4 font-semibold">Cycle Life (@80% DoD)</td>
                    <td className="p-4 text-emerald-700 font-bold">5,000 to 9,000+ Cycles</td>
                    <td className="p-4">500 to 1,200 Cycles</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Usable Depth of Discharge (DoD)</td>
                    <td className="p-4 text-emerald-700 font-bold">80% – 90% without degradation</td>
                    <td className="p-4">50% max (higher damages cells)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Round-Trip Efficiency</td>
                    <td className="p-4 text-emerald-700 font-bold">≥ 95% (Fast 1C Charging)</td>
                    <td className="p-4">75% – 80% (Slow charging)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Weight & Space Footprint</td>
                    <td className="p-4 text-emerald-700 font-bold">40% to 50% Lighter & Compact</td>
                    <td className="p-4">Heavy & Bulky lead plates</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Maintenance & Off-Gassing</td>
                    <td className="p-4 text-emerald-700 font-bold">Zero Maintenance / No Acid Fumes</td>
                    <td className="p-4">Periodic water topping & toxic fumes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <RfqModal isOpen={isRfqOpen} onClose={() => setIsRfqOpen(false)} initialProduct={selectedProduct} />
    </div>
  );
}
