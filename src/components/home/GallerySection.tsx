'use client';

import React, { useState } from 'react';
import { Image as ImageIcon, Video, Play } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/companyData';

export default function GallerySection() {
  const [filter, setFilter] = useState<'all' | 'poster' | 'video'>('all');
  const [activeMedia, setActiveMedia] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filteredItems =
    filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.type === filter);

  return (
    <section id="gallery" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-800 text-xs font-bold uppercase tracking-widest mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Media Showcase & Visual Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gallery: Posters & Video Media
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Glimpse our state-of-the-art solar installations, high-speed sorting facilities, artisanal craft workshops, and corporate documentaries.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center space-x-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            All Media ({GALLERY_ITEMS.length})
          </button>
          <button
            onClick={() => setFilter('poster')}
            className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'poster'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Posters & High-Res Photos</span>
          </button>
          <button
            onClick={() => setFilter('video')}
            className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'video'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Video Documentaries</span>
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveMedia(item)}
              className="bg-white border border-slate-200 hover:border-amber-400 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl group cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge for Type */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 border border-slate-200 shadow-sm backdrop-blur-md flex items-center space-x-1">
                    {item.type === 'video' ? (
                      <>
                        <Play className="w-3 h-3 text-rose-600 fill-rose-600" />
                        <span>Video</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon className="w-3 h-3 text-sky-600" />
                        <span>Poster</span>
                      </>
                    )}
                  </span>
                </div>

                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">
                  {item.category}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mt-1 group-hover:text-amber-700 transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm"
          onClick={() => setActiveMedia(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl p-6 text-slate-900 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase">
                  {activeMedia.category} • {activeMedia.type.toUpperCase()}
                </span>
                <h3 className="text-xl font-bold text-slate-900">{activeMedia.title}</h3>
              </div>
              <button
                onClick={() => setActiveMedia(null)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 font-semibold text-xs transition-colors"
              >
                Close
              </button>
            </div>

            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${activeMedia.imageUrl})` }}
              />
              {activeMedia.type === 'video' && (
                <div className="absolute inset-0 bg-slate-950/60 flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center mb-3 text-slate-950 shadow-xl">
                    <Play className="w-7 h-7 fill-slate-950 ml-1" />
                  </div>
                  <div className="text-sm font-bold">Ekchakra Corporate Video Stream</div>
                  <div className="text-xs text-slate-300 mt-1">High-Definition 4K Quality Stream Available</div>
                </div>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeMedia.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
