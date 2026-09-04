import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ArchiveProjects from "./ArchiveProjects";
import { additionalProjects, projects, type Project } from "@/data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card card-lift relative flex h-full flex-col overflow-hidden bg-gradient-to-b from-gold-400/[0.05] to-transparent p-6">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-5 right-2 select-none font-display text-[5.5rem] italic leading-none text-gold-400/10"
      >
        0{project.index}
      </span>
      <h3 className="relative font-sans text-base font-semibold text-zinc-100 pr-14">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-sm text-gold-300"
        >
          <span className="u-line">View on GitHub</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        subtitle="Financial messaging, analytics and security platforms — plus product work outside banking."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <div className="mt-14">
        <Reveal>
          <p className="label">Outside banking</p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500">
            SaaS and product work for healthcare, pharmacy and e-commerce teams.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {additionalProjects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>

      <ArchiveProjects />
    </section>
  );
}
