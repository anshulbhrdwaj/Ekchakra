'use client';

import React from 'react';
import {
  X,
  CheckCircle2,
  Package,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { ProductItem } from '@/data/companyData';

interface ProductCatalogModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenRfqWithProduct: (productName: string) => void;
}

export default function ProductCatalogModal({
  product,
  onClose,
  onOpenRfqWithProduct,
}: ProductCatalogModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl shadow-2xl text-slate-900 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Category Badge & Product Name */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">
              {product.category.toUpperCase()} DIVISION
            </span>
            {product.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                {product.badge}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">{product.name}</h3>
        </div>

        {/* Product Image & Description */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 h-56 md:h-full min-h-[220px] rounded-2xl overflow-hidden relative border border-slate-200 shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${product.imageUrl})` }}
            />
          </div>

          <div className="md:col-span-7 space-y-3">
            <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wider">Product Overview</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.fullDesc}
            </p>
          </div>
        </div>

        {/* Key Features List */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wider flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            <span>Key Export Specifications & Benefits</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {product.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specification Table (if available) */}
        {product.specs && (
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-sky-700 uppercase tracking-wider flex items-center">
              <Layers className="w-3.5 h-3.5 mr-1.5" />
              <span>Technical Data Sheet</span>
            </h4>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50">
              <table className="w-full text-left text-xs">
                <tbody>
                  {Object.entries(product.specs).map(([key, val], idx) => (
                    <tr
                      key={key}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                    >
                      <td className="py-2.5 px-4 font-semibold text-slate-700 border-b border-slate-200 w-1/3">
                        {key}
                      </td>
                      <td className="py-2.5 px-4 text-slate-900 border-b border-slate-200 font-mono font-bold">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Packaging & Applications */}
        {(product.packaging || product.applications) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {product.packaging && (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-amber-800 flex items-center">
                  <Package className="w-3.5 h-3.5 mr-1.5" />
                  <span>Export Packaging Standards</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                  {product.packaging.map((pack, i) => (
                    <li key={i}>{pack}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications && (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-emerald-800 flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                  <span>Deployment Applications</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                  {product.applications.map((app, i) => (
                    <li key={i}>{app}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Modal Action CTA */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
          <div className="text-xs text-slate-500">
            Export House Reference: <span className="font-mono font-bold text-amber-700">EKC-EXP-{product.id.toUpperCase()}</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenRfqWithProduct(product.name);
            }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-transform hover:scale-105 active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Request Quotation (RFQ)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
