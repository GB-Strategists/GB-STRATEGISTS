import { Navbar } from '@/components/Navbar';
import { StrategicPlan } from '@/components/StrategicPlan';
import { Hero } from '@/components/Hero';
import { Manifesto } from '@/components/Manifesto';
import { Nexus } from '@/components/Nexus';
import { IntelligenceHubs } from '@/components/IntelligenceHubs';
import { TechnicalCore } from '@/components/TechnicalCore';
import { CEOSection } from '@/components/CEOSection';
import { Footer } from '@/components/Footer';

/**
 * HOME PAGE - GB STRATEGISTS v4.2 (Next.js 15 + React 19)
 * 100% SOBERANÍA TECNOLÓGICA Y PRECISIÓN ALGORÍTMICA.
 * Zero-Runtime Dependencies | Total Typing | Lighthouse > 95
 */
export default function Home() {
  return (
    <main className="bg-[#050B16] text-white overflow-hidden selection:bg-[#E4A837]/30">
      {/* CAPA DE NAVEGACIÓN SUPERIOR */}
      <Navbar />

      {/* SECCIÓN 0: PLAN ESTRATÉGICO DE GOBERNANZA TÉCNICA (NUEVO) */}
      <StrategicPlan />

      {/* BLOQUE DINÁMICO: HERO EXPERIENCE (THREE.JS) */}
      <Hero />

      {/* SECCIÓN 1: MANIFIESTO (FILOSOFÍA) */}
      <Manifesto />

      {/* SECCIÓN 1.5: GB NEXUS (NÚCLEO ESTRATÉGICO) */}
      <Nexus />

      {/* SECCIÓN 2: INTELLIGENCE HUBS (SERVICIOS) */}
      <IntelligenceHubs />

      {/* SECCIÓN 3: NÚCLEO TÉCNICO (DATA VIZ + 3D) */}
      <TechnicalCore />

      {/* SECCIÓN 4: LIDERAZGO (CEO PROFILE) */}
      <CEOSection />

      {/* FOOTER & ACCIONES DE RESCATE */}
      <Footer />
    </main>
  );
}
