export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  tech: string[];
  features: string[];
  challenge: string;
  solution: string;
  gradient: string;
  accentColor: string;
  icon: string;
  image?: string;
  link?: string;
  github?: string;
}

export interface SkillItem {
  name: string;
  logo?: string;
}

export interface Skill {
  category: string;
  icon: string;
  items: SkillItem[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
  linkText?: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}
