"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let animFrame: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth lerp (0.07 = slow silky follow)
      currentX += (mouseX - currentX) * 0.07;
      currentY += (mouseY - currentY) * 0.07;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX - 350}px, ${currentY - 350}px)`;
      }
      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="cursor-glow"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.018) 35%, transparent 65%)",
      }}
    />
  );
}
