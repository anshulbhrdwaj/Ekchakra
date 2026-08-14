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
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { SUBSIDIARIES, Subsidiary } from "@/data/conglomerateData";

interface ConglomerateWheelProps {
  onOpenRFQ: (verticalId?: string) => void;
}

export default function ConglomerateWheel({ onOpenRFQ }: ConglomerateWheelProps) {
  const [selectedVertical, setSelectedVertical] = useState<Subsidiary>(SUBSIDIARIES[0]);

  const icons: { [key: string]: React.ReactNode } = {
    "paa-solar": <Sun className="w-5 h-5" />,
    "ekchakra-agro-fmcg": <Wheat className="w-5 h-5" />,
    "rj-travel-junction": <Plane className="w-5 h-5" />,
    "shilp-craft": <Sparkles className="w-5 h-5" />,
    "delight-apparel": <Shirt className="w-5 h-5" />,
    "aap-ka-haq": <Scale className="w-5 h-5" />,
    "bk-metal": <Layers className="w-5 h-5" />,
  };

  return (
    <section id="conglomerate-wheel" className="py-20 lg:py-28 relative overflow-hidden bg-[#040711]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>INTERACTIVE ECOSYSTEM HUD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            The 360° <span className="gold-gradient-text">Ekchakra Navigator</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Explore our 7 integrated industrial and commodity divisions. Select any sector on the wheel to inspect technical capabilities, leadership, and export readiness.
          </p>
        </div>

        {/* Interactive Layout: Left Orbit Selector & Right Dynamic Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Circular Orbital Selector */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-4">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
              
              {/* Outer Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/15 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-20 rounded-full border border-amber-500/20" />

              {/* Central Core Emblem */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#070c18] border-2 border-amber-400/60 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(245,158,11,0.3)]">
                <span className="font-serif font-black text-amber-400 text-lg sm:text-xl">एकचक्र</span>
                <span className="text-[9px] uppercase tracking-widest text-slate-300 font-bold mt-0.5">7 Verticals</span>
              </div>

              {/* 7 Orbital Interactive Nodes placed mathematically around the circle */}
              {SUBSIDIARIES.map((sub, index) => {
                const totalNodes = SUBSIDIARIES.length;
                const angle = (index * (360 / totalNodes) - 90) * (Math.PI / 180);
                const radius = 145; // radius in pixels
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isSelected = selectedVertical.id === sub.id;

                return (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedVertical(sub)}
                    className={`absolute z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 transform group ${
                      isSelected
                        ? "scale-125 shadow-2xl border-2 z-30"
                        : "bg-[#090f1d] hover:bg-[#121c33] border border-white/15 hover:scale-110"
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px) ${isSelected ? "scale(1.25)" : "scale(1)"}`,
                      backgroundColor: isSelected ? sub.accentColor : undefined,
                      borderColor: isSelected ? "#ffffff" : undefined,
                      color: isSelected ? "#040711" : "#cbd5e1",
                    }}
                    title={sub.name}
                  >
                    {icons[sub.id]}
                    <span className="text-[8px] font-bold mt-0.5 max-w-[48px] truncate px-1">
                      {sub.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Helper text */}
            <div className="text-center mt-6 text-xs text-slate-400 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Select any vertical node to inspect live division specs</span>
            </div>
          </div>

          {/* Right Column: Dynamic Deep-Dive Showcase Card */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-500">
              
              {/* Top Accent Gradient Bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: selectedVertical.accentColor }}
              />

              {/* Card Header & Director Pill */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span 
                      className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950"
                      style={{ backgroundColor: selectedVertical.accentColor }}
                    >
                      {selectedVertical.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      ISO 9001:2015 Assured
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {selectedVertical.brandTitle}
                  </h3>
                  <p className="text-sm text-amber-300/90 font-medium mt-1">
                    {selectedVertical.tagline}
                  </p>
                </div>

                {/* Director Portrait Pill */}
                <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/20">
                    <Image
                      src={selectedVertical.directorImage}
                      alt={selectedVertical.director}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {selectedVertical.director}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {selectedVertical.directorRole}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cover Preview Image */}
              <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-white/10">
                <Image
                  src={selectedVertical.coverImage}
                  alt={selectedVertical.brandTitle}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                    {selectedVertical.name} Flagship Facilities
                  </span>
                  <span className="px-2 py-1 rounded bg-emerald-500/80 backdrop-blur-md font-bold text-[11px]">
                    Active Production & Export
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedVertical.description}
              </p>

              {/* Key Quantitative Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {selectedVertical.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <div 
                      className="text-lg font-bold font-display"
                      style={{ color: selectedVertical.accentColor }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights List */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Division Highlights & Core Competencies:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedVertical.highlights.slice(0, 4).map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
                <a
                  href={`#${selectedVertical.id}`}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <span>View Product Catalog & Specs</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenRFQ(selectedVertical.id)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg"
                  style={{ backgroundColor: selectedVertical.accentColor }}
                >
                  <span>Request Instant Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
