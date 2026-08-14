'use client';

import React, { useState } from 'react';
import { Globe2, Ship, Clock, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { audioHaptics } from './AudioHaptics';

interface TradeRoute {
  id: string;
  destination: string;
  region: string;
  originPort: string;
  destPort: string;
  transitDays: number;
  commodities: string[];
  vesselSchedule: string;
}

const TRADE_ROUTES: TradeRoute[] = [
  {
    id: 'r1',
    destination: 'United Arab Emirates & Gulf',
    region: 'Middle East',
    originPort: 'Mundra Port / JNPT (India)',
    destPort: 'Jebel Ali / Khalifa Port (UAE)',
    transitDays: 4,
    commodities: ['1121 Basmati Rice', 'Sortex Makhana', 'Spices', 'Desi Ghee'],
    vesselSchedule: 'Direct Weekly Sailings',
  },
  {
    id: 'r2',
    destination: 'Netherlands & Western Europe',
    region: 'Europe',
    originPort: 'Nhava Sheva (JNPT)',
    destPort: 'Port of Rotterdam / Hamburg',
    transitDays: 24,
    commodities: ['TOPCon 640Wp Solar PV', 'Shilp Craft Brassware', 'Organic Spices'],
    vesselSchedule: 'Bi-Weekly Express Loop',
  },
  {
    id: 'r3',
    destination: 'United States & North America',
    region: 'North America',
    originPort: 'Mundra / Chennai',
    destPort: 'Port of Los Angeles / New York',
    transitDays: 28,
    commodities: ['Delight Apparel', 'Amazon Global Craft', 'Moringa Powder', 'Guar Gum'],
    vesselSchedule: 'Weekly Ocean Liner Service',
  },
  {
    id: 'r4',
    destination: 'Singapore & Southeast Asia',
    region: 'SE Asia',
    originPort: 'Chennai / Kolkata Port',
    destPort: 'Port of Singapore / Tanjung Pelepas',
    transitDays: 6,
    commodities: ['Basmati Rice', 'LiFePO4 Battery Banks', 'Solar Inverters'],
    vesselSchedule: 'Twice-Weekly Feeder Express',
  },
  {
    id: 'r5',
    destination: 'United Kingdom',
    region: 'UK',
    originPort: 'Nhava Sheva (JNPT)',
    destPort: 'Felixstowe / Southampton',
    transitDays: 22,
    commodities: ['Aged 1121 Basmati Rice', 'Phool Makhana', 'Handmade Artefacts'],
    vesselSchedule: 'Weekly Direct Express',
  },
];

export default function GlobalTradeRoutes() {
  const [activeRoute, setActiveRoute] = useState<TradeRoute>(TRADE_ROUTES[0]);

  return (
    <div className="p-8 lg:p-12 rounded-3xl glass-card-dark border border-amber-500/30 shadow-2xl space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[11px] font-bold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Active Global Shipping Matrix</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Direct Maritime <span className="text-gold-gradient">Export Corridors</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Real-time port-to-port ocean transit schedules, customs clearance, and container shipping lanes.
          </p>
        </div>

        <div className="px-4 py-2 rounded-2xl bg-slate-900 border border-slate-700 text-xs text-slate-300 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Active Vessel Tracking: <strong>25+ Destination Ports</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Route Selector List */}
        <div className="lg:col-span-5 space-y-2.5">
          {TRADE_ROUTES.map((route) => {
            const isSelected = activeRoute.id === route.id;
            return (
              <button
                key={route.id}
                onClick={() => {
                  setActiveRoute(route);
                  audioHaptics.playHover();
                }}
                className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400 ring-2 ring-amber-400/20 shadow-lg'
                    : 'bg-slate-950/60 border-slate-800 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>{route.destination}</span>
                    <span className="text-[9px] px-1.5 py-0.2 bg-slate-800 text-amber-300 rounded font-mono">
                      {route.region}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Ship className="w-3 h-3 text-amber-400" />
                    <span>{route.destPort}</span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs font-mono font-bold text-emerald-400 block">
                    ~{route.transitDays} Days
                  </span>
                  <span className="text-[10px] text-slate-500">Ocean Transit</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Route Detailed Inspector Card */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-black text-amber-400 uppercase tracking-wider">
              {activeRoute.region} Shipping Corridor
            </span>
            <span className="text-xs font-mono text-emerald-400 font-bold">
              {activeRoute.vesselSchedule}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Load Port (India)</span>
              <div className="text-xs font-bold text-white flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{activeRoute.originPort}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Discharge Port</span>
              <div className="text-xs font-bold text-white flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{activeRoute.destPort}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Primary Export Cargo Conveyed on this Route:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeRoute.commodities.map((comm) => (
                <span
                  key={comm}
                  className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold"
                >
                  {comm}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Container Load (FCL) & LCL Consolidation Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
