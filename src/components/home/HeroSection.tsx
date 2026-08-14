"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Sun, 
  Wheat, 
  Plane, 
  Shirt, 
  Scale, 
  Layers, 
  Download, 
  Play, 
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Globe2
} from "lucide-react";
import { UNSPLASH_IMAGES } from "@/data/unsplashImages";
import { SUBSIDIARIES } from "@/data/conglomerateData";

interface HeroSectionProps {
  onOpenRFQ: (verticalId?: string) => void;
  onOpenVideo: () => void;
}

export default function HeroSection({ onOpenRFQ, onOpenVideo }: HeroSectionProps) {
  const [activeVerticalIndex, setActiveVerticalIndex] = useState(0);
  const currentVertical = SUBSIDIARIES[activeVerticalIndex];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 lg:py-24">
      {/* Background Cinematic Canvas */}
      <div className="absolute inset-0 z-0">
        <Image
          src={UNSPLASH_IMAGES.heroConglomerate}
          alt="EKCHAKRA International Corporate Conglomerate"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-[0.25] contrast-[1.15] transition-transform duration-1000 ease-out"
        />
        {/* Radial Gradients and Mesh Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-[#040711]/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-[#040711]/90" />
        <div className="absolute inset-0 grid-pattern-bg opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Badges & ISO Tagline */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-serif tracking-wider">एकचक्र</span>
            <span className="text-slate-400">|</span>
            <span>Sanskrit: "The Singular Omnipotent Wheel"</span>
          </div>

          <div className="glass-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AN ISO 9001:2015 REGISTERED CONGLOMERATE</span>
          </div>
        </div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.1]">
            One Wheel. <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Infinite Global Horizons.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            <strong className="text-white font-medium">EKCHAKRA International Pvt Ltd</strong> unites 
            world-class clean energy infrastructure, farm-direct agro & spice exports, global luxury tourism, 
            heritage handicrafts, sustainable textiles, legal counsel, and heavy steel fabrication into a singular, high-precision supply chain.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenRFQ()}
              className="w-full sm:w-auto btn-gold-glow flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-950 font-display transition-all"
            >
              <span>Initiate Export RFQ</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenVideo}
              className="w-full sm:w-auto btn-outline-glow flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-sm font-semibold text-white transition-all group"
            >
              <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 text-amber-400 fill-amber-400" />
              </div>
              <span>Watch Corporate Showreel</span>
            </button>
          </div>
        </div>

        {/* Dynamic Sector Quick Navigator HUD */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  The 7 Ekchakra Verticals
                </span>
              </div>
              <span className="text-xs text-slate-400 hidden sm:inline-block">
                Click any vertical to preview capability
              </span>
            </div>

            {/* Vertical Pill Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {SUBSIDIARIES.map((sub, idx) => {
                const isActive = activeVerticalIndex === idx;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveVerticalIndex(idx)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all text-center group ${
                      isActive
                        ? "bg-white/15 border-2 shadow-lg"
                        : "bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 text-slate-400 hover:text-white"
                    }`}
                    style={{
                      borderColor: isActive ? sub.accentColor : "transparent",
                    }}
                  >
                    <span className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {sub.name}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 font-medium">
                      {sub.category}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Vertical Dynamic Showcase Strip */}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 font-bold shadow-md"
                  style={{ backgroundColor: currentVertical.accentColor }}
                >
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    {currentVertical.brandTitle}
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-normal">
                      Head: {currentVertical.director}
                    </span>
                  </h2>
                  <p className="text-xs text-slate-300 mt-0.5 line-clamp-1 max-w-2xl">
                    {currentVertical.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                <a
                  href={`#${currentVertical.id}`}
                  className="w-full md:w-auto px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Explore Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onOpenRFQ(currentVertical.id)}
                  className="w-full md:w-auto px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-950 flex items-center justify-center gap-1.5 transition-transform active:scale-95"
                  style={{ backgroundColor: currentVertical.accentColor }}
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Impact Numbers Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="glass-card p-4 rounded-xl border border-white/5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold gold-gradient-text font-display">
              7
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              Strategic Verticals
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-white/5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-display">
              30 Yrs
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              Solar Linear Warranty
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-white/5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">
              35+
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              Export Destinations
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-white/5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">
              ISO 9001
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              Quality Certified
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
