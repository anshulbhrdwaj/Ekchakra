'use client';

import React, { useState } from 'react';
import { Container, Package, ArrowRight, ShieldCheck, Layers, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { audioHaptics } from './AudioHaptics';

interface AgroExportConfiguratorProps {
  onOpenRfqWithConfig?: (configSummary: string) => void;
}

export default function AgroExportConfigurator({ onOpenRfqWithConfig }: AgroExportConfiguratorProps) {
  const [commodity, setCommodity] = useState('1121 Steam Basmati Rice');
  const [containerType, setContainerType] = useState('20ft FCL');
  const [bagSize, setBagSize] = useState('25kg Non-Woven Bags');
  const [palletized, setPalletized] = useState(true);

  // Calculations
  const getGrossWeight = () => {
    if (containerType === '20ft FCL') return palletized ? '24.0 Metric Tons' : '26.0 Metric Tons';
    if (containerType === '40ft HQ') return palletized ? '26.5 Metric Tons' : '28.0 Metric Tons';
    return '5.0 – 10.0 MT (LCL Trial)';
  };

  const getPalletCount = () => {
    if (!palletized) return 'Loose Master Stacking';
    return containerType === '20ft FCL' ? '10 Standard Wooden Pallets (ISPM-15)' : '20-21 Heavy Duty Pallets (ISPM-15)';
  };

  const handleApplyConfig = () => {
    audioHaptics.playChime(700, 0.25);
    const summary = `Export Consignment: ${commodity} | ${containerType} (${getGrossWeight()}) | Packaging: ${bagSize} | ${getPalletCount()}`;
    if (onOpenRfqWithConfig) {
      onOpenRfqWithConfig(summary);
    }
  };

  return (
    <div className="p-6 lg:p-8 rounded-3xl glass-card-dark border border-emerald-500/30 shadow-2xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold uppercase tracking-wider">
            <Container className="w-3.5 h-3.5" />
            <span>Interactive Tool</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Agro Commodity <span className="text-emerald-400">Container Load Configurator</span>
          </h3>
          <p className="text-xs text-slate-400">
            Simulate container payload, palletization, and bagging metrics for FOB / CIF consignments.
          </p>
        </div>

        <div className="px-4 py-2 rounded-2xl bg-slate-900 border border-slate-700 text-xs text-slate-300">
          Estimated Payload: <strong className="text-emerald-300 text-sm">{getGrossWeight()}</strong>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Commodity */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-300 uppercase tracking-wider">Select Commodity</label>
          <select
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-400 transition"
          >
            <option>1121 Steam Basmati Rice (Aged 2 Yrs)</option>
            <option>1121 Sella Basmati Rice (Golden)</option>
            <option>Phool Makhana (Sortex 5-6+ Suta)</option>
            <option>Guntur Stemless Red Chili Powder</option>
            <option>Organic Moringa Drumstick Powder</option>
            <option>Pure Vedic Desi Ghee (Tin Packed)</option>
            <option>Guar Gum High Viscosity Powder</option>
          </select>
        </div>

        {/* Container Type */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-300 uppercase tracking-wider">Container Format</label>
          <select
            value={containerType}
            onChange={(e) => setContainerType(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-400 transition"
          >
            <option value="20ft FCL">20ft FCL (Standard Dry Box)</option>
            <option value="40ft HQ">40ft High Cube FCL</option>
            <option value="LCL Trial">LCL (Less than Container Load)</option>
          </select>
        </div>

        {/* Bag Packaging */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-300 uppercase tracking-wider">Export Packaging</label>
          <select
            value={bagSize}
            onChange={(e) => setBagSize(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-400 transition"
          >
            <option>25kg Non-Woven Master Bags</option>
            <option>50kg Jute / PP Master Bags</option>
            <option>10kg Retail Zipper Pouch Bags</option>
            <option>5kg Premium BoPP Barrier Bags</option>
            <option>1kg Vacuum Retail Pouches (Private Label)</option>
          </select>
        </div>

        {/* Palletization */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-300 uppercase tracking-wider">Pallet Configuration</label>
          <button
            type="button"
            onClick={() => setPalletized(!palletized)}
            className={`w-full px-3 py-2 rounded-xl border text-xs font-bold transition flex items-center justify-between ${
              palletized
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                : 'bg-slate-900 border-slate-700 text-slate-400'
            }`}
          >
            <span>{palletized ? 'Palletized (ISPM-15)' : 'Loose Stuffed'}</span>
            <CheckCircle2 className={`w-4 h-4 ${palletized ? 'text-emerald-400' : 'text-slate-600'}`} />
          </button>
        </div>
      </div>

      {/* Calculated Breakdown Bar */}
      <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex flex-wrap gap-4 text-slate-300">
          <div>• Net Payload: <strong className="text-white">{getGrossWeight()}</strong></div>
          <div>• Stacking: <strong className="text-white">{getPalletCount()}</strong></div>
          <div>• Inspection: <strong className="text-emerald-400">APEDA & SGS Pre-Shipment</strong></div>
        </div>

        <button
          onClick={handleApplyConfig}
          className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>Apply Config to Official RFQ</span>
        </button>
      </div>
    </div>
  );
}
