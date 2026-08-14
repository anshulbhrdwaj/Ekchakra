'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Sun, Wheat, Palette, Shirt, Scale, Hammer, Sparkles, ArrowRight } from 'lucide-react';
import { audioHaptics } from './AudioHaptics';

interface NodeData {
  id: string;
  name: string;
  sub: string;
  icon: typeof Sun;
  color: string;
  angle: number;
  link: string;
  desc: string;
}

const NODES: NodeData[] = [
  {
    id: 'solar',
    name: 'PAA Solar & Power',
    sub: 'TOPCon 640Wp & LiFePO4',
    icon: Sun,
    color: '#f59e0b',
    angle: 0,
    link: '/divisions/solar',
    desc: 'Bifacial N-type photovoltaic modules, 98.6% MPPT string & hybrid inverters, and 5000+ cycle energy storage systems.',
  },
  {
    id: 'fmcg',
    name: 'Agro & Spices',
    sub: 'Basmati, Makhana & Ghee',
    icon: Wheat,
    color: '#10b981',
    angle: 60,
    link: '/divisions/fmcg-agro',
    desc: 'Sortex 1121 long-grain rice, organic Phool Makhana, single-origin whole ground spices, and Vedic Desi Ghee.',
  },
  {
    id: 'craft',
    name: 'Shilp Craft',
    sub: 'Brass & Wood Artefacts',
    icon: Palette,
    color: '#dfa857',
    angle: 120,
    link: '/divisions/associate-companies#shilp-craft',
    desc: 'Authentic Indian handicrafts and artisanal metalware exported globally via Amazon Global and luxury portals.',
  },
  {
    id: 'apparel',
    name: 'Delight Apparel',
    sub: 'Textiles & Garments',
    icon: Shirt,
    color: '#ec4899',
    angle: 180,
    link: '/divisions/associate-companies#delight-apparel',
    desc: 'Sustainable cotton garment manufacturing, couture finishing, and containerized fashion exports worldwide.',
  },
  {
    id: 'legal',
    name: 'AAP KA HAQ',
    sub: 'Corporate Law & Trade',
    icon: Scale,
    color: '#00d2ff',
    angle: 240,
    link: '/divisions/associate-companies#aap-ka-haq',
    desc: 'International maritime contract arbitration, INCOTERMS 2020 legal vetting, and corporate compliance.',
  },
  {
    id: 'metal',
    name: 'BK Metal',
    sub: 'Galvanized Structures',
    icon: Hammer,
    color: '#8b5cf6',
    angle: 300,
    link: '/divisions/associate-companies#bk-metal',
    desc: 'Hot-dip galvanized structural steel, solar mounting racks, and industrial heavy-duty fabrication.',
  },
];

export default function ChakraNexusCanvas() {
  const [activeNode, setActiveNode] = useState<NodeData>(NODES[0]);
  const [rotationOffset, setRotationOffset] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 135;

      // Draw outer glowing rings
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 20, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(223, 168, 87, 0.12)';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 8]);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(223, 168, 87, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      ctx.stroke();

      // Connecting lines from center hub to nodes
      NODES.forEach((node) => {
        const rad = ((node.angle + angle * 2) * Math.PI) / 180;
        const x = centerX + Math.cos(rad) * radius;
        const y = centerY + Math.sin(rad) * radius;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = node.id === activeNode.id ? 'rgba(223, 168, 87, 0.6)' : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = node.id === activeNode.id ? 2 : 1;
        ctx.stroke();
      });

      angle += 0.15;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeNode]);

  return (
    <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 border border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive 3D Conglomerate Matrix</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          The 360° Synchronized <span className="text-gold-gradient">Ekchakra Nexus</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          Click any vertical node below to inspect its operational scope, export capabilities, and direct access channel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Interactive Wheel / Hub */}
        <div className="lg:col-span-6 flex items-center justify-center relative min-h-[360px]">
          <canvas
            ref={canvasRef}
            width={380}
            height={380}
            className="absolute inset-0 m-auto pointer-events-none max-w-full"
          />

          {/* Center Hub Core */}
          <div className="relative z-20 w-24 h-24 rounded-3xl bg-slate-950 border-2 border-amber-400/80 shadow-[0_0_30px_rgba(223,168,87,0.4)] flex flex-col items-center justify-center text-center p-2">
            <span className="text-gold-gradient font-black text-2xl">एक</span>
            <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">EKCHAKRA</span>
            <span className="text-[8px] text-slate-400">360° ONE WHEEL</span>
          </div>

          {/* 6 Sector Node Buttons around the circle */}
          {NODES.map((node) => {
            const rad = ((node.angle - 90) * Math.PI) / 180;
            const dist = 135;
            const x = Math.cos(rad) * dist;
            const y = Math.sin(rad) * dist;
            const Icon = node.icon;
            const isSelected = activeNode.id === node.id;

            return (
              <button
                key={node.id}
                onClick={() => {
                  setActiveNode(node);
                  audioHaptics.playChime(620, 0.2);
                }}
                onMouseEnter={() => audioHaptics.playHover()}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className={`absolute z-30 flex items-center gap-2 p-2 rounded-2xl transition-all duration-300 ${
                  isSelected
                    ? 'bg-slate-900 border-2 border-amber-400 shadow-[0_0_20px_rgba(223,168,87,0.5)] scale-110'
                    : 'bg-slate-950/90 border border-slate-700 hover:border-slate-500 hover:scale-105 opacity-80 hover:opacity-100'
                }`}
                aria-label={node.name}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${node.color}20`, color: node.color }}
                >
                  <Icon className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Active Sector Details Showcase */}
        <div className="lg:col-span-6 space-y-5 p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
              Active Sector Intelligence
            </span>
            <span className="text-xs font-mono text-slate-400 font-bold">
              PORTAL 0{NODES.findIndex((n) => n.id === activeNode.id) + 1} / 06
            </span>
          </div>

          <div>
            <h4 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <span>{activeNode.name}</span>
            </h4>
            <p className="text-xs font-semibold text-amber-400 mt-1">{activeNode.sub}</p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">{activeNode.desc}</p>

          <div className="pt-2 flex items-center gap-3">
            <Link
              href={activeNode.link}
              onClick={() => audioHaptics.playHover()}
              className="px-5 py-2.5 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition flex items-center gap-1.5 shadow-md shadow-amber-500/20"
            >
              <span>Explore {activeNode.name} Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
