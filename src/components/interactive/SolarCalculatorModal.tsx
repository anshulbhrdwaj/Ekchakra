'use client';

import React, { useState } from 'react';
import {
  X,
  Calculator,
  Sun,
  Battery,
  Zap,
  TrendingDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { audioHaptics } from './AudioHaptics';

interface SolarCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfqWithData?: (summary: string) => void;
}

export default function SolarCalculatorModal({
  isOpen,
  onClose,
  onOpenRfqWithData,
}: SolarCalculatorModalProps) {
  const [monthlyBill, setMonthlyBill] = useState(500); // USD
  const [systemType, setSystemType] = useState<'grid-tie' | 'hybrid' | 'off-grid'>('hybrid');
  const [batteryBackupHours, setBatteryBackupHours] = useState(6);

  if (!isOpen) return null;

  // Estimation formulas
  const estimatedKw = Math.max(3, Math.round((monthlyBill / 35) * 10) / 10);
  const panelCount = Math.ceil((estimatedKw * 1000) / 640);
  const annualGenerationKwh = Math.round(estimatedKw * 1500);
  const estimatedAnnualSavings = Math.round(monthlyBill * 12 * 0.85);
  const batteryKwh = systemType !== 'grid-tie' ? Math.round(estimatedKw * 0.6 * batteryBackupHours) : 0;
  const paybackYears = Math.round((estimatedKw * 950) / estimatedAnnualSavings * 10) / 10;

  const handleTransferToRfq = () => {
    audioHaptics.playChime(750, 0.25);
    const summary = `Solar System Sizing: ${estimatedKw} kWp (${panelCount}x TOPCon 640Wp Modules) | Inverter: ${systemType.toUpperCase()} | Battery Storage: ${batteryKwh} kWh LiFePO4 | Estimated Annual Gen: ${annualGenerationKwh.toLocaleString()} kWh`;
    onClose();
    if (onOpenRfqWithData) {
      onOpenRfqWithData(summary);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">
                  Solar & Storage ROI Simulator
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  TOPCON 640WP
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Size your solar array, inverters, and LiFePO4 batteries in real time.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              audioHaptics.playHover();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 lg:p-8 space-y-6">
          {/* Monthly Electricity Cost Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-300 uppercase tracking-wider">
                Average Monthly Electricity Expenditure (USD)
              </span>
              <span className="text-amber-400 font-mono font-black text-base">
                ${monthlyBill.toLocaleString()} / mo
              </span>
            </div>
            <input
              type="range"
              min={100}
              max={5000}
              step={50}
              value={monthlyBill}
              onChange={(e) => {
                setMonthlyBill(Number(e.target.value));
                audioHaptics.playHover();
              }}
              className="w-full accent-amber-500 cursor-pointer h-2 rounded-lg bg-slate-800"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>$100 (Residential)</span>
              <span>$1,500 (Commercial)</span>
              <span>$5,000+ (Industrial)</span>
            </div>
          </div>

          {/* System Architecture Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Inverter & System Architecture
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => {
                  setSystemType('grid-tie');
                  audioHaptics.playHover();
                }}
                className={`p-3 rounded-2xl border text-xs font-bold transition flex flex-col items-center gap-1.5 ${
                  systemType === 'grid-tie'
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>On-Grid (Net Meter)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSystemType('hybrid');
                  audioHaptics.playHover();
                }}
                className={`p-3 rounded-2xl border text-xs font-bold transition flex flex-col items-center gap-1.5 ${
                  systemType === 'hybrid'
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <Battery className="w-4 h-4" />
                <span>Hybrid (UPS & Battery)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSystemType('off-grid');
                  audioHaptics.playHover();
                }}
                className={`p-3 rounded-2xl border text-xs font-bold transition flex flex-col items-center gap-1.5 ${
                  systemType === 'off-grid'
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span>Off-Grid Microgrid</span>
              </button>
            </div>
          </div>

          {/* Backup Battery Hours (if hybrid or off-grid) */}
          {systemType !== 'grid-tie' && (
            <div className="space-y-1.5 animate-in fade-in duration-200">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-300 uppercase tracking-wider">
                  Desired LiFePO4 Energy Backup Duration
                </span>
                <span className="text-amber-400 font-mono font-bold">
                  {batteryBackupHours} Hours
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={24}
                step={2}
                value={batteryBackupHours}
                onChange={(e) => setBatteryBackupHours(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 rounded-lg bg-slate-800"
              />
            </div>
          )}

          {/* Sizing Results Output Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Recommended Size</div>
              <div className="text-lg font-black text-amber-300 font-mono">{estimatedKw} kWp</div>
              <div className="text-[10px] text-slate-500">~{panelCount} TOPCon Panels</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Annual Generation</div>
              <div className="text-lg font-black text-emerald-400 font-mono">
                {annualGenerationKwh.toLocaleString()}
              </div>
              <div className="text-[10px] text-slate-500">kWh Clean Power/Yr</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">LiFePO4 Storage</div>
              <div className="text-lg font-black text-cyan-400 font-mono">
                {batteryKwh > 0 ? `${batteryKwh} kWh` : 'N/A'}
              </div>
              <div className="text-[10px] text-slate-500">5000+ Deep Cycles</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Estimated Payback</div>
              <div className="text-lg font-black text-white font-mono">{paybackYears} Yrs</div>
              <div className="text-[10px] text-slate-500">30-Yr Warranty</div>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>IEC 61215 / IEC 61730 Certified Hardware</span>
            </div>

            <button
              onClick={handleTransferToRfq}
              className="px-6 py-2.5 rounded-xl bg-gold-gradient text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              <span>Transfer Sizing to Official RFQ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
