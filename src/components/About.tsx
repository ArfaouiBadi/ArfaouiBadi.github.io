import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { aboutHighlights, aboutParagraph } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        eyebrow="About"
        title="Software for the financial sector"
      />

      <Reveal className="mt-8 max-w-3xl">
        <p className="text-base leading-[1.85] text-zinc-300">
          {aboutParagraph}
        </p>

        <blockquote className="mt-8 border-l-2 border-gold-400 pl-5 font-display text-xl italic leading-relaxed text-zinc-200 md:text-2xl">
          Correctness isn't optional when the payload is someone's money.
        </blockquote>

        <p className="label mt-10">Focus areas</p>
        <ul className="mt-4 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
          {aboutHighlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-baseline gap-3 text-sm text-zinc-300"
            >
              <span className="font-mono text-zinc-600">–</span>
              {highlight}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
