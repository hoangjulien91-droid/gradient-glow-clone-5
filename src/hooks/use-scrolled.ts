"use client";

import { useEffect, useState } from "react";

export default function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > threshold);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
