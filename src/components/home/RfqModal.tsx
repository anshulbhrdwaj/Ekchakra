'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/companyData';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function RfqModal({ isOpen, onClose, initialProduct }: RfqModalProps) {
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || 'TOPCon N-Type Solar PV Modules (500Wp – 640Wp+)');
  const [volume, setVolume] = useState('1x 40ft HQ Container (FCL)');
  const [incoterm, setIncoterm] = useState('CIF (Cost, Insurance & Freight)');
  const [destinationPort, setDestinationPort] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl text-slate-900 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close RFQ Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 mx-auto flex items-center justify-center animate-bounce shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Quotation Request Received!</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-amber-700">{name || 'Client'}</strong>. Our International Trade & Export Desk has received your RFQ for{' '}
              <strong className="text-emerald-700">{selectedProduct}</strong>.
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1.5 shadow-sm">
              <div>• Destination Port: <strong className="text-slate-900">{destinationPort || 'Standard CIF'}</strong></div>
              <div>• Consignment Volume: <strong className="text-slate-900">{volume}</strong></div>
              <div>• Delivery Term: <strong className="text-slate-900">{incoterm}</strong></div>
              <div>• Turnaround: <strong className="text-amber-700">Formal Proforma & FOB/CIF quote within 6 hours</strong></div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Done / Close Window
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-amber-700 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Global Export Procurement</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">Request For Quotation (RFQ)</h3>
              <p className="text-xs text-slate-500 mt-1">
                Get an official manufacturer proforma quotation, HS Code breakdown, and freight schedule.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Product Selection */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">
                  Select Product / Division *
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  required
                >
                  {PRODUCTS_CATALOG.map((p) => (
                    <option key={p.id} value={p.name}>
                      [{p.category.toUpperCase()}] {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Volume & Incoterm */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">
                    Estimated Shipment Volume *
                  </label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  >
                    <option>Trial Order / Sample Consignment (LCL)</option>
                    <option>1x 20ft Full Container Load (FCL)</option>
                    <option>1x 40ft HQ Container (FCL)</option>
                    <option>Multi-Container Monthly Contract</option>
                    <option>Bulk Project Order (100+ Tons / 5MW+)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">
                    Preferred Incoterm *
                  </label>
                  <select
                    value={incoterm}
                    onChange={(e) => setIncoterm(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  >
                    <option>CIF (Cost, Insurance & Freight)</option>
                    <option>FOB (Free on Board - Mundra/Nhava Sheva/Kolkata)</option>
                    <option>CFR (Cost and Freight)</option>
                    <option>DDP (Delivered Duty Paid)</option>
                    <option>EXW (Ex-Works Factory)</option>
                  </select>
                </div>
              </div>

              {/* Destination Port & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">
                    Destination Country & Port *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Jebel Ali, Rotterdam, Los Angeles, Singapore"
                    value={destinationPort}
                    onChange={(e) => setDestinationPort(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white placeholder-slate-400"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Global Solar EPC LLC / EuroTrade Ltd"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white placeholder-slate-400"
                    required
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Contact Person *</label>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white placeholder-slate-400"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Corporate Email *</label>
                  <input
                    type="email"
                    placeholder="procurement@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white placeholder-slate-400"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white placeholder-slate-400"
                    required
                  />
                </div>
              </div>

              {/* Additional Requirements */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">
                  Technical Specifications / Custom Packaging Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify grain length for rice, Watt-peak for solar, mesh size for spices, or private labeling notes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white placeholder-slate-400 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
                <div className="text-[11px] text-slate-500">
                  🔒 ISO 9001:2015 Data Confidentiality Assured
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Official RFQ</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
