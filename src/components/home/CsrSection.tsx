'use client';

import React from 'react';
import { HeartHandshake, Sun, Leaf, GraduationCap } from 'lucide-react';
import { CSR_INITIATIVES } from '@/data/companyData';

export default function CsrSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-6 h-6 text-amber-600" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-emerald-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-sky-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-pink-600" />;
      default:
        return <HeartHandshake className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="csr" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Corporate Social Responsibility & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Empowering Communities & Ecological Stewardship
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            At EKCHAKRA, business expansion is inseparably bound to sustainable development, clean energy access, and rural upliftment.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* CSR Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CSR_INITIATIVES.map((csr, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-emerald-400 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  {getIcon(csr.icon)}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {csr.title}
                </h3>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {csr.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100">
                <span className="inline-block px-3 py-1 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  {csr.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
