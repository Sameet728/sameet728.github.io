import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Journey from "@/components/sections/Journey";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
    </>
  );
}
