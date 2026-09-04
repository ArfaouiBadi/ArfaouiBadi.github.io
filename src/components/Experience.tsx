import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="From software engineering training to building a SWIFT messaging platform."
      />

      <ol className="mt-6 divide-y divide-line">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.period}`}>
            <Reveal>
              <div className="grid gap-2 py-8 md:grid-cols-[170px_1fr] md:gap-8">
                <div className="font-mono text-xs leading-relaxed text-zinc-500">
                  <p>{exp.period}</p>
                  <p className="mt-1">
                    {exp.type} · {exp.domain}
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-base font-semibold text-zinc-100">
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-zinc-400">
                    {exp.company} — {exp.location}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2.5 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="text-zinc-600">–</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 font-mono text-xs text-zinc-500">
                    {exp.tech.join(" · ")}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
