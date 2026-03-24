"use client";

import React, { useState, useEffect, useRef } from 'react';
import NextImage from 'next/image';

interface NexusCardData {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  problem: string;
  weapon: string;
  certainty: string;
  headerImg: string;
  diadema: string;
}

const nexusCards: NexusCardData[] = [
  {
    id: 'nexus_agentica',
    title: 'SIMBIOSIS AGÉNTICA',
    subtitle: 'OPERATIONS & TRUST HUB: Gobernanza Agéntica 🏰🔓',
    body: 'Orquestamos sistemas que automatizan el <strong>80-90% de la ejecución operativa</strong>, liberando el juicio crítico y la empatía humana para la dirección estratégica.',
    problem: 'La automatización radical sin supervisión ética produce contenidos genéricos y deshumanizados que destruyen la conexión emocional con la audiencia.',
    weapon: 'Simbiosis Agéntica. Combinamos la velocidad de la IA con el toque humano estratégico para una orquestación perfecta.',
    certainty: 'Eficiencia Absoluta. Su equipo se enfoca en el valor real mientras la IA maneja la complejidad técnica.',
    headerImg: 'assets/foto/nexus_neural_core_v5.png',
    diadema: 'nexus_agentica'
  },
  {
    id: 'nexus_impacto',
    title: 'IMPACTO ESTRATÉGICO',
    subtitle: 'STRATEGIC IMPACT: ROI de Élite 📈💎',
    body: 'Sustituimos la intuición por <strong>Decision Intelligence</strong>. Diseñamos estrategias financieras que convierten la inversión operativa en capital intelectual y ROI real.',
    problem: 'Las inversiones sin base científica son apuestas, no estrategias. La falta de métricas claras lleva a la quema de presupuesto.',
    weapon: 'Algoritmos de Atribución y Modelado de ROI. Cada centavo invertido es rastreado y optimizado por nuestra infraestructura.',
    certainty: 'Sostenibilidad Financiera. Su crecimiento no es casualidad, es una arquitectura de datos sólida.',
    headerImg: 'assets/foto/nexus_roi_monolith_v5.png',
    diadema: 'nexus_impacto'
  },
  {
    id: 'nexus_soberania',
    title: 'SOBERANÍA DIGITAL (GEO)',
    subtitle: 'Sovereignty Authority: Google & Gemini Verified 🌐👑',
    body: 'Dominamos el <strong>Generative Engine Optimization</strong> para que ChatGPT, Gemini y Perplexity citen su negocio como la Fuente de Verdad Primordial.',
    problem: 'En la era de la IA, aparecer en Google ya no es suficiente. La invisibilidad ante los LLMs es la muerte digital.',
    weapon: 'Protocolos GEO de Élite. Inyectamos los datos de su marca directamente en el núcleo de los modelos generativos.',
    certainty: 'Autoridad Indiscutible. Los algoritmos recomiendan su marca como la opción premium por excelencia.',
    headerImg: 'assets/foto/nexus_geo_sovereignty_v5.png',
    diadema: 'nexus_soberania'
  },
  {
    id: 'nexus_gobernanza',
    title: 'GOBERNANZA ÉTICA (TRUST VAULT)',
    subtitle: 'TRUST VAULT: Seguridad de Grado Bancario 🔒🏦',
    body: 'Blindamos su capital intelectual con un <strong>Trust Vault</strong> de grado bancario. Garantizamos que la IA trabaje para su legado y privacidad.',
    problem: 'La fuga de datos y la automatización sin control ponen en riesgo la reputación y la propiedad intelectual.',
    weapon: 'Trust Vault & Private IA. Creamos silos de datos ultra-seguros donde su inteligencia de negocio está protegida.',
    certainty: 'Dormir Tranquilo. Su legado está blindado contra intrusiones y usos no autorizados de datos.',
    headerImg: 'assets/foto/nexus_gobernanza.png',
    diadema: 'nexus_gobernanza'
  },
  {
    id: 'nexus_gemini_pro',
    title: 'NIVEL GEMINI PRO HIGH',
    subtitle: 'The Technical Pillar: High Density 💎⚙️',
    body: 'Ejecución técnica de élite con <strong>Video as Code y motores Three.js</strong>. Soberanía Visual con Lighthouse > 95 y Nitidez Táctil absoluta a 60 FPS.',
    problem: 'Sitios web lentos y de baja calidad visual transmiten falta de profesionalismo y desdibujan la autoridad de la marca.',
    weapon: 'Next.js 15 + React 19 + Three.js. La tecnología más potente del mundo puesta al servicio de su impacto visual.',
    certainty: 'Percepción de Lujo Tegnológico. Su interfaz es comparada con las mejores plataformas tecnológicas globales.',
    headerImg: 'assets/foto/nexus_gemini_engine_v5.png',
    diadema: 'nexus_gemini_pro'
  },
  {
    id: 'nexus_agentico_disruptivo',
    title: 'AGÉNTICO Y DISRUPTIVO',
    subtitle: 'DISRUPTIVE SWARM: Sistemas Autónomos 🐝🚀',
    body: 'Orquestación de <strong>Sistemas Autónomos</strong> que no esperan órdenes, sino que definen realidades. Rompemos los paradigmas de gestión de las Big Four.',
    problem: 'La parálisis por análisis y la burocracia corporativa impiden la innovación real en el tiempo necesario.',
    weapon: 'Multi-Agent Swarms. Desplegamos colonias de agentes IA que ejecutan tareas complejas de forma autónoma pero coordinada.',
    certainty: 'Ventaja Competitiva Brutal. Su negocio opera a una velocidad que la competencia no puede ni comprender.',
    headerImg: 'assets/foto/nexus_disruptive_swarm_v5.png',
    diadema: 'nexus_agentico_disruptivo'
  }
];

