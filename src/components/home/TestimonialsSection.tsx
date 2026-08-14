"use client";

import React from "react";
import { Star, Quote, Globe, ShieldCheck, MapPin, Anchor } from "lucide-react";
import { TESTIMONIALS, GLOBAL_DESTINATIONS } from "@/data/conglomerateData";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 relative bg-[#040711] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold text-amber-400">
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL TRUST & CLIENTELE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Endorsed by Leaders in <br />
            <span className="gold-gradient-text">35+ Export Markets</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            From food distribution conglomerates in the Middle East to renewable energy integrators in Western Europe, see why global partners rely on EKCHAKRA.
          </p>
        </div>

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">
                    Vertical: {t.vertical}
                  </span>
                </div>

                <blockquote className="text-sm sm:text-base text-slate-200 font-light italic leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {t.clientName}
                  </h4>
                  <p className="text-xs text-amber-300/90 font-medium">
                    {t.designation}, {t.company}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-white/[0.04] px-3 py-1.5 rounded-xl border border-white/5">
                  <span className="text-base">{t.flag}</span>
                  <span>{t.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Export Shipping Ports Hub */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-r from-[#070e1e] via-[#050914] to-[#040711]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Anchor className="w-4 h-4" />
                <span>Primary Global Shipping Corridors</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                Active International Port Destinations (FOB / CIF / CFR)
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              100% On-Time Customs Clearance
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {GLOBAL_DESTINATIONS.map((dest, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1 hover:bg-white/[0.05] transition-colors">
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate">{dest.country}</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  {dest.city}
                </div>
                <div className="text-[10px] text-cyan-400/90 font-mono line-clamp-1">
                  {dest.port}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
