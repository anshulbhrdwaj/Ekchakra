"use client";

import React from "react";
import Image from "next/image";
import { Compass, Quote, Award, Lightbulb, Users2, Sparkles, CheckCircle2 } from "lucide-react";
import { UNSPLASH_IMAGES } from "@/data/unsplashImages";

interface PhilosophySectionProps {
  onOpenRFQ: () => void;
}

export default function PhilosophySection({ onOpenRFQ }: PhilosophySectionProps) {
  return (
    <section id="philosophy" className="py-20 lg:py-28 relative overflow-hidden bg-[#050914] border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold text-amber-400">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            <span>THE SANSKRIT PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            The Cosmic Wheel of <br />
            <span className="gold-gradient-text">Integrated Global Solutions</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Derived from the ancient Sanskrit root <em className="text-amber-300 font-serif">"Ekachakra"</em> — where 
            <strong className="text-white"> Eka</strong> signifies the singular unity, and <strong className="text-white">Chakra</strong> embodies 
            the ceaseless wheel of perpetual motion, commerce, and cosmic balance.
          </p>
        </div>

        {/* 2-Column Philosophy & Executive Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: The Etymology & 3 Core Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <span className="font-serif text-2xl text-amber-400 font-black">एक</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Eka + Chakra = Singular Universal Wheel
                  </h3>
                  <p className="text-xs text-slate-400">
                    Comprehensive multi-sector ecosystem under a unified corporate banner
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  Most corporations isolate themselves within a single industry silo. 
                  <strong className="text-white"> EKCHAKRA International Pvt Ltd</strong> was founded on a diametrically different vision: 
                  to construct a diversified, sovereign wheel where clean energy powers industrial manufacturing, ethical agro trade nourishes global populations, and artisanal craftsmanship preserves heritage.
                </p>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" />
                      <span>New Era Innovation</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      N-Type TOPCon Photovoltaics, AI-guided battery telemetry, and automated global supply chain tracking.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider">
                      <Award className="w-4 h-4" />
                      <span>Generational Heritage</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Centuries-old agro cultivars, traditional bilona ghee, and lost-wax brass sculpting passed down generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder & Group Director's Manifesto */}
          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-amber-500/20 relative overflow-hidden h-full flex flex-col justify-between bg-gradient-to-br from-[#0c1427] via-[#070c18] to-[#040711]">
              <div className="absolute top-4 right-4 opacity-10 text-amber-400">
                <Quote className="w-24 h-24" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  <Quote className="w-3 h-3" />
                  <span>Group Director's Manifesto</span>
                </div>

                <blockquote className="text-base sm:text-lg text-slate-200 font-light italic leading-relaxed pt-2">
                  "EKCHAKRA GROUP is a conscious combination of the New Era dynamic team and the seasoned wisdom of experienced industry veterans. This synthesis delivers the precise equilibrium needed to scale our enterprise on both national and international horizons.
                  <br /><br />
                  Our focus is to deliver our branding, ethical commodities, and uncompromising supply chains to every client worldwide. I recognize that it is an ambitious journey, and I firmly believe our leadership, our cultivators, and our global clientele are fully prepared."
                </blockquote>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Open Global Innovation Call:</strong> We always welcome new ideas, revolutionary products, and joint venture services. If you possess such a concept, connect directly with our board.
                  </span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-amber-400/40">
                    <Image
                      src={UNSPLASH_IMAGES.leaderPandey}
                      alt="Mr. Pandey - Group Director"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-base">
                      Mr. Pandey
                    </div>
                    <div className="text-xs text-amber-400 font-medium">
                      Group Director & Clean Energy / Export Head
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenRFQ}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                >
                  Connect with Board
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
