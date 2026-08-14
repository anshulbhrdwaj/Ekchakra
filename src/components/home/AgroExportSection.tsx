"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Wheat, 
  Sparkles, 
  Package, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileText,
  Filter,
  Eye
} from "lucide-react";
import { SUBSIDIARIES, ProductItem } from "@/data/conglomerateData";

interface AgroExportSectionProps {
  onOpenRFQ: (verticalId?: string, productId?: string) => void;
}

export default function AgroExportSection({ onOpenRFQ }: AgroExportSectionProps) {
  const agroVertical = SUBSIDIARIES.find((s) => s.id === "ekchakra-agro-fmcg");
  const products = agroVertical ? agroVertical.products : [];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProduct, setActiveProduct] = useState<ProductItem>(products[0]);

  const categories = ["All", "Agro Commodities", "Superfoods", "Whole Spices", "Spice Powders", "Spice Blends", "Industrial & Food Hydrocolloids", "Dairy & Ayurveda", "Organic Agrotech"];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="agro-export" className="py-20 lg:py-28 relative bg-[#050a14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold text-emerald-400">
            <Wheat className="w-3.5 h-3.5" />
            <span>FARM-TO-PORT INTERNATIONAL COMMODITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Premium Indian <span className="emerald-gradient-text">Agro, Spices & Superfoods</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            GI-tagged Basmati rices, handpicked Mithila fox nuts (Makhana), high-SHU red chilies, pure drumstick moringa, guar gum, and Vedic bilona ghee packed under international phytosanitary standards.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main 2-Column Interactive Agro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Selection Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredProducts.map((prod) => {
              const isSelected = activeProduct.id === prod.id;
              return (
                <div
                  key={prod.id}
                  onClick={() => setActiveProduct(prod)}
                  className={`glass-card p-4 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between ${
                    isSelected
                      ? "border-emerald-500/80 bg-emerald-950/20 shadow-xl shadow-emerald-500/10"
                      : "border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                        {prod.category}
                      </span>
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                        {prod.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {prod.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      Export Ready
                    </span>
                    <span className="group-hover:text-white flex items-center gap-0.5">
                      <span>View Specs</span>
                      <ArrowRight className="w-3 h-3 text-emerald-400" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Product Specification & Export Drawer */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/30 bg-gradient-to-b from-[#081a14] via-[#050e0b] to-[#040711] space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-slate-950">
                  {activeProduct.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  APEDA / FSSAI Tested
                </span>
              </div>

              {/* High-Res Hero Photo */}
              <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-bold text-white font-display">
                    {activeProduct.name}
                  </h3>
                  <div className="text-xs text-emerald-300 font-medium">
                    {activeProduct.subtitle}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Specs Table */}
              <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono">
                <div className="text-xs font-sans font-bold text-emerald-400 mb-2 uppercase tracking-wider">
                  Verified Lab Parameters:
                </div>
                {Object.entries(activeProduct.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-white/5 pb-1 gap-2">
                    <span className="text-slate-400">{key}:</span>
                    <span className="text-slate-200 font-semibold text-right">{val}</span>
                  </div>
                ))}
              </div>

              {/* Packaging Options */}
              {activeProduct.packagingOptions && (
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5" />
                    <span>Available Packaging Formats:</span>
                  </div>
                  <div className="text-xs text-slate-300 space-y-1">
                    {activeProduct.packagingOptions.map((pkg, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{pkg}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenRFQ("ekchakra-agro-fmcg", activeProduct.id)}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider font-display flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-emerald-500/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Export Quote & Samples</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
