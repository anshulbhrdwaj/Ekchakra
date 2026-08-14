"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users2, Award, Briefcase, Mail, Phone, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { LEADERSHIP_TEAM, TeamMember } from "@/data/conglomerateData";

interface LeadershipSectionProps {
  onOpenRFQ: () => void;
}

export default function LeadershipSection({ onOpenRFQ }: LeadershipSectionProps) {
  const [selectedLeader, setSelectedLeader] = useState<TeamMember | null>(null);

  return (
    <section id="leadership" className="py-20 lg:py-28 relative bg-[#040711] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold text-amber-400">
            <Users2 className="w-3.5 h-3.5" />
            <span>EXECUTIVE GOVERNANCE & DIRECTORS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            The Visionaries Behind <br />
            <span className="gold-gradient-text">EKCHAKRA International</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            A synergistic leadership board combining New Era technological innovation with decades of industrial, legal, financial, and supply chain execution expertise.
          </p>
        </div>

        {/* 8-Card Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((member, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden group hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Leader Photo */}
              <div className="relative w-full h-64 overflow-hidden bg-slate-900">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-transparent to-transparent" />
                
                {/* Qualification badge if any */}
                {member.qualification && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 shadow-md">
                      {member.qualification}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    {member.division}
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Bio & Focus */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Areas of Governance:
                  </span>
                  {member.focus.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedLeader(member)}
                    className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors border border-white/5"
                  >
                    <span>View Executive Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Detailed Executive Bio */}
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-white/15 relative space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-amber-400/40">
                  <Image
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {selectedLeader.division}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">
                    {selectedLeader.name}
                  </h3>
                  <div className="text-xs text-slate-300">
                    {selectedLeader.role}
                  </div>
                  {selectedLeader.qualification && (
                    <div className="text-[11px] text-emerald-400 font-medium mt-0.5">
                      {selectedLeader.qualification}
                    </div>
                  )}
                </div>
              </div>

              <div className="text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
                {selectedLeader.bio}
              </div>

              <div className="space-y-2 bg-white/[0.03] p-4 rounded-xl border border-white/5">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Strategic Responsibilities:
                </div>
                <div className="space-y-1">
                  {selectedLeader.focus.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    setSelectedLeader(null);
                    onOpenRFQ();
                  }}
                  className="btn-gold-glow px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 font-display"
                >
                  Direct Executive Inquiry
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
