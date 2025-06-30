import { experiences } from "@/constants";

const getLogo = (type: string) => {
  if (type === "Internship") {
    // Briefcase icon
    return (
      <svg
        className="w-full h-full text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 12v.01M7 16v-1a4 4 0 014-4h2a4 4 0 014 4v1M3 8V7a2 2 0 012-2h2a2 2 0 012 2v1m6 0V7a2 2 0 012-2h2a2 2 0 012 2v1M3 8h18M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8"
        />
      </svg>
    );
  }
  if (type === "Experience") {
    // Academic cap icon
    return (
      <svg
        className="w-full h-full text-blue-400"
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
  if (type === "Project") {
    // Lightbulb icon
    return (
      <svg
        className="w-full h-full text-green-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707M21 12h-1M4 12H3m16.485 4.485l-.707-.707M4.222 19.778l-.707-.707M12 5a7 7 0 00-7 7c0 3.866 3.134 7 7 7s7-3.134 7-7a7 7 0 00-7-7z"
        />
      </svg>
    );
  }
  if (type === "Freelance") {
    // User icon
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
          d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"
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

const typeColors: Record<string, string> = {
  Internship: "bg-yellow-700 text-yellow-300",
  Experience: "bg-blue-900 text-blue-300",
  Project: "bg-green-900 text-green-300",
  Freelance: "bg-purple-900 text-purple-300",
};

const Experience = () => {
  return (
    <div className="mx-auto max-w-8xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-accent">
          Experience Timeline
        </h1>
        <p
          className="text-zinc-400 text-lg max-w-3xl mx-auto animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          A collection of my professional experiences, from internships to
          freelance projects.
        </p>
      </div>

      <div className="relative">
        {/* Timeline vertical line - visible on all screens */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-zinc-700 z-0"
          style={{ zIndex: -1 }}
        />

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-x-8"
            >
              {/* Mobile layout - single column */}
              <div className="md:hidden">
                <div className="flex items-center gap-4 mb-4">
                  <TimelineIcon type={exp.type} />
                  <div className="flex-1">
                    <span className="text-sm text-zinc-400">{exp.date}</span>
                  </div>
                </div>
                <div
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <ExperienceCard exp={exp} />
                </div>
              </div>

              {/* Desktop layout - alternating columns */}
              {idx % 2 === 0 ? (
                <>
                  <div
                    className="hidden md:block animate-fadeInRight"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    <ExperienceCard exp={exp} />
                  </div>
                  <div className="hidden md:block">
                    <TimelineIcon type={exp.type} />
                  </div>
                  <div className="hidden md:block"></div>
                </>
              ) : (
                <>
                  <div className="hidden md:block"></div>
                  <div className="hidden md:block">
                    <TimelineIcon type={exp.type} />
                  </div>
                  <div
                    className="hidden md:block animate-fadeInLeft"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    <ExperienceCard exp={exp} />
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

const ExperienceCard = ({ exp }: { exp: (typeof experiences)[0] }) => (
  <div className="bg-zinc-900 p-4 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-zinc-800 hover:scale-105 relative">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
      <span className="text-lg md:text-xl font-semibold text-accent drop-shadow">
        {exp.title}
      </span>
      <span className="text-sm text-zinc-400 hidden md:block">{exp.date}</span>
    </div>
    <div className="text-zinc-300 font-medium mb-3 flex flex-col sm:flex-row sm:items-center gap-2 flex-wrap">
      <span className="text-sm md:text-base">{exp.company}</span>
      <span className="text-xs text-zinc-500">({exp.location})</span>
      <div className="flex flex-wrap gap-2">
        {exp.domain && (
          <span className="bg-blue-900 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">
            {exp.domain}
          </span>
        )}
        {exp.type && (
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              typeColors[exp.type] || "bg-zinc-800 text-zinc-300"
            }`}
          >
            {exp.type}
          </span>
        )}
      </div>
    </div>
    <ul className="list-disc pl-5 text-zinc-400 text-sm leading-relaxed mb-4">
      {exp.description.map((item, i) => (
        <li key={i} className="mb-1">
          {item}
        </li>
      ))}
    </ul>
    {/* Technologies display */}
    <div className="flex flex-col gap-2">
      {exp.technologies_front && (
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 items-start sm:items-center">
          <span className="font-semibold text-sm w-16 flex-shrink-0">
            Front:
          </span>
          <div className="flex flex-wrap gap-2">
            {exp.technologies_front.map((tech, i) => (
              <span
                key={i}
                className="bg-zinc-700 text-zinc-300 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      {exp.technologies_back && (
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 items-start sm:items-center">
          <span className="font-semibold text-sm w-16 flex-shrink-0">
            Back:
          </span>
          <div className="flex flex-wrap gap-2">
            {exp.technologies_back.map((tech, i) => (
              <span
                key={i}
                className="bg-zinc-700 text-zinc-300 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      {exp.technologies_others && (
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 items-start sm:items-center">
          <span className="font-semibold text-sm w-16 flex-shrink-0">
            Others:
          </span>
          <div className="flex flex-wrap gap-2">
            {exp.technologies_others.map((tech, i) => (
              <span
                key={i}
                className="bg-zinc-700 text-zinc-300 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default Experience;
