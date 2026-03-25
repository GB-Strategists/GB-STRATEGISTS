"use client";

import React from 'react';
import Image from 'next/image';

/**
 * Navbar Component - GB STRATEGISTS
 * Navegación suspendida con blur y modo diferencia.
 */
export const Navbar = () => {
  return (
    <nav 
      role="navigation" 
      aria-label="Navegación principal de élite"
      className="fixed top-0 w-full z-[1000] px-10 py-5 flex justify-between items-center mix-blend-difference backdrop-blur-md bg-[#050B16]/20"
    >
      <div className="nav-logo">
        <Image 
          src="/assets/foto/IconoyGB.png" 
          alt="GB Strategists Logo - Ir al inicio" 
          width={48}
          height={48}
          className="h-12 w-auto drop-shadow-[0_0_10px_rgba(228,168,55,0.3)]"
          priority
        />
      </div>

      <div className="flex gap-[30px] font-sans uppercase text-[0.9rem] tracking-wider">
        <a 
          href="#manifesto" 
          aria-label="Ver el manifiesto organizacional" 
          className="nav-link-elite text-white no-underline hover:text-[#E4A837] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E4A837]"
        >
          Manifesto
        </a>
        <a 
          href="#hubs" 
          aria-label="Ver los centros de inteligencia IA" 
          className="nav-link-elite text-white no-underline hover:text-[#E4A837] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E4A837]"
        >
          Intelligence Hubs
        </a>
        <a 
          href="#authority" 
          aria-label="Conocer el liderazgo estratégico" 
          className="nav-link-elite text-white no-underline hover:text-[#E4A837] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E4A837]"
        >
          Leadership
        </a>
        <a 
          href="#vault" 
          aria-label="Acceder a la bóveda de clientes exclusivos" 
          className="nav-link-elite text-[#E4A837] no-underline border border-[#E4A837] px-[15px] py-[5px] hover:bg-[#E4A837]/10 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E4A837]"
        >
          Client Vault
        </a>
      </div>
      
      <style jsx>{`
        .nav-link-elite {
          position: relative;
          display: inline-block;
        }
        .nav-link-elite::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #E4A837, #24A8E1);
          transition: width 0.35s ease;
        }
        .nav-link-elite:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};
