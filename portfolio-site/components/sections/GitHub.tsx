"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const GithubIcon = ({ size = 16, style, className }: { size?: number; style?: React.CSSProperties; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style} className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

const GITHUB_USERNAME = "Sameet728";

export default function GitHubSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".github-item", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".github-item",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="github"
      style={{ backgroundColor: "var(--surface)", padding: "8rem 0" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 3rem" }}>
        {/* Header */}
        <div className="github-item" style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span className="font-mono-custom" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              06 / GitHub
            </span>
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "var(--border)" }} />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                Open Source &{" "}
                <span className="gradient-text">Activity</span>
              </h2>
              <p className="text-base max-w-xl" style={{ color: "var(--text-muted)" }}>
                Consistently pushing code, learning, and contributing.
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-semibold flex-shrink-0"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--background)",
                color: "var(--text-primary)",
              }}
            >
              <GithubIcon size={16} />
              @{GITHUB_USERNAME}
            </motion.a>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* GitHub Stats Card */}
          <motion.div
            className="github-item rounded-2xl border overflow-hidden"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="p-5 border-b" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-2">
                <GithubIcon size={16} style={{ color: "var(--text-muted)" }} />
                <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  GitHub Stats
                </span>
              </div>
            </div>
            <div className="p-5 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=4f80ff&icon_color=3b6fd4&text_color=94a3b8&bg_color=00000000&count_private=true&include_all_commits=true`}
                alt="GitHub Stats"
                className="w-full max-w-md"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            className="github-item rounded-2xl border overflow-hidden"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="p-5 border-b" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-2">
                <span style={{ color: "var(--text-muted)", fontSize: 16 }}>⭐</span>
                <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  Most Used Languages
                </span>
              </div>
            </div>
            <div className="p-5 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=4f80ff&text_color=94a3b8&bg_color=00000000&langs_count=8`}
                alt="Top Languages"
                className="w-full max-w-md"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Contribution Graph */}
          <motion.div
            className="github-item lg:col-span-2 rounded-2xl border overflow-hidden"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="p-5 border-b" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-2">
                <span style={{ color: "var(--text-muted)", fontSize: 16 }}>📊</span>
                <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  Contribution Activity
                </span>
              </div>
            </div>
            <div className="p-5 overflow-x-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&bg_color=transparent&color=94a3b8&line=4f80ff&point=3b6fd4&area=true&area_color=4f80ff20&hide_border=true`}
                alt="Contribution Graph"
                className="w-full min-w-[600px]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Streak stats */}
          <motion.div
            className="github-item lg:col-span-2 rounded-2xl border overflow-hidden"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="p-5 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&stroke=4f80ff&ring=3b6fd4&fire=f59e0b&currStreakLabel=4f80ff&sideLabels=94a3b8&dates=64748b&sideNums=f8fafc&currStreakNum=f8fafc`}
                alt="GitHub Streak"
                className="w-full max-w-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
