"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Film, Image as ImageIcon, Play, X, Sparkles, ZoomIn, Download } from "lucide-react";
import { UNSPLASH_IMAGES } from "@/data/unsplashImages";

interface MediaGalleryProps {
  onOpenRFQ: () => void;
}

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  type: string;
  image: string;
  desc: string;
}

export default function MediaGallery({ onOpenRFQ }: MediaGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const galleryItems = [
    {
      id: "med-1",
      title: "PAA Solar Utility TOPCon Array",
      category: "Solar Energy",
      type: "Photo",
      image: UNSPLASH_IMAGES.solarFarmBifacial,
      desc: "High-efficiency N-Type TOPCon bifacial modules capturing direct sunlight and ground albedo in high-capacity utility installation.",
    },
    {
      id: "med-2",
      title: "1121 XXL Basmati Golden Harvest",
      category: "Agro Commodities",
      type: "Poster",
      image: UNSPLASH_IMAGES.basmatiRicePaddy,
      desc: "Pristine paddy fields in Punjab delivering world-class extra-long aged aromatic Basmati rice.",
    },
    {
      id: "med-3",
      title: "Master Lost-Wax Brass Casting",
      category: "Shilp Craft",
      type: "Photo",
      image: UNSPLASH_IMAGES.indianHandicraftBrass,
      desc: "Traditional Indian artisan hand-carving intricate brass deity sculptures for global art collectors.",
    },
    {
      id: "med-4",
      title: "Himalayan Luxury Tourism & MICE",
      category: "Tourism",
      type: "Photo",
      image: UNSPLASH_IMAGES.luxuryTravelHimalayas,
      desc: "Curated experiential travel and corporate summit destinations organized by RJ Travel Junction.",
    },
    {
      id: "med-5",
      title: "Guntur & Kashmiri Chili Processing",
      category: "Agro Commodities",
      type: "Poster",
      image: UNSPLASH_IMAGES.redChiliPowder,
      desc: "Vibrant sun-dried red chilies sortex-cleaned and milled for high ASTA color and rich capsaicin.",
    },
    {
      id: "med-6",
      title: "Galvanized Steel Solar Mounting Structures",
      category: "BK Metal",
      type: "Photo",
      image: UNSPLASH_IMAGES.galvanizedSteelFabrication,
      desc: "High-tensile hot-dip galvanized C & Z steel purlins engineered for 180 km/h wind loads.",
    },
    {
      id: "med-7",
      title: "GOTS Certified Organic Cotton Textiles",
      category: "Delight Apparel",
      type: "Photo",
      image: UNSPLASH_IMAGES.fashionTextilesWeaving,
      desc: "Sustainable organic spinning and garment manufacturing delivering bespoke fashion globally.",
    },
    {
      id: "med-8",
      title: "Smart Hybrid Inverters & LiFePO4 Banks",
      category: "Solar Energy",
      type: "Photo",
      image: UNSPLASH_IMAGES.batteryStorageLiFePO4,
      desc: "Clean-tech energy storage racks delivering 5,000+ deep cycles and uninterruptible power.",
    },
  ];

  const filters = ["All", "Solar Energy", "Agro Commodities", "Shilp Craft", "Tourism", "Delight Apparel", "BK Metal"];

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((i) => i.category === activeFilter);

  return (
    <section id="media-gallery" className="py-20 lg:py-28 relative bg-[#050914] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold text-amber-400">
            <Film className="w-3.5 h-3.5" />
            <span>VISUAL EXCELLENCE & INFRASTRUCTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Corporate Media & <br />
            <span className="gold-gradient-text">Product Gallery Showcase</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            High-definition pictorial records of our manufacturing facilities, harvest operations, artisanal workshops, and international export cargo lines.
          </p>
        </div>

        {/* Video Showreel Featured Banner */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 mb-12 relative overflow-hidden bg-gradient-to-r from-[#0c182c] via-[#070c18] to-[#040711]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950">
                4K UHD Corporate Film
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                EKCHAKRA Group Corporate Showreel & Global Supply Chain Tour
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Take an immersive cinematic flight across PAA Solar manufacturing arrays, organic Basmati paddy fields, artisan brass forges, and international container shipping docks.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="btn-gold-glow flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 font-display"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>Launch 4K Video Player</span>
                </button>
              </div>
            </div>

            <div 
              onClick={() => setIsVideoModalOpen(true)}
              className="lg:col-span-5 relative h-60 sm:h-72 rounded-2xl overflow-hidden cursor-pointer group border border-white/15"
            >
              <Image
                src={UNSPLASH_IMAGES.globalLogistics}
                alt="Corporate Video Preview"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <Play className="w-6 h-6 fill-slate-950 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg">
                <span className="font-semibold">Duration: 3m 45s</span>
                <span className="text-amber-400 font-mono">4K ULTRA HD</span>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeFilter === f
                  ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden group cursor-pointer hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="relative w-full h-56 overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <ZoomIn className="w-4 h-4 text-amber-400" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-white font-display line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Lightbox Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200">
            <div className="glass-card max-w-2xl w-full rounded-3xl p-6 border border-white/15 relative space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-display">
                  {selectedMedia.title}
                </h3>
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={selectedMedia.image}
                  alt={selectedMedia.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedMedia.desc}
              </p>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  Category: {selectedMedia.category}
                </span>

                <button
                  onClick={() => {
                    setSelectedMedia(null);
                    onOpenRFQ();
                  }}
                  className="btn-gold-glow px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 font-display"
                >
                  Inquire Commodity
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Video Player Modal */}
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="glass-card max-w-3xl w-full rounded-3xl p-6 border border-white/20 relative space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-bold text-white font-display">
                    EKCHAKRA Corporate Cinematic Film (4K HDR)
                  </h3>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulated 4K Corporate Player Screen */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 flex items-center justify-center">
                <Image
                  src={UNSPLASH_IMAGES.heroConglomerate}
                  alt="Corporate Film Presentation"
                  fill
                  className="object-cover filter brightness-50"
                />
                <div className="relative z-10 text-center space-y-3 p-6 max-w-md bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                  <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-400/30 animate-pulse">
                    <Play className="w-6 h-6 fill-slate-950 ml-1" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    EKCHAKRA International Corporate Showreel
                  </h4>
                  <p className="text-xs text-slate-300">
                    Featuring PAA Solar TOPCon facilities, Punjab Basmati rice mills, Mithila Makhana processing, and Shilp Craft brass foundry.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Direct Showreel Inquiries: contact@ekchakra.com</span>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
