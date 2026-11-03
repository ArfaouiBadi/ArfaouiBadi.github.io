import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Architecture from "@/components/Architecture";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: { offset: -72 } });
    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Architecture />
        <Contact />
      </main>
      <Footer />
      <div className="grain" aria-hidden="true" />
    </div>
  );
}
