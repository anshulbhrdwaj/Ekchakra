'use client';

import React from 'react';
import Link from 'next/link';
import {
  Award,
  Mail,
  Phone,
  MapPin,
  Globe,
  Sun,
  Wheat,
  Palette,
  Plane,
  Shirt,
  Scale,
  Hammer,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_INFO, ASSOCIATE_COMPANIES, CERTIFICATIONS } from '@/data/companyData';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Pre-footer Callout / Accreditation Banner */}
      <div className="bg-slate-800/80 border-b border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {COMPANY_INFO.isoStandard}
              </h4>
              <p className="text-xs text-amber-300/90">
                Government of India Recognized Export House | IEC & FIEO Accredited
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/certifications"
              className="inline-flex items-center px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
            >
              <span>View All 7+ Certifications</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main 4-Column WordPress-Style Widget Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Sanskrit Ethos */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-sm">
                E
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white tracking-wider">EKCHAKRA</h3>
                <p className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">International Pvt Ltd</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {COMPANY_INFO.sanskritMeaning}
            </p>
            <div className="pt-2">
              <div className="text-[11px] font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                Global Trade Footprint:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Middle East', 'Europe', 'SE Asia', 'North America', 'Africa'].map((region) => (
                  <span
                    key={region}
                    className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Core Export Divisions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center">
              <Sun className="w-4 h-4 text-amber-400 mr-2" />
              <span>Export Verticals</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/divisions/solar"
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>TOPCon 640Wp Solar Modules</span>
                  <span className="text-[10px] text-amber-400 font-mono">23.3%</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/divisions/solar"
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Hybrid & Off-Grid Inverters</span>
                  <span className="text-[10px] text-slate-400">3kW-50kW</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/divisions/solar"
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>LiFePO4 Energy Storage</span>
                  <span className="text-[10px] text-emerald-400">5000+ Cyc</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/divisions/fmcg-agro"
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>1121 & Non-Basmati Rice</span>
                  <span className="text-[10px] text-slate-400">Punjab / WB</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/divisions/fmcg-agro"
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Phool & Flavored Makhana</span>
                  <span className="text-[10px] text-amber-400">Sortex</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/divisions/fmcg-agro"
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Spices (Jeera, Mirch, Garam Masala)</span>
                  <span className="text-[10px] text-slate-400">Pure Grade</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/divisions/fmcg-agro"
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Moringa & Guar Gum Powder</span>
                  <span className="text-[10px] text-emerald-400">Superfood</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/divisions/fmcg-agro"
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Pure Desi Ghee & Bio-Fertilizers</span>
                  <span className="text-[10px] text-amber-400">Ayurvedic</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Associate Companies */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center">
              <Globe className="w-4 h-4 text-emerald-400 mr-2" />
              <span>Associate Companies</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {ASSOCIATE_COMPANIES.map((company) => (
                <li key={company.id}>
                  <Link
                    href={`/divisions/associate-companies#${company.id}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors block"
                  >
                    <div className="font-semibold text-slate-300 hover:text-emerald-300">
                      {company.name}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">{company.sector}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Headquarters & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center">
              <MapPin className="w-4 h-4 text-cyan-400 mr-2" />
              <span>Headquarters & Inquiries</span>
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.hotline}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.hotline}
                </a>
              </div>
            </div>

            {/* Statutory Compliance Badges */}
            <div className="pt-3">
              <div className="text-[11px] font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                Statutory Compliance:
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center">
                <span className="p-1 rounded bg-slate-800 border border-slate-700 text-amber-400 font-mono">
                  ISO 9001
                </span>
                <span className="p-1 rounded bg-slate-800 border border-slate-700 text-emerald-400 font-mono">
                  IEC GOI
                </span>
                <span className="p-1 rounded bg-slate-800 border border-slate-700 text-cyan-400 font-mono">
                  FIEO APEX
                </span>
                <span className="p-1 rounded bg-slate-800 border border-slate-700 text-purple-400 font-mono">
                  MSME
                </span>
                <span className="p-1 rounded bg-slate-800 border border-slate-700 text-pink-400 font-mono">
                  CIN REG
                </span>
                <span className="p-1 rounded bg-slate-800 border border-slate-700 text-yellow-400 font-mono">
                  GST TAX
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & SEO Bar */}
      <div className="bg-slate-950 border-t border-slate-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200">EKCHAKRA International Pvt LTD</strong>. All Rights Reserved. AN ISO 9001:2015 LTD Company.
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-amber-400 transition-colors">
              About
            </Link>
            <Link href="/certifications" className="hover:text-amber-400 transition-colors">
              Compliance
            </Link>
            <Link href="/gallery" className="hover:text-amber-400 transition-colors">
              Media Gallery
            </Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
