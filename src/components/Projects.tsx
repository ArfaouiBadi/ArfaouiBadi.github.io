import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ArchiveProjects from "./ArchiveProjects";
import { additionalProjects, projects, type Project } from "@/data/portfolio";

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

function GithubLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-fit items-center gap-1.5 text-sm text-gold-300"
    >
      <span className="u-line">View on GitHub</span>
      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
    </a>
  );
}

/* The lead project gets the tall column and its workflow; the rest stack beside it. */
function LeadProject({ project }: { project: Project }) {
  return (
    <article className="card card-lift flex h-full flex-col p-7 md:p-9 lg:row-span-3">
      <h3 className="max-w-[18ch] font-display text-2xl font-medium leading-tight text-zinc-100 md:text-[2rem]">
        {project.title}
      </h3>
      <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-zinc-400">
        {project.description}
      </p>
      {project.flow && (
        <ol className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-5">
          {project.flow.map((step, i) => (
            <li key={step} className="bg-ink-900 px-3 py-3">
              <span className="block font-mono text-[11px] text-gold-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 block text-sm text-zinc-200">{step}</span>
            </li>
          ))}
        </ol>
      )}
      <div className="mt-auto pt-8">
        <Tags tags={project.tags} />
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card card-lift flex flex-col p-6">
      <h3 className="text-base font-semibold text-zinc-100">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <div className="mt-4">
        <Tags tags={project.tags} />
      </div>
    </article>
  );
}

export default function Projects() {
  const [lead, ...rest] = projects;

  return (
    <section id="projects" className="section">
      <SectionHeading
        title="Selected work"
        subtitle="Financial messaging, analytics and security platforms, plus product work outside banking."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <LeadProject project={lead} />
        {rest.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
        <div>
          <h3 className="font-display text-2xl font-medium text-zinc-100">
            Outside banking
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            SaaS and product work for healthcare, pharmacy and e-commerce teams.
          </p>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {additionalProjects.map((project) => (
            <li key={project.title} className="py-6">
              <h4 className="text-base font-semibold text-zinc-100">
                {project.title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <Tags tags={project.tags} />
                {project.github && <GithubLink href={project.github} />}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ArchiveProjects />
    </section>
  );
}
