'use client';

import React, { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RfqModal from '@/components/home/RfqModal';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO, ASSOCIATE_COMPANIES } from '@/data/companyData';

export default function ContactPage() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    division: 'Solar Energy & PAA Solar',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-white">
      <TopBar onOpenRfq={() => setIsRfqOpen(true)} />
      <Navbar onOpenRfq={() => setIsRfqOpen(true)} />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold uppercase tracking-widest mb-4">
              <MessageSquare className="w-3.5 h-3.5 text-sky-700" />
              <span>GLOBAL DESK & EXPORT TRADE INQUIRIES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              Connect with EKCHAKRA International
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mt-4 font-normal leading-relaxed">
              Reach our international export desk, divisional directors, or request a custom CIF/FOB proforma quotation for global consignments.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: HQ Details & Divisional Desks */}
              <div className="lg:col-span-5 space-y-8">
                {/* Global HQ Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center">
                    <Building2 className="w-5 h-5 text-amber-700 mr-2" />
                    <span>Global Corporate Headquarters</span>
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900">Registered Corporate Office:</strong>
                        <p className="text-slate-600 mt-0.5">{COMPANY_INFO.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900">Central Export Desk:</strong>
                        <p className="text-slate-600 mt-0.5">
                          <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-700 font-semibold">
                            {COMPANY_INFO.email}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-sky-700 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900">International Hotlines:</strong>
                        <p className="text-slate-600 mt-0.5 font-mono font-semibold">
                          {COMPANY_INFO.phone} / {COMPANY_INFO.hotline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-pink-700 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900">Operating Hours:</strong>
                        <p className="text-slate-600 mt-0.5">
                          Monday – Saturday: 09:00 AM – 07:00 PM IST (GMT+5:30)
                          <br />
                          24/7 Priority Desk for Container Logistics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Division Desks List */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm">
                  <h4 className="text-sm font-bold text-amber-800 uppercase tracking-wider">
                    Direct Divisional Desks:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {ASSOCIATE_COMPANIES.map((comp) => (
                      <div key={comp.id} className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <div className="font-bold text-slate-900 truncate">{comp.name.split('/')[0]}</div>
                        <div className="text-[11px] text-amber-700 font-semibold mt-0.5">Lead: {comp.director}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Inquiry Form */}
              <div className="lg:col-span-7">
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Send an Official Trade Inquiry</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Our commercial export executives will review your requirement and reply within 4 business hours.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 mx-auto flex items-center justify-center animate-bounce shadow-sm">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Inquiry Dispatched Successfully!</h4>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-amber-700">{formData.name}</strong>. Your message regarding{' '}
                        <strong className="text-emerald-700">{formData.division}</strong> has been assigned to our export desk.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            company: '',
                            division: 'Solar Energy & PAA Solar',
                            message: '',
                          });
                        }}
                        className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1.5">Corporate Email *</label>
                          <input
                            type="email"
                            required
                            placeholder="buyer@enterprise.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1.5">Phone / WhatsApp *</label>
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 019-2834"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1.5">Company / Enterprise *</label>
                          <input
                            type="text"
                            required
                            placeholder="Global Energy Trading Ltd"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Target Division *</label>
                        <select
                          value={formData.division}
                          onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500"
                        >
                          <option>Solar Energy & PAA Solar (TOPCon, Inverters, Battery)</option>
                          <option>FMCG & Agro (Basmati Rice, Makhana, Spices, Ghee)</option>
                          <option>Shilp Craft (Artisanal Brass & Wood Handicrafts)</option>
                          <option>RJ Travel Junction (Corporate MICE & Tours)</option>
                          <option>Delight Apparel (Garments & Fashion Export)</option>
                          <option>AAP KA HAQ (Legal Advisory & Compliance)</option>
                          <option>B K Metal (Hot-Dip Galvanized Structures)</option>
                          <option>Corporate Partnership & Vendor Collaboration</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Inquiry Details *</label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Please provide details regarding your requirements, container quantities, target delivery timeline, and destination port..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 resize-none"
                        />
                      </div>

                      <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center space-x-1.5 text-[11px] text-slate-500">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>ISO 9001:2015 Encrypted Transmission</span>
                        </div>
                        <button
                          type="submit"
                          className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-transform hover:scale-105 active:scale-95"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Trade Inquiry</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <RfqModal isOpen={isRfqOpen} onClose={() => setIsRfqOpen(false)} />
    </div>
  );
}
