"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { achievements } from "@/lib/data/timeline";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ach-label", {
        y: 20, opacity: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".ach-label", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".ach-heading", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".ach-heading", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".ach-card", {
        y: 40, opacity: 0, scale: 0.97, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".ach-card", start: "top 88%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="achievements"
      className="section-y"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="section-inner">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="ach-label" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ height: "1px", width: "40px", backgroundColor: "var(--border-strong)" }} />
            <span className="font-mono-custom" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              05 / Achievements
            </span>
            <div style={{ height: "1px", width: "40px", backgroundColor: "var(--border-strong)" }} />
          </div>
          <h2 className="ach-heading" style={{
            margin: "0 0 1rem",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}>
            Milestones &amp; <span className="gradient-text">Wins</span>
          </h2>
          <p style={{ margin: 0, fontSize: "0.975rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
            Key moments that define my journey as a developer.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="ach-card"
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                backgroundColor: "var(--surface)",
              }}
              whileHover={{ scale: 1.02, borderColor: "var(--border-strong)", backgroundColor: "var(--surface-2)", transition: { duration: 0.18 } }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                {/* Icon */}
                <div style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.25rem", flexShrink: 0,
                  backgroundColor: "var(--surface-2)",
                }}>
                  {achievement.icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Highlight badge */}
                  <span style={{
                    display: "inline-block",
                    padding: "2px 8px", borderRadius: "4px",
                    backgroundColor: "var(--surface-2)",
                    color: "var(--text-muted)",
                    fontSize: "0.65rem", fontWeight: 700,
                    marginBottom: "0.5rem",
                    fontFamily: "JetBrains Mono, monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}>
                    {achievement.highlight}
                  </span>
                  <h3 style={{ margin: "0 0 0.375rem", fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)" }}>
                    {achievement.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.78rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
