"use client";

import React, { useState, useEffect } from "react";
import { 
  Compass, 
  Sun, 
  Wheat, 
  Plane, 
  Sparkles, 
  Shirt, 
  Scale, 
  Layers, 
  FileText, 
  Menu, 
  X, 
  ChevronDown, 
  PhoneCall, 
  Download,
  Building2
} from "lucide-react";
import { SUBSIDIARIES } from "@/data/conglomerateData";

interface NavbarProps {
  onOpenRFQ: (verticalId?: string) => void;
}

export default function Navbar({ onOpenRFQ }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [verticalDropdownOpen, setVerticalDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const verticalIcons: { [key: string]: React.ReactNode } = {
    "paa-solar": <Sun className="w-4 h-4 text-cyan-400" />,
    "ekchakra-agro-fmcg": <Wheat className="w-4 h-4 text-emerald-400" />,
    "rj-travel-junction": <Plane className="w-4 h-4 text-amber-400" />,
    "shilp-craft": <Sparkles className="w-4 h-4 text-pink-400" />,
    "delight-apparel": <Shirt className="w-4 h-4 text-purple-400" />,
    "aap-ka-haq": <Scale className="w-4 h-4 text-indigo-400" />,
    "bk-metal": <Layers className="w-4 h-4 text-slate-400" />,
  };

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      scrolled 
        ? "bg-[#040711]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3" 
        : "bg-[#040711]/60 backdrop-blur-md border-b border-white/5 py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#070c18] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              <Compass className="w-6 h-6 text-amber-400 group-hover:rotate-90 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white">
                EKCHAKRA
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                LTD
              </span>
            </div>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
              International Pvt Ltd
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#philosophy" className="hover:text-amber-400 transition-colors">
            Philosophy
          </a>

          {/* Subsidiaries Mega Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setVerticalDropdownOpen(true)}
            onMouseLeave={() => setVerticalDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-amber-400 transition-colors py-2">
              <span>7 Verticals</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${verticalDropdownOpen ? "rotate-180 text-amber-400" : ""}`} />
            </button>

            {verticalDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[580px] bg-[#070c18]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl grid grid-cols-2 gap-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                {SUBSIDIARIES.map((sub) => (
                  <a
                    key={sub.id}
                    href={`#${sub.id}`}
                    onClick={() => setVerticalDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                      {verticalIcons[sub.id]}
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover/item:text-amber-400 text-xs transition-colors flex items-center gap-1.5">
                        {sub.name}
                        <span className="text-[9px] px-1 py-0.2 rounded bg-white/5 text-slate-400 font-normal">
                          {sub.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {sub.tagline}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#solar-calculator" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
            <Sun className="w-3.5 h-3.5 text-cyan-400" />
            Solar Calculator
          </a>

          <a href="#agro-export" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <Wheat className="w-3.5 h-3.5 text-emerald-400" />
            Agro & Spices
          </a>

          <a href="#leadership" className="hover:text-amber-400 transition-colors">
            Leadership
          </a>

          <a href="#certifications" className="hover:text-amber-400 transition-colors">
            Certificates
          </a>

          <a href="#media-gallery" className="hover:text-amber-400 transition-colors">
            Media
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenRFQ()}
            className="btn-gold-glow flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 font-display transition-transform active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Request Global RFQ</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070c18] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="space-y-2">
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              The Ekchakra Philosophy
            </a>
            <div className="py-2 border-y border-white/5">
              <span className="text-xs uppercase tracking-wider font-bold text-amber-400 block mb-2">
                Conglomerate Subsidiaries:
              </span>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {SUBSIDIARIES.map((sub) => (
                  <a
                    key={sub.id}
                    href={`#${sub.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-white py-1"
                  >
                    {verticalIcons[sub.id]}
                    <span>{sub.name}</span>
                    <span className="text-xs text-slate-500">({sub.category})</span>
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#solar-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-cyan-400 hover:text-cyan-300"
            >
              Solar ROI Calculator
            </a>
            <a
              href="#agro-export"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-emerald-400 hover:text-emerald-300"
            >
              Agro & Spices Export Matrix
            </a>
            <a
              href="#leadership"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Board of Directors
            </a>
            <a
              href="#certifications"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Certificates & Compliance
            </a>
            <a
              href="#media-gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Media & Video Showcase
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full btn-gold-glow flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-950 font-display"
            >
              <FileText className="w-4 h-4" />
              <span>Request International RFQ</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
