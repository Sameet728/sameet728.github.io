"use client";

import { useEffect, useRef } from "react";

const CHARS = "!<>-_\\/[]{}=+*^?#@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface TextScrambleProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** Delay in ms before scramble starts */
  delay?: number;
  /** Speed — lower = faster. Default 2 */
  speed?: number;
}

/**
 * Renders text with a GSAP-style character scramble decode effect.
 * Each character cycles through random chars before resolving to the real letter.
 */
export default function TextScramble({
  text,
  className,
  style,
  delay = 0,
  speed = 2,
}: TextScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    type QueueItem = { from: string; to: string; start: number; end: number; char: string };
    let queue: QueueItem[] = [];
    let frame = 0;
    let raf: number;

    const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

    const tick = () => {
      let output = "";
      let complete = 0;

      for (let i = 0; i < queue.length; i++) {
        const item = queue[i];
        if (frame >= item.end) {
          complete++;
          output += item.to === " " ? "&nbsp;" : item.to;
        } else if (frame >= item.start) {
          if (!item.char || Math.random() < 0.28) {
            item.char = randomChar();
          }
          output += `<span style="opacity:0.35;color:var(--text-muted)">${item.char}</span>`;
        } else {
          output += item.to === " " ? "&nbsp;" : item.from;
        }
      }

      el.innerHTML = output;

      if (complete === queue.length) {
        el.textContent = text;
        return;
      }

      frame++;
      raf = requestAnimationFrame(tick);
    };

    const run = () => {
      queue = text.split("").map((char, i) => ({
        from: randomChar(),
        to: char,
        start: Math.floor(i * speed),
        end: Math.floor(i * speed) + Math.floor(Math.random() * 8) + 6,
        char: "",
      }));
      frame = 0;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    const timer = setTimeout(run, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [text, delay, speed]);

  return (
    <span ref={ref} className={className} style={style}>
      {text}
    </span>
  );
}
