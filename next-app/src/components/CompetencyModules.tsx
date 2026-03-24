"use client";

import React, { useState } from 'react';

interface Module {
  id: string;
  icon: string;
  label: string;
  title: string;
  body: string;
  color: 'gold' | 'cyan';
  anim: string;
}

const modules: Module[] = [
  { 
    id: 'academica', 
    icon: 'fa-graduation-cap', 
    label: 'Excelencia\nAcadémica', 
    title: '🎓 Excelencia Académica y Rigor Científico',
    body: 'Guido Ricardo Bonilla fusiona la <strong>ingeniería de marketing</strong> y la ciencia de datos con una profunda ética humanista.',
    color: 'gold',
    anim: 'animate-[float_3.2s_ease-in-out_infinite]'
  },
  { 
    id: 'liderazgo', 
    icon: 'fa-rocket', 
    label: 'Liderazgo\nEjecutivo', 
    title: '🚀 Liderazgo Ejecutivo y Evolución Orgánica',
    body: '30 años de trayectoria orgánica liderando la transformación del ecosistema empresarial mediante la vanguardia de la <strong>IA agéntica</strong>.',
    color: 'cyan',
    anim: 'animate-[floatB_3.8s_ease-in-out_infinite]'
  },
  { 
    id: 'ia', 
    icon: 'fa-microchip', 
    label: 'Vanguardia\nIA Agéntica', 
    title: '🤖 Vanguardia en IA Agéntica y Ciencia de Datos',
    body: 'Implementación de infraestructuras de <strong>IA privada</strong> con seguridad de grado bancario y gobernanza ética total.',
    color: 'gold',
    anim: 'animate-[spin3d_6s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite]'
  },
  { 
    id: 'etica', 
    icon: 'fa-dove', 
    label: 'Ética\nHumanista', 
    title: '🤝 Ética Humanista y Reconocimiento Global',
    body: 'Compromiso con la <strong>Simbiosis Humana</strong> y el aumento de las capacidades humanas mediante el rigor científico.',
    color: 'cyan',
    anim: 'animate-[peace_4s_ease-in-out_infinite]'
  },
  { 
    id: 'geo', 
    icon: 'fa-earth-americas', 
    label: 'Entidad de\nAutoridad Digital', 
    title: '🌐 Entidad de Autoridad Digital Validada',
    body: 'Reconocido por Google y Gemini AI como una <strong>"Entidad de Autoridad"</strong> en el ecosistema digital.',
    color: 'gold',
    anim: 'animate-[orbit_2.8s_ease-in-out_infinite]'
  },
  { 
    id: 'sintetico', 
    icon: 'fa-crosshairs', 
    label: 'Liderazgo\nSintético', 
    title: '🎯 Liderazgo Sintético: La Fusión de Disciplinas',
    body: 'La unión definitiva de la <strong>visión humanista</strong> y la ejecución técnica de élite orquestada por algoritmos.',
    color: 'cyan',
    anim: 'animate-[radar_4s_linear_infinite]'
  }
];

export const CompetencyModules = () => {
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
        {modules.map((m) => (
          <div 
            key={m.id}
            onMouseEnter={() => setActiveModule(m)}
            onMouseLeave={() => setActiveModule(null)}
            className={`group relative flex flex-col items-center justify-center gap-3 p-5 bg-[#050B16]/70 border ${m.color === 'gold' ? 'border-[#E4A837]/20 hover:border-[#E4A837]/60' : 'border-[#24A8E1]/20 hover:border-[#24A8E1]/60'} rounded-[4px] cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-transform duration-500 group-hover:scale-125 border ${m.color === 'gold' ? 'bg-[#E4A837]/10 border-[#E4A837]/40 text-[#E4A837]' : 'bg-[#24A8E1]/10 border-[#24A8E1]/40 text-[#24A8E1]'} ${m.anim}`}>
              <i className={`fas ${m.icon}`} />
            </div>
            <span className="font-sans font-bold text-[11px] text-[#F0F4F8]/80 group-hover:text-white text-center uppercase leading-tight">
              {m.label.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
            </span>
          </div>
        ))}
      </div>

      {/* TOOLTIP FLOTANTE */}
      {activeModule && (
        <div 
          className="fixed z-[9999] pointer-events-none transition-opacity duration-300"
          style={{ 
            left: mousePos.x + 20, 
            top: mousePos.y - 40,
            opacity: activeModule ? 1 : 0
          }}
        >
          <div className="bg-[#050B16]/95 border-l-4 border-[#E4A837] border-y border-r border-[#E4A837]/30 p-5 rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-xl max-w-[320px]">
            <h4 className="font-sans font-bold text-xs text-[#E4A837] uppercase tracking-wider mb-2 flex items-center gap-3">
               {activeModule.title}
            </h4>
            <p 
              className="font-sans text-[12px] leading-relaxed text-[#ccd6f6]/90"
              dangerouslySetInnerHTML={{ __html: activeModule.body }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes floatB { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-5px) rotate(4deg); } }
        @keyframes spin3d { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg); } }
        @keyframes orbit { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(4px); } }
        @keyframes radar { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes peace { 0%, 100% { transform: translateY(0) rotate(-5deg); } 50% { transform: translateY(-7px) rotate(5deg); } }
      `}</style>
    </div>
  );
};
