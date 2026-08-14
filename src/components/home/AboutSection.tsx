'use client';

import React from 'react';
import Link from 'next/link';
import {
  Compass,
  Target,
  Eye,
  Quote,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>The Ekchakra Heritage & Ethos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            One Wheel Driving Diversified Global Excellence
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Sanskrit Ethos Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-10 mb-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-amber-500/10 border border-amber-200 rounded-2xl text-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center mb-3 shadow-sm">
                <span className="text-2xl font-black text-amber-700">एक</span>
              </div>
              <div className="text-xl font-black text-slate-900 tracking-wide">एकचक्र (Ekachakra)</div>
              <div className="text-xs text-amber-700 font-mono font-bold mt-1">Eka (One) + Chakra (Wheel)</div>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                A Sanskrit philosophical archetype of unified momentum, complete harmony, and single-source multi-dimensional strength.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Comprehensive Multi-Sector Solutions Under A Single Umbrella
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {COMPANY_INFO.sanskritMeaning}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Cross-continental supply chain reliability</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Rigorous ISO 9001:2015 quality control</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Fair-trade artisan & farmer upskilling</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Direct manufacturer & exporter pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder’s Message Card */}
        <div id="founder-message" className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 mb-14 shadow-md relative">
          <Quote className="w-16 h-16 text-amber-500/15 absolute top-6 right-8 pointer-events-none" />
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{COMPANY_INFO.founderMessage.title}</span>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line italic">
              {COMPANY_INFO.founderMessage.content}
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-extrabold text-slate-900 text-base">
                  {COMPANY_INFO.founderMessage.author}
                </div>
                <div className="text-xs text-amber-700 font-bold">
                  {COMPANY_INFO.founderMessage.company}
                </div>
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs border border-slate-300 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
                <span>Executive Board Oversight</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden group hover:border-amber-400 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
              <span>Our Mission</span>
              <span className="text-xs font-mono ml-3 px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
                Global Impact
              </span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden group hover:border-emerald-400 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
              <span>Our Vision</span>
              <span className="text-xs font-mono ml-3 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                2030 Horizon
              </span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </div>
        </div>

        {/* View Full Corporate Profile CTA */}
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 text-sm font-bold text-amber-700 hover:text-amber-800 hover:underline"
          >
            <span>Learn more about Ekchakra Leadership & CSR Initiatives</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
