'use client';

import { useEffect } from 'react';

/**
 * Global Error Boundary for Next.js 15 / React 19.
 * Handles catastrophic system errors with an elite visual feedback.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Audit error log in corporate telemetry
    console.error('[GB-DNA: SYSTEM ERROR]', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-10 bg-[#050B16] text-white">
      <div className="text-center space-y-10 max-w-2xl">
        <div className="w-24 h-24 mx-auto bg-red-500/10 border border-red-500/20 flex items-center justify-center rounded-full animate-pulse">
           <span className="text-red-500 text-3xl">⚠️</span>
        </div>
        
        <h1 className="text-4xl font-black tracking-tighter uppercase font-sans">
          Protocolo de Error Detectado
        </h1>
        
        <p className="text-[#8892b0] font-mono text-sm leading-relaxed">
          Se ha detectado una anomalía en la orquestación del núcleo.<br />
          Digest: <span className="text-[#24A8E1]">{error.digest || 'UNTRUSTED_SOURCE'}</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => reset()}
            className="px-8 py-4 bg-[#E4A837] text-black font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-[0_10px_30px_rgba(228,168,55,0.2)]"
          >
            Reiniciar Núcleo
          </button>
          
          <a
            href="/"
            className="px-8 py-4 bg-transparent border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
          >
            Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
}
