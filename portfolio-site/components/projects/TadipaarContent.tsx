"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Smartphone, Globe, Users } from "lucide-react";

export default function TadipaarContent() {
  return (
    <div className="w-full flex flex-col gap-24 py-16">
      {/* ── Team & Project Overview ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl p-10 overflow-hidden text-center"
        style={{ border: "1px solid var(--border-strong)", backgroundColor: "var(--card-bg)", backdropFilter: "blur(20px)" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-red-500 opacity-80" />
        <Shield className="mx-auto mb-6 text-red-500" size={36} />
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text-primary)]">
          Police Externment Monitoring & Criminal Tracking System
        </h2>
        <p className="text-lg text-[var(--text-secondary)] font-medium max-w-3xl mx-auto mb-8">
          Project Tadipaar provides a centralized, secure platform for Maharashtra Police to digitally manage and track externed criminals using a mobile application and a web dashboard.
        </p>
        
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)] text-[var(--text-primary)] font-semibold shadow-lg">
          <Users className="text-[var(--accent)]" size={20} />
          <span>Developed by: Sameet Pisal, Mahesh Kadam, Harsh Holkar, & Shubh Jain</span>
        </div>
      </motion.div>

      {/* ── Mobile Application Section (React Native Expo) ── */}
      <div className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-500 font-bold text-sm tracking-wide uppercase mb-4 border border-blue-500/30">
            <Smartphone size={16} /> Criminal Mobile App
          </div>
          <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Daily Check-ins & Geofencing</h3>
          <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
            Built with React Native Expo, the mobile app requires criminals to perform daily check-ins using AWS Facial Recognition and live GPS verification to ensure compliance with geographic restrictions (Restricted Zones).
          </p>
        </motion.div>

        {/* Mobile App Screenshots Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0">
          {[
            "image.png",
            "image copy.png",
            "image copy 2.png",
            "image copy 3.png",
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-zinc-900 bg-black aspect-[9/19] transform hover:-translate-y-2 transition-transform duration-300"
            >
              <Image 
                src={`/images/projects/project-tadipaar/${img}`} 
                alt={`Mobile App Screen ${idx + 1}`} 
                fill 
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-20 justify-center">
           {[
            "image copy 4.png",
            "image copy 5.png",
            "image copy 6.png",
          ].map((img, idx) => (
            <motion.div
              key={idx + 4}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-zinc-900 bg-black aspect-[9/19] max-w-[280px] mx-auto w-full transform hover:-translate-y-2 transition-transform duration-300"
            >
              <Image 
                src={`/images/projects/project-tadipaar/${img}`} 
                alt={`Mobile App Screen ${idx + 5}`} 
                fill 
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Police Dashboard Section (Web) ── */}
      <div className="flex flex-col gap-16 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-sm tracking-wide uppercase mb-4 border border-emerald-500/30">
            <Globe size={16} /> Police Web Dashboard
          </div>
          <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Centralized Command Center</h3>
          <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
            The secure Node.js & PostgreSQL backend powers a comprehensive dashboard for DCPs and admins to track statuses, register criminals, and manage real-time alerts for zone violations.
          </p>
        </motion.div>

        <div className="grid gap-12 mt-4">
          {/* Dashboard Left-Right Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-4 order-2 md:order-1"
            >
              <h4 className="text-2xl font-bold text-[var(--text-primary)]">Live Police Dashboard</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                A unified view providing real-time statistics on active records, recent check-ins, and critical alerts requiring immediate officer attention.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 md:order-2"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
                <Image src="/images/projects/project-tadipaar/PoliceDashboard.png" alt="Police Dashboard" width={800} height={500} className="w-full h-auto object-cover" />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 md:order-1"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
                <Image src="/images/projects/project-tadipaar/ExterneeRegister.png" alt="Register Criminal" width={800} height={500} className="w-full h-auto object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-4 order-2 md:order-2"
            >
              <h4 className="text-2xl font-bold text-[var(--text-primary)]">Criminal Registration</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Secure forms allow authorized administrators to register new external orders (Tadipaar), capturing initial facial biometric data and assigning restricted geographic zones.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-4 order-2 md:order-1"
            >
              <h4 className="text-2xl font-bold text-[var(--text-primary)]">Detailed Case Files</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Access deep details on individual criminals, including historical compliance records, exact GPS check-in logs, and assigned sections of law.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 md:order-2"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
                <Image src="/images/projects/project-tadipaar/ExterneeDetails.png" alt="Externee Details" width={800} height={500} className="w-full h-auto object-cover" />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
             <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 md:order-1"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
                <Image src="/images/projects/project-tadipaar/ZoneViolations.png" alt="Zone Violations" width={800} height={500} className="w-full h-auto object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-4 order-2 md:order-2"
            >
              <h4 className="text-2xl font-bold text-[var(--text-primary)]">Automated Geofencing</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Integrated Google Maps API automatically flags zone violations if the criminal's GPS check-in is recorded within their restricted area, triggering immediate alerts for legal action.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
