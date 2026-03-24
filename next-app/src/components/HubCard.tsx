"use client";

import React from 'react';

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
  delay?: string;
}

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
  delay = "0s"
}: HubCardProps) => {
  return (
    <div 
      className="group relative bg-[#050B16] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#24A8E1]/30 hover:shadow-[0_0_40px_rgba(36,168,225,0.1)]"
      style={{ transitionDelay: delay }}
    >
      <div className="absolute top-4 left-4 z-10 font-mono text-4xl font-black text-white/10 group-hover:text-[#24A8E1]/20 transition-colors">
        {num}
      </div>

      <div className="relative h-64 overflow-hidden">
        <video 
          src={videoSrc}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] to-transparent opacity-80" />
      </div>

      <div className="p-8 relative">
        <h3 className="text-2xl font-black mb-1 flex items-center gap-2">
          <span className="text-[#E4A837] tracking-tighter">{titleKeyword}</span>
          <span className="text-white/40 tracking-[0.2em] text-sm uppercase">{titleContext}</span>
        </h3>
        
        <p className="font-mono text-[#E4A837] text-xs mb-4 uppercase tracking-widest">
          {subtitle}
        </p>

        <p className="text-[#8892b0] text-sm leading-relaxed mb-6">
          {description}
        </p>

        {children}

        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <button
              key={tag.modalId}
              onClick={() => (window as any).openEliteModal?.(tag.modalId)}
              className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-[#24A8E1] hover:bg-[#24A8E1]/10 hover:border-[#24A8E1]/40 transition-all font-mono tracking-tighter"
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
