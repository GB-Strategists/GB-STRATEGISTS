"use client";

import React, { useEffect, useRef } from 'react';

/**
 * Manifesto Component - GB STRATEGISTS
 * Filosofía corporativa y Diamond Core Engine (Three.js).
 */
export const Manifesto = () => {
  const diamondRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !diamondRef.current || !window.THREE) return;
    const THREE = window.THREE;
    const container = diamondRef.current;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ 
      canvas: container.querySelector('canvas') as HTMLCanvasElement, 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(100, 100);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometry = new THREE.OctahedronGeometry(1, 0);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x050B16,
      metalness: 0.9,
      roughness: 0.05,
      transmission: 0.9,
      transparent: true,
      opacity: 0.8,
      clearcoat: 1.0,
      ior: 2.4,
      thickness: 1.0
    });
    const mesh = new THREE.Mesh(geometry, material);
    
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0xE4A837, transparent: true, opacity: 0.8 })
    );
    mesh.add(edges);
    scene.add(mesh);

    const light = new THREE.PointLight(0x24A8E1, 2, 10);
    light.position.set(2, 2, 2);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    let frameId: number;
    const animate = () => {
      mesh.rotation.y += 0.01;
      mesh.rotation.x += 0.005;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
    };
  }, []);

  return (
    <section id="manifesto" className="bg-[#050B16] py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER FILOSÓFICO */}
        <div className="text-center mb-24 reveal">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#24A8E1] to-transparent mx-auto mb-10" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight uppercase font-sans">
            <span className="text-[#E4A837] block">NOSOTROS NO COMPETIMOS.</span>
            <span className="text-white">NOSOTROS DEFINIMOS</span> <span className="text-[#24A8E1]">LA SOBERANÍA.</span>
          </h2>
          
          {/* DIAMOND CORE ENGINE */}
          <div ref={diamondRef} className="w-[100px] h-[100px] mx-auto mt-8 relative">
            <canvas id="diamondCanvas" className="w-full h-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center reveal">
          <div className="space-y-10">
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed font-sans">
              Apagar incendios no es una estrategia; es una sentencia. En el campo y en la ciudad, el miedo que quita el sueño a un líder es que hoy sea la última vez que pisa su oficina. La falta de planificación estratégica destruye en minutos lo que tomó décadas construir.
            </p>
            
            <div className="border-l-8 border-[#E4A837] bg-[#24A8E1]/5 p-8 backdrop-blur-sm">
              <span className="block text-[#E4A837] font-black text-xl mb-3 tracking-wide font-sans">NUESTRA MISIÓN ES ERRADICAR LA REACTIVIDAD.</span>
              <span className="block text-[#24A8E1] text-lg font-medium leading-snug">Transformamos la emergencia operativa en Comandos de Élite Mundial orquestados por Proactividad Agéntica.</span>
            </div>

            <div className="space-y-6">
              <p className="font-sans font-black text-xl leading-tight">
                <span className="text-[#E4A837]">EL ÉXITO</span> <span className="text-[#24A8E1]">NO ES UNA PROMESA; ES UNA ARQUITECTURA PREDICTIVA.</span>
              </p>
              <p className="text-[#8892b0] text-lg italic leading-relaxed font-light">
                "Sustituimos la incertidumbre por Decision Intelligence. Mientras la competencia analiza el pasado, nosotros orquestamos una infraestructura que simula el futuro de su ROI en tiempo real. No gestionamos anuncios; construimos una Soberanía Digital diseñada para ser la Fuente de Verdad Primordial ante los algoritmos generativos del mundo."
              </p>
            </div>
          </div>

          {/* NEURAL CORE ENGINE (PHOLDER OR THREE) */}
          <div className="relative aspect-square bg-black/40 border border-[#E4A837]/20 flex items-center justify-center overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#050B16] via-transparent to-transparent z-10" />
             <div className="text-[#24A8E1]/20 font-mono text-[10vw] font-black select-none group-hover:scale-110 transition-transform duration-1000">NEURAL CORE</div>
             {/* Aquí se inyectará el canvas neural si se requiere más adelante */}
          </div>
        </div>
      </div>

      {/* SCROLLING TERMS (URGENCIA VITAL) */}
      <div className="mt-32 w-full overflow-hidden border-y border-white/5 py-6 bg-white/[0.02]">
        <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap gap-16">
          {[1,2,3,4].map(i => (
            <span key={i} className="text-[11px] font-mono text-[#E4A837]/60 tracking-[0.3em] uppercase">
              "Bienvenido al núcleo donde la precisión científica se encuentra con la Urgencia Vital." GB Strategists ◆ 
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
