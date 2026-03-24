"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiBarChart2, FiGlobe, FiShield, FiArrowRight } from 'react-icons/fi';

/**
 * HubCard Component - GB STRATEGISTS
 * Standardized High-Performance Card with Animated Icons and Precise Alignment.
 * Follows "Gemini Pro High" visual standards.
 */

interface HubCardProps {
  num: string;
  videoSrc: string;
  poster: string;
  titleKeyword: string;
  titleContext: string;
  subtitle: string;
  description: string;
  children?: React.ReactNode;
  tags: { label: string; modalId: string }[];
  delay?: number;
  iconType?: 'cpu' | 'chart' | 'globe' | 'shield';
}

const IconMap = {
  cpu: FiCpu,
  chart: FiBarChart2,
  globe: FiGlobe,
  shield: FiShield,
};

export const HubCard = ({
  num,
  videoSrc,
  poster,
  titleKeyword,
  titleContext,
  subtitle,
  description,
  children,
  tags,
  delay = 0,
  iconType = 'cpu'
}: HubCardProps) => {
  const Icon = IconMap[iconType];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group relative bg-[#050B16] border border-white/5 overflow-hidden transition-all duration-500 
                 hover:border-[#24A8E1]/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(36,168,225,0.2)]"
    >
      {/* HEADER VISUAL (Video + Gradient) */}
      <div className="relative h-64 overflow-hidden">
         {/* Animated Icon Floating over Video */}
         <div className="absolute top-6 left-6 z-20 w-12 h-12 bg-[#050B16]/80 flex items-center justify-center border border-[#24A8E1]/30 text-[#24A8E1] 
                       shadow-[0_0_15px_rgba(36,168,225,0.3)] group-hover:bg-[#E4A837] group-hover:text-black group-hover:border-[#E4A837] transition-all duration-500">
            <Icon size={24} className="group-hover:rotate-12 transition-transform" />
         </div>

        <video 
          src={videoSrc}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-[#050B16]/40 to-transparent" />
        
        {/* Floating Number Overlay */}
        <div className="absolute top-6 right-6 font-mono text-5xl font-black text-white/5 group-hover:text-[#E4A837]/10 transition-colors">
          {num}
        </div>
      </div>

      {/* BODY (Precise Aligned Content) */}
      <div className="p-8 relative">
        {/* Badge Dorado-Cian */}
        <div className="flex items-center gap-2 mb-6">
          <span className="h-0.5 w-8 bg-gradient-to-r from-[#E4A837] to-[#24A8E1]" />
          <span className="font-mono text-[9px] text-[#E4A837] tracking-[0.3em] uppercase">Módulo Certificado</span>
        </div>

        <h3 className="text-2xl font-black mb-1 flex items-center gap-2 font-sans tracking-tighter">
          <span className="text-white group-hover:text-[#E4A837] transition-colors">{titleKeyword}</span>
          <span className="text-[#24A8E1]/30 tracking-[0.2em] text-sm uppercase">{titleContext}</span>
        </h3>
        
        <p className="font-sans font-bold text-[#E4A837] text-xs mb-5 uppercase tracking-widest">
          {subtitle}
        </p>

        <p className="text-[#8892b0] text-[15px] leading-relaxed mb-8 font-light min-h-[4.5rem]">
          {description}
        </p>

        {children}

        {/* Action Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {tags.map((tag) => (
            <button
              key={tag.modalId}
              onClick={() => (window as any).openEliteModal?.(tag.modalId)}
              className="px-4 py-1.5 bg-white/[0.03] border border-white/10 text-[10px] text-[#24A8E1] font-mono tracking-tighter uppercase 
                         hover:bg-[#24A8E1]/10 hover:border-[#24A8E1]/50 hover:text-white transition-all relative overflow-hidden group/btn"
            >
              <span className="relative z-10">{tag.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#24A8E1]/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            </button>
          ))}
        </div>

        {/* Hover Arrow Indicator */}
        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
           <FiArrowRight className="text-[#E4A837] text-xl" />
        </div>
      </div>

      {/* Border Pulse Effect on Hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#24A8E1]/20 transition-all pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-0.5 bg-[#E4A837] w-0 group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
};
