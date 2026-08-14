'use client';

import React from 'react';
import { Award, ShieldCheck, FileCheck } from 'lucide-react';
import { CERTIFICATIONS } from '@/data/companyData';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Statutory Accreditations & Quality Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            International Compliance & Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            EKCHAKRA International Pvt LTD operates under strict statutory licenses and ISO 9001:2015 quality standards for worldwide trade assurance.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-slate-200 hover:border-amber-400 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform shadow-sm">
                  <FileCheck className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
                  {cert.badgeText}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                {cert.title}
              </h3>
              <div className="text-xs font-mono font-bold text-sky-700 mt-1">{cert.code}</div>
              <div className="text-[11px] text-slate-500 mt-1 font-semibold">
                Issued By: {cert.issuedBy}
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed border-t border-slate-100 pt-3">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trade Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-amber-50 border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-200/70 border border-amber-300 flex items-center justify-center flex-shrink-0 text-amber-900">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                100% Export Documentation & Phytosanitary Traceability
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Every container shipment includes Certificate of Origin, Phytosanitary Certificate, SGS Quality Inspection, and Bill of Lading.
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex-shrink-0 shadow-md"
          >
            Verify Credentials
          </a>
        </div>
      </div>
    </section>
  );
}
