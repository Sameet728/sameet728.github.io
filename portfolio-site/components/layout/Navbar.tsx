"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { Sun, Moon, Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function MagneticItem({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="relative flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const { scrollY } = useScroll();

  const navWidth = useTransform(scrollY, [0, 100], ["100%", "calc(100% - 2rem)"]);
  const navMaxWidth = useTransform(scrollY, [0, 100], ["1200px", "880px"]);
  const navPadding = useTransform(scrollY, [0, 100], ["1.75rem clamp(1rem, 5vw, 2.5rem)", "0.75rem 0.8rem"]);
  const navBorderRadius = useTransform(scrollY, [0, 100], ["0px", "99px"]);
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const navMarginTop = useTransform(scrollY, [0, 100], ["0px", "20px"]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (pathname === "/") {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.header
          className="pointer-events-auto flex items-center justify-between relative"
          style={{
            width: navWidth,
            maxWidth: navMaxWidth,
            padding: navPadding,
            marginTop: navMarginTop,
          }}
        >
          {/* Animated Background Layer */}
          <motion.div
            className="absolute inset-0 -z-10 backdrop-blur-xl"
            style={{
              borderRadius: navBorderRadius,
              backgroundColor: "var(--nav-bg)",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
              opacity: navOpacity,
            }}
          />

          <div className="flex items-center gap-2 pr-4 pl-2 group z-10">
            <MagneticItem>
              <Link href="/" className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm border border-[var(--border-strong)]">
                <Image src="/photo.jpg" alt="Sameet" width={32} height={32} className="object-cover w-full h-full" />
              </Link>
            </MagneticItem>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <MagneticItem key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={cn(
                      "relative px-3.5 py-1.5 text-[0.82rem] rounded-full transition-all duration-300 font-semibold",
                      isActive ? "text-accent" : "hover:text-primary"
                    )}
                    style={{
                      color: isActive ? "var(--accent)" : "var(--text-muted)",
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-t-md"
                        style={{ backgroundColor: "var(--accent)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                </MagneticItem>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-1 pl-4">
            <div className="hidden md:flex items-center gap-1 mr-2">
              <MagneticItem>
                <a
                  href="https://github.com/Sameet728/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-colors hover:bg-surface-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  <GithubIcon size={17} />
                </a>
              </MagneticItem>
              <MagneticItem>
                <a
                  href="https://in.linkedin.com/in/sameet-pisal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-colors hover:bg-surface-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  <LinkedInIcon size={17} />
                </a>
              </MagneticItem>
            </div>

            {/* Theme toggle */}
            {mounted && (
              <MagneticItem>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2.5 rounded-full transition-colors hover:bg-surface-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={theme}
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    </motion.div>
                  </AnimatePresence>
                </button>
              </MagneticItem>
            )}

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-full"
              style={{ color: "var(--text-primary)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.header>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-4 top-[80px] z-40 md:hidden backdrop-blur-2xl border p-4 rounded-3xl"
            style={{
              backgroundColor: "rgba(var(--surface-rgb), 0.85)",
              borderColor: "var(--border-strong)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all"
                  style={{
                    color: activeSection === link.href.replace("#", "") ? "var(--accent)" : "var(--text-secondary)",
                    backgroundColor: activeSection === link.href.replace("#", "") ? "var(--accent-glow)" : "transparent",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="flex items-center justify-around pt-4 border-t mt-3" style={{ borderColor: "var(--border)" }}>
                <a href="https://github.com/Sameet728/" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface-2 rounded-full" style={{ color: "var(--text-primary)" }}>
                  <GithubIcon size={20} />
                </a>
                <a href="https://in.linkedin.com/in/sameet-pisal" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface-2 rounded-full" style={{ color: "var(--text-primary)" }}>
                  <LinkedInIcon size={20} />
                </a>
                <a href="mailto:sameet@example.com" className="p-3 bg-surface-2 rounded-full" style={{ color: "var(--text-primary)" }}>
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
