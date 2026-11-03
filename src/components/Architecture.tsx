import SectionHeading from "./ui/SectionHeading";
import { architectureIntro, architecturePrinciples } from "@/data/portfolio";

export default function Architecture() {
  return (
    <section id="architecture" className="section">
      <SectionHeading title="How I build" subtitle={architectureIntro} />

      <dl className="mt-10 grid gap-x-12 gap-y-7 sm:grid-cols-2">
        {architecturePrinciples.map((principle) => (
          <div key={principle.title}>
            <dt className="font-sans text-[15px] font-semibold text-zinc-100">
              {principle.title}
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-zinc-400">
              {principle.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
