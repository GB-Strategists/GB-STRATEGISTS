'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Activity, Target, Calendar, BarChart3, ShieldCheck, Zap } from 'lucide-react';

interface Pillar {
  id: number;
  title: string;
  description: string;
  problema: string;
  objetivo: string;
  cronograma: string;
  kpi: string;
  hitos: string;
}

const PILLARS_DATA: Pillar[] = [
  {
    "id": 1,
    "title": "SOSTENIBILIDAD EDAFOLÓGICA Y RESTAURACIÓN DE ANDOSOLES",
    "description": "Implementación de biotecnología aplicada a los suelos volcánicos para restaurar su capacidad productiva.",
    "problema": "Agotamiento severo de la fertilidad por el monocultivo intensivo de papa y degradación química por mal manejo de agroquímicos.",
    "objetivo": "Revertir la degradación del suelo y estabilizar la productividad agrícola a largo plazo.",
    "cronograma": "a. Año 1: Registro digital del 100% de predios en zonas de ladera. b. Año 2: Implementación de programas de rotación biológica en el 30% de la superficie cultivable. c. Año 3: Construcción del 100% de casetas de acopio para envases de agroquímicos. d. Año 4: Reducción del 15% en el uso de fertilizantes sintéticos.",
    "kpi": "Tasa de Materia Orgánica en Suelo (MOS) / Rendimiento TM/Ha.",
    "hitos": "Verificación física de rotación de cultivos y auditoría del inventario de casetas de acopio construidas."
  },
  {
    "id": 2,
    "title": "GESTIÓN INTEGRAL DEL \"CORAZÓN HÍDRICO\" Y PÁRAMOS",
    "description": "Blindaje jurídico y físico de las zonas de recarga hídrica sobre los 3,800 m.s.n.m..",
    "problema": "La frontera agrícola está \"perforando\" la batería de agua del Carchi, arriesgando el suministro para consumo e industria.",
    "objetivo": "Asegurar el balance hídrico del cantón mediante la protección del ecosistema de páramo.",
    "cronograma": "a. Año 1: Delimitación satelital y física de la zona de exclusión agrícola. b. Año 2: Reforestación de 50 hectáreas anuales con especies nativas. c. Año 3: Instalación de sensores de monitoreo de caudal en tiempo real. d. Año 4: Obtención de certificación \"Cantón Protector de Páramos\".",
    "kpi": "Índice de Integridad del Ecosistema / Caudal de estiaje (m³/s).",
    "hitos": "Constatación por GPS de áreas de exclusión y conteo de plantas nativas establecidas en cuencas."
  },
  {
    "id": 3,
    "title": "RETENCIÓN DE TALENTO JOVEN Y RELEVO GENERACIONAL",
    "description": "Creación de un ecosistema de formación técnica y emprendimiento para la juventud rural.",
    "problema": "Emigración masiva de jóvenes (44.9% de la población actual) debido a la precariedad laboral del jornalero.",
    "objetivo": "Transformar el trabajo jornalero en empleo técnico calificado para retener el talento local.",
    "cronograma": "a. Año 1: Lanzamiento de la Escuela de Innovación Rural (200 becarios). b. Año 2: Convenios de pasantías pagas en la Agroindustria 2.0 local. c. Año 3: Financiamiento directo para 20 micro-emprendimientos tecnológicos. d. Año 4: Reducción del 20% en la tasa de emigración juvenil.",
    "kpi": "% de jóvenes en empleos técnicos / Tasa de deserción escolar (actual 7%).",
    "hitos": "Verificación de registros de asistencia en la Escuela y desembolso efectivo de créditos productivos."
  },
  {
    "id": 4,
    "title": "TRANSICIÓN HACIA LA \"AGROINDUSTRIA 2.0\" (OCÉANOS AZULES)",
    "description": "Escalabilidad tecnológica de la cadena láctea para producir quesos de especialidad.",
    "problema": "Baja competitividad frente a grandes industrias al vender solo leche cruda; dependencia de intermediarios.",
    "objetivo": "Especializar la producción en quesos madurados y fermentados para exportación.",
    "cronograma": "a. Año 1: Adopción masiva de cultivos microbianos especializados en PYMES. b. Año 2: Lanzamiento de la Marca Territorial \"San Pedro de Huaca\". c. Año 3: Automatización del 50% de plantas con cámaras de maduración controladas. d. Año 4: Primer embarque de exportación bajo normas ISO/INEN.",
    "kpi": "% de productos con valor agregado / Ventas internacionales (USD).",
    "hitos": "Inspección técnica de laboratorios lácteos y verificación de uso de fermentos certificados."
  },
  {
    "id": 5,
    "title": "REHABILITACIÓN INTEGRAL DE INFRAESTRUCTURA BÁSICA",
    "description": "Modernización de los sistemas hídricos y de saneamiento ambiental.",
    "problema": "Colapso de sistemas en invierno (agua con lodo), malos olores en plantas de tratamiento y déficit de alcantarillado rural.",
    "objetivo": "Garantizar agua de calidad y saneamiento para obtener certificaciones internacionales.",
    "cronograma": "a. Año 1: Repotenciación de la Planta Yamba y eliminación de turbidez. b. Año 2: Cobertura del 100% de alcantarillado en Mariscal Sucre. c. Año 3: Construcción de nueva planta de tratamiento con control de olores. d. Año 4: Certificación sanitaria internacional del sistema.",
    "kpi": "Índice de calidad de agua (norma INEN) / % Cobertura saneamiento.",
    "hitos": "Análisis de laboratorio de agua en grifos finales y bitácora de mantenimiento de PTAR."
  },
  {
    "id": 6,
    "title": "SOBERANÍA DIGITAL Y CONECTIVIDAD RURAL",
    "description": "Despliegue de infraestructura tecnológica para la agricultura de precisión (AgTech).",
    "problema": "Nula especialización digital; brecha tecnológica severa en el campo.",
    "objetivo": "Eliminar el analfabetismo digital y tecnificar el monitoreo de cultivos.",
    "cronograma": "a. Año 1: Wifi gratuito en las 12 comunidades rurales. b. Año 2: Alfabetización digital técnica para el 100% de la PEA agropecuaria. c. Año 3: Implementación de plataforma SaaS para comercio directo. d. Año 4: Despliegue de red de drones y sensores de humedad.",
    "kpi": "% Penetración banda ancha rural / # Productores usando AgTech.",
    "hitos": "Pruebas de velocidad de conexión en plazas rurales y verificación física de sensores en predios."
  },
  {
    "id": 7,
    "title": "EFICIENCIA LOGÍSTICA Y CONECTIVIDAD TERCIARIA",
    "description": "Potenciación de las arterias viales que conectan las fincas con la Panamericana E35.",
    "problema": "Vías secundarias en estado deplorable; productos atascados en el lodo en invierno.",
    "objetivo": "Capitalizar la inversión provincial para asegurar la salida eficiente de la producción.",
    "cronograma": "a. Año 1: Mantenimiento preventivo de 15 km anuales de vías. b. Año 2: Asfaltado del eje estratégico Palestina - Agua Amarilla - Huaca. c. Año 3: Repotenciación total del equipo caminero municipal. d. Año 4: Reducción del 25% en tiempos de transporte finca-mercado.",
    "kpi": "Km de red terciaria operativa en invierno / Costo logístico por TM.",
    "hitos": "Medición de espesor de lastrado y operatividad de cunetas en tramos críticos."
  },
  {
    "id": 8,
    "title": "DIVERSIFICACIÓN PRODUCTIVA SUSTENTABLE",
    "description": "Transición científica del monocultivo hacia cultivos de alta rentabilidad y ciclo largo.",
    "problema": "Vulnerabilidad económica extrema por la volatilidad del precio de la papa.",
    "objetivo": "Reducir la dependencia de la papa mediante frutales andinos y floricultura.",
    "cronograma": "a. Año 1: Establecimiento de 5 predios piloto de frutales de altura. b. Año 2: Programa de incentivos fiscales para cultivos de ciclo largo. c. Año 3: Instalación de centros de acopio diversificados. d. Año 4: 20% de ingresos cantonales provienen de cultivos no tradicionales.",
    "kpi": "Índice de diversificación productiva / Rentabilidad neta por Ha.",
    "hitos": "Inspección física de cultivos de frutales andinos y registros de venta en centros de acopio."
  },
  {
    "id": 9,
    "title": "POTENCIACIÓN DEL BINOMIO BIO-TURISMO Y PATRIMONIO",
    "description": "Integración de la Reserva Guanderas y el Santuario de \"La Purita\" en un sector de servicios.",
    "problema": "Joyas turísticas y culturales subexplotadas; falta de infraestructura de servicios (hosterías/gastronomía).",
    "objetivo": "Activar el turismo como motor de inyección de capital fresco a la economía local.",
    "cronograma": "a. Año 1: Adecuación técnica de infraestructura en bienes patrimoniales. b. Año 2: Creación del corredor turístico \"Guanderas - Santuario\". c. Año 3: Capacitación masiva en guianza especializada y gastronomía. d. Año 4: Incremento del 40% en el gasto promedio por turista.",
    "kpi": "# Visitantes anuales / # Empleos en sector servicios.",
    "hitos": "Inventario de atractivos registrados y verificación de certificaciones de guías locales."
  },
  {
    "id": 10,
    "title": "FORTALECIMIENTO DE LA SEGURIDAD Y GOBERNANZA DE DATOS",
    "description": "Modernización administrativa y tecnológica para el control territorial y transparencia.",
    "problema": "Desconexión ciudadana con el GAD; presencia de sitios inseguros y recorte del 9.42% en transferencias.",
    "objetivo": "Optimizar la gestión mediante digitalización total y sistemas inteligentes de seguridad.",
    "cronograma": "a. Año 1: Digitalización del 100% de trámites vía GOB.ec. b. Año 2: Sistema de videovigilancia robusto en los 17 barrios. c. Año 3: Presupuestos participativos basados en datos de NBI. d. Año 4: Incremento de la capacidad operativa municipal a 25 puntos.",
    "kpi": "Índice de Transparencia Administrativa / % Trámites en línea.",
    "hitos": "Testeo de trámites digitales y verificación operativa de cámaras de seguridad en tiempo real."
  }
];

