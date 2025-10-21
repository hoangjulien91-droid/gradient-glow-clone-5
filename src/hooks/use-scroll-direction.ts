"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "top";

export default function useScrollDirection(threshold = 50): Direction {
  const [direction, setDirection] = useState<Direction>("top");
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset;
        if (y < threshold) {
          setDirection("top");
        } else if (y > lastY.current) {
          setDirection("down");
        } else if (y < lastY.current) {
          setDirection("up");
        }
        lastY.current = y;
        ticking.current = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return direction;
}
