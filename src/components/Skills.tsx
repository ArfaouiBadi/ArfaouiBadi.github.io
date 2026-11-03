import SectionHeading from "./ui/SectionHeading";
import { skillDomains } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading title="What I work with" />

      <dl className="mt-6 divide-y divide-line">
        {skillDomains.map((domain) => (
          <div
            key={domain.title}
            className="grid gap-3 py-6 md:grid-cols-[170px_1fr] md:gap-8"
          >
            <dt className="text-sm font-semibold text-zinc-100">
              {domain.title}
            </dt>
            <dd className="flex flex-wrap gap-1.5">
              {domain.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
