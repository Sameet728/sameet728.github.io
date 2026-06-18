"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Droplets, LineChart, Cpu } from "lucide-react";

export default function AgrisenseContent() {
  return (
    <div className="w-full flex flex-col gap-24 py-16">
      {/* ── Project Overview ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl p-10 overflow-hidden text-center border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-xl"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 opacity-80" />
        <Leaf className="mx-auto mb-6 text-emerald-500" size={40} />
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text-primary)]">
          Sustainable & Smart Agriculture
        </h2>
        <p className="text-lg text-[var(--text-secondary)] font-medium max-w-3xl mx-auto mb-8">
          AgriSense AI is an AI-powered smart farming platform that helps farmers monitor and manage their fields more efficiently using IoT sensors, artificial intelligence, and real-time data analytics.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] text-sm font-medium text-[var(--text-primary)]">
            <Droplets size={16} className="text-emerald-500" /> Smart Irrigation
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] text-sm font-medium text-[var(--text-primary)]">
            <LineChart size={16} className="text-emerald-500" /> Real-time Analytics
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] text-sm font-medium text-[var(--text-primary)]">
            <Cpu size={16} className="text-emerald-500" /> AI Recommendations
          </div>
        </div>
      </motion.div>

      {/* ── Alternating Content Sections ── */}
      <div className="flex flex-col gap-32">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-sm tracking-wide uppercase self-start border border-emerald-500/30">
              Live Environment
            </div>
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Real-Time Field Monitoring</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              The system continuously tracks important parameters such as soil moisture, temperature, humidity, and light conditions. The dashboard provides an instant, at-a-glance view of the farm's health, highlighting any sensors that show warning or critical levels.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-zinc-900 bg-black aspect-[9/19] max-w-[280px] w-full transform hover:-translate-y-2 transition-transform duration-300">
              <Image src="/images/projects/agrisense-ai/Screenshot_2026-06-02-19-02-39-10_0f15bfb84aa73622a6d308841363a11b.jpg" alt="Live Environment Dashboard" fill className="object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-1 flex justify-center"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-zinc-900 bg-black aspect-[9/19] max-w-[280px] w-full transform hover:-translate-y-2 transition-transform duration-300">
              <Image src="/images/projects/agrisense-ai/Screenshot_2026-06-02-19-38-25-40_0f15bfb84aa73622a6d308841363a11b.jpg" alt="Data Analytics & Trends" fill className="object-cover" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-sm tracking-wide uppercase self-start border border-emerald-500/30">
              Analytics
            </div>
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Data-Driven Decision Making</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              AgriSense AI generates detailed insights and historical analytics. Farmers can view daily trends for moisture and temperature through interactive charts, and monitor live Soil Nutrients (Nitrogen, Phosphorus, Potassium) directly from the IoT sensors.
            </p>
          </motion.div>
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-sm tracking-wide uppercase self-start border border-emerald-500/30">
              Insights
            </div>
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">AI-Powered Recommendations</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              Using the collected data, the AI engine provides intelligent recommendations for the most suitable crops and precise fertilizer usage. It also features an Irrigation Prediction model that alerts the farmer when it's exactly the right time to water the fields.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-zinc-900 bg-black aspect-[9/19] max-w-[280px] w-full transform hover:-translate-y-2 transition-transform duration-300">
              <Image src="/images/projects/agrisense-ai/Screenshot_2026-06-02-19-39-18-57_0f15bfb84aa73622a6d308841363a11b.jpg" alt="AI Recommendations" fill className="object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Section 4 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-1 flex justify-center"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-zinc-900 bg-black aspect-[9/19] max-w-[280px] w-full transform hover:-translate-y-2 transition-transform duration-300">
              <Image src="/images/projects/agrisense-ai/Screenshot_2026-06-02-19-38-19-50_0f15bfb84aa73622a6d308841363a11b.jpg" alt="Irrigation Motor Panel" fill className="object-cover" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-sm tracking-wide uppercase self-start border border-emerald-500/30">
              Automation
            </div>
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Smart Irrigation Control</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              Water pumps can be automatically turned ON/OFF based on soil conditions, drastically reducing water wastage. Farmers can remotely control the physical motor relays, switch between AUTO and MANUAL modes, and set Auto-Shutoff timers directly from the mobile app.
            </p>
          </motion.div>
        </div>

        {/* Section 5 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-sm tracking-wide uppercase self-start border border-emerald-500/30">
              Accessibility
            </div>
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Multilingual Farmer Profile</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              Built with regional accessibility in mind, the platform allows farmers to toggle between languages (like English and Marathi). The profile manages their personal details, farm size, and location to tailor the AI recommendations specifically to their region.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-zinc-900 bg-black aspect-[9/19] max-w-[280px] w-full transform hover:-translate-y-2 transition-transform duration-300">
              <Image src="/images/projects/agrisense-ai/Screenshot_2026-06-02-19-38-16-24_0f15bfb84aa73622a6d308841363a11b.jpg" alt="Multilingual Profile" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
