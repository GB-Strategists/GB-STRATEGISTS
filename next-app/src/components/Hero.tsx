"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollingTerms } from './ScrollingTerms';

declare global {
  interface Window { THREE: any; }
}

/**
 * Hero Component — GB STRATEGISTS GEMINI PRO HIGH
 * - Framer Motion: fade-in + parallax sutil en H1
 * - Video hero loop (WebM/MP4) como fondo atmosférico
 * - Three.js Armillary Sphere en panel lateral desktop
 * - CTA con hover glow dorado
 */
export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef  = useRef<any>(null);
  const heroRef      = useRef<HTMLElement>(null);

  // Parallax sutil en scroll
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY       = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Cubic ease as string (Framer Motion accepts string bezier)
  const ease = 'cubic-bezier(0.22, 1, 0.36, 1)';

  // Three.js Armillary
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;
    const THREE = window.THREE;
    if (!THREE) return;

    const container = containerRef.current;
    const isMobile  = window.innerWidth < 768;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = isMobile ? 22 : 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const GOLD = 0xE4A837;
    const CYAN = 0x24A8E1;
    const VOID = 0x050B16;

    const ringRadius = isMobile ? 4.5 : 5.5;
    const ringTube   = isMobile ? 0.10 : 0.12;

    const armillaryGroup = new THREE.Group();
    scene.add(armillaryGroup);

    const sphereGeo = new THREE.SphereGeometry(4, 48, 48);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: VOID, metalness: 0.9, roughness: 0.1,
      transmission: 0.3, thickness: 2.0,
      emissive: CYAN, emissiveIntensity: 0.3
    });
    armillaryGroup.add(new THREE.Mesh(sphereGeo, sphereMat));

    const ringMat = new THREE.MeshPhysicalMaterial({
      color: GOLD, metalness: 1.0, roughness: 0.08,
      emissive: GOLD, emissiveIntensity: 0.45
    });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(ringRadius, ringTube, 24, 128), ringMat.clone());
    ring1.rotation.x = Math.PI / 2;
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(ringRadius, ringTube, 24, 128), ringMat.clone());
    ring2.rotation.y = Math.PI * 60 / 180;
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(ringRadius, ringTube, 24, 128), ringMat.clone());
    ring3.rotation.z = Math.PI * 120 / 180;
    armillaryGroup.add(ring1, ring2, ring3);

    const innerLight = new THREE.PointLight(CYAN, 8, 20);
    scene.add(innerLight);
    const outerLight = new THREE.PointLight(GOLD, 15, 50);
    outerLight.position.set(15, 15, 15);
    scene.add(outerLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.05));

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
      armillaryGroup.rotation.y += 0.003 + mouseX * 0.05;
      armillaryGroup.rotation.x += 0.001 - mouseY * 0.05;
      ring1.rotation.z += 0.008;
      ring2.rotation.x += 0.006;
      ring3.rotation.y += 0.005;
      sphereMat.emissiveIntensity = 0.2 + Math.sin(t * 1.2) * 0.15;
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
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
      }
    };
  }, []);

  return (
    <header
      ref={heroRef}
      className="relative min-h-screen flex flex-col lg:flex-row items-center bg-[#050B16] overflow-hidden"
      id="hero-sovereignty"
    >
      {/* === GRADIENT ATMOSPHERE — Gold ↔ Cyan === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(228,168,55,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_100%,rgba(36,168,225,0.10)_0%,transparent_60%)]" />
        {/* HUD Grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[size:50px_50px]
          bg-[linear-gradient(rgba(228,168,55,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(36,168,225,0.3)_1px,transparent_1px)]" />
      </div>

      {/* === VIDEO HERO LOOP — Atmospheric, muted === */}
      <video
        className="absolute inset-0 z-[1] w-full h-full object-cover opacity-[0.06] pointer-events-none"
        autoPlay muted loop playsInline preload="none" aria-hidden="true"
      >
        <source src="/assets/video/hero-loop.webm" type="video/webm" />
        <source src="/assets/video/hero-loop.mp4"  type="video/mp4" />
      </video>

      {/* === THREE.JS — Desktop Right Panel === */}
      <div
        ref={containerRef}
        className="relative z-[2] w-full h-[50vh] lg:h-full lg:w-2/5 lg:order-2 pointer-events-none"
      />

      {/* === HERO CONTENT — Left Panel, Parallax === */}
      <motion.div
        className="relative z-10 w-full lg:w-3/5 lg:order-1 px-6 pt-36 pb-16 lg:pt-0 lg:pb-0 lg:pl-16 xl:pl-32 flex flex-col items-center lg:items-start text-center lg:text-left"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        {/* Top scrolling badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <ScrollingTerms
            terms="PTRE-2026 // SOBERANÍA DIGITAL // AUTORIDAD ALGORÍTMICA VALIDADA // GEO CERTIFIED // PTRE-2026 //"
            speed="20s"
            className="mb-10 w-full"
          />
        </motion.div>

        {/* H1 — Staggered Fade-In with Parallax */}
        <h1 className="font-sans font-black leading-[1.02] tracking-tight mb-8 text-[clamp(2.2rem,6vw,5rem)]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="block"
            style={{
              background: 'linear-gradient(135deg, #E4A837 0%, #f0c060 50%, #E4A837 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(228,168,55,0.4))'
            }}
          >
            ORQUESTACIÓN
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.30, ease }}
            className="block text-[#24A8E1]"
            style={{ textShadow: '0 0 40px rgba(36,168,225,0.35)' }}
          >
            DE LA SOBERANÍA
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="block text-[#24A8E1]"
            style={{ textShadow: '0 0 40px rgba(36,168,225,0.35)' }}
          >
            ALGORÍTMICA
          </motion.span>
        </h1>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.60, ease }}
          className="font-sans text-[clamp(0.95rem,1.5vw,1.18rem)] leading-relaxed text-[#8892b0] max-w-2xl mb-12"
        >
          <strong className="text-white font-black">TRANSFORMAMOS</strong> su autoridad corporativa en un activo inexpugnable.{' '}
          Simbiosis entre{' '}
          <strong className="text-[#24A8E1]">IA Agéntica Radical</strong>{' '}
          y{' '}
          <strong className="text-[#24A8E1]">Decision Intelligence</strong>
          {' '}— transmutando el mercado en{' '}
          <strong className="text-[#E4A837] uppercase">Soberanía Estratégica</strong>.
        </motion.p>

        {/* CTA Buttons — Primary with Gold Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.75, ease }}
          className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full max-w-xl"
        >
          {/* Secondary CTA */}
          <a
            href="#hubs"
            className="group relative overflow-hidden px-10 py-4 border border-[#24A8E1]/40 text-white uppercase font-bold tracking-widest text-sm flex-1 text-center
              transition-all duration-300 bg-[#24A8E1]/8
              hover:bg-[#24A8E1]/20 hover:shadow-[0_0_30px_rgba(36,168,225,0.35)] hover:border-[#24A8E1]/70"
          >
            <span className="relative z-10">Explorar Ecosistema</span>
          </a>

          {/* PRIMARY CTA — Gold Glow Hover */}
          <a
            href="#nexus"
            className="group relative overflow-hidden px-10 py-4 border border-[#E4A837] text-black uppercase font-black tracking-widest text-sm flex-1 text-center
              bg-[#E4A837] hover:bg-[#f0c060]
              transition-all duration-300
              shadow-[0_0_20px_rgba(228,168,55,0.4)]
              hover:shadow-[0_0_60px_rgba(228,168,55,0.85)]
              hover:scale-[1.03] active:scale-95"
          >
            <span className="relative z-10">Activar Soberanía</span>
            {/* Gold radial glow on hover */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
              bg-[radial-gradient(circle_at_center,rgba(255,220,100,0.6),transparent_70%)]" />
          </a>
        </motion.div>

        {/* Bottom scrolling badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: 'easeOut' }}
          className="w-full mt-16"
        >
          <ScrollingTerms
            terms="GEO AUTHORITY // AGENTIC WORKFLOWS // JIT MANUFACTURING // ETHICAL GOVERNANCE // VISUAL SOVEREIGNTY // BIG FOUR COMPETITOR //"
            speed="38s"
            className="opacity-40"
          />
        </motion.div>
      </motion.div>
    </header>
  );
};