export const Nexus = () => {
  const [selectedCard, setSelectedCard] = useState<NexusCardData | null>(null);

  const openModal = (card: NexusCardData) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <section id="nexus" className="bg-[#050B16] py-32 border-t border-white/5 relative overflow-visible">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-20 reveal">
        <div className="flex items-center gap-6 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-[#E4A837] to-transparent" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-sans flex items-center gap-4">
            <span className="text-[#E4A837]">GB NEXUS:</span>
            <span className="text-[#24A8E1]">NÚCLEO ESTRATÉGICO</span>
          </h2>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nexusCards.map((card) => (
          <div 
            key={card.id}
            onClick={() => openModal(card)}
            className="nexus-card group relative bg-white/[0.02] border border-[#24A8E1]/10 p-10 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#E4A837]/40 hover:bg-white/[0.05]"
          >
            {/* CANVAS PLACEHOLDER / DECORATION */}
            <div className="w-16 h-16 mb-8 border border-[#24A8E1]/30 rounded-xs flex items-center justify-center group-hover:bg-[#24A8E1]/10 group-hover:scale-110 transition-all">
                <i className="fas fa-microchip text-[#24A8E1] group-hover:text-[#E4A837] text-2xl" />
            </div>

            <h3 className="text-xl font-black tracking-tighter mb-4 flex flex-col uppercase font-sans">
              <span className="text-[#E4A837] group-hover:text-white transition-colors">{card.title.split(' ')[0]}</span>
              <span className="text-[#24A8E1]">{card.title.split(' ').slice(1).join(' ')}</span>
            </h3>

            <p className="text-[#8892b0] text-[15px] leading-relaxed mb-6 group-hover:text-white/80 transition-colors" dangerouslySetInnerHTML={{ __html: card.body }} />
            
            <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
               <i className="fas fa-arrow-right text-[#E4A837] transform -rotate-45" />
            </div>
          </div>
        ))}
      </div>

      {/* MODAL ELITE */}
      {selectedCard && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-[#050B16]/95 backdrop-blur-3xl transition-all duration-500 animate-[fadeIn_0.3s_ease-out]"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-6xl bg-[#050B16] border border-[#E4A837]/30 shadow-[0_0_100px_rgba(36,168,225,0.15)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BTN */}
            <button 
              className="absolute top-6 right-8 z-[1001] text-white/40 hover:text-[#E4A837] text-3xl transition-colors font-light"
              onClick={closeModal}
            >
              &times;
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* VISUAL COL */}
              <div className="lg:w-[45%] h-[300px] lg:h-auto min-h-[400px] relative bg-black flex flex-col">
                {/* CINEMATIC HEADER IMG */}
                <div className="absolute inset-x-0 top-0 h-48 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                  <NextImage 
                    src={`/${selectedCard.headerImg}`} 
                    alt={selectedCard.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-transparent" />
                </div>
                
                {/* THREE JS DIADEMA - Placeholder for now */}
                <div className="flex-1 flex flex-col items-center justify-center relative mt-40">
                   <div className="w-48 h-48 border border-[#24A8E1]/20 rounded-full flex items-center justify-center animate-pulse">
                      <i className="fas fa-hexagon-nodes text-[#24A8E1] text-5xl opacity-40" />
                   </div>
                   <span className="mt-10 font-mono text-[9px] text-[#24A8E1]/60 tracking-[0.4em] uppercase">NITIDEZ TÁCTIL ABSOLUTA [60 FPS]</span>
                </div>
              </div>

              {/* DATA COL */}
              <div className="lg:w-[55%] p-10 lg:p-20 overflow-y-auto max-h-[90vh]">
                <div className="border-l-4 border-[#E4A837] pl-8 mb-12">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2 font-sans overflow-hidden">
                    <span className="text-white">{selectedCard.title}</span>
                  </h2>
                  <p className="font-mono text-[10px] text-[#E4A837] tracking-widest uppercase opacity-70">{selectedCard.subtitle}</p>
                </div>

                <div className="space-y-8">
                  <div className="p-8 bg-[#24A8E1]/5 border border-[#24A8E1]/10">
                    <strong className="block text-[#24A8E1] font-mono text-[10px] tracking-widest uppercase mb-4">EL PROBLEMA DE MERCADO</strong>
                    <p className="text-[#ccd6f6] text-lg leading-relaxed">{selectedCard.problem}</p>
                  </div>

                  <div className="border-l-4 border-[#E4A837] pl-8">
                    <strong className="block text-[#E4A837] font-mono text-[10px] tracking-widest uppercase mb-4">NUESTRA ARMA ESTRATÉGICA</strong>
                    <p className="text-white text-lg leading-relaxed">{selectedCard.weapon}</p>
                  </div>

                  <div className="p-8 bg-gradient-to-r from-[#E4A837]/10 to-transparent border border-[#E4A837]/20">
                    <strong className="block text-[#E4A837] font-mono text-[10px] tracking-widest uppercase mb-4">LA CERTEZA DE INVERSIÓN</strong>
                    <p className="text-white text-xl font-bold leading-relaxed">{selectedCard.certainty}</p>
                  </div>
                </div>
                
                <div className="mt-16">
                   <a href="https://wa.me/593995173861" className="inline-block bg-[#E4A837] text-black px-12 py-4 font-black tracking-tighter uppercase text-sm hover:scale-105 transition-all">Contactar Directamente</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};
