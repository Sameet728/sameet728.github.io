import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "intervusetu",
    name: "IntervuSetu",
    tagline: "AI-powered interview preparation platform with intelligent interview simulations.",
    description:
      "IntervuSetu is a comprehensive AI-powered interview preparation platform that bridges the gap between candidates and their dream jobs. The platform offers intelligent interview simulations, real-time feedback, and personalized improvement recommendations powered by advanced AI APIs.",
    category: "AI Product",
    tech: ["Vite", "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Gemini API", "JWT"],
    features: [
      "AI-driven mock interview simulations",
      "Real-time feedback and scoring",
      "Personalized improvement roadmap",
      "Topic-wise question banks",
      "Progress tracking dashboard",
      "Secure JWT authentication",
    ],
    challenge:
      "Building an AI system that could simulate realistic interview conversations while providing constructive, actionable feedback in real-time was the core technical challenge.",
    solution:
      "Leveraged Gemini AI APIs to create context-aware interview simulations with dynamic follow-up questions. Implemented a scoring algorithm that evaluates responses on multiple parameters including technical accuracy, communication clarity, and problem-solving approach.",
    gradient: "from-zinc-900 to-zinc-800",
    accentColor: "var(--accent)",
    icon: "🎯",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Sameet728/IntervuSetu_",
    link: "https://intervusetu.vercel.app",
  },
  {
    id: "2",
    slug: "ai-learning-platform",
    name: "AI Learning Platform",
    tagline: "Intelligent educational platform providing personalized learning experiences.",
    description:
      "An intelligent educational platform that provides personalized learning experiences using artificial intelligence. Students can generate study materials, explanations, notes, quizzes, and practice questions tailored to their learning needs and academic goals.",
    category: "AI Product",
    tech: ["AI", "React", "Node.js", "Database"],
    features: [
      "AI-powered study material generation",
      "Personalized learning paths",
      "Interactive quizzes and assessments",
      "Centralized dashboard",
      "Progress tracking",
    ],
    challenge:
      "Creating an adaptive learning environment capable of generating accurate, context-aware educational content across diverse academic subjects.",
    solution:
      "Integrated advanced language models to dynamically generate tailored notes and quizzes based on user input, creating personalized learning paths to improve student retention and engagement.",
    gradient: "from-indigo-900 to-blue-950",
    accentColor: "#60a5fa",
    icon: "🧠",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Sameet728/ai-learning-platform",
    link: "#",
  },
  {
    id: "3",
    slug: "project-tadipaar",
    name: "Project Tadipaar",
    tagline: "Digital criminal monitoring and management platform.",
    description:
      "A sophisticated digital platform for law enforcement to monitor, track, and manage criminal records and activities. Built with React Native for cross-platform mobile access and a robust Node.js backend with PostgreSQL.",
    category: "Mobile App",
    tech: ["React Native Expo", "Node.js", "Express.js", "PostgreSQL", "AWS (Face Matching)", "Google Maps API"],
    features: [
      "Mobile App for Criminals (Daily Check-ins)",
      "Web Dashboard for Police (Monitoring)",
      "Facial Recognition & Verification via AWS",
      "Live Location Tracking & Geofencing via Google Maps",
      "Real-time alerts and notifications",
      "Secure role-based access",
    ],
    challenge:
      "Building a secure, compliant system that handles sensitive criminal data while remaining accessible to field officers on mobile devices with varying connectivity.",
    solution:
      "Designed a secure architecture with role-based access control, end-to-end encryption for sensitive data, and offline-first mobile functionality using React Native with background sync capabilities.",
    gradient: "from-neutral-900 to-neutral-800",
    accentColor: "#94a3b8",
    icon: "🔐",
    image: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Sameet728/TadipaarFull",
    link: "https://tadipaar.vercel.app/",
  },
  {
    id: "4",
    slug: "agrisense-ai",
    name: "AgriSense AI",
    tagline: "AI and IoT-powered smart agriculture assistant.",
    description:
      "AgriSense AI revolutionizes farming by combining artificial intelligence with IoT sensors to provide farmers with real-time insights, predictive analytics, and automated decision support for crop management.",
    category: "AI + IoT",
    tech: ["React (Vite)", "React Native", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "ThingSpeak IoT", "XGBoost"],
    features: [
      "Real-time soil and weather monitoring",
      "AI-powered crop disease detection",
      "Automated irrigation recommendations",
      "Predictive yield analytics",
      "Weather pattern analysis",
      "Mobile farmer dashboard",
    ],
    challenge:
      "Integrating heterogeneous IoT sensor data with AI models to produce actionable insights for farmers with limited technical knowledge.",
    solution:
      "Built a unified data ingestion pipeline for IoT sensors, processed data through cloud AI APIs for analysis, and designed an intuitive mobile-first interface with simplified recommendations.",
    gradient: "from-zinc-900 to-zinc-800",
    accentColor: "#4ade80",
    icon: "🌱",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Sameet728/agrisense-ai",
    link: "https://agrisense-ai.vercel.app",
  },
  {
    id: "5",
    slug: "telecloud",
    name: "Telecloud",
    tagline: "Cloud storage and media streaming platform utilizing Telegram infrastructure.",
    description:
      "Telecloud is a cloud storage and media streaming platform that transforms a user's Telegram account into a powerful personal cloud vault. It allows users to store, organize, stream, and share files without traditional storage limitations.",
    category: "Cloud Services",
    tech: ["Telegram API", "Node.js", "React", "Cloud Storage"],
    features: [
      "Unlimited file storage via Telegram",
      "High-quality music streaming",
      "Secure file sharing with password/expiry",
      "Native file previews",
      "Smart workspace organization",
      "Ad-free media experience",
    ],
    challenge:
      "Providing seamless, high-speed media streaming and file management while dealing with Telegram's file size limits and API rate constraints.",
    solution:
      "Engineered an abstraction layer over the Telegram API for chunked uploading/downloading, and built a custom media streaming protocol to deliver high-fidelity audio without buffering delays.",
    gradient: "from-sky-900 to-blue-950",
    accentColor: "#38bdf8",
    icon: "☁️",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Sameet728/telecloud",
    link: "#",
  },
  {
    id: "6",
    slug: "airbnb-clone",
    name: "AirBnB Clone",
    tagline: "Full-featured accommodation booking platform inspired by Airbnb.",
    description:
      "A fully functional Airbnb-inspired accommodation booking platform built from scratch. Features property listings, advanced search and filtering, host dashboards, booking management, and a complete authentication system — replicating the core user experience of Airbnb.",
    category: "Full Stack",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Mapbox"],
    features: [
      "Property listing with image uploads (Cloudinary)",
      "Map-based property discovery (Mapbox)",
      "Advanced search with filters (price, location, type)",
      "Host dashboard for listing management",
      "Booking and reservation system",
      "Secure JWT authentication",
    ],
    challenge:
      "Replicating Airbnb's complex property discovery UX — including map-integrated search with dynamic filtering — while keeping the system performant with large datasets.",
    solution:
      "Built a geospatial-indexed MongoDB schema for fast location queries, integrated Mapbox GL for interactive maps, and used Cloudinary for optimised image delivery. Implemented JWT + refresh tokens for secure, seamless auth.",
    gradient: "from-rose-950 to-zinc-900",
    accentColor: "#FF385C",
    icon: "🏠",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Sameet728/airbnb-clone",
    link: "https://airbnb-1rcz.onrender.com/",
  },
];
