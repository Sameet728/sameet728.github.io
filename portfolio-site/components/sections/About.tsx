"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Cpu, Layers, Zap, Trophy, GitBranch } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "1+", label: "Hackathons Won" },
  { value: "6+", label: "Tech Stacks" },
  { value: "2nd", label: "Year B.Tech" },
];

const interests = [
  { icon: Code2, label: "Full Stack Dev" },
  { icon: Cpu, label: "Artificial Intelligence" },
  { icon: Layers, label: "System Design" },
  { icon: Zap, label: "Product Development" },
  { icon: Trophy, label: "Hackathons" },
  { icon: GitBranch, label: "Problem Solving" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-label", {
        y: 20, opacity: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".about-label", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".about-heading", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".about-heading", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".about-para", {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".about-para", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".about-chip", {
        scale: 0.85, opacity: 0, duration: 0.45, stagger: 0.07, ease: "back.out(1.7)",
        scrollTrigger: { trigger: ".about-chip", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".about-stat-card", {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".about-stat-card", start: "top 88%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="about"
      className="section-y"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="section-inner">

        {/* Section label */}
        <div className="about-label" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
          <span className="font-mono-custom" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            01 / About
          </span>
          <div style={{ height: "1px", width: "48px", backgroundColor: "var(--border-strong)" }} />
        </div>

        <div className="about-grid">

          {/* LEFT */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <h2 className="about-heading" style={{
              margin: 0,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}>
              Building <span className="gradient-text">Real-World</span> Solutions
            </h2>

            <p className="about-para" style={{ margin: 0, fontSize: "0.975rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
              I&apos;m a Computer Science Engineering student at{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                MIT Academy of Engineering, Pune
              </span>
              , passionate about building scalable applications, AI-powered systems, and digital products that solve real problems.
            </p>

            <p className="about-para" style={{ margin: 0, fontSize: "0.975rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
              My approach: instead of tutorial clones, I build{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                production-grade applications
              </span>{" "}
              with real users and real impact — from AI interview platforms to esports management ecosystems.
            </p>

            {/* Interest chips */}
            <div>
              <p style={{ margin: "0 0 0.75rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                What I enjoy
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {interests.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="about-chip"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-strong)",
                      backgroundColor: "var(--surface)",
                      color: "var(--text-secondary)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    <Icon size={12} style={{ color: "var(--text-muted)" }} />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Stats + Education */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div className="stats-grid">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="about-stat-card"
                  style={{
                    padding: "1.5rem",
                    borderRadius: "12px",
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <p className="stat-number gradient-text" style={{ margin: "0 0 0.25rem", fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>
                    {value}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-muted)" }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div
              className="about-stat-card"
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                backgroundColor: "var(--surface)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  backgroundColor: "var(--surface-2)", fontSize: "1.1rem",
                }}>
                  🎓
                </div>
                <div>
                  <p style={{ margin: "0 0 0.25rem", fontWeight: 600, fontSize: "0.875rem", color: "var(--text-primary)" }}>
                    B.Tech Computer Science Engineering
                  </p>
                  <p style={{ margin: "0 0 0.625rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    MIT Academy of Engineering, Pune
                  </p>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    padding: "3px 10px", borderRadius: "5px",
                    backgroundColor: "var(--surface-2)",
                    color: "var(--text-secondary)",
                    fontSize: "0.7rem", fontWeight: 600,
                  }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block" }} />
                    2nd Year · 2023–2027
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
