"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { skills } from "@/lib/data/skills";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-label", {
        y: 20, opacity: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".skills-label", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".skills-heading", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".skills-heading", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".skill-card", {
        y: 50, opacity: 0, duration: 0.7, stagger: 0.09, ease: "power3.out",
        scrollTrigger: { trigger: ".skill-card", start: "top 88%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="skills"
      className="section-y"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="section-inner">

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="skills-label" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span className="font-mono-custom" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              02 / Skills
            </span>
            <div style={{ height: "1px", width: "48px", backgroundColor: "var(--border-strong)" }} />
          </div>
          <h2 className="skills-heading" style={{
            margin: "0 0 1rem",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}>
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p style={{ margin: 0, fontSize: "0.975rem", color: "var(--text-muted)", maxWidth: "480px", lineHeight: 1.7 }}>
            Technologies I use to build full stack applications, AI systems, and digital products.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "1.25rem" }}>
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              className="skill-card"
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                backgroundColor: "var(--background)",
                cursor: "default",
              }}
              whileHover={{ scale: 1.02, borderColor: "var(--border-strong)", transition: { duration: 0.18 } }}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{
                  width: "34px", height: "34px", borderRadius: "8px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem",
                  backgroundColor: "var(--surface-2)",
                }}>
                  {skill.icon}
                </div>
                <h3 style={{ margin: 0, fontWeight: 600, fontSize: "0.825rem", color: "var(--text-primary)" }}>
                  {skill.category}
                </h3>
              </div>

              {/* Skill pills with logos */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {skill.items.map((item) => (
                  <motion.span
                    key={item.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      backgroundColor: "var(--surface)",
                      color: "var(--text-secondary)",
                      fontSize: "0.72rem",
                      fontWeight: 500,
                    }}
                    whileHover={{
                      backgroundColor: "var(--surface-2)",
                      color: "var(--text-primary)",
                      borderColor: "var(--border-strong)",
                      scale: 1.06,
                    }}
                    transition={{ duration: 0.12 }}
                  >
                    {/* Inline SVG logo */}
                    {item.logo && (
                      <span
                        style={{ width: "14px", height: "14px", display: "inline-flex", flexShrink: 0 }}
                        dangerouslySetInnerHTML={{ __html: item.logo }}
                      />
                    )}
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
