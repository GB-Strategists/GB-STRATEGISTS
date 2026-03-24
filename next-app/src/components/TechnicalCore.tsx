"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';
import { ThreeCanvas } from './ThreeCanvas';
import { FiTrendingUp, FiCpu, FiServer, FiGlobe } from 'react-icons/fi';

/**
 * TechnicalCore Component - GB STRATEGISTS
 * Updated with Real-Time Simulated Data Animations and Neural Node Mesh v2.
 */

const initialData = [
  { name: '08:00', roi: 45, predictive: 48 },
  { name: '09:00', roi: 42, predictive: 52 },
  { name: '10:00', roi: 68, predictive: 70 },
  { name: '11:00', roi: 60, predictive: 75 },
  { name: '12:00', roi: 88, predictive: 92 },
  { name: '13:00', roi: 96, predictive: 99 },
];

export const TechnicalCore = () => {
  const [data, setData] = useState(initialData);
  const [activeMetric, setActiveMetric] = useState(0);

  // Simulated Real-Time Data Flow
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const last = prevData[prevData.length - 1];
        const nextRoi = Math.max(80, Math.min(100, last.roi + (Math.random() - 0.5) * 4));
        const nextPred = Math.max(90, Math.min(100, last.predictive + (Math.random() - 0.5) * 2));
        
        const newData = [...prevData.slice(1), { 
          name: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
          roi: nextRoi, 
          predictive: nextPred 
        }];
        return newData;
      });
      setActiveMetric(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="technical-core" className="bg-[#050B16] py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 z-0 opacity-10 blur-[150px] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#24A8E1] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#E4A837] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-0.5 w-12 bg-[#24A8E1]" />
              <span className="font-mono text-[10px] text-[#24A8E1] tracking-[0.4em] uppercase">Core Authority</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-tight font-sans">
               NÚCLEO <span className="text-[#E4A837]">TÉCNICO</span> <br/>
               <span className="text-[#24A8E1]">ALGORÍTMICO</span>
            </h2>
            <p className="text-[#8892b0] text-lg leading-relaxed font-light max-w-xl">
               Monitorización de procesos en tiempo real. Orquestamos una simbiosis entre <strong className="text-white">Machine Learning Predictivo</strong> y soberanía de datos privada.
            </p>
          </motion.div>

          {/* Metric Badges */}
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
             {[
               { icon: FiTrendingUp, label: 'ROI ACCURACY', val: '99.8%', color: '#24A8E1' },
               { icon: FiCpu, label: 'AGENT UPTIME', val: '100%', color: '#E4A837' },
               { icon: FiServer, label: 'TRUST VAULT', val: 'B-GRADE', color: '#24A8E1' },
               { icon: FiGlobe, label: 'GEO RANK', val: 'TOP 1', color: '#E4A837' },
             ].map((m, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className={`p-6 border border-white/10 bg-black/40 min-w-[160px] ${activeMetric === i ? 'border-[#24A8E1]/60' : ''} transition-all duration-700`}
               >
                 <m.icon className="mb-4 text-xl" style={{ color: m.color }} />
                 <div className="font-mono text-[8px] text-[#8892b0] mb-1 tracking-widest uppercase">{m.label}</div>
                 <div className="text-white font-black text-xl">{m.val}</div>
               </motion.div>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
           
           {/* RECHARTS CHART with STREAMS */}
           <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-black/60 border border-[#24A8E1]/10 p-10 relative group backdrop-blur-3xl overflow-hidden"
           >
              {/* Dynamic Grid Background Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[size:40px_40px] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]" />

              <div className="flex justify-between items-start mb-16 relative z-10">
                 <div>
                   <h4 className="font-mono text-[10px] text-[#24A8E1] tracking-[0.4em] uppercase mb-1">Impacto de Inversión</h4>
                   <span className="text-white font-black text-2xl tracking-tighter uppercase font-sans">ROI_VITAL_AUDIT</span>
                 </div>
                 <div className="text-[#E4A837] animate-pulse flex items-center gap-2 font-mono text-[10px]">
                    <div className="w-1.5 h-1.5 bg-[#E4A837] rounded-full" /> LIVE_STREAM
                 </div>
              </div>
              
              <div className="h-[350px] w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="gRoi" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#24A8E1" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#24A8E1" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="gPred" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E4A837" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#E4A837" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#8892b0', fontSize: 9, fontFamily: 'monospace' }} 
                    />
                    <YAxis 
                      hide
                      domain={[0, 110]}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#050B16', border: '1px solid rgba(228,168,55,0.3)', borderRadius: 0, padding: '12px' }}
                      itemStyle={{ color: '#E4A837', textTransform: 'uppercase', fontSize: '10px', fontWeight: 'bold' }}
                      cursor={{ stroke: '#E4A837', strokeWidth: 1 }}
                    />
                    <Area 
                      isAnimationActive={true}
                      animationDuration={1500}
                      type="monotone" 
                      dataKey="predictive" 
                      stroke="#E4A837" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#gPred)" 
                    />
                    <Area 
                      isAnimationActive={true}
                      animationDuration={2000}
                      type="monotone" 
                      dataKey="roi" 
                      stroke="#24A8E1" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#gRoi)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 flex gap-8 relative z-10">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#24A8E1]" />
                    <span className="font-mono text-[9px] text-[#24A8E1]/80 tracking-widest uppercase uppercase">Real ROI</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#E4A837]" />
                    <span className="font-mono text-[9px] text-[#E4A837]/80 tracking-widest uppercase">Predictive</span>
                 </div>
              </div>
           </motion.div>

           {/* 3D NEURAL NODES MESH */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="bg-black/60 border border-[#E4A837]/10 p-10 flex flex-col relative group backdrop-blur-3xl overflow-hidden"
           >
              {/* Scanline Effect */}
              <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.05] bg-[linear-gradient(transparent_50%,rgba(36,168,225,0.3)_50%)] bg-[size:100%_4px]" />

              <div className="flex justify-between items-start mb-10 relative z-30">
                 <div>
                   <h4 className="font-mono text-[10px] text-[#E4A837] tracking-[0.4em] uppercase mb-1">Malla Neuronal Privada</h4>
                   <span className="text-white font-black text-2xl tracking-tighter uppercase font-sans">Neural Architecture</span>
                 </div>
                 <div className="font-mono text-[10px] text-[#24A8E1]">0x_SOVEREIGN_CORE</div>
              </div>
              
              <div className="flex-1 relative z-10 h-[300px] lg:h-full min-h-[350px]">
                 <ThreeCanvas type="neural" height="100%" style={{ border: 'none', background: 'transparent' }} />
              </div>

              <div className="mt-8 p-6 bg-[#E4A837]/5 border-l-2 border-[#E4A837] relative z-30">
                 <p className="text-white/60 text-xs italic leading-relaxed uppercase tracking-tighter font-medium">
                    &ldquo;Desplegamos nodos autónomos que protegen su capital intelectual mientras ejecutan tareas complejas de decisión.&rdquo;
                 </p>
              </div>
           </motion.div>

        </div>
      </div>
    </section>
  );
};
