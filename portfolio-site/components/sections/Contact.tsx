"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const inputStyle = (hasError: boolean) => ({
  display: "block",
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "8px",
  border: `1px solid ${hasError ? "#ef4444" : "var(--border-strong)"}`,
  backgroundColor: "var(--background)",
  color: "var(--text-primary)",
  fontSize: "0.875rem",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.15s ease",
  boxSizing: "border-box" as const,
});

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-label", {
        y: 20, opacity: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-label", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".contact-heading", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-heading", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".contact-left", {
        x: -40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-left", start: "top 88%", toggleActions: "play none none reverse" },
      });
      gsap.from(".contact-right", {
        x: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-right", start: "top 88%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) reset();
    } catch (error) {
      console.error(error);
    }
  };

  const contactItems = [
    { Icon: GithubIcon, label: "GitHub", handle: "@Sameet728", href: "https://github.com/Sameet728/" },
    { Icon: LinkedInIcon, label: "LinkedIn", handle: "sameet-pisal", href: "https://in.linkedin.com/in/sameet-pisal" },
    { Icon: () => <Mail size={20} />, label: "Email", handle: "Get in touch", href: "mailto:sameet@example.com" },
    { Icon: () => <MapPin size={20} />, label: "Location", handle: "Pune, Maharashtra", href: "#" },
  ];

  return (
    <div
      ref={sectionRef}
      id="contact"
      className="section-y"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="section-inner">

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="contact-label" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span className="font-mono-custom" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              07 / Contact
            </span>
            <div style={{ height: "1px", width: "48px", backgroundColor: "var(--border-strong)" }} />
          </div>
          <h2 className="contact-heading" style={{
            margin: "0 0 0.75rem",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ margin: 0, fontSize: "0.975rem", color: "var(--text-muted)", maxWidth: "460px", lineHeight: 1.7 }}>
            Open to internships, collaborations, freelance projects, and interesting conversations about tech.
          </p>
        </div>

        <div className="contact-grid">

          {/* LEFT */}
          <div className="contact-left" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {contactItems.map(({ Icon, label, handle, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "1rem 1.25rem",
                  borderRadius: "10px",
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--background)",
                  textDecoration: "none",
                }}
                whileHover={{ scale: 1.02, borderColor: "var(--border-strong)", transition: { duration: 0.15 } }}
              >
                <div style={{
                  width: "40px", height: "40px", borderRadius: "8px", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  backgroundColor: "var(--surface-2)",
                  color: "var(--text-secondary)",
                }}>
                  <Icon />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 500 }}>{label}</p>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-primary)", fontWeight: 600 }}>{handle}</p>
                </div>
              </motion.a>
            ))}

            {/* Availability */}
            <div style={{
              padding: "1rem 1.25rem",
              borderRadius: "10px",
              border: "1px solid var(--border)",
              backgroundColor: "var(--background)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span className="pulse-animation" style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22c55e", flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)" }}>Available for Opportunities</p>
                  <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>Internships · Freelance · Collaborations</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div
            className="contact-right"
            style={{
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid var(--border)",
              backgroundColor: "var(--background)",
            }}
          >
            {isSubmitSuccessful ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✉️</div>
                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)" }}>Message Sent!</h3>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-muted)" }}>Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="form-row-grid">
                  <div>
                    <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Name *</label>
                    <input {...register("name")} placeholder="Your name" style={inputStyle(!!errors.name)} suppressHydrationWarning />
                    {errors.name && <p style={{ margin: "4px 0 0", fontSize: "0.72rem", color: "#ef4444" }}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Email *</label>
                    <input {...register("email")} type="email" placeholder="your@email.com" style={inputStyle(!!errors.email)} suppressHydrationWarning />
                    {errors.email && <p style={{ margin: "4px 0 0", fontSize: "0.72rem", color: "#ef4444" }}>{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Subject *</label>
                  <input {...register("subject")} placeholder="What's this about?" style={inputStyle(!!errors.subject)} suppressHydrationWarning />
                  {errors.subject && <p style={{ margin: "4px 0 0", fontSize: "0.72rem", color: "#ef4444" }}>{errors.subject.message}</p>}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Message *</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or just say hi..."
                    style={{ ...inputStyle(!!errors.message), resize: "none" }}
                  />
                  {errors.message && <p style={{ margin: "4px 0 0", fontSize: "0.72rem", color: "#ef4444" }}>{errors.message.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: "100%", justifyContent: "center",
                    padding: "0.875rem",
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    borderRadius: "8px",
                  }}
                  whileHover={{ opacity: isSubmitting ? 0.6 : 0.88 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  suppressHydrationWarning
                >
                  {isSubmitting ? (
                    <><Loader2 size={15} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
