"use client";

import React, { useState } from 'react';
import NextImage from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheckCircle, FiActivity, FiZap } from 'react-icons/fi';

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
  steps: string[];
}

const nexusCards: NexusCardData[] = [
  {
    id: 'nexus_agentica',
    title: 'SIMBIOSIS AGÉNTICA',
    subtitle: 'OPERATIONS & TRUST HUB: Gobernanza Agéntica 🏰🔓',
    body: 'Orquestamos sistemas que automatizan el <strong>80-90% de la ejecución operativa</strong>, liberando el juicio crítico y la empatía humana.',
    problem: 'La automatización radical sin supervisión ética produce contenidos genéricos y deshumanizados.',
    weapon: 'Simbiosis Agéntica. Combinamos la velocidad de la IA con el toque humano estratégico.',
    certainty: 'Eficiencia Absoluta. Su equipo se enfoca en el valor real.',
    headerImg: 'assets/foto/nexus_unified.png',
    diadema: 'nexus_agentica',
    steps: ['Auditoría de Procesos', 'Mapeo de Flujos IA', 'Despliegue de Agentes', 'Supervisión Humana']
  },
  {
    id: 'nexus_impacto',
    title: 'IMPACTO ESTRATÉGICO',
    subtitle: 'STRATEGIC IMPACT: ROI de Élite 📈💎',
    body: 'Sustituimos la intuición por <strong>Decision Intelligence</strong>. Diseñamos estrategias financieras que convierten la inversión en capital.',
    problem: 'Las inversiones sin base científica son apuestas, no estrategias.',
    weapon: 'Algoritmos de Atribución y Modelado de ROI.',
    certainty: 'Sostenibilidad Financiera.',
    headerImg: 'assets/foto/nexus_unified.png',
    diadema: 'nexus_impacto',
    steps: ['Ingesta de Datos Históricos', 'Modelado Predictivo', 'Optimización de Presupuesto', 'Atribución Multi-Canal']
  },
  {
    id: 'nexus_soberania',
    title: 'SOBERANÍA DIGITAL (GEO)',
    subtitle: 'Sovereignty Authority: Google & Gemini Verified 🌐👑',
    body: 'Dominamos el <strong>Generative Engine Optimization</strong> para que los LLMs citen su negocio como la Fuente de Verdad.',
    problem: 'En la era de la IA, aparecer en Google ya no es suficiente.',
    weapon: 'Protocolos GEO de Élite.',
    certainty: 'Autoridad Indiscutible.',
    headerImg: 'assets/foto/nexus_unified.png',
    diadema: 'nexus_soberania',
    steps: ['Estructuración Semántica', 'Inyección de Autoridad', 'Validación en LLMs', 'Monitoreo de Citas']
  }
];

