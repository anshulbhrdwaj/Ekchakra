'use client';

import React from 'react';
import { Star, Quote, Globe } from 'lucide-react';
import { TESTIMONIALS } from '@/data/companyData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Global Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Importers & EPC Partners Worldwide
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Read verified testimonials from international commodity buyers, energy contractors, and retail partners.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200 hover:border-amber-400 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Sector & Star Rating */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">
                    {t.sector}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  “{t.quote}”
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.author}</h4>
                  <p className="text-xs text-slate-500">{t.designation}</p>
                </div>
                <Globe className="w-5 h-5 text-sky-600/70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
