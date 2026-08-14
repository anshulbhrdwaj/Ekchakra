'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sun,
  Wheat,
  Palette,
  Shirt,
  Hammer,
  Sparkles,
  ArrowRight,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { PRODUCTS_CATALOG, ProductItem } from '@/data/companyData';
import ProductCatalogModal from './ProductCatalogModal';

interface DivisionsGridProps {
  onOpenRfqWithProduct: (productName: string) => void;
}

type CategoryFilter = 'all' | 'solar' | 'fmcg' | 'craft' | 'apparel' | 'metal';

export default function DivisionsGrid({ onOpenRfqWithProduct }: DivisionsGridProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts =
    activeFilter === 'all'
      ? PRODUCTS_CATALOG
      : PRODUCTS_CATALOG.filter((p) => p.category === activeFilter);

  return (
    <section id="divisions" className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Export Verticals & Product Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Diversified Multi-Sector Product Portfolios
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            From Tier-1 TOPCon Solar Technology and high-grade agricultural commodities to authentic handcrafted art and fashion apparel.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs Bar (WordPress Theme Style) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            All Verticals ({PRODUCTS_CATALOG.length})
          </button>
          <button
            onClick={() => setActiveFilter('solar')}
            className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'solar'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-amber-600" />
            <span>Solar & Power</span>
          </button>
          <button
            onClick={() => setActiveFilter('fmcg')}
            className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'fmcg'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Wheat className="w-3.5 h-3.5 text-emerald-600" />
            <span>FMCG, Rice & Spices</span>
          </button>
          <button
            onClick={() => setActiveFilter('craft')}
            className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'craft'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5 text-sky-600" />
            <span>Shilp Craft</span>
          </button>
          <button
            onClick={() => setActiveFilter('apparel')}
            className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'apparel'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Shirt className="w-3.5 h-3.5 text-pink-600" />
            <span>Delight Apparel</span>
          </button>
          <button
            onClick={() => setActiveFilter('metal')}
            className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'metal'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Hammer className="w-3.5 h-3.5 text-purple-600" />
            <span>BK Galvanized Metals</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200 hover:border-amber-400 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Product Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-amber-800 border border-amber-300 shadow-sm backdrop-blur-md">
                    {product.category.toUpperCase()}
                  </span>
                  {product.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-sm backdrop-blur-md">
                      {product.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Quick Feature Snippet */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {product.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start text-[11px] text-slate-700 space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-700 hover:text-amber-600 py-1.5 px-3 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Specs</span>
                  </button>

                  <button
                    onClick={() => onOpenRfqWithProduct(product.name)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 py-1.5 px-3.5 rounded-xl transition-all shadow-sm"
                  >
                    <span>Request RFQ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Division Quick Link Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/divisions/solar"
            className="p-6 rounded-3xl bg-white border border-amber-200 hover:border-amber-400 transition-all group shadow-sm hover:shadow-md"
          >
            <div className="p-3 rounded-2xl bg-amber-100 text-amber-700 w-fit mb-3 group-hover:scale-110 transition-transform">
              <Sun className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-700">
              Dedicated Solar Division Portal →
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Deep dive into TOPCon cell physics, hybrid inverter schematics, and LiFePO4 chemistry.
            </p>
          </Link>

          <Link
            href="/divisions/fmcg-agro"
            className="p-6 rounded-3xl bg-white border border-emerald-200 hover:border-emerald-400 transition-all group shadow-sm hover:shadow-md"
          >
            <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700 w-fit mb-3 group-hover:scale-110 transition-transform">
              <Wheat className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700">
              Dedicated FMCG & Agro Portal →
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Explore Basmati rice grain grading, Makhana varieties, spice milling, and organic fertilizer.
            </p>
          </Link>

          <Link
            href="/divisions/associate-companies"
            className="p-6 rounded-3xl bg-white border border-sky-200 hover:border-sky-400 transition-all group shadow-sm hover:shadow-md"
          >
            <div className="p-3 rounded-2xl bg-sky-100 text-sky-700 w-fit mb-3 group-hover:scale-110 transition-transform">
              <Palette className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-700">
              Associate Companies Ecosystem →
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Learn more about Shilp Craft, Delight Apparel, RJ Travel Junction, AAP KA HAQ & BK Metal.
            </p>
          </Link>
        </div>
      </div>

      {/* Product Deep-Dive Modal */}
      <ProductCatalogModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenRfqWithProduct={onOpenRfqWithProduct}
      />
    </section>
  );
}
