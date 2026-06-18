import { Achievement } from "@/types";

export interface TimelineItem {
  year: string;
  badge?: string;
  title: string;
  description: string;
  tags?: string[];
  icon: string;
  highlight?: string;
  link?: string;
  linkText?: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    badge: "1st Year",
    title: "Started Web Development",
    description:
      "Jumped into full stack web development in my first year of B.Tech — learning HTML, CSS, JavaScript, React and Node.js. Built my first real full stack applications from scratch.",
    tags: ["React", "Node.js", "MongoDB", "JavaScript"],
    icon: "🚀",
    link: "/story/web-dev-journey",
    linkText: "Read Story",
  },
  {
    year: "2025",
    badge: "1st Year",
    title: "Hackathon — Runner Up 🥈",
    description:
      "Competed in a hackathon in my very first year and secured 2nd place (Runner Up). Also presented the project at the hackathon exhibition in front of judges and industry professionals.",
    tags: ["Hackathon", "Exhibition", "2nd Place"],
    icon: "🥈",
    highlight: "Runner Up",
    link: "/story/hackathon-runner-up",
    linkText: "Read Story",
  },
  {
    year: "2026",
    badge: "2nd Year",
    title: "Machine Learning & AI",
    description:
      "Dived deep into Machine Learning — studied and implemented ANN, K-Means Clustering, Apriori Algorithm, Euclidean Distance, Linear Regression, and more. Built multiple ML projects using Python and Streamlit for interactive dashboards.",
    tags: ["Python", "ANN", "K-Means", "Apriori", "Linear Regression", "Streamlit"],
    icon: "🧠",
    link: "/story/machine-learning-ai",
    linkText: "Read Story",
  },
  {
    year: "2026",
    badge: "2nd Year",
    title: "IoT & AgriSense AI",
    description:
      "Expanded into IoT development. Built AgriSense AI — an IoT-based smart agriculture system integrating sensor data with AI predictions using Gemini API to help farmers with real-time crop and soil analysis.",
    tags: ["IoT", "Gemini API", "FastAPI", "Next.js", "Sensors"],
    icon: "🌿",
    link: "/projects/agrisense-ai",
    linkText: "View Project",
  },
  {
    year: "2026",
    badge: "2nd Year",
    title: "Project Tadipaar — Maharashtra Gov",
    description:
      "Built Project Tadipaar for the Maharashtra Government — a civic tracking and management system. Received a Letter of Recommendation (LOR) from the government for the work delivered.",
    tags: ["Government Project", "LOR", "Maharashtra", "Full Stack"],
    icon: "🏛️",
    highlight: "LOR from Govt.",
    link: "/projects/project-tadipaar",
    linkText: "View Project",
  },
  {
    year: "2026",
    badge: "Leadership",
    title: "Technical Head — S4DS MITAOE",
    description:
      "Appointed as the Technical Head for the Society for Data Science (S4DS) institute-level student chapter at MIT Academy of Engineering, leading technical initiatives and workshops.",
    tags: ["Leadership", "Data Science", "S4DS", "Community"],
    icon: "📊",
    highlight: "Tech Head",
    link: "/story/s4ds-tech-head",
    linkText: "Read Story",
  },
  {
    year: "2026",
    badge: "2nd Year",
    title: "Avishkar State Level Competition",
    description:
      "Presented my project at the prestigious Avishkar State Level Competition, demonstrating technical innovation and competing alongside top talents.",
    tags: ["Competition", "State Level", "Avishkar", "Innovation"],
    icon: "🏆",
    highlight: "State Level",
    link: "/story/avishkar-state-competition",
    linkText: "Read Story",
  },
  {
    year: "2026",
    badge: "2nd Year",
    title: "Industrial Visit: Baramati AI Center & Krushik",
    description:
      "Visited the Baramati AI Center and the Krushik AI Agricultural Exhibition, gaining deep insights into how artificial intelligence is transforming modern agriculture and rural industries.",
    tags: ["Industrial Visit", "AI", "Agriculture", "Exposure"],
    icon: "🏭",
    link: "/story/baramati-ai-krushik-visit",
    linkText: "Read Story",
  },
  {
    year: "2026",
    badge: "2nd Year",
    title: "Symbiosis Infosys Lab & IoT Certification",
    description:
      "Visited the Symbiosis Infosys Lab to learn advanced IoT concepts, creating root IoT-related systems. Earned the prestigious IoT 12 Certification from Infosys Springboard.",
    tags: ["IoT", "Symbiosis", "Infosys", "Certification", "Hardware"],
    icon: "🎓",
    highlight: "Certified",
    link: "/story/symbiosis-infosys-iot",
    linkText: "Read Story",
  },
  {
    year: "2026",
    badge: "Present",
    title: "Scaling & AI Products",
    description:
      "Actively building production-grade AI-powered products, studying system design, and preparing for top engineering roles. Focused on combining full stack depth with AI capabilities.",
    tags: ["System Design", "AI Products", "Next.js", "Production"],
    icon: "⚡",
    link: "/story/scaling-ai-products",
    linkText: "Read Story",
  },
];

export const achievements: Achievement[] = [
  {
    icon: "🥈",
    title: "Hackathon Runner Up",
    description: "Secured 2nd place in a competitive hackathon against hundreds of participants. Also presented at the hackathon exhibition.",
    highlight: "2nd Place",
  },
  {
    icon: "🏛️",
    title: "Government LOR",
    description: "Received a Letter of Recommendation from the Maharashtra Government for Project Tadipaar.",
    highlight: "Official LOR",
  },
  {
    icon: "🚀",
    title: "5+ Full Stack Applications",
    description: "Built multiple production-grade full stack applications from scratch across web and IoT domains.",
    highlight: "5+ Projects",
  },
  {
    icon: "🤖",
    title: "AI Systems Developer",
    description: "Building AI-powered systems integrating Gemini API, ML models, and IoT sensors into real products.",
    highlight: "AI + IoT",
  },
  {
    icon: "📊",
    title: "Technical Head — S4DS",
    description: "Serving as the Technical Head at the Society for Data Science (S4DS) institute-level student chapter at MITAOE.",
    highlight: "Leadership",
  },
  {
    icon: "🧠",
    title: "ML Practitioner",
    description: "Implemented ANN, K-Means, Apriori, Linear Regression and more with Python and Streamlit.",
    highlight: "ML Models",
  },
];
