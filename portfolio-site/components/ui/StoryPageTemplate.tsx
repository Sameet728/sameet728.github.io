"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";
import { Story } from "@/lib/data/stories";
import { stories } from "@/lib/data/stories";
import { useRef } from "react";

interface StoryPageProps {
  story: Story;
}

export default function StoryPageTemplate({ story }: StoryPageProps) {
  const currentIndex = stories.findIndex((s) => s.slug === story.slug);
  const nextStory = stories[(currentIndex + 1) % stories.length];
  const prevStory = stories[(currentIndex - 1 + stories.length) % stories.length];

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
      <div ref={heroRef} className="relative h-[70vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Parallax & Blur */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <Image
            src={story.coverImage}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
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
            suppressHydrationWarning
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center"
          >
            {/* Category Pill */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-4 py-1.5 rounded-full text-xs font-bold text-white tracking-wide uppercase"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                Milestone • {story.date}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
              {story.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ── CONTENT SECTION ── */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-20 relative z-20 -mt-10">
        
        {/* Story Overview */}
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-[var(--text-primary)] flex items-center gap-3">
            <span style={{ color: "var(--text-muted)" }}>01.</span> Overview
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
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)] relative z-10">
              {story.overview}
            </p>
          </div>
        </motion.div>

        {/* The Experience */}
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-[var(--text-primary)] flex items-center gap-3">
            <span style={{ color: "var(--text-muted)" }}>02.</span> The Experience
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
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)] relative z-10">
              {story.experience}
            </p>
          </div>
        </motion.div>

        {/* Impact & Takeaways */}
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Impact Card */}
          <div
            className="rounded-3xl p-8 sm:p-10"
            style={{
              border: "1px solid var(--border-strong)",
              backgroundColor: "var(--card-bg)",
              backdropFilter: "blur(20px)",
            }}
          >
            <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)] flex items-center gap-2">
              <span style={{ color: "var(--text-muted)" }}>03.</span> Impact & Growth
            </h3>
            <p className="text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
              {story.impact}
            </p>
          </div>

          {/* Takeaways Card */}
          <div
            className="rounded-3xl p-8 sm:p-10"
            style={{
              border: "1px solid var(--border-strong)",
              backgroundColor: "var(--surface)",
              backdropFilter: "blur(20px)",
            }}
          >
            <h3 className="text-xl font-bold mb-6 text-[var(--text-primary)] flex items-center gap-2">
              <Lightbulb className="text-[var(--text-muted)]" size={20} /> Key Takeaways
            </h3>
            <div className="flex flex-col gap-4">
              {story.takeaways.map((takeaway, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-[var(--text-muted)] font-bold text-sm">{i + 1}.</span>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed m-0">
                    {takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Next/Prev Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-5 pt-12 mt-12"
        >
          <Link
            href={`/story/${prevStory.slug}`}
            className="flex items-center gap-4 p-6 rounded-3xl border flex-1 group transition-all"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
          >
            <div className="p-3 rounded-full bg-[var(--surface-2)] group-hover:bg-[var(--text-primary)] group-hover:text-[var(--background)] transition-colors">
              <ArrowLeft size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[var(--text-muted)] mb-1">Previous Story</p>
              <p className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--text-primary)]">
                {prevStory.title}
              </p>
            </div>
          </Link>

          <Link
            href={`/story/${nextStory.slug}`}
            className="flex items-center justify-end gap-4 p-6 rounded-3xl border flex-1 group text-right transition-all"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
          >
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[var(--text-muted)] mb-1">Next Story</p>
              <p className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--text-primary)]">
                {nextStory.title}
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
