import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { skillDomains } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Expertise"
        title="What I work with"
        subtitle="Five domains that cover the lifecycle of a financial platform — from backend services to security."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillDomains.map((domain, i) => (
          <Reveal key={domain.title} delay={(i % 3) * 0.06}>
            <div className="card card-lift h-full p-5">
              <h3 className="font-sans text-base font-semibold text-zinc-100">
                {domain.title}
              </h3>
              <p className="mt-1 text-[13px] text-zinc-400">{domain.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {domain.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