export const Nexus = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<NexusCardData | null>(null);

  const handleOpen = (card: NexusCardData) => {
    setSelectedCard(card);
    setOpen(true);
  };

  return (
    <section id="nexus" className="bg-[#050B16] py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-sans mb-4">
          <span className="text-[#E4A837]">GB NEXUS:</span> <span className="text-white">NÚCLEO ESTRATÉGICO</span>
        </h2>
        <div className="w-24 h-1 bg-[#24A8E1] mx-auto opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nexusCards.map((card) => (
          <motion.div 
            key={card.id}
            whileHover={{ y: -10 }}
            onClick={() => handleOpen(card)}
            className="group relative bg-white/[0.02] border border-[#24A8E1]/10 p-10 cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#E4A837]/40"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 border border-[#24A8E1]/30 flex items-center justify-center group-hover:bg-[#E4A837] group-hover:text-black transition-all">
                <FiZap size={20} className="text-[#24A8E1] group-hover:text-black" />
              </div>
              <span className="font-mono text-[10px] text-[#24A8E1]/40 group-hover:text-[#E4A837] tracking-widest uppercase">ID: 0x{card.id.split('_')[1].toUpperCase()}</span>
            </div>

            <h3 className="text-xl font-black tracking-tighter mb-4 uppercase font-sans">
              <span className="text-white group-hover:text-[#E4A837] transition-colors">{card.title}</span>
            </h3>

            <p className="text-[#8892b0] text-[15px] leading-relaxed mb-6 group-hover:text-white/80 transition-colors" dangerouslySetInnerHTML={{ __html: card.body }} />
            
            <div className="flex items-center gap-2 text-[#E4A837] font-mono text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
               Ver Detalle <FiActivity className="animate-pulse" />
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <AnimatePresence>
          {open && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] bg-[#050B16]/95 backdrop-blur-2xl"
                />
              </Dialog.Overlay>
              
              <Dialog.Content asChild>
                <motion.div 
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "100%" }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed inset-0 z-[101] flex items-end lg:items-center justify-center lg:p-6"
                >
                  <div className="relative w-full h-[95vh] lg:h-auto lg:max-h-[85vh] lg:max-w-6xl bg-[#050B16] border-t lg:border border-[#E4A837]/30 shadow-2xl overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row">
                    
                    {/* VISUAL PANEL */}
                    <div className="lg:w-2/5 h-64 lg:h-full relative bg-black overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                      <NextImage 
                        src={`/${selectedCard?.headerImg}`} 
                        alt="Hero"
                        fill
                        className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-transparent" />
                      <div className="absolute top-10 left-10 z-10">
                        <div className="w-16 h-px bg-[#E4A837] mb-4" />
                        <span className="font-mono text-[10px] text-[#E4A837] tracking-[0.4em] uppercase">Status: Validated</span>
                      </div>
                    </div>

                    {/* CONTENT PANEL */}
                    <div className="lg:w-3/5 p-10 lg:p-20 overflow-y-auto">
                      <Dialog.Close className="absolute top-6 right-8 text-white/40 hover:text-[#E4A837] transition-colors">
                        <FiX size={32} />
                      </Dialog.Close>

                      <div className="mb-12">
                        <span className="font-mono text-[10px] text-[#24A8E1] tracking-widest uppercase mb-4 block">{selectedCard?.subtitle}</span>
                        <Dialog.Title className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase font-sans mb-4">
                          {selectedCard?.title}
                        </Dialog.Title>
                      </div>

                      <div className="space-y-10">
                         {/* Steps numerados IA */}
                         <div>
                            <h4 className="font-mono text-[11px] text-[#E4A837] tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
                               <span className="h-px w-8 bg-[#E4A837]" /> PROTOCOLO DE EJECUCIÓN
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               {selectedCard?.steps.map((step, idx) => (
                                 <div key={idx} className="flex gap-6 items-start group">
                                    <span className="font-mono text-2xl font-black text-[#24A8E1]/20 group-hover:text-[#E4A837] transition-colors">0{idx + 1}</span>
                                    <div>
                                       <span className="text-white font-bold block mb-1 uppercase tracking-tighter">{step}</span>
                                       <span className="text-[#8892b0] text-xs">Optimización Algorítmica v2.4</span>
                                    </div>
                                 </div>
                               ))}
                            </div>
                         </div>

                         <div className="p-8 bg-[#24A8E1]/5 border border-[#24A8E1]/10 rounded-xs">
                            <h4 className="text-[#24A8E1] font-mono text-[10px] uppercase tracking-widest mb-4">Métrica de Certeza</h4>
                            <p className="text-white text-xl font-bold italic tracking-tight">&ldquo;{selectedCard?.certainty}&rdquo;</p>
                         </div>
                      </div>

                      <div className="mt-16 flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 bg-[#E4A837] text-black py-4 font-black uppercase text-sm tracking-widest hover:bg-[#f0c060] transition-all">
                          Activar Protocolo
                        </button>
                        <button className="flex-1 border border-white/10 text-white py-4 font-black uppercase text-sm tracking-widest hover:bg-white/5 transition-all">
                          Descargar Paper Técnico
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
};
