"use client";

import React, { useState, useEffect } from "react";
import { Globe, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function GlobalTradeBar() {
  const [times, setTimes] = useState({
    delhi: "--:--:--",
    dubai: "--:--:--",
    london: "--:--:--",
    newyork: "--:--:--",
    tokyo: "--:--:--",
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const format = (tz: string) =>
        new Intl.DateTimeFormat("en-US", {
          timeZone: tz,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);

      setTimes({
        delhi: format("Asia/Kolkata"),
        dubai: format("Asia/Dubai"),
        london: format("Europe/London"),
        newyork: format("America/New_York"),
        tokyo: format("Asia/Tokyo"),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#03060d] border-b border-white/[0.06] text-xs text-slate-400 py-1.5 px-4 z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: ISO Compliance Badge */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            AN ISO 9001:2015 CERTIFIED ENTERPRISE
          </span>
          <span className="hidden md:inline-block text-slate-600">|</span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            GLOBAL EXPORT DESK: ACTIVE
          </span>
        </div>

        {/* Right: Live World Timezones */}
        <div className="flex items-center gap-4 text-[11px] font-mono overflow-x-auto no-scrollbar py-0.5">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3 h-3 text-amber-400" />
            <span className="text-slate-500 font-sans font-semibold">WORLD CLOCKS:</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-amber-400 font-semibold">DEL (IST)</span>
            <span className="text-slate-200">{times.delhi}</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-cyan-400 font-semibold">DXB (GST)</span>
            <span className="text-slate-200">{times.dubai}</span>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            <span className="text-indigo-400 font-semibold">LON (GMT)</span>
            <span className="text-slate-200">{times.london}</span>
          </div>

          <div className="hidden sm:flex items-center gap-1">
            <span className="text-rose-400 font-semibold">NYC (EST)</span>
            <span className="text-slate-200">{times.newyork}</span>
          </div>

          <div className="hidden xl:flex items-center gap-1">
            <span className="text-purple-400 font-semibold">TYO (JST)</span>
            <span className="text-slate-200">{times.tokyo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
