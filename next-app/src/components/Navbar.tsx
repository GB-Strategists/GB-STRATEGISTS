"use client";

import React from 'react';
import Image from 'next/image';

/**
 * Navbar Component - GB STRATEGISTS
 * Navegación suspendida con blur y modo diferencia.
 */
export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[1000] px-10 py-5 flex justify-between items-center mix-blend-difference backdrop-blur-md bg-[#050B16]/20">
      <div className="nav-logo">
        <Image 
          src="/assets/foto/IconoyGB.png" 
          alt="GB Strategists Logo" 
          width={48}
          height={48}
          className="h-12 w-auto drop-shadow-[0_0_10px_rgba(228,168,55,0.3)]"
          priority
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
