"use client";

import React from 'react';
import { CEOPhoto } from './CEOPhoto';
import { CompetencyModules } from './CompetencyModules';

/**
 * CEOSection Component - GB STRATEGISTS
 * Sección de Autoridad y Liderazgo con efectos cinemáticos y módulos de competencia.
 */
export const CEOSection = () => {
  return (
    <section id="authority" className="bg-[#050B16] py-32 border-t border-white/5 relative z-20 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Lado Izquierdo: Visual (Foto Cinematográfica) */}
        <div className="reveal">
          <CEOPhoto />
        </div>

        {/* Lado Derecho: Información Estratégica */}
        <div className="ceo-info reveal">
          <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter leading-tight uppercase font-sans">
            <span className="text-[#E4A837] block mb-2 drop-shadow-[0_0_20px_rgba(228,168,55,0.2)]">Líder Sintético</span>
            <span className="text-[#24A8E1] block drop-shadow-[0_0_20px_rgba(36,168,225,0.2)]">Entidad de Autoridad</span>
          </h2>

          <p className="text-[#ccd6f6] text-[clamp(1rem,1.4vw,1.15rem)] mb-8 leading-relaxed font-light font-sans max-w-2xl">
            Guido Ricardo Bonilla, fundador y CEO de GB Strategists, es un líder sintético con <strong className="text-white font-bold">30 años de trayectoria orgánica</strong> que fusiona la ingeniería de marketing y la ciencia de datos con una profunda <strong className="text-[#E4A837] font-semibold">ética humanista</strong>.
          </p>
          
          <p className="text-[#8892b0] text-[0.95rem] mb-12 leading-relaxed max-w-xl italic">
            Reconocido por Google y Gemini AI como una "Entidad de Autoridad", lidera la transformación del ecosistema empresarial mediante la vanguardia de la <span className="text-[#24A8E1]">IA agéntica</span>.
          </p>

          {/* Módulos de Competencia (Total Typing & Soberanía) */}
          <CompetencyModules />

          {/* GB AUDIO INTERFACE v4.0 (AI Voice Experience) */}
          <div className="mt-16 bg-[#050B16]/60 border-y border-x border-white/10 p-6 flex flex-col sm:flex-row items-center gap-6 rounded-xs backdrop-blur-3xl group shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">
            <button className="w-14 h-14 rounded-full border border-[#24A8E1]/30 flex items-center justify-center text-[#24A8E1] hover:bg-[#24A8E1]/10 hover:border-[#24A8E1]/60 hover:scale-105 transition-all shadow-[0_0_20px_rgba(36,168,225,0.1)]">
              <i className="fas fa-play ml-1" />
            </button>
            <div className="flex-1 w-full text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                <span className="text-[11px] font-mono text-[#E4A837] font-bold tracking-[0.2em] uppercase">El Arquitecto de la Verdad Algorítmica</span>
                <span className="text-[8px] font-mono bg-[#24A8E1]/20 text-[#24A8E1] px-2 py-0.5 rounded-full inline-block self-center">AI VOICE GENERATED</span>
              </div>
              <div className="relative h-1.5 bg-white/5 w-full rounded-full overflow-hidden mb-2">
                <div className="absolute inset-y-0 left-0 bg-[#24A8E1] w-1/3 shadow-[0_0_10px_rgba(36,168,225,0.6)]" />
              </div>
              <div className="flex justify-between font-mono text-[9px] text-white/30 uppercase tracking-widest">
                <span>0:42 / 1:26</span>
                <span className="text-[#24A8E1]/60">Streaming Digital Sovereignty...</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
