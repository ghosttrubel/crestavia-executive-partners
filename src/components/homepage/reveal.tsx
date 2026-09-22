"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation: Animation | undefined;
    const stopMotion = () => { if (preference.matches) animation?.finish(); };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (!preference.matches && element.animate) {
        animation = element.animate(
          [{ opacity: 0.65, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 500, easing: "cubic-bezier(.2,.65,.3,1)" },
        );
      }
      observer.disconnect();
    }, { threshold: 0.08 });
    observer.observe(element);
    preference.addEventListener("change", stopMotion);
    return () => { observer.disconnect(); animation?.cancel(); preference.removeEventListener("change", stopMotion); };
  }, []);
  return <div ref={ref}>{children}</div>;
}
