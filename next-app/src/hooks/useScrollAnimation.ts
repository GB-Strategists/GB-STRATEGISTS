"use client";

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
}

/**
 * Hook: useScrollAnimation
 * Implementa IntersectionObserver v1 para scroll-triggered animations.
 * Precision algoritmica: zero-dependency, native browser API.
 */
export function useScrollAnimation({ threshold = 0.15, once = true }: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, isInView };
}
