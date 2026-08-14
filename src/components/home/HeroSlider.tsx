'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Sun,
  Wheat,
  ShieldCheck,
  Award,
  Globe2,
  ArrowRight,
  TrendingUp,
  Building,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

interface HeroSliderProps {
  onOpenRfq?: () => void;
}

const SLIDES = [
  {
    id: 'slide-1',
    tag: 'AN ISO 9001:2015 CERTIFIED CONGLOMERATE',
    title: 'One Wheel, Infinite Global Solutions',
    subtitle: 'Ekachakra (Eka = One, Chakra = Wheel). Engineering 360° multi-sector excellence across Solar Clean Tech, FMCG Agro Commodities, Handicrafts, Fashion, and Global Logistics.',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80',
    primaryCta: 'Explore Divisions',
    primaryLink: '#divisions',
    secondaryCta: 'Request Export RFQ',
    badge: 'Global Supply Chain',
  },
  {
    id: 'slide-2',
    tag: 'PAA SOLAR / RENEWABLE ENERGY DIVISION',
    title: 'Next-Gen TOPCon 640Wp+ Solar PV & Smart Inverters',
    subtitle: 'Pioneering ultra-efficient N-type bifacial photovoltaic modules with 23.32% conversion efficiency, sub-10ms UPS hybrid inverters, and 5000+ cycle LiFePO4 energy storage.',
    bgImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1600&auto=format&fit=crop&q=80',
    primaryCta: 'Explore Solar Tech',
    primaryLink: '/divisions/solar',
    secondaryCta: 'Solar Quotation',
    badge: '30-Yr Warranty',
  },
  {
    id: 'slide-3',
    tag: 'EKCHAKRA FMCG & AGRO EXPORT HOUSE',
    title: 'Sortex Basmati Rice, Organic Makhana & Pure Spices',
    subtitle: 'Harvesting India’s agricultural richness: aged 1121 Basmati, organic Fox Nuts (Makhana), shade-dried Moringa superfood, pure Desi Ghee, and single-origin ground spices.',
    bgImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1600&auto=format&fit=crop&q=80',
    primaryCta: 'View FMCG Catalog',
    primaryLink: '/divisions/fmcg-agro',
    secondaryCta: 'Container Inquiries',
    badge: 'APEDA & FSSAI Assured',
  },
  {
    id: 'slide-4',
    tag: 'SHILP CRAFT & DELIGHT APPAREL',
    title: 'Artisanal Heritage Crafts & Global Fashion Exports',
    subtitle: 'Empowering traditional master artisans and garment craftsmen through Amazon Global, international retail pipelines, and tailored corporate export solutions.',
    bgImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1600&auto=format&fit=crop&q=80',
    primaryCta: 'Explore Crafts & Fashion',
    primaryLink: '/divisions/associate-companies',
    secondaryCta: 'B2B Wholesale',
    badge: 'Fair-Trade Artisans',
  },
];

export default function HeroSlider({ onOpenRfq }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div
      className="relative bg-slate-900 overflow-hidden min-h-[580px] lg:min-h-[660px] flex flex-col justify-between"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Image & Crisp Contrast Overlays */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-10000"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          {/* Overlay that ensures readability while keeping the image vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-5">
          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-200">
              {SLIDES[currentSlide].tag}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
            {SLIDES[currentSlide].title}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
            {SLIDES[currentSlide].subtitle}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              href={SLIDES[currentSlide].primaryLink}
              className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>{SLIDES[currentSlide].primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {onOpenRfq ? (
              <button
                onClick={onOpenRfq}
                className="inline-flex items-center space-x-2 bg-white/95 hover:bg-white text-slate-900 font-bold px-6 py-3.5 rounded-xl text-sm border border-slate-200 transition-all shadow-md hover:shadow-lg"
              >
                <span>{SLIDES[currentSlide].secondaryCta}</span>
              </button>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white/95 hover:bg-white text-slate-900 font-bold px-6 py-3.5 rounded-xl text-sm border border-slate-200 transition-all shadow-md hover:shadow-lg"
              >
                <span>{SLIDES[currentSlide].secondaryCta}</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls & Indicators */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex items-center justify-between w-full">
        {/* Indicators */}
        <div className="flex items-center space-x-2">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-10 bg-amber-400' : 'w-2.5 bg-slate-500 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-amber-400 transition-all backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-amber-400 transition-all backdrop-blur-sm"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Key Enterprise Metrics Ticker Bar (Crisp White Floating Bar) */}
      <div className="relative z-20 bg-white border-t border-slate-200 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="border-r last:border-r-0 border-slate-200 px-2">
              <div className="text-2xl sm:text-3xl font-black text-amber-600">{stat.value}</div>
              <div className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-600 font-bold mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
