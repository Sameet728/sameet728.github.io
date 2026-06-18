"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, Zap, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { projects } from "@/lib/data/projects";
import { useRef } from "react";
import IntervuSetuContent from "@/components/projects/IntervuSetuContent";
import TadipaarContent from "@/components/projects/TadipaarContent";
import AirbnbContent from "@/components/projects/AirbnbContent";
import AgrisenseContent from "@/components/projects/AgrisenseContent";
import AiLearningContent from "@/components/projects/AiLearningContent";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPageTemplate({ project }: ProjectPageProps) {
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* ── IMMERSIVE HERO SECTION ── */}
      <div ref={heroRef} className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Parallax & Blur */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
          )}
          {/* Liquid dark/blur overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[12px]" />
          
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </motion.div>

        {/* Hero Content (Floating Glass Card) */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center"
          >
            {/* Category Pill */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl filter drop-shadow-md">{project.icon}</span>
              <span
                className="px-4 py-1.5 rounded-full text-xs font-bold text-white tracking-wide uppercase"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {project.category}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
              {project.name}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-medium leading-relaxed mb-10 drop-shadow-md">
              {project.tagline}
            </p>

            {/* Liquid Pill Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "12px 24px", borderRadius: "99px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    color: "#fff", fontSize: "0.9rem", fontWeight: 600,
                  }}
                >
                  <ExternalLink size={16} /> Visit Live Site
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "12px 24px", borderRadius: "99px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    color: "#fff", fontSize: "0.9rem", fontWeight: 600,
                  }}
                >
                  <GithubIcon size={16} /> View Source Code
                </motion.a>
              )}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 mt-12">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-white/90"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-10" />
      </div>


      {/* ── CONTENT SECTION ── */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-20 relative z-20 -mt-10">
        
        {/* Project Overview */}
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-[var(--text-primary)] flex items-center gap-3">
            <span style={{ color: project.accentColor }}>01.</span> Overview
          </h2>
          <div
            className="rounded-3xl p-8 sm:p-10 relative overflow-hidden"
            style={{
              border: "1px solid var(--border-strong)",
              backgroundColor: "var(--card-bg)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
            }}
          >
            {/* Subtle glow orb inside card */}
            <div 
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl"
              style={{ backgroundColor: project.accentColor }}
            />
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)] relative z-10">
              {project.description}
            </p>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-[var(--text-primary)] flex items-center gap-3">
            <span style={{ color: project.accentColor }}>02.</span> Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--surface)",
                  transition: "all 0.3s ease",
                }}
                whileHover={{ y: -4, borderColor: "var(--border-strong)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
              >
                <div 
                  className="mt-1 flex-shrink-0 p-1.5 rounded-full"
                  style={{ backgroundColor: `${project.accentColor}20`, color: project.accentColor }}
                >
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-[0.95rem] font-medium leading-relaxed text-[var(--text-secondary)]">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenge & Solution */}
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Challenge Card */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
              border: "1px solid var(--border-strong)",
              backgroundColor: "var(--card-bg)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#f59e0b] opacity-80" />
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-xl bg-[#f59e0b] bg-opacity-20 text-[#f59e0b]">
                <Lightbulb size={20} />
              </div>
              <h3 className="font-bold text-xl text-[var(--text-primary)]">The Challenge</h3>
            </div>
            <p className="text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
              {project.challenge}
            </p>
          </div>

          {/* Solution Card */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
              border: "1px solid var(--border-strong)",
              backgroundColor: "var(--card-bg)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 opacity-80" style={{ backgroundColor: project.accentColor }} />
            <div className="flex items-center gap-3 mb-5">
              <div 
                className="p-2 rounded-xl"
                style={{ backgroundColor: `${project.accentColor}20`, color: project.accentColor }}
              >
                <Zap size={20} />
              </div>
              <h3 className="font-bold text-xl text-[var(--text-primary)]">The Solution</h3>
            </div>
            <p className="text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
              {project.solution}
            </p>
          </div>
        </motion.div>

        {/* ── Custom Project Content ── */}
        {project.slug === "intervusetu" && (
          <IntervuSetuContent />
        )}
        {project.slug === "project-tadipaar" && (
          <TadipaarContent />
        )}
        {project.slug === "airbnb-clone" && (
          <AirbnbContent />
        )}
        {project.slug === "agrisense-ai" && (
          <AgrisenseContent />
        )}
        {project.slug === "ai-learning-platform" && (
          <AiLearningContent />
        )}

        {/* Next/Prev Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-5 pt-12 mt-12"
        >
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-4 p-6 rounded-3xl border flex-1 group transition-all"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
          >
            <div className="p-3 rounded-full bg-[var(--surface-2)] group-hover:bg-[var(--text-primary)] group-hover:text-[var(--background)] transition-colors">
              <ArrowLeft size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[var(--text-muted)] mb-1">Previous Project</p>
              <p className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--text-primary)]">
                {prevProject.name}
              </p>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center justify-end gap-4 p-6 rounded-3xl border flex-1 group text-right transition-all"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
          >
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[var(--text-muted)] mb-1">Next Project</p>
              <p className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--text-primary)]">
                {nextProject.name}
              </p>
            </div>
            <div className="p-3 rounded-full bg-[var(--surface-2)] group-hover:bg-[var(--text-primary)] group-hover:text-[var(--background)] transition-colors">
              <ArrowRight size={20} />
            </div>
          </Link>
        </motion.div>
        
        {/* Back to Home Glass Pill */}
        <div className="flex justify-center pt-8 pb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-1"
            style={{
              border: "1px solid var(--border-strong)",
              backgroundColor: "var(--card-bg)",
              backdropFilter: "blur(12px)",
              color: "var(--text-primary)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
