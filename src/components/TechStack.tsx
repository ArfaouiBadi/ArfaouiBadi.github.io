import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { techStack } from "@/data/portfolio";

export default function TechStack() {
  const reduced = useReducedMotion();

  return (
    <section id="tech" className="section">
      <SectionHeading eyebrow="Stack" title="Tools & technologies" />

      <motion.div
        initial={reduced ? undefined : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ show: { transition: { staggerChildren: 0.02 } } }}
        className="mt-8 flex max-w-4xl flex-wrap gap-1.5"
      >
        {techStack.map((tech) => (
          <motion.span
            key={tech}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
            }}
            className="tag"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
