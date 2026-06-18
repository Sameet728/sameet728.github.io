import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CursorGlow from "@/components/layout/CursorGlow";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Sameet Pisal — Full Stack & AI Developer",
  description:
    "Full Stack Developer and AI Developer building scalable web applications, AI-powered systems, and real-world digital products. B.Tech CSE (Data Science) at MIT Academy of Engineering, Pune. Passionate about Finance, Stock Markets, and Macroeconomics.",
  keywords: [
    "Sameet Pisal",
    "Full Stack Developer",
    "AI Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "MIT Academy of Engineering",
    "Pune",
  ],
  authors: [{ name: "Sameet Pisal" }],
  creator: "Sameet Pisal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameetpisal.dev",
    title: "Sameet Pisal — Full Stack & AI Developer",
    description:
      "Full Stack Developer and AI Developer building scalable web applications, AI-powered systems, and real-world digital products.",
    siteName: "Sameet Pisal Portfolio",
    images: [
      {
        url: "/photo.jpg",
        width: 1200,
        height: 630,
        alt: "Sameet Pisal — Full Stack & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameet Pisal — Full Stack & AI Developer",
    description: "Full Stack Developer and AI Developer based in Pune, India.",
    images: ["/photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const originalRemoveChild = Node.prototype.removeChild;
                Node.prototype.removeChild = function(child) {
                  try {
                    return originalRemoveChild.call(this, child);
                  } catch (e) {
                    if (e.name === 'NotFoundError') {
                      console.warn('DOM mismatch caught, force removing child:', child);
                      if (child && typeof child.remove === 'function') {
                        child.remove();
                      }
                      return child;
                    }
                    throw e;
                  }
                };
                const originalInsertBefore = Node.prototype.insertBefore;
                Node.prototype.insertBefore = function(newNode, referenceNode) {
                  try {
                    if (referenceNode && referenceNode.parentNode !== this) {
                      return originalInsertBefore.call(this, newNode, null);
                    }
                    return originalInsertBefore.call(this, newNode, referenceNode);
                  } catch (e) {
                    if (e.name === 'NotFoundError') {
                      console.warn('DOM mismatch caught:', e);
                      return newNode;
                    }
                    throw e;
                  }
                };
              }
            `,
          }}
        />
        <Providers>
          <CursorGlow />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
