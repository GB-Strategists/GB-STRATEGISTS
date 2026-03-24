"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ThreeCanvasProps {
  id?: string;
  type: 'aegis' | 'geo' | 'metatron' | 'neural';
  height?: string;
  style?: React.CSSProperties;
}

/**
 * ThreeCanvas - GB STRATEGISTS
 * Optimized for performance using IntersectionObserver and cleanup.
 * Support for 'neural' mode for IA Nodal visualization.
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
    
    const THREE = (window as any).THREE;
    if (!THREE) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    while(container.firstChild) container.removeChild(container.firstChild);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    let mesh: any;
    let particles: any;
    let lines: any;

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
    } else if (type === 'neural') {
      // Create a cloud of points (nodes)
      const count = 40;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 8;
      }
      
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const particleMat = new THREE.PointsMaterial({ 
        color: 0x24A8E1, 
        size: 0.15, 
        transparent: true, 
        opacity: 0.8 
      });
      
      particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);
      
      // Lines connecting random points
      const lineMat = new THREE.LineBasicMaterial({ 
        color: 0x24A8E1, 
        transparent: true, 
        opacity: 0.15 
      });
      
      const segments = 100;
      const linePositions = new Float32Array(segments * 2 * 3);
      for (let i = 0; i < segments; i++) {
        const idx1 = Math.floor(Math.random() * count) * 3;
        const idx2 = Math.floor(Math.random() * count) * 3;
        linePositions[i * 6] = positions[idx1];
        linePositions[i * 6 + 1] = positions[idx1 + 1];
        linePositions[i * 6 + 2] = positions[idx1 + 2];
        linePositions[i * 6 + 3] = positions[idx2];
        linePositions[i * 6 + 4] = positions[idx2 + 1];
        linePositions[i * 6 + 5] = positions[idx2 + 2];
      }
      
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lines = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(lines);
      
      camera.position.z = 8;
    }

    const clock = new THREE.Clock();
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      
      if (mesh) {
        mesh.rotation.y += 0.005;
        mesh.rotation.x += 0.003;
      }
      
      if (particles && lines) {
        particles.rotation.y += 0.002;
        particles.rotation.x += 0.001;
        lines.rotation.y += 0.002;
        lines.rotation.x += 0.001;
        
        // Dynamic opacity pulse
        particles.material.opacity = 0.5 + Math.sin(elapsed * 2) * 0.3;
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
        <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 border border-white/10 text-[8px] font-mono text-[#24A8E1]/80 uppercase tracking-[0.2em] z-10 rounded-xs">
            {type.toUpperCase()}_ENGINE_{isVisible ? 'ONLINE' : 'IDLE'}
        </div>
        {!isVisible && <div className="absolute inset-0 flex items-center justify-center text-[#24A8E1]/10 font-mono text-[10px] uppercase tracking-[0.5em] animate-pulse">Power Saving...</div>}
    </div>
  );
};
