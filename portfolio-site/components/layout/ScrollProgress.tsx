"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      if (!barRef.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      barRef.current.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[9999] bg-transparent">
      <div
        ref={barRef}
        className="h-full transition-none"
        style={{
          width: "0%",
          background: "var(--text-primary)",
          boxShadow: "none",
        }}
      />
    </div>
  );
}
