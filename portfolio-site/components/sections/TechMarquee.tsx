"use client";

const techs = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "MongoDB", "FastAPI", "Gemini AI", "PostgreSQL", "Express.js",
  "TailwindCSS", "Framer Motion", "Git", "REST APIs",
  "Socket.io", "Vercel", "OpenAI",
];

const dot = (
  <span aria-hidden style={{ color: "var(--border-strong)", fontSize: "0.5rem", margin: "0 0.5rem", verticalAlign: "middle" }}>
    ◆
  </span>
);

export default function TechMarquee() {
  const items = [...techs, ...techs]; // double for seamless loop

  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--surface)",
        padding: "14px 0",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <div
        className="marquee-track"
        aria-label="Technologies I work with"
      >
        {items.map((tech, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              paddingLeft: "1.5rem",
              fontSize: "0.78rem",
              fontWeight: 500,
              color: "var(--text-muted)",
              letterSpacing: "0.015em",
              whiteSpace: "nowrap",
              transition: "color 0.15s ease",
              cursor: "default",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
          >
            {dot}
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
