'use client';

import React, { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CertificationsSection from '@/components/home/CertificationsSection';
import RfqModal from '@/components/home/RfqModal';
import { Award } from 'lucide-react';

export default function CertificationsPage() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-white">
      <TopBar onOpenRfq={() => setIsRfqOpen(true)} />
      <Navbar onOpenRfq={() => setIsRfqOpen(true)} />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-widest mb-4">
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>QUALITY GOVERNANCE & STATUTORY COMPLIANCE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              Certifications & Global Accreditation
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mt-4 font-normal leading-relaxed">
              Complete legal incorporation, ISO 9001:2015 accreditation, IEC export authorization, and apex council memberships ensuring full bilateral trade protection.
            </p>
          </div>
        </section>

        {/* Certifications Component */}
        <CertificationsSection />

        {/* Compliance Verification & Testing Standards */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900">Consignment Quality Verification Protocol</h3>
              <p className="text-xs text-slate-500 mt-1">
                Every container undergoes multi-stage batch inspection prior to issuance of shipping bills.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
                <div className="font-bold text-amber-700">1. Pre-Shipment Inspection (PSI)</div>
                <p className="text-slate-600 leading-relaxed">
                  Conducted by accredited third-party surveyors (SGS / Intertek / Bureau Veritas) for physical parameters, weight verification, and seaworthy packing.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
                <div className="font-bold text-emerald-700">2. Phytosanitary & Fumigation Certification</div>
                <p className="text-slate-600 leading-relaxed">
                  Government quarantine authority inspection and vessel fumigation conforming to destination country import protocols.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
                <div className="font-bold text-sky-700">3. Flash Test & Electroluminescence (EL) for Solar</div>
                <p className="text-slate-600 leading-relaxed">
                  100% triple EL inspection on solar modules ensuring zero micro-cracks, uniform cell spacing, and certified IV curve reports.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
                <div className="font-bold text-pink-700">4. Legal & Commercial Vetting</div>
                <p className="text-slate-600 leading-relaxed">
                  Under AAP KA HAQ legal oversight, all export contracts adhere to standard ICC Incoterms 2020 and documentary credit (LC) requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <RfqModal isOpen={isRfqOpen} onClose={() => setIsRfqOpen(false)} />
    </div>
  );
}
