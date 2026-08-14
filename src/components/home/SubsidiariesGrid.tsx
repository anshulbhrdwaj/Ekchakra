"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sun, 
  Wheat, 
  Plane, 
  Sparkles, 
  Shirt, 
  Scale, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  FileText,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Package,
  Layers as LayersIcon
} from "lucide-react";
import { SUBSIDIARIES, Subsidiary, ProductItem } from "@/data/conglomerateData";

interface SubsidiariesGridProps {
  onOpenRFQ: (verticalId?: string, productId?: string) => void;
  onOpenProductModal?: (product: ProductItem) => void;
}

export default function SubsidiariesGrid({ onOpenRFQ, onOpenProductModal }: SubsidiariesGridProps) {
  const [activeTab, setActiveTab] = useState<string>("paa-solar");
  const [expandedSpecs, setExpandedSpecs] = useState<{ [key: string]: boolean }>({});

  const toggleSpecs = (productId: string) => {
    setExpandedSpecs((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const icons: { [key: string]: React.ReactNode } = {
    "paa-solar": <Sun className="w-4 h-4" />,
    "ekchakra-agro-fmcg": <Wheat className="w-4 h-4" />,
    "rj-travel-junction": <Plane className="w-4 h-4" />,
    "shilp-craft": <Sparkles className="w-4 h-4" />,
    "delight-apparel": <Shirt className="w-4 h-4" />,
    "aap-ka-haq": <Scale className="w-4 h-4" />,
    "bk-metal": <Layers className="w-4 h-4" />,
  };

  return (
    <section id="subsidiaries" className="py-20 lg:py-28 relative bg-[#070c18] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold text-cyan-400">
            <LayersIcon className="w-3.5 h-3.5" />
            <span>EXECUTIVE COMMODITY & INDUSTRIAL DIRECTORY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Integrated <span className="gold-gradient-text">Vertical Showcases</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Deep-dive into technical specifications, packaging standards, laboratory certifications, and international container load configurations.
          </p>
        </div>

        {/* Horizontal Subsidiary Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-10">
          {SUBSIDIARIES.map((sub) => {
            const isActive = activeTab === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => setActiveTab(sub.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 shrink-0 ${
                  isActive
                    ? "bg-white text-slate-950 shadow-xl shadow-white/10 scale-105"
                    : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/5"
                }`}
              >
                <span style={{ color: isActive ? sub.accentColor : undefined }}>
                  {icons[sub.id]}
                </span>
                <span>{sub.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? "bg-slate-900 text-white" : "bg-white/5 text-slate-400"}`}>
                  {sub.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Vertical Content Block */}
        {SUBSIDIARIES.filter((s) => s.id === activeTab).map((sub) => (
          <div key={sub.id} id={sub.id} className="space-y-12 animate-in fade-in duration-300">
            
            {/* Division Banner */}
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden bg-gradient-to-r from-[#0b1325] via-[#070c18] to-[#040711]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-slate-950"
                      style={{ backgroundColor: sub.accentColor }}
                    >
                      {sub.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      ISO 9001:2015 & Export Compliant
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                    {sub.brandTitle}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {sub.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    {sub.stats.map((st, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-base sm:text-lg font-bold" style={{ color: sub.accentColor }}>
                          {st.value}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenRFQ(sub.id)}
                      className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 flex items-center gap-2 transition-transform active:scale-95 shadow-lg"
                      style={{ backgroundColor: sub.accentColor }}
                    >
                      <FileText className="w-4 h-4" />
                      <span>Request {sub.name} Price Quotation</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={sub.coverImage}
                    alt={sub.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="text-xs text-white">
                      <div className="font-bold text-amber-300">Division Director</div>
                      <div>{sub.director} ({sub.directorRole})</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Products & Technical Catalog Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-xl sm:text-2xl font-bold text-white font-display flex items-center gap-2">
                  <span>Product Lines & Engineering Specs</span>
                  <span className="text-xs font-normal px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                    {sub.products.length} Categories Available
                  </span>
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sub.products.map((prod) => {
                  const isExpanded = expandedSpecs[prod.id];
                  return (
                    <div
                      key={prod.id}
                      className="glass-card rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
                    >
                      {/* Product Image */}
                      <div className="relative w-full h-48 overflow-hidden bg-slate-900">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-transparent to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/10">
                            {prod.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h5 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                            {prod.name}
                          </h5>
                          <p className="text-xs text-amber-300/80 font-medium mt-0.5">
                            {prod.subtitle}
                          </p>
                          <p className="text-xs text-slate-300 leading-relaxed mt-2.5 line-clamp-3">
                            {prod.description}
                          </p>
                        </div>

                        {/* Specs Preview or Full Specs */}
                        <div className="pt-2 border-t border-white/5 space-y-2">
                          <button
                            onClick={() => toggleSpecs(prod.id)}
                            className="w-full flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white py-1"
                          >
                            <span>Technical Specifications</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-amber-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
                          </button>

                          {isExpanded && (
                            <div className="space-y-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] font-mono animate-in fade-in duration-200">
                              {Object.entries(prod.specs).map(([key, val]) => (
                                <div key={key} className="flex justify-between border-b border-white/5 pb-1 gap-2">
                                  <span className="text-slate-400">{key}:</span>
                                  <span className="text-slate-200 font-semibold text-right">{val}</span>
                                </div>
                              ))}

                              {prod.packagingOptions && (
                                <div className="pt-1.5 text-[10px]">
                                  <span className="text-amber-400 font-bold block mb-1">Export Packaging:</span>
                                  <div className="text-slate-300 space-y-0.5">
                                    {prod.packagingOptions.map((pkg, pIdx) => (
                                      <div key={pIdx} className="flex items-center gap-1">
                                        <Package className="w-3 h-3 text-slate-400" />
                                        <span>{pkg}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Key benefits bullets */}
                          <div className="space-y-1 pt-1">
                            {prod.keyBenefits.slice(0, 2).map((kb, kbIdx) => (
                              <div key={kbIdx} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{kb}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action CTA */}
                        <div className="pt-3 flex items-center gap-2">
                          <button
                            onClick={() => onOpenRFQ(sub.id, prod.id)}
                            className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-all"
                          >
                            <span>Request Quotation</span>
                            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
