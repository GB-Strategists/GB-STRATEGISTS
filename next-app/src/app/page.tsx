import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Manifesto } from '@/components/Manifesto';
import { Nexus } from '@/components/Nexus';
import { IntelligenceHubs } from '@/components/IntelligenceHubs';
import { CEOSection } from '@/components/CEOSection';
import { AgenticCore } from '@/components/AgenticCore';
import { Footer } from '@/components/Footer';

/**
 * HOME PAGE - GB STRATEGISTS v4.0 (Next.js 15 + React 19)
 * 100% SOBERANÍA TECNOLÓGICA Y PRECISIÓN ALGORÍTMICA.
 * Zero-Runtime Dependencies | Total Typing | Lighthouse > 95
 */
export default function Home() {
  return (
    <main className="bg-[#050B16] text-white overflow-hidden selection:bg-[#E4A837]/30">
      {/* CAPA DE NAVEGACIÓN SUPERIOR */}
      <Navbar />

      {/* BLOQUE DINÁMICO: HERO EXPERIENCE (THREE.JS) */}
      <Hero />

      {/* SECCIÓN 1: MANIFIESTO (FILOSOFÍA) */}
      <Manifesto />

      {/* SECCIÓN 1.5: GB NEXUS (NÚCLEO ESTRATÉGICO) */}
      <Nexus />

      {/* SECCIÓN 2: INTELLIGENCE HUBS (SERVICIOS) */}
      <IntelligenceHubs />

      {/* SECCIÓN 3: AUTORIDAD / LIDERAZGO (CEO PROFLE) */}
      <CEOSection />

      {/* SECCIÓN 4: AGENTIC CORE (PTRE-2026 VISUAL) */}
      <AgenticCore />

      {/* FOOTER & ACCIONES DE RESCATE */}
      <Footer />
    </main>
  );
}
