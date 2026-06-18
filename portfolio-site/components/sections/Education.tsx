"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    period: "2012 – 2022",
    level: "Primary & Secondary",
    badge: "KG – 10th CBSE",
    institution: "Shrimant Shivajiraje English Medium School",
    location: "Phaltan, Maharashtra",
    icon: "🏫",
    highlight: "CBSE",
  },
  {
    period: "2022 – 2023",
    level: "Junior College — 11th",
    badge: "11th CBSE",
    institution: "VPEMS",
    location: "Baramati, Maharashtra",
    icon: "🏛️",
    highlight: "CBSE",
  },
  {
    period: "2023 – 2024",
    level: "Junior College — 12th",
    badge: "12th HSC",
    institution: "Shri Siddheshwar Public School & Junior College",
    location: "Baramati, Maharashtra",
    icon: "🏛️",
    highlight: "HSC Board",
  },
  {
    period: "2024 – Present",
    level: "Senior College",
    badge: "B.Tech CSE (Data Science)",
    institution: "MIT Academy of Engineering",
    location: "Pune, Maharashtra",
    icon: "👨‍🎓",
    highlight: "Current",
    isCurrent: true,
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-label", {
        y: 20, opacity: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".edu-label", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".edu-heading", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".edu-heading", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".edu-card", {
        y: 40, opacity: 0, duration: 0.65, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".edu-card", start: "top 88%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="education"
      className="section-y"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="section-inner">

        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="edu-label" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span className="font-mono-custom" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              06 / Education
            </span>
            <div style={{ height: "1px", width: "48px", backgroundColor: "var(--border-strong)" }} />
          </div>
          <h2 className="edu-heading" style={{
            margin: "0 0 0.75rem",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}>
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p style={{ margin: 0, fontSize: "0.975rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
            A decade-long academic journey from Phaltan to Pune.
          </p>
        </div>

        {/* Education cards — vertical timeline */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* Vertical connecting line */}
          <div style={{
            position: "absolute",
            left: "23px",
            top: "48px",
            bottom: "48px",
            width: "1px",
            backgroundColor: "var(--border)",
            zIndex: 0,
          }} />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="edu-card"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1.25rem",
                position: "relative",
                zIndex: 1,
              }}
              whileHover={{ x: 4, transition: { duration: 0.18 } }}
            >
              {/* Icon circle */}
              <div style={{
                width: "46px", height: "46px",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem",
                flexShrink: 0,
                backgroundColor: edu.isCurrent ? "var(--text-primary)" : "var(--background)",
                border: `1px solid ${edu.isCurrent ? "var(--text-primary)" : "var(--border-strong)"}`,
                boxShadow: edu.isCurrent ? "0 0 0 4px rgba(255,255,255,0.08)" : "none",
                zIndex: 2,
              }}>
                <span style={{ filter: edu.isCurrent ? "none" : undefined }}>{edu.icon}</span>
              </div>

              {/* Card content */}
              <div style={{
                flex: 1,
                padding: "1.25rem 1.5rem",
                borderRadius: "12px",
                border: `1px solid ${edu.isCurrent ? "var(--border-strong)" : "var(--border)"}`,
                backgroundColor: "var(--background)",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Current badge glow */}
                {edu.isCurrent && (
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                    background: "linear-gradient(90deg, transparent, var(--text-primary), transparent)",
                    opacity: 0.4,
                  }} />
                )}

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                  <div>
                    {/* Period + badges */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                      <span className="font-mono-custom" style={{
                        fontSize: "0.65rem", fontWeight: 700,
                        color: "var(--text-muted)",
                        letterSpacing: "0.04em",
                      }}>
                        {edu.period}
                      </span>
                      <span style={{
                        padding: "2px 8px", borderRadius: "4px",
                        backgroundColor: "var(--surface-2)",
                        color: "var(--text-muted)",
                        fontSize: "0.62rem", fontWeight: 600,
                      }}>
                        {edu.badge}
                      </span>
                      {edu.isCurrent && (
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: "4px",
                          padding: "2px 8px", borderRadius: "4px",
                          backgroundColor: "rgba(34,197,94,0.12)",
                          border: "1px solid rgba(34,197,94,0.25)",
                          color: "#22c55e",
                          fontSize: "0.62rem", fontWeight: 700,
                        }}>
                          <span className="pulse-animation" style={{
                            display: "inline-block", width: "5px", height: "5px",
                            borderRadius: "50%", backgroundColor: "#22c55e",
                          }} />
                          Ongoing
                        </span>
                      )}
                    </div>

                    {/* Level */}
                    <p style={{ margin: "0 0 0.25rem", fontSize: "0.68rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {edu.level}
                    </p>

                    {/* Institution */}
                    <h3 style={{ margin: "0 0 0.25rem", fontWeight: 700, fontSize: "0.925rem", color: "var(--text-primary)", lineHeight: 1.4 }}>
                      {edu.institution}
                    </h3>

                    {/* Location */}
                    <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      📍 {edu.location}
                    </p>
                  </div>

                  {/* Highlight badge */}
                  <span style={{
                    padding: "4px 12px",
                    borderRadius: "99px",
                    border: "1px solid var(--border-strong)",
                    backgroundColor: "var(--surface)",
                    color: "var(--text-secondary)",
                    fontSize: "0.68rem", fontWeight: 700,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}>
                    {edu.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
