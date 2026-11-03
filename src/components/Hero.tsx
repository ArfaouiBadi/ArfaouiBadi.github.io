import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import portrait from "@/assets/portrait.jpg";
import MagneticLink from "./ui/MagneticLink";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center pb-24 pt-28 md:pt-32"
    >
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.25fr_1fr] lg:gap-10"
      >
        <div>
          <h1 className="font-display text-[2.6rem] font-medium leading-[1.04] tracking-[-0.02em] text-balance sm:text-6xl lg:text-[4.4rem]">
            I build the systems banks use to{" "}
            <em className="text-gold-300">move money</em>.
          </h1>

          <p className="mt-7 max-w-[52ch] text-base leading-relaxed text-zinc-400">
            Software developer at Banking Intelligence Consulting, working on
            SWIFT MT/MX messaging, ISO 20022, financial dashboards and secure
            APIs in Angular and Spring Boot. Studying for an engineering degree
            in software, AI and data science alongside.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticLink href="#projects" className="btn btn-primary">
              See projects
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </MagneticLink>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[22rem] lg:ml-auto lg:mr-0">
          <div className="overflow-hidden rounded-md border border-line">
            <img
              src={portrait}
              alt="Arfaoui Badi"
              width={1101}
              height={1600}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
