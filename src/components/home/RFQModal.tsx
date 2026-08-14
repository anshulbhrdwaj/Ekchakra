"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  FileText, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Package, 
  Globe, 
  MessageSquare, 
  Phone, 
  Mail, 
  Building2, 
  Sparkles,
  Download
} from "lucide-react";
import { SUBSIDIARIES } from "@/data/conglomerateData";

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVerticalId?: string;
  defaultProductId?: string;
}

export default function RFQModal({
  isOpen,
  onClose,
  defaultVerticalId,
  defaultProductId,
}: RFQModalProps) {
  const [step, setStep] = useState<number>(1);
  const [verticalId, setVerticalId] = useState<string>(defaultVerticalId || "ekchakra-agro-fmcg");
  const [productId, setProductId] = useState<string>(defaultProductId || "");
  const [quantity, setQuantity] = useState<string>("1x20ft FCL (Full Container Load)");
  const [incoterm, setIncoterm] = useState<string>("CIF");
  const [destinationPort, setDestinationPort] = useState<string>("Jebel Ali Port, UAE");
  const [packagingReq, setPackagingReq] = useState<string>("Standard Export Non-Woven Bags");
  
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [referenceNumber, setReferenceNumber] = useState<string>("");

  useEffect(() => {
    if (defaultVerticalId) {
      setVerticalId(defaultVerticalId);
    }
    if (defaultProductId) {
      setProductId(defaultProductId);
    }
  }, [defaultVerticalId, defaultProductId]);

  if (!isOpen) return null;

  const currentVertical = SUBSIDIARIES.find((s) => s.id === verticalId) || SUBSIDIARIES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `EK-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceNumber(ref);
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello EKCHAKRA International,\n\nI am requesting an international quotation:\n- Reference: ${referenceNumber}\n- Vertical: ${currentVertical.name}\n- Product/Line: ${productId || "General Inquiry"}\n- Volume/Requirement: ${quantity}\n- Incoterms: ${incoterm}\n- Destination Port: ${destinationPort}\n- Company: ${company}\n- Contact: ${fullName} (${email} / ${phone})\n- Notes: ${notes}`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      <div className="glass-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-amber-500/30 relative my-8 shadow-2xl bg-gradient-to-b from-[#0c1424] via-[#070c18] to-[#040711]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Global Trade & Export Desk
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Request International Quotation (RFQ)
              </h3>
              <p className="text-xs text-slate-300">
                Direct export pricing, container schedules, laboratory specs, and proforma invoice issuance.
              </p>
            </div>

            {/* Step Progress Indicators */}
            <div className="flex items-center justify-between mb-8 text-xs font-semibold">
              <div className={`flex items-center gap-2 ${step >= 1 ? "text-amber-400" : "text-slate-500"}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-400"}`}>
                  1
                </span>
                <span>Vertical & Item</span>
              </div>
              <div className="w-12 h-0.5 bg-white/10" />
              <div className={`flex items-center gap-2 ${step >= 2 ? "text-amber-400" : "text-slate-500"}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-400"}`}>
                  2
                </span>
                <span>Logistics Specs</span>
              </div>
              <div className="w-12 h-0.5 bg-white/10" />
              <div className={`flex items-center gap-2 ${step >= 3 ? "text-amber-400" : "text-slate-500"}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 3 ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-400"}`}>
                  3
                </span>
                <span>Corporate Contact</span>
              </div>
            </div>

            {/* Form Steps */}
            <form onSubmit={handleSubmit}>
              
              {/* STEP 1: Select Vertical and Product */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                      Select Target Subsidiary / Sector:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SUBSIDIARIES.map((sub) => (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => {
                            setVerticalId(sub.id);
                            setProductId(sub.products[0]?.name || "");
                          }}
                          className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                            verticalId === sub.id
                              ? "bg-amber-500/20 border-amber-400 text-white"
                              : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-white"
                          }`}
                        >
                          <div className="text-white font-bold">{sub.name}</div>
                          <div className="text-[10px] text-slate-400">{sub.category}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                      Specific Product / Commodity Line:
                    </label>
                    <select
                      value={productId}
                      onChange={(e) => setProductId(e.target.value)}
                      className="w-full bg-[#070c18] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="">-- General Division Inquiry --</option>
                      {currentVertical.products.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-gold-glow px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 font-display flex items-center gap-2"
                    >
                      <span>Proceed to Logistics</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Logistics & Quantity */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                        Required Volume / Load:
                      </label>
                      <input
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="e.g. 2x40ft FCL, 50 MT, 100 kWp"
                        className="w-full bg-[#070c18] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                        Incoterms Preference:
                      </label>
                      <select
                        value={incoterm}
                        onChange={(e) => setIncoterm(e.target.value)}
                        className="w-full bg-[#070c18] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="FOB">FOB (Free on Board - Indian Port)</option>
                        <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                        <option value="CFR">CFR (Cost & Freight)</option>
                        <option value="EXW">EXW (Ex-Works Factory)</option>
                        <option value="DDP">DDP (Delivered Duty Paid)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                        Destination Discharge Port / City:
                      </label>
                      <input
                        type="text"
                        value={destinationPort}
                        onChange={(e) => setDestinationPort(e.target.value)}
                        placeholder="e.g. Port of Rotterdam, Hamburg, Jebel Ali"
                        className="w-full bg-[#070c18] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                        Packaging / Bagging Specs:
                      </label>
                      <input
                        type="text"
                        value={packagingReq}
                        onChange={(e) => setPackagingReq(e.target.value)}
                        placeholder="e.g. 25kg BOPP Bags, Palletized Crates"
                        className="w-full bg-[#070c18] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="btn-gold-glow px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 font-display flex items-center gap-2"
                    >
                      <span>Proceed to Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Corporate Contact Details */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                        Authorized Representative Name:
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Tariq Al-Mansoor"
                        className="w-full bg-[#070c18] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                        Company / Corporation:
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Gulf Oasis Food Distribution LLC"
                        className="w-full bg-[#070c18] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                        Corporate Email Address:
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tariq@gulfoasis.com"
                        className="w-full bg-[#070c18] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                        Phone Number with Country Code:
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-[#070c18] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Technical Specifications & Additional Notes:
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Specify customized moisture levels, grain elongation, solar string length, or private-label branding instructions..."
                      className="w-full bg-[#070c18] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="btn-gold-glow px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 font-display flex items-center gap-2 shadow-xl shadow-amber-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Dispatch RFQ to Export Desk</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="py-6 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
                RFQ REF ID: {referenceNumber}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Request Dispatched to EKCHAKRA Export Desk
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong> ({company}). Our international trade team has received your proforma quote request for <strong>{quantity}</strong> of <strong>{productId || currentVertical.name}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 max-w-md mx-auto text-left space-y-1.5 text-xs text-slate-300 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Target Port:</span>
                <span className="text-white font-semibold">{destinationPort}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Incoterms:</span>
                <span className="text-amber-400 font-semibold">{incoterm}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Assigned Division:</span>
                <span className="text-emerald-400 font-semibold">{currentVertical.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Response ETA:</span>
                <span className="text-cyan-400 font-semibold">Under 4 Hours</span>
              </div>
            </div>

            {/* Direct Connect Options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold uppercase tracking-wider font-display flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Priority Chat</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Done / Close
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
