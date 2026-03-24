"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ThreeCanvasProps {
  id?: string;
  type: 'aegis' | 'geo' | 'metatron';
  height?: string;
  style?: React.CSSProperties;
}

/**
 * ThreeCanvas - GB STRATEGISTS
 * Optimized for performance using IntersectionObserver and cleanup.
 * Prevents main thread blocking when not in viewport.
 */
export const ThreeCanvas = ({ id, type, height = "250px", style }: ThreeCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<any>(null);
  const frameRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current || !isVisible) return;
    
    // Check for global THREE or skip if multiple instances cause issues
    const THREE = (window as any).THREE;
    if (!THREE) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'low-power' // Better for PageSpeed on many small canvases
    });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1)); // Cap pixel ratio for many small canvases
    
    // Clear existing children
    while(container.firstChild) container.removeChild(container.firstChild);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    let mesh: any;

    if (type === 'aegis') {
      const geo = new THREE.IcosahedronGeometry(2, 1);
      const mat = new THREE.MeshBasicMaterial({ color: 0xE4A837, wireframe: true, transparent: true, opacity: 0.5 });
      mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);
      camera.position.z = 5;
    } else if (type === 'geo') {
      const geo = new THREE.TorusKnotGeometry(1.5, 0.4, 60, 10);
      const mat = new THREE.MeshBasicMaterial({ color: 0x24A8E1, wireframe: true, transparent: true, opacity: 0.5 });
      mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);
      camera.position.z = 6;
    } else if (type === 'metatron') {
      const geo = new THREE.OctahedronGeometry(2, 2);
      const mat = new THREE.MeshBasicMaterial({ color: 0xE4A837, wireframe: true, transparent: true, opacity: 0.5 });
      mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);
      camera.position.z = 5;
    }

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      if (mesh) {
        mesh.rotation.y += 0.005;
        mesh.rotation.x += 0.003;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [type, isVisible]);

  return (
    <div 
      ref={containerRef} 
      id={id} 
      className="relative overflow-hidden bg-[#050B16] border border-white/5"
      style={{ height, ...style }}
    >
        <div className="absolute top-2 left-2 px-2 py-1 bg-black/40 border border-white/10 text-[7px] font-mono text-white/30 uppercase tracking-widest z-10">
            {type} V_ENGINE {isVisible ? '[ACTIVE]' : '[IDLE]'}
        </div>
        {!isVisible && <div className="absolute inset-0 flex items-center justify-center text-[#24A8E1]/20 font-mono text-[9px] uppercase tracking-[0.4em]">Optimizing...</div>}
    </div>
  );
};