export function StrategicPlan() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);

  return (
    <section id="strategic-plan" className="relative py-24 px-6 md:px-12 bg-[#050B16] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#E4A837]/10 to-transparent pointer-events-none blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4A837]/10 border border-[#E4A837]/20 text-[#E4A837] text-xs font-bold tracking-widest uppercase mb-4">
            <Zap className="w-3 h-3" />
            Plan Operativo 2027–2031
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Marco Estratégico de <span className="text-[#E4A837]">Gobernanza Técnica</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Este Informe Maestro abandona la intuición política para consolidar una Arquitectura de Datos basada en la Soberanía Digital. 
            La hoja de ruta 2027-2031 se fundamenta en la resiliencia del suelo, la tecnificación agroindustrial y la infraestructura de saneamiento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {PILLARS_DATA.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
              onClick={() => setSelectedPillar(pillar)}
              className="group relative bg-[#0D1525]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:border-[#E4A837]/50"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-5 h-5 text-[#E4A837]" />
              </div>
              
              <div className="w-10 h-10 rounded-lg bg-[#E4A837]/20 flex items-center justify-center text-[#E4A837] font-black text-lg mb-4 border border-[#E4A837]/30">
                {pillar.id}
              </div>
              
              <h3 className="text-white font-bold text-sm leading-snug mb-3 min-h-[42px] group-hover:text-[#E4A837] transition-colors">
                {pillar.title}
              </h3>
              
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                {pillar.description}
              </p>

              <div className="mt-4 pt-4 border-top border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                  Ver Detalles
                </span>
                <div className="h-px flex-1 bg-white/10 mx-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Integration */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPillar(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0F172A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-8 border-b border-white/5 bg-gradient-to-r from-[#E4A837]/5 to-transparent flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-[#E4A837] text-black text-[10px] font-black rounded-md">PILAR {selectedPillar.id}</span>
                    <span className="text-[#E4A837]/50 text-[10px] font-bold tracking-widest uppercase">Estrategia Técnica 2027</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                    {selectedPillar.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedPillar(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-red-500 transition-colors text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Item 1: Problema */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#E4A837]">
                      <Activity className="w-5 h-5" />
                      <h4 className="font-bold text-sm uppercase tracking-wider">Descripción del Problema</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed pl-7 border-l border-[#E4A837]/20">
                      {selectedPillar.problema}
                    </p>
                  </div>

                  {/* Item 2: Objetivo */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Target className="w-5 h-5" />
                      <h4 className="font-bold text-sm uppercase tracking-wider">Objetivo Global</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed pl-7 border-l border-cyan-400/20">
                      {selectedPillar.objetivo}
                    </p>
                  </div>
                </div>

                {/* Item 3: Cronograma */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#E4A837]">
                    <Calendar className="w-5 h-5" />
                    <h4 className="font-bold text-sm uppercase tracking-wider">Cronograma y Metas</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-7">
                    {selectedPillar.cronograma.split(/[a-d]\.\s/).filter(Boolean).map((step, i) => (
                      <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 flex gap-3">
                        <span className="text-[#E4A837] font-black opacity-40">0{i+1}</span>
                        <p className="text-xs text-gray-400 capitalize-first">{step.trim()}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Item 4: KPI */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-green-400">
                      <BarChart3 className="w-5 h-5" />
                      <h4 className="font-bold text-sm uppercase tracking-wider">Indicadores de Gestión KPI</h4>
                    </div>
                    <div className="bg-green-400/5 p-4 rounded-xl border border-green-400/10 pl-7">
                       <p className="text-gray-300 text-sm font-medium italic">
                         {selectedPillar.kpi}
                       </p>
                    </div>
                  </div>

                  {/* Item 5: Hitos */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#E4A837]">
                      <ShieldCheck className="w-5 h-5" />
                      <h4 className="font-bold text-sm uppercase tracking-wider">Hitos de Auditoría</h4>
                    </div>
                    <div className="bg-[#E4A837]/5 p-4 rounded-xl border border-[#E4A837]/10 pl-7">
                       <p className="text-gray-300 text-sm leading-relaxed">
                         {selectedPillar.hitos}
                       </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-[#050B16] border-t border-white/5 flex justify-end">
                 <button 
                  onClick={() => setSelectedPillar(null)}
                  className="px-6 py-2 bg-gradient-to-r from-[#E4A837] to-[#B8860B] text-black font-bold rounded-lg hover:scale-105 transition-transform"
                 >
                   Entendido
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E4A837;
          border-radius: 10px;
        }
        .capitalize-first::first-letter {
          text-transform: uppercase;
        }
      `}</style>
    </section>
  );
}
