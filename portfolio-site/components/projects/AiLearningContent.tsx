"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BrainCircuit, BookOpen, LineChart, Users } from "lucide-react";

export default function AiLearningContent() {
  return (
    <div className="w-full flex flex-col gap-24 py-16">
      {/* ── Project Overview ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl p-10 overflow-hidden text-center border border-indigo-500/20 bg-indigo-950/10 backdrop-blur-xl"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 opacity-80" />
        <BrainCircuit className="mx-auto mb-6 text-indigo-500" size={40} />
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text-primary)]">
          Intelligent Educational Platform
        </h2>
        <p className="text-lg text-[var(--text-secondary)] font-medium max-w-3xl mx-auto mb-8">
          LearnSmart is an AI-driven learning platform designed to provide highly personalized educational paths. By analyzing student performance, the system dynamically generates custom study materials, quizzes, and analytics to maximize knowledge retention.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] text-sm font-medium text-[var(--text-primary)]">
            <BookOpen size={16} className="text-indigo-500" /> Custom Quizzes
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] text-sm font-medium text-[var(--text-primary)]">
            <LineChart size={16} className="text-indigo-500" /> Progress Tracking
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] text-sm font-medium text-[var(--text-primary)]">
            <Users size={16} className="text-indigo-500" /> Admin Analytics
          </div>
        </div>
      </motion.div>

      {/* ── Alternating Content Sections ── */}
      <div className="flex flex-col gap-32">
        
        {/* Section 1: Hero Illustration */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-500 font-bold text-sm tracking-wide uppercase self-start border border-indigo-500/30">
              Welcome
            </div>
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">AI-Powered Learning Journey</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              The landing page sets the tone for a personalized educational journey. The platform uses adaptive algorithms to assess individual learning styles and knowledge gaps, creating a tailored roadmap for every single student from the moment they sign up.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/ai-learning-platform/image.png" alt="Landing Page Hero" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Section 2: Student Dashboard & Progress */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-1 flex flex-col gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/ai-learning-platform/image copy.png" alt="Student Dashboard" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/ai-learning-platform/image copy 2.png" alt="Progress Chart" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-500 font-bold text-sm tracking-wide uppercase self-start border border-indigo-500/30">
              Student Hub
            </div>
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Centralized Learning Dashboard</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              Students have access to a clean, centralized dashboard displaying their overall scores, completed quizzes, and topics covered. Detailed progress charts map out their historical performance over multiple attempts, allowing them to visually track their improvement and identify weak spots in specific subjects like C++ or Python.
            </p>
          </motion.div>
        </div>

        {/* Section 3: AI Quiz Generation */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-500 font-bold text-sm tracking-wide uppercase self-start border border-indigo-500/30">
              Assessment
            </div>
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Instant Quiz Generation</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              By simply typing in a topic, the integrated Large Language Models (LLMs) instantly generate a custom, interactive multiple-choice quiz. The difficulty of the generated questions dynamically adapts to the student's historical performance, ensuring an optimal level of challenge.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2 flex flex-col gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/ai-learning-platform/image copy 3.png" alt="Quiz Generation UI" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/ai-learning-platform/image copy 4.png" alt="Interactive Quiz Interface" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Section 4: Feedback & Plans */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-1 flex flex-col gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/ai-learning-platform/image copy 5.png" alt="Quiz Results Feedback" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/ai-learning-platform/image copy 6.png" alt="Personalized Learning Plan" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-500 font-bold text-sm tracking-wide uppercase self-start border border-indigo-500/30">
              AI Insights
            </div>
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Instant Feedback & AI Plans</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              Upon completing a quiz, the system provides immediate, detailed feedback on incorrect answers. It then synthesizes these results to output a highly personalized "Learning Plan," effectively summarizing core concepts the student needs to review and automatically generating relevant study notes.
            </p>
          </motion.div>
        </div>

        {/* Section 5: Admin Analytics */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-500 font-bold text-sm tracking-wide uppercase self-start border border-indigo-500/30">
              Administration
            </div>
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Comprehensive Admin Analytics</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              Educators have access to a powerful Admin Dashboard that aggregates data across all students. It features detailed bar charts comparing average scores, pie charts breaking down topic performance, and the ability to selectively compare specific cohorts of students across multiple subjects to identify broader curriculum gaps.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2 flex flex-col gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/ai-learning-platform/Admin.png" alt="Admin Dashboard Overview" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/ai-learning-platform/Admin2.png" alt="Student Comparison Analytics" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
