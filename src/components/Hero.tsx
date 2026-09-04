import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { lazy, Suspense, useRef } from "react";
import { profile } from "@/data/portfolio";
import portrait from "@/assets/portrait.jpg";

/* Three.js is the heaviest dependency — stream it in as its own chunk. */
const NetworkScene = lazy(() => import("./three/NetworkScene"));

export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-32 md:pt-36"
    >
      {/* Dimmed 3D banking network, tinted to the page — drifts slower than the text */}
      <motion.div
        style={reduced ? undefined : { y: sceneY }}
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      >
        <Suspense fallback={null}>
          <NetworkScene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/75 to-ink-950/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink-950 to-transparent" />
      </motion.div>

      {/* Outer layer: scroll parallax. Inner layer: one-time entrance. Separate so the motion values don't fight. */}
      <motion.div
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-5xl"
      >
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <p className="flex items-center gap-2.5 text-sm text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Open to banking &amp; fintech roles
          </p>

          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl xl:text-[4.2rem]">
            I build the systems banks use to{" "}
            <em className="text-gold-300">move money</em>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
            Software engineer working on SWIFT MT/MX messaging, ISO 20022,
            financial dashboards and secure APIs — Angular and Spring Boot, end
            to end.
          </p>

          <p className="mt-4 font-mono text-xs text-zinc-500">
            MT103 → pacs.008.001.08 — the kind of translation I do all day
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              See projects
              <ArrowRight className="h-4 w-4" />
            </a>
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

        <figure className="mx-auto w-full max-w-[17rem] sm:max-w-[19rem]">
          <div className="overflow-hidden rounded-md border border-line">
            <img
              src={portrait}
              alt="Arfaoui Badi"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between font-mono text-[11px] text-zinc-500">
            <span>Arfaoui Badi</span>
            <span>Tunis, Tunisia</span>
          </figcaption>
        </figure>
      </motion.div>
      </motion.div>
    </section>
  );
}
