'use client';

import React from 'react';
import { Users, Mail } from 'lucide-react';
import { LEADERSHIP_TEAM } from '@/data/companyData';

export default function TeamSection() {
  return (
    <section id="leadership-team" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Governance & Executive Board</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Leadership & Division Directors
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            A synergistic blend of modern enterprise leaders and seasoned domain experts driving sustainable multi-sector growth.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-slate-200 hover:border-amber-400 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Member Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-amber-300 shadow-md">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${member.avatar})` }}
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mt-0.5">
                    {member.role}
                  </div>
                  <div className="inline-block text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full mt-2 border border-slate-200">
                    {member.division}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 mt-4 leading-relaxed line-clamp-4">
                  {member.bio}
                </p>
              </div>

              {/* Footer & Qualification */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="truncate font-medium">{member.qualifications || 'Domain Specialist'}</span>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-amber-600 hover:text-amber-700 p-1"
                    title={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
