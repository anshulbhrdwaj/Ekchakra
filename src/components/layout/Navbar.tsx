'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Wheat,
  Palette,
  Plane,
  Shirt,
  Scale,
  Hammer,
  ShieldCheck,
  FileText,
  Users,
  Building2,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

interface NavbarProps {
  onOpenRfq?: () => void;
}

export default function Navbar({ onOpenRfq }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setDivisionsOpen(false);
    setAboutOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200'
          : 'bg-white border-b border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2">
          {/* Brand Logo Emblem */}
          <Link href="/" onClick={closeMenus} className="flex items-center space-x-3 group shrink-0 whitespace-nowrap">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-900 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <span className="text-amber-400 font-extrabold text-xl sm:text-2xl tracking-tighter">E</span>
                  <div className="w-2 h-2 rounded-full bg-amber-400 absolute -top-0.5 -right-1 animate-pulse" />
                </div>
              </div>
            </div>
            <div className="whitespace-nowrap">
              <div className="flex items-center space-x-1.5 whitespace-nowrap">
                <span className="font-black text-lg sm:text-xl tracking-wider text-slate-900 whitespace-nowrap">EKCHAKRA</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 bg-amber-100 text-amber-800 border border-amber-300 rounded whitespace-nowrap">
                  LTD
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold whitespace-nowrap">
                International Pvt Ltd
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-1.5 shrink-0">
            <Link
              href="/"
              className={`px-3 py-2 text-xs 2xl:text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                pathname === '/'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group shrink-0">
              <button
                type="button"
                className={`px-3 py-2 text-xs 2xl:text-sm font-bold rounded-lg transition-colors flex items-center space-x-1 whitespace-nowrap shrink-0 ${
                  pathname.startsWith('/about')
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                }`}
              >
                <span className="whitespace-nowrap">About Us</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200 shrink-0" />
              </button>

              {/* Mega Dropdown Menu */}
              <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                <Link
                  href="/about"
                  className="flex items-start p-3 rounded-xl hover:bg-amber-50/60 transition-colors group/item"
                >
                  <Building2 className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover/item:text-amber-700 whitespace-nowrap">
                      Corporate Overview
                    </div>
                    <p className="text-[11px] text-slate-500">Sanskrit heritage & 360° group vision</p>
                  </div>
                </Link>
                <Link
                  href="/about#founder-message"
                  className="flex items-start p-3 rounded-xl hover:bg-amber-50/60 transition-colors group/item"
                >
                  <FileText className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-700 whitespace-nowrap">
                      Director Message
                    </div>
                    <p className="text-[11px] text-slate-500">Strategic message from leadership</p>
                  </div>
                </Link>
                <Link
                  href="/about#leadership-team"
                  className="flex items-start p-3 rounded-xl hover:bg-amber-50/60 transition-colors group/item"
                >
                  <Users className="w-5 h-5 text-sky-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover/item:text-sky-700 whitespace-nowrap">
                      Leadership Team
                    </div>
                    <p className="text-[11px] text-slate-500">Board directors & department heads</p>
                  </div>
                </Link>
                <Link
                  href="/about#csr"
                  className="flex items-start p-3 rounded-xl hover:bg-amber-50/60 transition-colors group/item"
                >
                  <HeartHandshake className="w-5 h-5 text-rose-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover/item:text-rose-700 whitespace-nowrap">
                      CSR & Sustainability
                    </div>
                    <p className="text-[11px] text-slate-500">Empowering farmers & clean solar</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Export & Divisions Mega Menu */}
            <div className="relative group shrink-0">
              <button
                type="button"
                className={`px-3 py-2 text-xs 2xl:text-sm font-bold rounded-lg transition-colors flex items-center space-x-1 whitespace-nowrap shrink-0 ${
                  pathname.startsWith('/divisions')
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                }`}
              >
                <span className="whitespace-nowrap">Divisions & Export</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200 shrink-0" />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 grid grid-cols-2 gap-3">
                <Link
                  href="/divisions/solar"
                  className="flex items-start p-3 rounded-xl hover:bg-amber-50/80 transition-colors group/item border border-slate-100 hover:border-amber-300"
                >
                  <div className="p-2.5 rounded-lg bg-amber-100 text-amber-700 mr-3 flex-shrink-0">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover/item:text-amber-700 whitespace-nowrap">
                      PAA Solar / Solar Export
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      TOPCon 640Wp panels, Hybrid/Offgrid inverters, LiFePO4 storage
                    </p>
                  </div>
                </Link>

                <Link
                  href="/divisions/fmcg-agro"
                  className="flex items-start p-3 rounded-xl hover:bg-emerald-50/80 transition-colors group/item border border-slate-100 hover:border-emerald-300"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-700 mr-3 flex-shrink-0">
                    <Wheat className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-700 whitespace-nowrap">
                      FMCG & Agro Commodities
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Basmati rice, Makhana, Spices, Ghee, Moringa, Guar Gum, Bio-fertilizers
                    </p>
                  </div>
                </Link>

                <Link
                  href="/divisions/associate-companies#shilp-craft"
                  className="flex items-start p-3 rounded-xl hover:bg-sky-50/80 transition-colors group/item border border-slate-100 hover:border-sky-300"
                >
                  <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700 mr-3 flex-shrink-0">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover/item:text-sky-700 whitespace-nowrap">
                      Shilp Craft
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Indian brass & wooden handicrafts on Amazon Global & Bazar
                    </p>
                  </div>
                </Link>

                <Link
                  href="/divisions/associate-companies#rj-travel"
                  className="flex items-start p-3 rounded-xl hover:bg-indigo-50/80 transition-colors group/item border border-slate-100 hover:border-indigo-300"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-700 mr-3 flex-shrink-0">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover/item:text-indigo-700 whitespace-nowrap">
                      RJ Travel Junction
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Domestic & International tourism, corporate MICE, and ticketing
                    </p>
                  </div>
                </Link>

                <Link
                  href="/divisions/associate-companies#delight-apparel"
                  className="flex items-start p-3 rounded-xl hover:bg-pink-50/80 transition-colors group/item border border-slate-100 hover:border-pink-300"
                >
                  <div className="p-2.5 rounded-lg bg-pink-100 text-pink-700 mr-3 flex-shrink-0">
                    <Shirt className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover/item:text-pink-700 whitespace-nowrap">
                      Delight Apparel
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Export garment manufacturing & multi-channel retail
                    </p>
                  </div>
                </Link>

                <Link
                  href="/divisions/associate-companies#aap-ka-haq"
                  className="flex items-start p-3 rounded-xl hover:bg-purple-50/80 transition-colors group/item border border-slate-100 hover:border-purple-300"
                >
                  <div className="p-2.5 rounded-lg bg-purple-100 text-purple-700 mr-3 flex-shrink-0">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover/item:text-purple-700 whitespace-nowrap">
                      AAP KA HAQ & B K Metal
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Legal counsel, arbitration & Galvanized structural engineering
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <Link
              href="/divisions/associate-companies"
              className={`px-3 py-2 text-xs 2xl:text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                pathname === '/divisions/associate-companies'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Associate Companies
            </Link>

            <Link
              href="/certifications"
              className={`px-3 py-2 text-xs 2xl:text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                pathname === '/certifications'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Certifications
            </Link>

            <Link
              href="/gallery"
              className={`px-3 py-2 text-xs 2xl:text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                pathname === '/gallery'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-xs 2xl:text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                pathname === '/contact'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action: RFQ Quick Modal button */}
          <div className="hidden xl:flex items-center space-x-3 shrink-0">
            {onOpenRfq && (
              <button
                onClick={onOpenRfq}
                className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 2xl:px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Get Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            )}
          </div>

          {/* Mobile / Tablet Menu Toggle Button */}
          <div className="flex xl:hidden items-center space-x-2 shrink-0">
            {onOpenRfq && (
              <button
                onClick={onOpenRfq}
                className="bg-amber-500 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs tracking-wide shadow-sm whitespace-nowrap shrink-0"
              >
                RFQ
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Off-canvas Drawer (Clean White Theme) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 max-h-[85vh] overflow-y-auto shadow-xl">
          <Link
            href="/"
            onClick={closeMenus}
            className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:text-amber-600 hover:bg-amber-50 whitespace-nowrap"
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:text-amber-600 hover:bg-amber-50 whitespace-nowrap"
            >
              <span className="whitespace-nowrap">About Us</span>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${aboutOpen ? 'rotate-180' : ''}`} />
            </button>
            {aboutOpen && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl border border-slate-100">
                <Link
                  href="/about"
                  onClick={closeMenus}
                  className="block py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 whitespace-nowrap"
                >
                  Corporate Overview & Vision
                </Link>
                <Link
                  href="/about#founder-message"
                  onClick={closeMenus}
                  className="block py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 whitespace-nowrap"
                >
                  Founder & Director Message
                </Link>
                <Link
                  href="/about#leadership-team"
                  onClick={closeMenus}
                  className="block py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 whitespace-nowrap"
                >
                  Leadership Team
                </Link>
                <Link
                  href="/about#csr"
                  onClick={closeMenus}
                  className="block py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 whitespace-nowrap"
                >
                  CSR & Sustainability
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setDivisionsOpen(!divisionsOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:text-amber-600 hover:bg-amber-50 whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Divisions & Export</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${divisionsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {divisionsOpen && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl border border-slate-100">
                <Link
                  href="/divisions/solar"
                  onClick={closeMenus}
                  className="block py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 whitespace-nowrap"
                >
                  PAA Solar & Renewable PV
                </Link>
                <Link
                  href="/divisions/fmcg-agro"
                  onClick={closeMenus}
                  className="block py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 whitespace-nowrap"
                >
                  FMCG, Rice, Spices & Makhana
                </Link>
                <Link
                  href="/divisions/associate-companies#shilp-craft"
                  onClick={closeMenus}
                  className="block py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 whitespace-nowrap"
                >
                  Shilp Craft (Handicrafts)
                </Link>
                <Link
                  href="/divisions/associate-companies#rj-travel"
                  onClick={closeMenus}
                  className="block py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 whitespace-nowrap"
                >
                  RJ Travel Junction
                </Link>
                <Link
                  href="/divisions/associate-companies#delight-apparel"
                  onClick={closeMenus}
                  className="block py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 whitespace-nowrap"
                >
                  Delight Apparel
                </Link>
                <Link
                  href="/divisions/associate-companies#aap-ka-haq"
                  onClick={closeMenus}
                  className="block py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 whitespace-nowrap"
                >
                  AAP KA HAQ (Legal)
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/divisions/associate-companies"
            onClick={closeMenus}
            className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:text-amber-600 hover:bg-amber-50 whitespace-nowrap"
          >
            Associate Companies
          </Link>

          <Link
            href="/certifications"
            onClick={closeMenus}
            className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:text-amber-600 hover:bg-amber-50 whitespace-nowrap"
          >
            Certifications & ISO
          </Link>

          <Link
            href="/gallery"
            onClick={closeMenus}
            className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:text-amber-600 hover:bg-amber-50 whitespace-nowrap"
          >
            Gallery & Media
          </Link>

          <Link
            href="/contact"
            onClick={closeMenus}
            className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:text-amber-600 hover:bg-amber-50 whitespace-nowrap"
          >
            Contact & Global Desk
          </Link>
        </div>
      )}
    </header>
  );
}
