"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Home, Map, Key, CalendarCheck } from "lucide-react";

export default function AirbnbContent() {
  return (
    <div className="w-full flex flex-col gap-24 py-16">
      {/* ── Project Overview ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl p-10 overflow-hidden text-center"
        style={{ border: "1px solid var(--border-strong)", backgroundColor: "var(--card-bg)", backdropFilter: "blur(20px)" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-rose-500 opacity-80" />
        <Home className="mx-auto mb-6 text-rose-500" size={36} />
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text-primary)]">
          Next-Generation Accommodation Booking
        </h2>
        <p className="text-lg text-[var(--text-secondary)] font-medium max-w-3xl mx-auto mb-8">
          A fully functional, end-to-end accommodation platform that replicates the core user experience of Airbnb. Built from scratch with advanced mapping, secure authentication, and a robust booking engine.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] text-sm font-medium text-[var(--text-primary)]">
            <Map size={16} className="text-rose-500" /> Interactive Maps
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] text-sm font-medium text-[var(--text-primary)]">
            <CalendarCheck size={16} className="text-rose-500" /> Live Booking
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] text-sm font-medium text-[var(--text-primary)]">
            <Key size={16} className="text-rose-500" /> Secure Auth
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
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Intuitive Property Discovery</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              The homepage provides a visually immersive grid of properties. Users can effortlessly browse through high-quality listings, each displaying key information like location, host details, and pricing at a glance.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/airbnb-clone/image.png" alt="Property Discovery Grid" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/airbnb-clone/image copy.png" alt="Detailed Listing View" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-2"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Deep Dive into Listings</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              Clicking on a property reveals a comprehensive detail page. It integrates stunning hero images, complete lists of amenities, and host information—providing everything a traveler needs to make an informed decision.
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
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Property Details & Reviews</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              The platform features an integrated review system where authenticated users can rate their stay and leave detailed comments. Host information, pricing, and exact locations are displayed cleanly.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/airbnb-clone/image copy 2.png" alt="Property Details and Review Form" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Section 4 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/airbnb-clone/image copy 3.png" alt="User Reviews" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-2"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Transparent Feedback System</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              All reviews are publicly visible to help future travelers make informed choices. The platform calculates and displays average star ratings for each property based on historical guest feedback.
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
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">User Profile Management</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              A dedicated profile page lets users manage their personal information and security settings. The authentication flow is completely secure, utilizing JWTs (JSON Web Tokens) for session management.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/airbnb-clone/image copy 4.png" alt="User Profile Page" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Section 6 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-strong)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/projects/airbnb-clone/image copy 5.png" alt="Add New Listing" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 order-2 md:order-2"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">Host A New Property</h3>
            <p className="text-[1.05rem] leading-relaxed text-[var(--text-secondary)]">
              Any user can become a host by simply navigating to "AirBNB Your Home". The intuitive form allows hosts to instantly publish new listings by providing a title, description, pricing, location, and an image URL.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
