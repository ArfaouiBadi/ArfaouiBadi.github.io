import SectionHeading from "./ui/SectionHeading";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading title="Where I've worked" />

      <ol className="mt-6 divide-y divide-line">
        {experiences.map((exp) => (
          <li
            key={`${exp.company}-${exp.period}`}
            className="grid gap-2 py-8 md:grid-cols-[170px_1fr] md:gap-8"
          >
            <div className="font-mono text-xs leading-relaxed text-zinc-400">
              <p className="flex items-center gap-2">
                {exp.period.endsWith("Present") && (
                  <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-400" />
                  </span>
                )}
                {exp.period}
              </p>
              <p className="mt-1">
                {exp.type} · {exp.domain}
              </p>
            </div>
            <div>
              <h3 className="font-sans text-base font-semibold text-zinc-100">
                {exp.role}
              </h3>
              <p className="mt-0.5 text-sm text-zinc-400">
                {exp.company}, {exp.location}
              </p>
              <ul className="mt-3 space-y-1.5">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm leading-relaxed text-zinc-400"
                  >
                    <span aria-hidden="true" className="text-zinc-600">
                      –
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-xs text-zinc-400">
                {exp.tech.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
