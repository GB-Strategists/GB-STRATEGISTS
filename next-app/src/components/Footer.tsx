"use client";

import React from 'react';

/**
 * Footer Component - GB STRATEGISTS
 * Marca, locaciones globales y botón de rescate agéntico.
 */
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050B16] py-24 border-t border-white/5 relative z-30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20 items-start">
        
        {/* BRAND COL */}
        <div className="md:col-span-2 space-y-8">
          <h3 className="text-3xl font-black tracking-tighter text-white uppercase font-sans">GB STRATEGISTS</h3>
          <p className="text-[#8892b0] text-[15px] leading-relaxed max-w-sm">
            Entidad de Autoridad Digital certificada por Google. Pioneros en IA Agéntica y GEO en LATAM.<br />
            <span className="font-mono text-[10px] text-[#24A8E1] tracking-[0.2em] mt-4 block uppercase font-bold">LCP &lt;1s · Lighthouse 97 · 30 años · ROI validado</span>
          </p>
          
          {/* LOCATIONS */}
          <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-white/5">
            {['COLOMBIA', 'ECUADOR', 'PERÚ', 'EEUU', 'GLOBAL'].map((loc) => (
              <div key={loc} className="flex flex-col items-center gap-3 group cursor-help">
                <span className="text-[9px] font-mono text-[#E4A837] tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">{loc}</span>
                <div className="w-8 h-5 bg-white/5 border border-white/10 group-hover:border-[#24A8E1]/40 overflow-hidden transition-all shadow-sm group-hover:shadow-[0_0_10px_rgba(36,168,225,0.2)]">
                   <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LINKS COL 1 */}
        <div className="flex flex-col gap-6">
          <h4 className="font-mono text-[11px] text-[#E4A837] font-bold tracking-[0.3em] uppercase mb-4">NAVEGACIÓN</h4>
          {['INICIO', 'NOSOTROS', 'GB NEXUS', 'ECOSISTEMA'].map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(' ', '')}`} 
              aria-label={`Ir a sección ${link}`}
              className="text-[#ccd6f6] hover:text-[#E4A837] text-[15px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E4A837]"
            >
              {link}
            </a>
          ))}
        </div>

        {/* LINKS COL 2 (Social/Case Studies) */}
        <div className="flex flex-col gap-6">
          <h4 className="font-mono text-[11px] text-[#E4A837] font-bold tracking-[0.3em] uppercase mb-4">CONECTA</h4>
          {[
            { label: 'Instagram', url: 'https://www.instagram.com/haciendasanjoseec/' },
            { label: 'LinkedIn', url: '#' },
            { label: 'X (Twitter)', url: '#' },
            { label: 'WhatsApp', url: 'https://wa.me/593995173861' }
          ].map(social => (
            <a 
              key={social.label} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Ver perfil de ${social.label}`}
              className="text-[#ccd6f6] hover:text-[#E4A837] text-[15px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E4A837]"
            >
              {social.label}
            </a>
          ))}
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 pb-20">
         <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase">© 2026 GB STRATEGISTS · PTRE-2026 PROTOCOL · SOBERANÍA TOTAL</div>
         <div className="flex items-center gap-8">
            <button 
              onClick={scrollToTop}
              className="text-[10px] font-mono text-[#24A8E1] hover:text-[#E4A837] tracking-[0.2em] uppercase transition-colors cursor-pointer"
            >
              [ VOLVER AL NÚCLEO ]
            </button>
            <div className="text-[10px] font-mono text-[#24A8E1] tracking-[0.2em] uppercase">Designed for Excellence</div>
         </div>
      </div>

      {/* BOTÓN DE RESCATE ESTRATÉGICO */}
      <a 
        href="https://wa.me/593995173861?text=Hola+Guido,+solicito+intervención+de+élite+bajo+el+protocolo+PTRE-2026.+Mi+operación+requiere+orquestación+agéntica+inmediata." 
        aria-label="Activar protocolo de rescate estratégico mediante WhatsApp"
        className="fixed bottom-10 right-10 z-[5000] flex items-center gap-4 bg-[#E4A837] text-black px-6 py-4 font-black tracking-tighter uppercase text-xs hover:scale-105 transition-all shadow-[0_20px_40px_rgba(228,168,55,0.4)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <span className="hidden sm:inline">ORQUESTACIÓN AGÉNTICA: ACTIVAR PROTOCOLO</span>
        <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center animate-bounce">
           <i className="fas fa-bolt text-lg" />
        </div>
      </a>
    </footer>
  );
};
