"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Download, ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextScramble from "@/components/ui/TextScramble";

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set elements invisible BEFORE animating (prevents SSR flash)
    gsap.set([".hero-badge", ".hero-title-word", ".hero-sub", ".hero-actions", ".hero-socials-row"], {
      opacity: 0,
      y: 30,
    });
    gsap.set(".hero-portrait-col", { opacity: 0, x: 60 });
    gsap.set(".hero-float-tag", { opacity: 0, y: 16 });

    const tl = gsap.timeline({ delay: 0.05 });

    tl.to(".hero-badge", { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" })
      .to(".hero-title-word", {
        opacity: 1, y: 0, duration: 0.75, ease: "power3.out", stagger: 0.11,
      }, "-=0.25")
      .to(".hero-sub", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .to(".hero-actions", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.35")
      .to(".hero-socials-row", { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }, "-=0.25")
      .to(".hero-portrait-col", { opacity: 1, x: 0, duration: 0.9, ease: "power2.out" }, "-=0.9")
      .to(".hero-float-tag", {
        opacity: 1, y: 0, duration: 0.45, stagger: 0.13, ease: "power2.out",
      }, "-=0.5");

    // Parallax: dot grid moves slower (0.4x scroll speed)
    gsap.to(".hero-dot-grid", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Parallax: hero text drifts up slightly on scroll
    gsap.to(".hero-text", {
      y: -60,
      opacity: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "40% top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => { tl.kill(); ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--background)",
        overflow: "clip",
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "var(--hero-gradient)",
      }} />

      {/* Subtle dot grid — Vercel-style, GSAP parallax target */}
      <div
        className="hero-dot-grid"
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, var(--border-strong) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />


      {/* ── Page container ─────────────────────────── */}
      <div
        className="hero-container-pad"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(6rem, 15vh, 8rem) clamp(1.25rem, 5vw, 3rem) 5rem",
        }}
      >
        <div className="hero-layout">

          {/* ─── LEFT: Text ───────────────────────────── */}
          <div className="hero-text" style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}>

            {/* Status badge */}
            <div className="hero-badge" style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "4px 12px",
                borderRadius: "9999px",
                border: "1px solid var(--border-strong)",
                backgroundColor: "var(--surface)",
                color: "var(--text-secondary)",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}>
                <span className="pulse-animation" style={{
                  display: "inline-block", width: "6px", height: "6px",
                  borderRadius: "50%", backgroundColor: "#22c55e", flexShrink: 0,
                }} />
                <TextScramble text="Available for opportunities" delay={400} speed={1.4} />
              </span>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "4px",
                color: "var(--text-muted)", fontSize: "0.72rem",
              }}>
                <MapPin size={11} /> Pune, India
              </span>
            </div>

            {/* Headline — scramble + Vercel-style massive type */}
            <div style={{ overflow: "hidden" }}>
              <h1 style={{
                margin: 0,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.02,
                fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
              }}>
                <span className="hero-title-word gradient-text" style={{ display: "block" }}>
                  <TextScramble text="Building" delay={700} speed={2} />
                </span>
                <span className="hero-title-word gradient-text" style={{ display: "block" }}>Modern Web</span>
                <span className="hero-title-word gradient-text" style={{ display: "block" }}>Apps &amp; AI</span>
                <span className="hero-title-word gradient-text" style={{ display: "block" }}>Products.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="hero-sub" style={{
              margin: 0,
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--text-muted)",
              maxWidth: "460px",
            }}>
              Full Stack Developer building impactful software and AI systems.
              B.Tech CSE (Data Science) at{" "}
              <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
                MIT Academy of Engineering
              </span>. Also passionate about Finance, Stock Markets, and Macroeconomics.
            </p>

            {/* CTAs — Vercel style: filled + outline */}
            <div className="hero-actions" style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
              <motion.button
                suppressHydrationWarning
                className="btn-primary"
                whileHover={{ opacity: 0.85 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects <ArrowRight size={14} />
              </motion.button>

              <motion.a
                suppressHydrationWarning
                className="btn-secondary"
                href="/Sameet_Pisal_Resume.pdf"
                download
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={14} /> Resume
              </motion.a>

              <motion.button
                suppressHydrationWarning
                className="btn-secondary"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail size={14} /> Contact
              </motion.button>
            </div>

            {/* Social row */}
            <div className="hero-socials-row" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{
                fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "var(--text-muted)",
              }}>
                Connect
              </span>
              <div style={{ width: "24px", height: "1px", backgroundColor: "var(--border-strong)" }} />
              <div style={{ display: "flex", gap: "6px" }}>
                {[
                  { label: "GitHub", href: "https://github.com/Sameet728/", Icon: GithubIcon },
                  { label: "LinkedIn", href: "https://in.linkedin.com/in/sameet-pisal", Icon: LinkedInIcon },
                  { label: "Email", href: "mailto:sameet@example.com", Icon: () => <Mail size={15} /> },
                ].map(({ label, href, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      width: "34px", height: "34px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-strong)",
                      backgroundColor: "var(--surface)",
                      color: "var(--text-muted)",
                      transition: "all 0.15s ease",
                    }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Portrait ──────────────────────── */}
          {/* Outer wrapper — padded top/bottom to give badges safe space */}
          <div className="hero-portrait-col" style={{ position: "relative", flexShrink: 0, paddingTop: "36px", paddingBottom: "36px" }}>

            {/* Badge: Full Stack Dev — ABOVE the photo */}
            <motion.div
              className="hero-float-tag"
              style={{
                position: "absolute", top: "4px", left: "12px", zIndex: 20,
                padding: "6px 14px", borderRadius: "99px",
                border: "1px solid var(--border-strong)",
                backgroundColor: "var(--surface)",
                color: "var(--text-primary)",
                fontSize: "0.7rem", fontWeight: 600, whiteSpace: "nowrap",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ⚡ Full Stack Dev
            </motion.div>

            {/* Badge: Runner Up — BELOW the photo */}
            <motion.div
              className="hero-float-tag"
              style={{
                position: "absolute", bottom: "4px", right: "12px", zIndex: 20,
                padding: "6px 14px", borderRadius: "99px",
                border: "1px solid var(--border-strong)",
                backgroundColor: "var(--surface)",
                color: "var(--text-primary)",
                fontSize: "0.7rem", fontWeight: 600, whiteSpace: "nowrap",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              🥈 Hackathon Runner Up
            </motion.div>

            {/* Photo column — fixed width, relative positioning for decorative frame */}
            <div style={{ position: "relative", width: "300px" }}>

              {/* Decorative offset card behind — gives depth */}
              <div style={{
                position: "absolute",
                top: "10px", left: "10px",
                right: "-10px", bottom: "-10px",
                borderRadius: "20px",
                border: "1px solid var(--border)",
                zIndex: 0,
              }} />

              {/* Main photo card */}
              <motion.div
                style={{
                  position: "relative",
                  width: "300px",
                  height: "390px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid var(--border-strong)",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.05), 0 16px 48px rgba(0,0,0,0.14), 0 40px 80px rgba(0,0,0,0.1)",
                  zIndex: 1,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 26 }}
              >
                <Image
                  src="/photo.jpg"
                  alt="Sameet Pisal"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 10%" }}
                  priority
                  sizes="300px"
                />
                {/* Dark vignette at bottom for chip legibility */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "130px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                }} />
                {/* Name chip */}
                <div style={{ position: "absolute", bottom: "14px", left: "12px", right: "12px" }}>
                  <div style={{
                    borderRadius: "10px",
                    padding: "9px 13px",
                    backgroundColor: "rgba(10,10,10,0.68)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(14px)",
                  }}>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: "0.875rem", color: "#ffffff" }}>
                      Sameet Pisal
                    </p>
                    <p className="font-mono-custom" style={{ margin: "2px 0 0", fontSize: "0.62rem", color: "rgba(255,255,255,0.55)" }}>
                      Full Stack · AI Developer
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* AI Developer pill — on right edge of photo, safely within bounds */}
              <motion.div
                className="hero-float-tag"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "-14px",
                  transform: "translateY(-50%)",
                  zIndex: 20,
                  padding: "6px 13px",
                  borderRadius: "99px",
                  border: "1px solid var(--border-strong)",
                  backgroundColor: "var(--surface)",
                  color: "var(--text-primary)",
                  fontSize: "0.7rem", fontWeight: 600, whiteSpace: "nowrap",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                🤖 AI Developer
              </motion.div>
            </div>
          </div>
        </div>


        {/* Scroll indicator */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
          <motion.button
            suppressHydrationWarning
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
              background: "none", border: "none", cursor: "pointer",
              color: "var(--text-muted)", fontSize: "9px",
              fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
            }}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll
            <ChevronDown size={14} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
