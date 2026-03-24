"use client";

import React, { useEffect, useRef } from 'react';

interface ThreeCanvasProps {
  id?: string;
  type: 'aegis' | 'geo' | 'metatron';
  height?: string;
  style?: React.CSSProperties;
}

/**
 * Generic ThreeCanvas component for procedural animations.
 * Implements "Zero-Runtime" sovereignty via React lifecycle.
 */
export const ThreeCanvas = ({ id, type, height = "250px", style }: ThreeCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;
    const THREE = (window as any).THREE;
    if (!THREE) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    let mesh: any;

    if (type === 'aegis') {
      const geo = new THREE.IcosahedronGeometry(2, 1);
      const mat = new THREE.MeshBasicMaterial({ color: 0xE4A837, wireframe: true, transparent: true, opacity: 0.6 });
      mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);
      camera.position.z = 5;
    } else if (type === 'geo') {
      const geo = new THREE.TorusKnotGeometry(1.5, 0.4, 100, 16);
      const mat = new THREE.MeshBasicMaterial({ color: 0x24A8E1, wireframe: true, transparent: true, opacity: 0.6 });
      mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);
      camera.position.z = 6;
    } else if (type === 'metatron') {
      const geo = new THREE.OctahedronGeometry(2, 2);
      const mat = new THREE.MeshBasicMaterial({ color: 0xE4A837, wireframe: true, transparent: true, opacity: 0.6 });
      mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);
      camera.position.z = 5;
    }

    const animate = () => {
      requestAnimationFrame(animate);
      if (mesh) {
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.005;
      }
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
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [type]);

  return (
    <div 
      ref={containerRef} 
      id={id} 
      className="relative overflow-hidden bg-[#050B16] border border-white/10"
      style={{ height, ...style }}
    >
        <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 border border-white/20 text-[8px] font-mono text-white/50 uppercase tracking-widest z-10">
            {type} ENGINE [60 FPS]
        </div>
    </div>
  );
};
