"use client";

import React, { useEffect, useRef } from 'react';
import { ScrollingTerms } from './ScrollingTerms';

// Declaración para propósitos de tipado si Three.js se carga vía CDN
declare global {
  interface Window {
    THREE: any;
  }
}

/**
 * Hero Component - GB STRATEGISTS
 * Cumple con el estándar de "Precisión Algorítmica" y "Soberanía Digital".
 * Utiliza Tailwind v4 para el estilo y Three.js para la animación procedimental.
 */
export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;
    
    // Importación dinámica o uso de window.THREE para asegurar soberanía
    const THREE = window.THREE;
    if (!THREE) {
      console.warn('Three.js no detectado. Reintentando...');
      return;
    }

    const container = containerRef.current;
    const isMobile = window.innerWidth < 768;

    // ── SETUP ESCENA ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = isMobile ? 22 : 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const GOLD = 0xE4A837;
    const CYAN = 0x24A8E1;
    const VOID = 0x050B16;

    // Parámetros
    const ringRadius = isMobile ? 4.5 : 5.5;
    const ringTube = isMobile ? 0.10 : 0.12;
    const nodeCount = isMobile ? 8 : 20;

    // ── GRUPO CENTRAL (ARMILLARY) ──
    const armillaryGroup = new THREE.Group();
    scene.add(armillaryGroup);

    // 1. Esfera Interior
    const sphereGeo = new THREE.SphereGeometry(4, 48, 48);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: VOID,
      metalness: 0.9,
      roughness: 0.1,
      transmission: 0.3,
      thickness: 2.0,
      emissive: CYAN,
      emissiveIntensity: 0.3
    });
    const innerSphere = new THREE.Mesh(sphereGeo, sphereMat);
    armillaryGroup.add(innerSphere);

    // 2. Anillos
    const ringMat = new THREE.MeshPhysicalMaterial({
      color: GOLD,
      metalness: 1.0,
      roughness: 0.1,
      emissive: GOLD,
      emissiveIntensity: 0.4
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(ringRadius, ringTube, 24, 128), ringMat.clone());
    ring1.rotation.x = Math.PI / 2;
    armillaryGroup.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(ringRadius, ringTube, 24, 128), ringMat.clone());
    ring2.rotation.y = Math.PI * 60 / 180;
    armillaryGroup.add(ring2);

    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(ringRadius, ringTube, 24, 128), ringMat.clone());
    ring3.rotation.z = Math.PI * 120 / 180;
    armillaryGroup.add(ring3);

    // ── LUCES ──
    const innerLight = new THREE.PointLight(CYAN, 8, 20);
    scene.add(innerLight);
    const outerLight = new THREE.PointLight(GOLD, 15, 50);
    outerLight.position.set(15, 15, 15);
    scene.add(outerLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.05));

    // ── ANIMACIÓN ──
    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      armillaryGroup.rotation.y += 0.003 + (mouseX * 0.05);
      armillaryGroup.rotation.x += 0.001 - (mouseY * 0.05);

      ring1.rotation.z += 0.008;
      ring2.rotation.x += 0.006;
      ring3.rotation.y += 0.005;

      sphereMat.emissiveIntensity = 0.2 + Math.sin(t * 1.2) * 0.15;

      renderer.render(scene, camera);
    };
    animate();

    // ── CLEANUP ──
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        container.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <header className="relative min-h-[70vh] flex items-center bg-[#050B16] overflow-hidden pb-20" id="hero-sovereignty">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_#0A192F_0%,_#050B16_65%,_#050B16_100%)]" />
      
      {/* HUD Grid Overlay */}
      <div className="absolute inset-0 z-1 opacity-10 mix-blend-overlay bg-[size:50px_50px] 
        bg-[linear-gradient(rgba(36,168,225,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(36,168,225,0.1)_1px,transparent_1px)]" />

      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 z-2 pointer-events-none" />

      {/* Hero Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 flex flex-col items-center text-center">
        
        <ScrollingTerms 
          terms="PTRE-2026 // SOBERANÍA DIGITAL // AUTORIDAD ALGORÍTMICA VALIDADA // PTRE-2026 // SOBERANÍA DIGITAL // AUTORIDAD ALGORÍTMICA VALIDADA //"
          speed="20s"
          className="mb-12"
        />

        <h1 className="font-sans font-black leading-[1.05] tracking-tight mb-8 text-[clamp(2.5rem,8vw,6.5rem)] drop-shadow-[0_0_50px_rgba(5,11,22,0.95)]">
          <span className="text-[#E4A837] block">ORQUESTACIÓN</span>
          <span className="text-[#24A8E1] block">DE LA SOBERANÍA</span>
          <span className="text-[#24A8E1] block">ALGORÍTMICA</span>
        </h1>

        <p className="font-sans text-[clamp(1rem,1.8vw,1.35rem)] leading-relaxed text-[#F0F4F8] max-w-3xl mb-14 drop-shadow-[0_2px_15px_rgba(5,11,22,0.9)]">
          <strong className="text-white font-black">TRANSFORMAMOS</strong> su autoridad corporativa en un activo inexpugnable.<br/><br/>
          Simbiosis entre <strong className="text-[#24A8E1] font-bold">IA Agéntica Radical</strong> y <strong className="text-[#24A8E1] font-bold">Decision Intelligence</strong>
          <br/>transmutando el mercado en <strong className="text-[#E4A837] font-black uppercase">Soberanía Estratégica</strong>.
        </p>

        {/* Action Buttons (Prism Nav) */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-xl px-4">
          <a href="#hubs" className="group relative overflow-hidden px-10 py-5 bg-[#24A8E1]/10 border border-[#24A8E1]/40 text-white rounded-xs transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(36,168,225,0.15)] flex-1">
            <span className="relative z-10 font-bold tracking-widest uppercase text-sm">Explorar Ecosistema</span>
            <div className="absolute inset-0 bg-[#24A8E1]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a href="/vault" className="group relative overflow-hidden px-10 py-5 bg-[#E4A837]/10 border border-[#E4A837]/40 text-[#E4A837] rounded-xs transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(228,168,55,0.15)] flex-1">
            <span className="relative z-10 font-bold tracking-widest uppercase text-sm">Acceso Privado (Vault)</span>
            <div className="absolute inset-0 bg-[#E4A837]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>

        <ScrollingTerms 
          terms="GEO AUTHORITY // AGENTIC WORKFLOWS // JIT MANUFACTURING // ETHICAL GOVERNANCE // VISUAL SOVEREIGNTY // BIG FOUR COMPETITOR //"
          speed="35s"
          className="mt-20 opacity-60"
        />
      </div>
    </header>
  );
};
