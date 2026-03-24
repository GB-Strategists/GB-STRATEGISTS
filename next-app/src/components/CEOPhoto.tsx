"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

/**
 * CEOPhoto Component - GB STRATEGISTS
 * Efecto fotográfico cinemático con HUD y partículas.
 * Fixed: className string concatenation for build stability.
 */
export const CEOPhoto = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles: any[] = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(36, 168, 225, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[clamp(350px,45vw,580px)] overflow-hidden flex-1 min-w-[350px] bg-[#050B16] cursor-crosshair group border border-white/5">
      
      {/* IMAGEN PRINCIPAL */}
      <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105">
        <Image 
          src="/assets/foto/Firefly_GeminiFlash.png" 
          alt="MBA. Guido Ricardo Bonilla"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
          className="transition-transform duration-700"
        />
      </div>

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050B16] via-[#050B16]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050B16] to-transparent w-1/3 pointer-events-none" />

      {/* DINAMIC BORDER - Fixed String */}
      <div className={`absolute inset-0 z-20 border border-transparent pointer-events-none opacity-50 
        [background:linear-gradient(#050B16,#050B16)_padding-box,linear-gradient(135deg,#E4A837,#24A8E1,#E4A837,transparent)_border-box]
        group-hover:opacity-100 transition-opacity`} 
      />

      {/* HUD SCANNER LINE */}
      <div className="absolute left-0 w-full h-0.5 z-30 bg-gradient-to-r from-transparent via-[#24A8E1] to-transparent shadow-[0_0_12px_rgba(36,168,225,0.6)] animate-[scan_4s_ease-in-out_infinite] pointer-events-none" />

      {/* HUD CORNERS */}
      <div className="absolute inset-4 z-40 pointer-events-none opacity-60">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#E4A837] animate-pulse" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#E4A837] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#24A8E1] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#24A8E1] animate-pulse" />
      </div>

      {/* HUD DATA */}
      <div className="absolute top-6 left-6 z-50 font-mono text-[9px] text-[#24A8E1]/70 leading-relaxed pointer-events-none hidden sm:block">
        <div className="flex items-center gap-2 animate-[flicker_3s_infinite]"><span className="w-1.5 h-1.5 bg-[#24A8E1] rounded-full animate-pulse" /> GB-DNA.v4.0 ▸ PERFIL VERIFICADO</div>
        <div className="flex items-center gap-2 animate-[flicker_4s_infinite]"><span className="w-1.5 h-1.5 bg-[#24A8E1] rounded-full animate-pulse" /> GEO_AUTH: ██████████ 100%</div>
        <div className="flex items-center gap-2 animate-[flicker_2s_infinite]"><span className="w-1.5 h-1.5 bg-[#E4A837] rounded-full animate-pulse" /> STATUS: ELITE MUNDIAL ◆</div>
      </div>

      {/* PARTICLES CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 z-20 pointer-events-none opacity-60" />

      {/* IDENTITY BADGE */}
      <div className="absolute bottom-0 left-0 right-0 z-50 p-8 pt-12 bg-gradient-to-t from-[#050B16] to-transparent pointer-events-none">
        <span className="inline-block font-mono text-[9px] text-[#24A8E1] border border-[#24A8E1]/40 px-3 py-1 bg-[#24A8E1]/5 tracking-[0.2em] mb-3">LEADERSHIP PROFILE // CEO VERIFIED</span>
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-wider mb-1">MBA. GUIDO RICARDO BONILLA</h2>
        <span className="block font-mono text-[10px] text-[#E4A837] tracking-[0.3em] uppercase">Chief Executive Officer · GB Strategists</span>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes flicker {
          0%, 90%, 100% { opacity: 1; }
          92% { opacity: 0.1; }
          95% { opacity: 1; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
