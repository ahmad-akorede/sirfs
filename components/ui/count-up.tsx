"use client";

import { useEffect, useRef, useState } from "react";

function wholeNumber(value: string) {
  return /^\d{1,6}$/.test(value);
}

export function CountUp({ value }: { value: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setDisplay(value);
    if (!wholeNumber(value)) return;

    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = Number(value);
    const pad = value.length;
    let frame = 0;
    let played = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || played) return;
        played = true;
        observer.disconnect();
        const start = performance.now();
        const duration = 700;
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - progress) * (1 - progress);
          setDisplay(String(Math.round(target * eased)).padStart(pad, "0"));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.7 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
