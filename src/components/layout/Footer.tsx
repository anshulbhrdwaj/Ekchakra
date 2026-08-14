"use client";

import React, { useState } from "react";
import { 
  Compass, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  ArrowRight, 
  Globe, 
  Send,
  FileText,
  CheckCircle2
} from "lucide-react";
import { SUBSIDIARIES, CERTIFICATIONS } from "@/data/conglomerateData";

interface FooterProps {
  onOpenRFQ: (verticalId?: string) => void;
}

export default function Footer({ onOpenRFQ }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#02050b] text-slate-400 text-xs border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Conglomerate Identity & Newsletter Banner */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#070e1c] via-[#040813] to-[#02050b]">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Quarterly Global Commodity & Solar Bulletin
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Stay Informed on Export Tariffs, Harvests & Clean Tech
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Subscribe to receive authenticated market analyses for Basmati rice crop yields, spices FOB price updates, and TOPCon solar module efficiency roadmaps.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter corporate email..."
                  className="w-full sm:w-72 bg-[#080f20] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto btn-gold-glow px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 font-display flex items-center justify-center gap-2 shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you! You are subscribed to our export trade bulletins.</span>
              </div>
            )}
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-6">
          
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display font-extrabold text-lg text-white tracking-wider block">
                  EKCHAKRA
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                  International Pvt Ltd
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              <em className="text-amber-300 font-serif">"Ekachakra"</em> signifies the singular universal wheel uniting clean energy, agro-commodities, global tourism, artisanal crafts, textiles, legal counsel, and heavy metal engineering into an integrated global standard of excellence.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                AN ISO 9001:2015 CERTIFIED ENTERPRISE
              </span>
            </div>
          </div>

          {/* Col 2: Conglomerate Subsidiaries (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              7 Strategic Subsidiaries
            </h4>
            <ul className="space-y-2">
              {SUBSIDIARIES.map((sub) => (
                <li key={sub.id}>
                  <a
                    href={`#${sub.id}`}
                    className="hover:text-amber-400 transition-colors flex items-center justify-between text-xs text-slate-300 group"
                  >
                    <span>{sub.brandTitle}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Statutory & Certifications (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Accreditations
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>ISO 9001:2015</li>
              <li>IEC (DGFT India)</li>
              <li>FIEO Registered</li>
              <li>MSME UDYAM</li>
              <li>APEDA Certified</li>
              <li>FSSAI Food License</li>
              <li>CIN Incorporated</li>
              <li>GST Compliant</li>
            </ul>
          </div>

          {/* Col 4: Corporate Office & Direct Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Global Headquarters & Desk
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  EKCHAKRA International Pvt Ltd,<br />
                  Corporate Tower, New Delhi / NCR, India
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:export@ekchakra.com" className="hover:text-amber-400">
                  export@ekchakra.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 (0) 11-EKCHAKRA / +91 99999 99999</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenRFQ()}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center justify-center gap-2 transition-colors border border-white/10"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Request Export Proforma</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Strip */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} EKCHAKRA International Pvt Ltd. All rights reserved. AN ISO 9001:2015 Certified Enterprise.
          </div>

          <div className="flex items-center gap-6">
            <a href="#philosophy" className="hover:text-slate-300 transition-colors">
              Philosophy & Origin
            </a>
            <a href="#certifications" className="hover:text-slate-300 transition-colors">
              Compliance
            </a>
            <a href="#solar-calculator" className="hover:text-slate-300 transition-colors">
              Solar Model
            </a>
            <a href="#agro-export" className="hover:text-slate-300 transition-colors">
              Agro Export
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
