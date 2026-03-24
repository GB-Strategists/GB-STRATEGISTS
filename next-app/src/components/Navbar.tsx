"use client";

import React from 'react';

/**
 * Navbar Component - GB STRATEGISTS
 * Navegación suspendida con blur y modo diferencia.
 */
export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[1000] px-10 py-5 flex justify-between items-center mix-blend-difference backdrop-blur-md bg-[#050B16]/20">
      <div className="nav-logo">
        <img 
          src="data:image/webp;base64,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* TRUNCATED *"
          alt="GB Strategists Logo" 
          className="h-12 w-auto drop-shadow-[0_0_10px_rgba(228,168,55,0.3)]"
        />
      </div>
      <div className="flex gap-[30px] font-sans uppercase text-[0.9rem] tracking-wider">
        <a href="#manifesto" className="nav-link-elite text-white no-underline hover:text-[#E4A837] transition-all">Manifesto</a>
        <a href="#hubs" className="nav-link-elite text-white no-underline hover:text-[#E4A837] transition-all">Intelligence Hubs</a>
        <a href="#authority" className="nav-link-elite text-white no-underline hover:text-[#E4A837] transition-all">Leadership</a>
        <a href="#vault" className="nav-link-elite text-[#E4A837] no-underline border border-[#E4A837] px-[15px] py-[5px] hover:bg-[#E4A837]/10 transition-all">
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
