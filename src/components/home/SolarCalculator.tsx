"use client";

import React, { useState } from "react";
import { 
  Sun, 
  Battery, 
  Zap, 
  Leaf, 
  DollarSign, 
  TrendingUp, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  TreeDeciduous,
  Flame
} from "lucide-react";
import { formatNumber, formatCurrency } from "@/lib/utils";

interface SolarCalculatorProps {
  onOpenRFQ: (verticalId?: string) => void;
}

export default function SolarCalculator({ onOpenRFQ }: SolarCalculatorProps) {
  const [capacityKW, setCapacityKW] = useState<number>(25); // in kWp
  const [sunHours, setSunHours] = useState<number>(4.8); // peak sun hours / day
  const [tariff, setTariff] = useState<number>(0.14); // $ per kWh
  const [isBifacial, setIsBifacial] = useState<boolean>(true); // +15% rear gain

  // Calculation formulas
  const bifacialGain = isBifacial ? 1.15 : 1.0;
  const dailyGenKWh = capacityKW * sunHours * 0.82 * bifacialGain; // 82% performance ratio
  const annualGenKWh = dailyGenKWh * 365;
  const annualSavingsUSD = annualGenKWh * tariff;
  
  // 30-Year cumulative calculation with 0.4% annual degradation
  let total30YearKWh = 0;
  for (let year = 1; year <= 30; year++) {
    const degradationFactor = year === 1 ? 0.99 : 0.99 - (year - 1) * 0.004;
    total30YearKWh += annualGenKWh * degradationFactor;
  }
  const total30YearSavingsUSD = total30YearKWh * tariff;

  // Environmental Impact
  const co2AvoidedTonsPerYear = (annualGenKWh * 0.82) / 1000; // 0.82 kg CO2 per kWh grid average
  const treesEquivalent = Math.round(co2AvoidedTonsPerYear * 45); // ~45 trees per ton CO2
  const recommendedBatteryKWh = Math.round(capacityKW * 2.5); // 2.5x daily autonomy buffer

  return (
    <section id="solar-calculator" className="py-20 lg:py-28 relative overflow-hidden bg-[#040711] border-t border-white/5">
      {/* Background Solar Flare & Grid */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold text-cyan-400">
            <Sun className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>PAA SOLAR SIMULATION ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            TOPCon Solar Yield & <br />
            <span className="solar-gradient-text">30-Year ROI Calculator</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Model your clean energy generation, financial cost offset, and carbon reduction powered by PAA Solar's N-Type TOPCon bifacial modules and intelligent hybrid inverters.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Input Controls */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  System Parameters
                </span>
                <span className="text-xs text-cyan-400 font-mono font-semibold">
                  TOPCon 23.32% Model
                </span>
              </div>

              {/* Slider 1: System Capacity (kWp) */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <label className="text-slate-300 font-medium">System Capacity (kWp):</label>
                  <span className="text-cyan-400 font-bold font-mono text-sm">{capacityKW} kWp</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="250"
                  step="1"
                  value={capacityKW}
                  onChange={(e) => setCapacityKW(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>3 kWp (Residential)</span>
                  <span>50 kWp (Commercial)</span>
                  <span>250 kWp (Industrial)</span>
                </div>
              </div>

              {/* Slider 2: Daily Peak Sun Hours */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <label className="text-slate-300 font-medium">Daily Peak Sun Hours:</label>
                  <span className="text-amber-400 font-bold font-mono text-sm">{sunHours} Hours/Day</span>
                </div>
                <input
                  type="range"
                  min="3.5"
                  max="6.5"
                  step="0.1"
                  value={sunHours}
                  onChange={(e) => setSunHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>3.5h (Temperate)</span>
                  <span>4.8h (Average Tropical)</span>
                  <span>6.5h (Arid Desert)</span>
                </div>
              </div>

              {/* Slider 3: Electricity Grid Tariff ($/kWh) */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <label className="text-slate-300 font-medium">Average Grid Tariff ($/kWh):</label>
                  <span className="text-emerald-400 font-bold font-mono text-sm">${tariff.toFixed(2)} / kWh</span>
                </div>
                <input
                  type="range"
                  min="0.06"
                  max="0.40"
                  step="0.01"
                  value={tariff}
                  onChange={(e) => setTariff(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$0.06/kWh</span>
                  <span>$0.14/kWh (US Avg)</span>
                  <span>$0.40/kWh (EU Peak)</span>
                </div>
              </div>

              {/* Toggle: Dual-Glass Bifacial Generation */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Bifacial Dual-Glass Boost</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    +15% energy harvest from ground albedo reflection
                  </div>
                </div>

                <button
                  onClick={() => setIsBifacial(!isBifacial)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    isBifacial ? "bg-cyan-500" : "bg-slate-700"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      isBifacial ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 border-t border-white/10 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Calculated with 30-Year Linear N-Type TOPCon Degradation Profile</span>
            </div>
          </div>

          {/* Right Column: Live Calculated Metrics Display */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Annual Yield */}
              <div className="glass-card p-6 rounded-2xl border border-cyan-500/20 relative overflow-hidden bg-gradient-to-br from-[#081729] to-[#040711]">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>ESTIMATED ANNUAL YIELD</span>
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                  {formatNumber(Math.round(annualGenKWh))} <span className="text-sm font-semibold text-cyan-400">kWh/yr</span>
                </div>
                <div className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                  <span>Daily Generation:</span>
                  <strong className="text-slate-200">~{Math.round(dailyGenKWh)} kWh/day</strong>
                </div>
              </div>

              {/* Card 2: 30-Year Financial Savings */}
              <div className="glass-card p-6 rounded-2xl border border-emerald-500/20 relative overflow-hidden bg-gradient-to-br from-[#061e19] to-[#040711]">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>30-YEAR TOTAL SAVINGS</span>
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display">
                  {formatCurrency(total30YearSavingsUSD, "USD")}
                </div>
                <div className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                  <span>Year 1 Savings:</span>
                  <strong className="text-slate-200">{formatCurrency(annualSavingsUSD, "USD")}/yr</strong>
                </div>
              </div>

            </div>

            {/* Environmental & Storage Metrics Strip */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <div className="flex items-center justify-center gap-1 text-emerald-400 text-xs font-semibold mb-1">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>Annual CO2 Offset</span>
                </div>
                <div className="text-2xl font-bold text-white font-display">
                  {co2AvoidedTonsPerYear.toFixed(1)} <span className="text-xs font-normal text-slate-400">Metric Tons</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Clean Green Atmosphere</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02]">
                <div className="flex items-center justify-center gap-1 text-amber-400 text-xs font-semibold mb-1">
                  <TreeDeciduous className="w-3.5 h-3.5" />
                  <span>Equivalent Trees</span>
                </div>
                <div className="text-2xl font-bold text-white font-display">
                  {formatNumber(treesEquivalent)} <span className="text-xs font-normal text-slate-400">Trees</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Carbon Sequestration Eq.</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02]">
                <div className="flex items-center justify-center gap-1 text-cyan-400 text-xs font-semibold mb-1">
                  <Battery className="w-3.5 h-3.5" />
                  <span>Recommended Storage</span>
                </div>
                <div className="text-2xl font-bold text-white font-display">
                  {recommendedBatteryKWh} <span className="text-xs font-normal text-slate-400">kWh LiFePO4</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">5,000+ Cycle Bank</div>
              </div>

            </div>

            {/* Direct Proposal Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-amber-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white">
                  Ready to Deploy {capacityKW} kWp of PAA Solar TOPCon Infrastructure?
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Receive a complete turnkey engineering schematic, string layout, and containerized pricing.
                </p>
              </div>

              <button
                onClick={() => onOpenRFQ("paa-solar")}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-extrabold uppercase tracking-wider font-display flex items-center justify-center gap-2 shrink-0 transition-transform active:scale-95 shadow-lg shadow-cyan-400/20"
              >
                <span>Request Custom Solar Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
