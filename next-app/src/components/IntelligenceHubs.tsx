"use client";

import React from 'react';
import { HubCard } from './HubCard';
import { ThreeCanvas } from './ThreeCanvas';

/**
 * IntelligenceHubs Component - GB STRATEGISTS
 * Ecosistema de Soluciones Globales con soberanía tecnológica.
 */
export const IntelligenceHubs = () => {
    return (
        <section id="hubs" className="bg-[#050B16] py-32 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6 mb-24 text-right">
                <div className="w-12 h-0.5 bg-[#E4A837] ml-auto mb-8" />
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                    <span className="text-[#E4A837]">ECOSISTEMA</span> <br/>
                    <span className="text-white/20 uppercase tracking-[0.2em] text-2xl md:text-4xl">de Soluciones Globales</span>
                </h2>
                <p className="max-w-lg ml-auto text-[#8892b0] text-[clamp(0.9rem,1.2vw,1.1rem)] leading-relaxed font-light">
                    Núcleos operativos de élite diseñados para dominar el mercado en la era post-digital y asegurar la <strong className="text-white">soberanía tecnológica</strong>.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
                
                {/* HUB 01: GENERATION */}
                <HubCard
                    num="01"
                    videoSrc="/assets/video/reingenieria-identidad-corporativa.mp4"
                    poster="/assets/foto/nexus_unified.png"
                    titleKeyword="GENERATION"
                    titleContext="HUB"
                    subtitle="Reingeniería de Identidad Corporativa"
                    description="Codificamos la esencia de su marca mediante una arquitectura de activos únicos generados por IA de alta fidelidad. Implementamos un ecosistema de diseño que automatiza la producción."
                    tags={[
                        { label: 'BRAND ADN', modalId: 'brand_dna' },
                        { label: 'JIT MFC', modalId: 'jit_mfg' },
                        { label: 'VISUAL AI', modalId: 'visual_ai' }
                    ]}
                >
                    {/* JIT Interface Simulation */}
                    <div className="bg-black/40 border border-[#24A8E1]/20 p-4 font-mono text-[10px] leading-tight mt-6">
                        <div className="flex justify-between mb-3">
                            <span className="text-[#E4A837]">NODO FABRICACIÓN 1</span>
                            <span className="text-[#24A8E1] animate-pulse">LIVE</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 mb-3 overflow-hidden">
                            <div className="h-full bg-[#24A8E1] w-1/2 animate-[shimmer_2s_infinite]" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-[#8892b0]">
                            <div>PRODUCCIÓN: <span className="text-white">Titanium Kit</span></div>
                            <div>PRECISIÓN: <span className="text-white">0.005mm</span></div>
                        </div>
                        <div className="text-[#24A8E1]/60 mt-2 truncate font-mono">
                            {"> Agent_07: Optimizando ruta láser... [OK]"}
                        </div>
                    </div>
                </HubCard>

                {/* HUB 02: SIGNALS & ANALYSIS */}
                <HubCard
                    num="02"
                    videoSrc="/assets/video/auditoria-presencia-digital.mp4"
                    poster="/assets/foto/nexus_unified.png"
                    titleKeyword="SIGNALS & ANALYSIS"
                    titleContext="HUB"
                    subtitle="Auditoría de Presencia Digital"
                    description="Transformamos su sitio web en un centro de señales de alta calidad. Utilizamos analítica predictiva y modelado de atribución avanzado para simular escenarios de negocio."
                    tags={[
                        { label: 'DATA OPC', modalId: 'data_ops' },
                        { label: 'AUDIT 360', modalId: 'audit_360' },
                        { label: 'PREDICTIVE', modalId: 'predictive' }
                    ]}
                    delay="0.2s"
                >
                    {/* Radar Simulation */}
                    <div className="mt-6 h-32 relative bg-black/40 border border-[#24A8E1]/20 group overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#24A8E1]/5 overflow-hidden">
                             <div className="absolute inset-0 bg-[linear-gradient(rgba(36,168,225,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(36,168,225,0.1)_1px,transparent_1px)] bg-[size:10px_10px]" />
                        </div>
                        <div className="relative w-24 h-24 rounded-full border border-[#24A8E1]/30 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full border border-[#24A8E1]/20 animate-ping" />
                            <div className="w-1 h-1 bg-white rounded-full text-[8px] absolute top-4 right-4 animate-pulse">
                                <span className="ml-2 whitespace-nowrap text-[#24A8E1] font-mono">SIGNAL_07</span>
                            </div>
                        </div>
                        <div className="absolute top-2 left-2 text-[8px] font-mono text-[#24A8E1]">RADAR_ACTIVE: 360_SCAN</div>
                    </div>
                </HubCard>

                {/* HUB 03: VISIBILITY & REPUTATION */}
                <HubCard
                    num="03"
                    videoSrc="/assets/video/posicionamiento-geo.mp4"
                    poster="/assets/foto/nexus_unified.png"
                    titleKeyword="VISIBILITY & REPUTATION"
                    titleContext="HUB"
                    subtitle="Posicionamiento GEO (AI Search)"
                    description="Generative Engine Optimization (GEO). Inyectamos la autoridad de su marca directamente en los cerebros de los modelos de lenguaje (LLMs) dominando las respuestas generativas."
                    tags={[
                        { label: 'GEO RANKING', modalId: 'geo_ranking' },
                        { label: 'SMART CX', modalId: 'smart_cx' },
                        { label: 'REPUTATION', modalId: 'reputation' }
                    ]}
                    delay="0.4s"
                >
                    <div className="flex flex-col gap-4 mt-6">
                        <ThreeCanvas type="aegis" height="180px" />
                        <ThreeCanvas type="geo" height="150px" />
                    </div>
                </HubCard>

                {/* HUB 04: OPERATIONS & TRUST */}
                <HubCard
                    num="04"
                    videoSrc="/assets/video/gobernanza-agentica.mp4"
                    poster="/assets/foto/nexus_unified.png"
                    titleKeyword="OPERATIONS & TRUST"
                    titleContext="HUB"
                    subtitle="Gobernanza Agéntica y Automatización Radical"
                    description="Trust Vault & Digital Workers. Implementamos una infraestructura de IA privada con seguridad de grado bancario (RLS), blindando su capital intelectual de manera ética."
                    tags={[
                        { label: 'DATA SOVEREIGNTY', modalId: 'data_sovereignty' },
                        { label: 'HUMAN IN THE LOOP', modalId: 'human_loop' },
                        { label: 'RLS SECURITY', modalId: 'rls_security' }
                    ]}
                    delay="0.6s"
                >
                    <ThreeCanvas type="metatron" height="345px" style={{ borderColor: '#E4A837' }} />
                </HubCard>

            </div>
            
            <style jsx>{`
               @keyframes shimmer {
                 0% { transform: translateX(-100%); }
                 100% { transform: translateX(300%); }
               }
            `}</style>
        </section>
    );
};
