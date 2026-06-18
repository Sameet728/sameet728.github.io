import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "github-readme-stats.vercel.app" },
      { protocol: "https", hostname: "github-readme-activity-graph.vercel.app" },
      { protocol: "https", hostname: "github-readme-streak-stats.herokuapp.com" },
      { protocol: "https", hostname: "ghchart.rshah.org" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // @ts-ignore - Some Next versions put this under experimental, but the warning suggested top-level
  allowedDevOrigins: ["192.168.1.6", "172.30.250.182"],
};

export default nextConfig;
