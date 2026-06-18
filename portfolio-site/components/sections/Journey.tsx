"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { timeline } from "@/lib/data/timeline";

gsap.registerPlugin(ScrollTrigger);

function TimelineCard({ item, side }: { item: typeof timeline[0]; side: "left" | "right" }) {
  return (
    <motion.div
      className={`timeline-card ${side === "left" ? "timeline-card-left" : "timeline-card-right"}`}
      style={{
        padding: "1.5rem",
        borderRadius: "12px",
        border: "1px solid var(--border)",
        backgroundColor: "var(--surface)",
        position: "relative",
      }}
      whileHover={{ scale: 1.02, borderColor: "var(--border-strong)" }}
      transition={{ type: "spring", stiffness: 250, damping: 24 }}
    >
      {/* Icon + Year + Badge row */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.625rem", flexWrap: "wrap" }}>
        <span style={{ fontSize: "1rem", lineHeight: 1 }}>{item.icon}</span>
        <span style={{
          padding: "2px 8px", borderRadius: "4px",
          backgroundColor: "var(--surface-2)",
          color: "var(--text-muted)",
          fontSize: "0.65rem", fontWeight: 700,
          fontFamily: "JetBrains Mono, monospace",
        }}>
          {item.year}
        </span>
        {item.badge && (
          <span style={{
            padding: "2px 8px", borderRadius: "4px",
            backgroundColor: "var(--border)",
            color: "var(--text-secondary)",
            fontSize: "0.63rem", fontWeight: 600,
          }}>
            {item.badge}
          </span>
        )}
        {item.highlight && (
          <span style={{
            padding: "2px 8px", borderRadius: "4px",
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid var(--border-strong)",
            color: "var(--text-primary)",
            fontSize: "0.63rem", fontWeight: 700,
          }}>
            ★ {item.highlight}
          </span>
        )}
      </div>

      <h3 style={{ margin: "0 0 0.4rem", fontWeight: 700, fontSize: "0.9rem", color: "var(--text-primary)" }}>
        {item.title}
      </h3>
      <p style={{ margin: "0 0 0.875rem", fontSize: "0.8rem", lineHeight: 1.7, color: "var(--text-muted)" }}>
        {item.description}
      </p>

      {/* Tags */}
      {item.tags && item.tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
          {item.tags.map((tag) => (
            <span key={tag} style={{
              padding: "2px 8px",
              borderRadius: "5px",
              backgroundColor: "var(--background)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              fontSize: "0.62rem",
              fontWeight: 500,
            }}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Redirect Button */}
      {item.link && (
        <div style={{ marginTop: "1.25rem", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
          <Link href={item.link}>
            <motion.div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "999px",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                fontSize: "0.75rem",
                fontWeight: 600,
                textDecoration: "none",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{
                backgroundColor: "rgba(150, 150, 150, 0.15)",
                borderColor: "var(--accent)",
                color: "var(--accent)",
                paddingRight: "20px",
              }}
              transition={{ duration: 0.2 }}
            >
              {item.linkText || "Read More"}
              <ArrowRight size={14} />
            </motion.div>
          </Link>
        </div>
      )}
    </motion.div>
  );
}

export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".journey-label", {
        y: 20, opacity: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".journey-label", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".journey-heading", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".journey-heading", start: "top 88%", toggleActions: "play none none reverse" },
      });

      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1, transformOrigin: "top", ease: "none",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 75%",
              end: "bottom 25%",
              scrub: 1,
            },
          }
        );
      }

      gsap.from(".timeline-card", {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".timeline-card", start: "top 88%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="journey"
      className="section-y"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="section-inner" style={{ maxWidth: "960px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div className="journey-label" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ height: "1px", width: "40px", backgroundColor: "var(--border-strong)" }} />
            <span className="font-mono-custom" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              03 / Journey
            </span>
            <div style={{ height: "1px", width: "40px", backgroundColor: "var(--border-strong)" }} />
          </div>
          <h2 className="journey-heading" style={{
            margin: "0 0 1rem",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}>
            My <span className="gradient-text">Story</span>
          </h2>
          <p style={{ margin: 0, fontSize: "0.975rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
            From first web page to government projects and AI systems — year by year.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Center vertical line — desktop only */}
          <div
            className="timeline-center-line"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              backgroundColor: "var(--border)",
              transform: "translateX(-50%)",
            }}
          >
            <div
              ref={lineRef}
              style={{ width: "100%", height: "100%", backgroundColor: "var(--border-strong)" }}
            />
          </div>

          {/* Mobile left line */}
          <div
            className="timeline-mobile-line"
            style={{
              position: "absolute",
              left: "16px",
              top: 0, bottom: 0,
              width: "1px",
              backgroundColor: "var(--border)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="timeline-row">

                  {/* Center dot — desktop only */}
                  <motion.div
                    className="timeline-center-dot"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      border: "1px solid var(--border-strong)",
                      backgroundColor: "var(--background)",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      zIndex: 10,
                    }}
                    whileInView={{ scale: [0.5, 1.15, 1] }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    {item.icon}
                  </motion.div>


                  {/* Card placement */}
                  {isLeft ? (
                    <>
                      <TimelineCard item={item} side="left" />
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <TimelineCard item={item} side="right" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
