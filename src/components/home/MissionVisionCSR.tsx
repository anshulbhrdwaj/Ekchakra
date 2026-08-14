"use client";

import React from "react";
import Image from "next/image";
import { Target, Eye, HeartHandshake, Leaf, Users, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { CSR_INITIATIVES } from "@/data/conglomerateData";
import { UNSPLASH_IMAGES } from "@/data/unsplashImages";

export default function MissionVisionCSR() {
  return (
    <section id="mission-vision-csr" className="py-20 lg:py-28 relative bg-[#050914] border-t border-white/5 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold text-emerald-400">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>PURPOSE & SOCIAL IMPACT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Our Mission, Vision & <br />
            <span className="emerald-gradient-text">Sustainable Stewardship</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Committed to uplifting humanity, empowering rural cultivators, incubating vendor capabilities, and leading environmental stewardship worldwide.
          </p>
        </div>

        {/* Mission & Vision 2-Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="glass-card p-8 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-[#0e1628] to-[#040711] space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Target className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              Corporate Mission Statement
            </span>

            <h3 className="text-2xl font-bold text-white font-display">
              Accessible Global Luxury & Clean Technology
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              "To deliver affordable, high-quality Product and Service solutions worldwide, fostering better lives and accessible luxury through innovative technologies. We strive to make quality accessible to every household while driving environmental stewardship and sustainable economic growth for a more prosperous society."
            </p>

            <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero-Compromise Quality</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Environmental Care</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="glass-card p-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-[#081b26] to-[#040711] space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Eye className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">
              Corporate Vision Statement
            </span>

            <h3 className="text-2xl font-bold text-white font-display">
              Continuous Vendor Incubation & Innovation
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              "To fulfill our long-term mission, we regularly develop and train our vendor collectives to meet the latest global market demands, quality benchmarks, and sustainable manufacturing standards so that our supply chain remains ever-ready and dynamically innovative."
            </p>

            <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Vendor Skill Incubation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Future-Ready Supply Chains</span>
              </div>
            </div>
          </div>

        </div>

        {/* CSR Initiatives Showcase */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white font-display">
                Corporate Social Responsibility (CSR) Programs
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Active community and environmental interventions driving measurable impact
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CSR_INITIATIVES.map((csr) => (
              <div
                key={csr.id}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden group hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={csr.image}
                    alt={csr.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-slate-950">
                      Active Program
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {csr.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2">
                      {csr.description}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Impact:</span>
                    <div className="text-right">
                      <div className="text-sm font-bold text-emerald-400 font-display">
                        {csr.metric}
                      </div>
                      <div className="text-[9px] text-slate-500 uppercase tracking-wider">
                        {csr.metricLabel}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
