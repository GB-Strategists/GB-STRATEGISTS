"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollingTerms } from './ScrollingTerms';

declare global {
  interface Window { THREE: any; }
}

/**
 * Hero Component — GB STRATEGISTS GEMINI PRO HIGH (Centered Version)
 * - Focused on centering the algorithmic authority text.
 * - Repositioned geometry to be visible at the top/back.
 */
export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef  = useRef<any>(null);
  const heroRef      = useRef<HTMLElement>(null);

  // Parallax sutil en scroll
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY       = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);  // Cubic ease for animations - cast as any to bypass strict framer-motion type checks
  const ease = [0.22, 1, 0.36, 1] as any;

  // Three.js Armillary
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;
    const THREE = window.THREE;
    if (!THREE) return;

    const container = containerRef.current;
    const isMobile  = window.innerWidth < 768;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    // Move camera slightly to frame the sphere nicely at the top-center
    camera.position.z = isMobile ? 22 : 18;
    camera.position.y = isMobile ? 3 : 2.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const GOLD = 0xE4A837;
    const CYAN = 0x24A8E1;
    const VOID = 0x050B16;

    const ringRadius = isMobile ? 4.8 : 5.4;
    const ringTube   = isMobile ? 0.08 : 0.05;

    const armillaryGroup = new THREE.Group();
    scene.add(armillaryGroup);
    // Posicionamos el grupo un poco más arriba para que no lo tape el texto
    armillaryGroup.position.y = 3;

    const sphereGeo = new THREE.SphereGeometry(3.2, 64, 64);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: VOID, metalness: 0.95, roughness: 0.05,
      transmission: 0.2, thickness: 3.0,
      emissive: CYAN, emissiveIntensity: 0.4
    });
    armillaryGroup.add(new THREE.Mesh(sphereGeo, sphereMat));

    const ringMat = new THREE.MeshPhysicalMaterial({
      color: GOLD, metalness: 1.0, roughness: 0.05,
      emissive: GOLD, emissiveIntensity: 0.5
    });
    
    const rings: any[] = [];
    for(let i=0; i<3; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(ringRadius, ringTube, 32, 128), ringMat.clone());
        ring.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        armillaryGroup.add(ring);
        rings.push(ring);
    }

    const innerLight = new THREE.PointLight(CYAN, 10, 25);
    scene.add(innerLight);
    const outerLight = new THREE.PointLight(GOLD, 20, 60);
    outerLight.position.set(15, 15, 15);
    scene.add(outerLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.02));

    let mouseX = 0, mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouse);

    const clock = new THREE.Clock();
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      
      armillaryGroup.rotation.y += 0.002 + mouseX * 0.03;
      armillaryGroup.rotation.x += 0.001 - mouseY * 0.03;
      
      if (rings.length >= 3) {
        rings[0].rotation.z += 0.006;
        rings[1].rotation.x += 0.008;
        rings[2].rotation.y += 0.007;
      }
      
      // Floating effect
      armillaryGroup.position.y = 3 + Math.sin(t * 0.4) * 0.4;
      
      sphereMat.emissiveIntensity = 0.3 + Math.sin(t * 1.5) * 0.2;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <header
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-start bg-[#050B16] overflow-hidden"
      id="hero-sovereignty"
    >
      {/* === GEMINI PRO HIGH ATMOSPHERE === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep Gradient Void */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B16] via-[#050B16] to-[#0A192F]" />
        
        {/* Dynamic Glow Orbs - Explicit Gold and Cyan Gradients requested by user */}
        <div className="absolute top-0 left-1/4 w-[60vw] h-[60vw] bg-[#E4A837]/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] bg-[#24A8E1]/10 blur-[140px] rounded-full" />
        
        {/* Core Content Framing - Rich Gold ↔ Cyan transition */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,rgba(228,168,55,0.2)_0%,transparent_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_100%,rgba(36,168,225,0.18)_0%,transparent_80%)]" />
        
        {/* Technical HUD Grid */}
        <div className="absolute inset-0 opacity-[0.07] bg-[size:50px_50px]
          bg-[linear-gradient(rgba(228,168,55,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(36,168,225,0.2)_1px,transparent_1px)]" />
      </div>

      {/* === VIDEO HERO LOOP === */}
      <video
        className="absolute inset-0 z-[1] w-full h-full object-cover opacity-[0.06] mix-blend-screen pointer-events-none"
        autoPlay muted loop playsInline preload="none" aria-hidden="true"
      >
        <source src="/assets/video/hero-loop.webm" type="video/webm" />
        <source src="/assets/video/hero-loop.mp4"  type="video/mp4" />
      </video>

      {/* === THREE.JS BACKDROP === */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-[2] w-full h-full pointer-events-none opacity-90"
      />

      {/* === HERO CONTENT — Premium Alignment === */}
      <motion.div
        className="relative z-10 w-full max-w-7xl px-6 pt-[38vh] pb-16 flex flex-col items-center text-center"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        {/* Top scrolling badge - Identity Layer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="w-full max-w-4xl mb-14 overflow-hidden"
        >
          <div className="flex items-center gap-4 justify-center mb-4">
             <span className="h-[1px] w-12 bg-[#E4A837]/40" />
             <span className="font-mono text-[10px] text-[#E4A837] tracking-[0.5em] uppercase">Protocolo Soberano v4.1</span>
             <span className="h-[1px] w-12 bg-[#E4A837]/40" />
          </div>
          <ScrollingTerms
            terms="PTRE-2026 // SOBERANÍA DIGITAL // AUTORIDAD ALGORÍTMICA VALIDADA // GEO CERTIFIED // PTRE-2026 //"
            speed="18s"
            className="opacity-80 text-[#E4A837]/60"
          />
        </motion.div>

        {/* H1 — Kinetic Typography with Golden Gradient */}
        <h1 className="font-sans font-black leading-[0.95] tracking-tighter mb-12 text-[clamp(2.8rem,9vw,6rem)] uppercase">
          <motion.span
            initial={{ opacity: 0, filter: 'blur(20px)', y: 40 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="block mb-2"
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #E4A837 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(228,168,55,0.3))'
            }}
          >
            ORQUESTACIÓN
          </motion.span>

          <motion.span
            initial={{ opacity: 0, filter: 'blur(20px)', y: 40 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease }}
            className="block text-[#24A8E1]"
            style={{ 
              textShadow: '0 0 60px rgba(36, 168, 225, 0.5)',
              letterSpacing: '-0.02em'
            }}
          >
            DE LA SOBERANÍA
          </motion.span>

          <motion.span
            initial={{ opacity: 0, filter: 'blur(20px)', y: 40 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease }}
            className="block text-[#24A8E1]"
            style={{ textShadow: '0 0 60px rgba(36, 168, 225, 0.5)' }}
          >
            ALGORÍTMICA
          </motion.span>
        </h1>

        {/* Lead Text — High-Fidelity Detail */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease }}
          className="font-sans text-[clamp(1.1rem,2vw,1.4rem)] leading-relaxed text-[#8892b0] max-w-4xl mb-20 font-light"
        >
          <span className="text-white font-medium">Elevamos su dominio corporativo</span> a la cima de la jerarquía digital. 
          Ejecución quirúrgica mediante <span className="text-[#24A8E1] font-bold">IA Agéntica de Élite</span> 
          y <span className="text-[#E4A837] font-black italic">Arquitectura Soberana</span>.
        </motion.p>

        {/* CTA — Premium Interaction Hook with Golden Hover requested */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2, ease }}
          className="flex flex-col sm:flex-row gap-8 justify-center w-full max-w-xl"
        >
          <a
            href="#hubs"
            aria-label="Explorar el Ecosistema de Hubs de Inteligencia"
            className="group relative overflow-hidden px-14 py-6 border border-[#24A8E1]/30 text-[#24A8E1] uppercase font-bold tracking-[0.3em] text-[11px] flex-1 text-center
              transition-all duration-500 bg-[#24A8E1]/5 backdrop-blur-md
              hover:bg-[#24A8E1]/10 hover:border-[#24A8E1]/60 hover:shadow-[0_0_50px_rgba(36,168,225,0.3)]
              hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24A8E1]"
          >
            <span className="relative z-10">Ecosistema Hubs</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>

          <a
            href="#nexus"
            aria-label="Activar el protocolo de comunicación Nexus"
            className="group relative overflow-hidden px-14 py-6 border border-[#E4A837] text-black uppercase font-black tracking-[0.3em] text-[11px] flex-1 text-center
              bg-[#E4A837] hover:bg-[#f2b94a] transition-all duration-500
              shadow-[0_0_40px_rgba(228,168,55,0.3)]
              hover:shadow-[0_0_80px_rgba(228,168,55,1)]
              hover:-translate-y-1 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4A837]"
          >
            <span className="relative z-10">Activar Nexus</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </motion.div>

        {/* Bottom Metadata Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
          className="w-full mt-28 border-t border-white/5 pt-12"
        >
          <ScrollingTerms
            terms="GEO AUTHORITY // AGENTIC WORKFLOWS // JIT MANUFACTURING // ETHICAL GOVERNANCE // VISUAL SOVEREIGNTY // BIG FOUR COMPETITOR //"
            speed="50s"
            className="opacity-40 text-[#24A8E1]/40"
          />
        </motion.div>
      </motion.div>
    </header>
  );
};
