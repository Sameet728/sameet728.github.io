"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Wait for layout to stabilize
    const init = () => {
      const getScrollAmt = () =>
        -(track.scrollWidth - section.clientWidth + 80);

      const mm = gsap.matchMedia();

      // Desktop: Horizontal Scroll
      mm.add("(min-width: 768px)", () => {
        // Header entrance
        gsap.from(".projects-label, .projects-heading, .projects-sub", {
          y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Horizontal scroll + pin
        gsap.to(track, {
          x: getScrollAmt,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.9,
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmt())}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressFillRef.current) {
                progressFillRef.current.style.transform = `scaleX(${self.progress})`;
              }
              if (counterRef.current) {
                const idx = Math.min(
                  Math.ceil(self.progress * projects.length),
                  projects.length
                );
                counterRef.current.textContent = `${String(idx).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
              }
            },
          },
        });

        gsap.from(".proj-h-card", {
          opacity: 0,
          y: 40,
          scale: 0.96,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top top+=100",
            toggleActions: "play none none none",
          },
        });
      });

      // Mobile: Vertical Stack
      mm.add("(max-width: 767px)", () => {
        gsap.from(".projects-label, .projects-heading, .projects-sub", {
          y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.utils.toArray(".proj-h-card").forEach((card: any) => {
          gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          });
        });

        if (progressFillRef.current) progressFillRef.current.parentElement!.style.display = 'none';
        if (counterRef.current) counterRef.current.style.display = 'none';
      });

      return mm;
    };

    const ctx = init();
    return () => ctx.revert();
  }, []);

  return (
    <div className="projects-wrapper">
      <div
        ref={sectionRef}
        id="projects"
        style={{
          backgroundColor: "var(--background)",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
      {/* ── Header ───────────────────────────── */}
      <div
        className="section-inner"
        style={{
          paddingTop: "5rem",
          paddingBottom: "2.5rem",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1.5rem",
            flexWrap: "wrap",
            marginBottom: "1.75rem",
          }}
        >
          <div>
            <div
              className="projects-label"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <span
                className="font-mono-custom"
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                04 / Projects
              </span>
              <div
                style={{
                  height: "1px",
                  width: "48px",
                  backgroundColor: "var(--border-strong)",
                }}
              />
            </div>
            <h2
              className="projects-heading"
              style={{
                margin: "0 0 0.4rem",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
              }}
            >
              What I&apos;ve{" "}
              <span className="gradient-text">Built</span>
            </h2>
            <p
              className="projects-sub"
              style={{
                margin: 0,
                fontSize: "0.875rem",
                color: "var(--text-muted)",
              }}
            >
              Drag or scroll to explore →
            </p>
          </div>

          {/* Counter */}
          <span
            ref={counterRef}
            className="font-mono-custom"
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--text-muted)",
              letterSpacing: "0.04em",
            }}
          >
            01 / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Progress track */}
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--border)",
            borderRadius: "99px",
            overflow: "hidden",
          }}
        >
          <div
            ref={progressFillRef}
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "var(--text-primary)",
              borderRadius: "99px",
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.05s linear",
            }}
          />
        </div>
      </div>

      {/* ── Horizontal track ─────────────────── */}
      <div
        ref={trackRef}
        className="flex flex-col md:flex-row gap-5 md:gap-5 px-4 md:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] md:pr-[160px] pb-16 items-stretch flex-1 will-change-transform"
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="proj-h-card w-full md:w-[400px] md:min-w-[400px] rounded-[14px] border border-[var(--border)] bg-[var(--surface)] flex flex-col relative overflow-hidden cursor-default"
            whileHover={{
              y: -6,
              borderColor: "var(--border-strong)",
              transition: { type: "spring", stiffness: 260, damping: 22 },
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                height: "2px",
                background: `linear-gradient(90deg, ${project.accentColor}90, transparent)`,
                flexShrink: 0,
              }}
            />

            {/* Card thumbnail */}
            <div
              className="relative w-full overflow-hidden shrink-0 border-b border-[var(--border)] bg-[var(--surface-2)] flex items-center justify-center"
              style={{ height: "200px" }}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              ) : (
                /* Fallback abstract bg */
                <div
                  className="absolute inset-0 opacity-55"
                  style={{
                    backgroundImage: "radial-gradient(circle, var(--border-strong) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
              )}
              
              {/* Hover dark overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-0 bg-black/45 z-[2] flex items-center justify-center"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 22px",
                    borderRadius: "99px",
                    border: "1px solid rgba(255,255,255,0.35)",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    color: "#fff",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                  }}
                >
                  <ExternalLink size={13} /> View Case Study
                </Link>
              </motion.div>

              <span style={{ fontSize: "2.8rem", position: "relative", zIndex: 1 }}>
                {project.icon}
              </span>

              {/* Index + category */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  zIndex: 3,
                }}
              >
                <span
                  className="font-mono-custom"
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    opacity: 0.7,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  padding: "3px 9px",
                  borderRadius: "5px",
                  border: "1px solid var(--border-strong)",
                  backgroundColor: "var(--surface)",
                  color: "var(--text-muted)",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  zIndex: 3,
                }}
              >
                {project.category}
              </div>
            </div>

            {/* Body */}
            <div
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                flex: 1,
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0 0 0.4rem",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.8rem",
                    lineHeight: 1.7,
                    color: "var(--text-muted)",
                  }}
                >
                  {project.tagline}
                </p>
              </div>

              {/* Tech tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.375rem",
                  marginTop: "auto",
                }}
              >
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "3px 8px",
                      borderRadius: "5px",
                      backgroundColor: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                      fontSize: "0.62rem",
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span
                    style={{
                      padding: "3px 8px",
                      borderRadius: "5px",
                      backgroundColor: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                      fontSize: "0.62rem",
                      fontWeight: 500,
                    }}
                  >
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              {/* CTA */}
              <Link
                href={`/projects/${project.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  paddingTop: "0.875rem",
                  borderTop: "1px solid var(--border)",
                  marginTop: "0.375rem",
                  transition: "color 0.15s ease",
                }}
              >
                View Details <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}
