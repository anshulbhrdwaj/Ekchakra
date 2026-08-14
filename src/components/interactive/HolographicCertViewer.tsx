'use client';

import React, { useState } from 'react';
import { ShieldCheck, Award, Lock, FileCheck2, Sparkles, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '@/data/companyData';
import { audioHaptics } from './AudioHaptics';

export default function HolographicCertViewer() {
  const [activeCert, setActiveCert] = useState(CERTIFICATIONS[0]);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Statutory Accreditation & Global Compliance Vault</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
          Certified <span className="text-gold-gradient">Quality Governance</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
          Every container shipment is backed by verified ISO 9001:2015 accreditation, FIEO export authorization, IEC foreign trade registry, APEDA food safety certifications, and statutory GST compliances.
        </p>
      </div>

      {/* Holographic 3D Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert) => {
          const isSelected = activeCert.id === cert.id;
          return (
            <div
              key={cert.id}
              onClick={() => {
                setActiveCert(cert);
                audioHaptics.playChime(640, 0.2);
              }}
              className={`p-6 sm:p-8 rounded-3xl glass-card-dark border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-5 card-hover-awwwards ${
                isSelected
                  ? 'border-amber-400 ring-2 ring-amber-400/30 shadow-[0_0_40px_rgba(223,168,87,0.3)]'
                  : 'border-amber-500/20 hover:border-amber-400/50'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider">
                    {cert.badgeText}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition">
                    {cert.title}
                  </h4>
                  <div className="text-xs font-mono font-bold text-amber-400 mt-1">
                    {cert.code}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    Issued By: {cert.issuedBy}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-amber-300">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified & Current</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono">STATUTORY</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trade Assurance Protocol Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">
              100% Export Documentation & Phytosanitary Traceability
            </h4>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Every shipment includes Certificate of Origin (COO), Phytosanitary & Fumigation Certificate, SGS Laboratory Quality Inspection, and Ocean Bill of Lading.
            </p>
          </div>
        </div>

        <a
          href="/contact"
          onClick={() => audioHaptics.playHover()}
          className="px-6 py-3 rounded-xl bg-gold-gradient text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition shrink-0 shadow-lg shadow-amber-500/20 flex items-center gap-2"
        >
          <span>Verify Statutory Credentials</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
