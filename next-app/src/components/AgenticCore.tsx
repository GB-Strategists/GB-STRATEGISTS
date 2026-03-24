"use client";

import React, { useEffect, useRef } from 'react';

/**
 * AgenticCore Component - GB STRATEGISTS
 * Icosahedral Core + Agentic Torus Knot (Three.js Visual).
 */
export const AgenticCore = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current || !window.THREE) return;
    const THREE = window.THREE;
    const canvas = canvasRef.current;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const coreGeom = new THREE.IcosahedronGeometry(1.5, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
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
    const core = new THREE.Mesh(coreGeom, coreMat);
    const coreEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(coreGeom),
      new THREE.LineBasicMaterial({ color: 0xE4A837, transparent: true, opacity: 0.9 })
    );
    core.add(coreEdges);
    scene.add(core);

    const knotGeom = new THREE.TorusKnotGeometry(2.5, 0.05, 120, 20);
    const knotMat = new THREE.LineBasicMaterial({ color: 0x24A8E1, transparent: true, opacity: 0.6 });
    const knot = new THREE.LineSegments(new THREE.EdgesGeometry(knotGeom), knotMat);
    scene.add(knot);

    // DUST PARTICLES
    const dustCount = 100;
    const dustArray = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i++) {
      dustArray[i] = (Math.random() - 0.5) * 15;
    }
    const dustGeom = new THREE.BufferGeometry();
    dustGeom.setAttribute('position', new THREE.BufferAttribute(dustArray, 3));
    const dustMat = new THREE.PointsMaterial({ color: 0x24A8E1, size: 0.02, transparent: true, opacity: 0.4 });
    const dust = new THREE.Points(dustGeom, dustMat);
    scene.add(dust);

    let frameId: number;
    const animate = () => {
      core.rotation.y += 0.01;
      knot.rotation.y -= 0.005;
      knot.rotation.x += 0.002;
      dust.rotation.y += 0.001;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] bg-[#050B16] border-y border-white/5 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-6 left-8 font-mono text-[9px] text-[#E4A837] tracking-[0.2em] opacity-60 uppercase">PTRE-2026 // ICOSAHEDRAL CORE + AGENTIC TORUS KNOT // 60 FPS</div>
      <div className="absolute bottom-6 right-8 font-mono text-[9px] text-[#24A8E1] tracking-[0.2em] opacity-60 uppercase">SIMBIOSIS: HUMAN CORE ◆ AI ORBIT</div>
    </div>
  );
};
