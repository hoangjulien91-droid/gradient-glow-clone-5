"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param options - Configuration options for the intersection observer
 * @returns ref and inView state from react-intersection-observer
 */
export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = "0px 0px -100px 0px",
  } = options;

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  return { ref, inView };
}

/**
 * Hook for staggered animations on multiple elements
 * @param count - Number of elements to animate
 * @param options - Animation options
 */
export function useStaggerAnimation(
  count: number,
  options: UseScrollAnimationOptions = {}
) {
  const { ref, inView } = useScrollAnimation(options);
  const delays = Array.from({ length: count }, (_, i) => i * 0.1);

  return { ref, inView, delays };
}

/**
 * Hook for parallax scroll effects
 * @param speed - Speed of parallax effect (0-1, lower is slower)
 */
export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const scrolled = window.scrollY;
      const elementTop = elementRef.current.offsetTop;
      const elementHeight = elementRef.current.offsetHeight;

      // Only apply parallax when element is in viewport
      if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + elementHeight) {
        const offset = (scrolled - elementTop) * speed;
        elementRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return elementRef;
}