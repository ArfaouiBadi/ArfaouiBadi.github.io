import { skills } from "@/constants";

const categoryIcons: Record<string, JSX.Element> = {
  "Front End": (
    <svg
      className="w-8 h-8 text-green-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  ),
  "Back End": (
    <svg
      className="w-8 h-8 text-blue-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m-3-1l-3-1m5.25 3.364l-3-1.091"
      />
    </svg>
  ),
  Databases: (
    <svg
      className="w-8 h-8 text-orange-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375"
      />
    </svg>
  ),
  DevOps: (
    <svg
      className="w-8 h-8 text-purple-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5"
      />
    </svg>
  ),
};

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-accent">
          Professional Toolkit
        </h1>
        <p
          className="text-zinc-400 text-lg max-w-3xl mx-auto animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          A collection of technologies and tools I use to bring ideas to life,
          from frontend design to backend implementation and deployment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((cat, idx) => (
          <div
            key={cat.category}
            className="bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeIn"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <div className="mb-5 bg-zinc-800 p-4 rounded-full">
              {categoryIcons[cat.category]}
            </div>
            <h2 className="text-2xl font-bold mb-4 text-zinc-200 group-hover:text-accent transition-colors">
              {cat.category}
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {cat.technologies.map((tech) => (
                <span
                  key={tech}
                  className="py-1 px-3 text-sm rounded-full bg-zinc-800 text-zinc-300 group-hover:bg-accent/20 group-hover:text-white transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
