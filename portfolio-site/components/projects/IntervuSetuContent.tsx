"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Target, Eye, Rocket } from "lucide-react";

export default function IntervuSetuContent() {
  return (
    <div className="w-full flex flex-col gap-24 py-16">
      {/* ── Mission & Vision Cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="rounded-3xl p-8 relative overflow-hidden" style={{ border: "1px solid var(--border-strong)", backgroundColor: "var(--card-bg)", backdropFilter: "blur(20px)" }}>
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 opacity-80" />
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-xl bg-blue-500/20 text-blue-500">
              <Eye size={20} />
            </div>
            <h3 className="font-bold text-xl text-[var(--text-primary)]">The Vision</h3>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
            To make quality interview preparation accessible, organized, and effective for every student and job seeker.
          </p>
        </div>

        <div className="rounded-3xl p-8 relative overflow-hidden" style={{ border: "1px solid var(--border-strong)", backgroundColor: "var(--card-bg)", backdropFilter: "blur(20px)" }}>
          <div className="absolute top-0 left-0 w-full h-1 bg-green-500 opacity-80" />
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-xl bg-green-500/20 text-green-500">
              <Target size={20} />
            </div>
            <h3 className="font-bold text-xl text-[var(--text-primary)]">The Mission</h3>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
            To bridge the gap between academic learning and real-world interview expectations by providing a single platform for structured interview preparation.
          </p>
        </div>
      </motion.div>

      {/* ── Pitch & Key Value ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl p-10 overflow-hidden text-center"
        style={{ border: "1px solid var(--accent)", backgroundColor: "var(--accent-glow)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent)] blur-[100px] opacity-20" />
        <Rocket className="mx-auto mb-6 text-[var(--accent)]" size={36} />
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text-primary)]">
          IntervuSetu is a one-stop interview preparation platform that helps students transform from job seekers into confident interview-ready candidates.
        </h2>
        <p className="text-lg text-[var(--text-secondary)] font-medium max-w-3xl mx-auto">
          "One platform where students can prepare, practice, and build confidence for interviews without the hassle of switching between multiple resources."
        </p>
      </motion.div>

      {/* ── Alternating Content Sections ── */}
      <div className="flex flex-col gap-32">
        {/* Section 1: Introduction / Website Homepage */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-1"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">The Problem We Solve</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              Today, many students struggle with interview preparation because information is scattered across different websites, videos, notes, and practice platforms. This makes the preparation process confusing, time-consuming, and often ineffective.
            </p>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              IntervuSetu solves this problem by bringing everything needed for interview preparation into one organized platform.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/intervusetu/WebsiteHomepage.png" alt="IntervuSetu Homepage" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Section 2: Dashboard / Personal Companion */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/intervusetu/Dashboard.png" alt="IntervuSetu Dashboard" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-2"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Your Personal Companion</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              The platform acts like a personal interview preparation companion. Users can create an account, access interview-related resources, practice questions, and track their preparation journey from a single place.
            </p>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              Instead of searching multiple websites, students get a structured environment where they can focus completely on improving their skills.
            </p>
          </motion.div>
        </div>

        {/* Section 3: AI Interview Simulation */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-1"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Simplicity & Practice</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              One of the biggest advantages of IntervuSetu is its simplicity. Students can easily find relevant interview materials, revise important concepts, and prepare in a systematic manner.
            </p>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              Our dynamic AI engine generates tailored simulations, helping users identify what they need to study and providing a clear path toward becoming interview-ready.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2 grid gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/intervusetu/Generating.png" alt="Generating AI Simulation" width={800} height={400} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/intervusetu/Interview.png" alt="Live AI Interview" width={800} height={400} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Section 4: Analytics & Progress */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-1 grid gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/intervusetu/Report.png" alt="Interview Report" width={800} height={400} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/intervusetu/AptitudeAnyltics.png" alt="Aptitude Analytics" width={800} height={400} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-2"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">In-Depth Feedback</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              IntervuSetu is not just a collection of study materials—it is a complete preparation ecosystem that encourages consistent learning, organized practice, and confidence building.
            </p>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              By helping users prepare smarter rather than harder, the platform provides deep analytics and reports that increase their chances of performing well in interviews and securing better career opportunities.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              <li className="flex items-center gap-3 text-[var(--text-secondary)]"><CheckCircle2 className="text-[var(--accent)]" size={18} /> Detailed interview transcripts</li>
              <li className="flex items-center gap-3 text-[var(--text-secondary)]"><CheckCircle2 className="text-[var(--accent)]" size={18} /> Aptitude performance tracking</li>
              <li className="flex items-center gap-3 text-[var(--text-secondary)]"><CheckCircle2 className="text-[var(--accent)]" size={18} /> Targeted area of improvement</li>
            </ul>
          </motion.div>
        </div>

        {/* Section 5: For Students & Organizations */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-1"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">For Institutions</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              For college students, the platform reduces the stress and uncertainty associated with placement season. For fresh graduates, it provides a convenient way to strengthen interview skills before applying for jobs.
            </p>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              For recruiters and educational institutions, it promotes better-prepared candidates and improves overall placement readiness with organizational-level reporting.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/intervusetu/InterviewReportToOrganisation.png" alt="Organization Reporting" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
