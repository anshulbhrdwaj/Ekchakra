"use client";

import React, { useState } from "react";
import { ShieldCheck, Award, FileCheck, CheckCircle2, Eye, Download, ExternalLink } from "lucide-react";
import { CERTIFICATIONS, Certificate } from "@/data/conglomerateData";

export default function CertificationsVault() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-[#040711] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold text-amber-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>STATUTORY & INTERNATIONAL ACCREDITATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Certified Quality & <br />
            <span className="gold-gradient-text">Statutory Governance</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Every product and service delivered by EKCHAKRA International Pvt Ltd adheres strictly to recognized international quality benchmarks, ministry registrations, and sovereign export compliances.
          </p>
        </div>

        {/* 8-Card Certification Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {cert.category}
                </span>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-display">
                  {cert.code}
                </h3>

                <p className="text-xs font-medium text-slate-300 mt-1">
                  {cert.name}
                </p>

                <p className="text-xs text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-amber-400 font-semibold group-hover:text-amber-300">
                <span>Inspect Certificate Details</span>
                <Eye className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Certificate Inspection */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-white/15 relative space-y-6">
              
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                      {activeCert.category}
                    </span>
                    <h3 className="text-xl font-bold text-white font-display">
                      {activeCert.code}
                    </h3>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Active & Compliant
                </span>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <strong className="text-white block text-xs uppercase tracking-wider text-slate-400">Full Certification Name:</strong>
                  <span>{activeCert.name}</span>
                </div>

                <div>
                  <strong className="text-white block text-xs uppercase tracking-wider text-slate-400">Issuing Regulatory Authority:</strong>
                  <span className="text-amber-300">{activeCert.authority}</span>
                </div>

                <div>
                  <strong className="text-white block text-xs uppercase tracking-wider text-slate-400">Statutory Scope & Description:</strong>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    {activeCert.description}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>AUDIT STATUS: REGULAR</span>
                <span className="text-emerald-400 font-semibold">100% VERIFIED</span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
