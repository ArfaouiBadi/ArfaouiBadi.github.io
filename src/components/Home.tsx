import { socials } from "@/constants";
import heroImage from "../assets/hero.jpg";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import AcademicProjects from "./AcademicProjects";

const Home = () => {
  return (
    <main className="flex flex-col space-y-8">
      <section id="about" className="py-12 px-4">
        <About />
      </section>

      <section id="skills" className="py-12 px-4">
        <Skills />
      </section>

      <section id="experience" className="py-12 px-4">
        <Experience />
      </section>

      {/* <section id="academic-projects" className="py-12 px-4">
        <AcademicProjects />
      </section> */}

      <section id="projects" className="py-12 px-4">
        <Projects />
      </section>

      <section id="contact" className="py-12 px-4">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
