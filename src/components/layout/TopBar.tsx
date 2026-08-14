'use client';

import React from 'react';
import { Award, Mail, Phone, Globe, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

interface TopBarProps {
  onOpenRfq?: () => void;
}

export default function TopBar({ onOpenRfq }: TopBarProps) {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left Side: ISO Certification Badge */}
        <div className="flex items-center space-x-3 flex-wrap gap-y-1">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <Award className="w-3.5 h-3.5 mr-1 text-amber-400" />
            AN ISO 9001:2015 CERTIFIED LTD
          </span>
          <span className="hidden sm:inline-flex items-center text-slate-300 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            Govt. Recognized Export House
          </span>
          <span className="hidden md:inline-flex items-center text-slate-300 text-[11px]">
            <Globe className="w-3.5 h-3.5 mr-1 text-cyan-400" />
            Global Supply Chain Network
          </span>
        </div>

        {/* Right Side: Contact & RFQ button */}
        <div className="flex items-center space-x-4 ml-auto">
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="hidden sm:inline-flex items-center text-slate-300 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
            <span>{COMPANY_INFO.email}</span>
          </a>
          <a
            href={`tel:${COMPANY_INFO.hotline}`}
            className="inline-flex items-center text-slate-300 hover:text-amber-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
            <span>{COMPANY_INFO.hotline}</span>
          </a>
          {onOpenRfq && (
            <button
              onClick={onOpenRfq}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded text-[11px] uppercase tracking-wider transition-all shadow-sm"
            >
              Request Quote
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
