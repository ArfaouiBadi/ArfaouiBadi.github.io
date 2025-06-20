import { academicProjects } from "@/constants";

const typeColors: Record<string, string> = {
  Academic: "bg-purple-900 text-purple-300",
};

const getLogo = (type: string) => {
  if (type === "Academic") {
    // Briefcase icon
    return (
      <svg
        className="w-full h-full text-purple-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6"
        />
      </svg>
    );
  }
  // Default: document icon
  return (
    <svg
      className="w-full h-full text-zinc-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 7h10M7 11h10M7 15h6"
      />
    </svg>
  );
};

const AcademicProjects = () => {
  return (
    <div className="mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-accent">
          Academic Projects
        </h1>
        <p
          className="text-zinc-400 text-lg max-w-3xl mx-auto animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          A collection of my academic projects, from university to personal.
        </p>
      </div>
      <div className="relative">
        {/* Timeline vertical line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-zinc-700"
          style={{ zIndex: 0 }}
        />

        <div className="space-y-12">
          {academicProjects.map((project, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-8"
            >
              {idx % 2 === 0 ? (
                <>
                  <div
                    className="animate-fadeInRight"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    <AcademicProjectCard project={project} />
                  </div>
                  <TimelineIcon type={project.type} />
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <TimelineIcon type={project.type} />
                  <div
                    className="animate-fadeInLeft"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    <AcademicProjectCard project={project} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineIcon = ({ type }: { type: string }) => (
  <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-zinc-600 flex items-center justify-center z-10">
    <div className="w-8 h-8">{getLogo(type)}</div>
  </div>
);

const AcademicProjectCard = ({
  project,
}: {
  project: (typeof academicProjects)[0];
}) => (
  <div className="bg-zinc-900 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-zinc-800 hover:scale-105 relative">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
      <span className="text-xl font-semibold text-accent drop-shadow">
        {project.title}
      </span>
      <span className="text-sm text-zinc-400">{project.date}</span>
    </div>
    <div className="text-zinc-300 font-medium mb-3 flex items-center gap-2 flex-wrap">
      {project.type && (
        <span
          className={`ml-2 text-xs font-semibold px-2.5 py-1 rounded-full ${
            typeColors[project.type] || "bg-zinc-800 text-zinc-300"
          }`}
        >
          {project.type}
        </span>
      )}
    </div>
    <ul className="list-disc pl-5 text-zinc-400 text-sm leading-relaxed mb-4">
      {project.description.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
    {/* Technologies display */}
    <div className="flex flex-col gap-2">
      {project.technologies_front && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-semibold text-sm w-16">Front:</span>
          {project.technologies_front.map((tech, i) => (
            <span
              key={i}
              className="bg-zinc-700 text-zinc-300 text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {project.technologies_back && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-semibold text-sm w-16">Back:</span>
          {project.technologies_back.map((tech, i) => (
            <span
              key={i}
              className="bg-zinc-700 text-zinc-300 text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default AcademicProjects;
