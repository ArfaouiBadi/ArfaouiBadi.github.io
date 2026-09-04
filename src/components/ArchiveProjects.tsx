import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { academicProjects } from "@/data/portfolio";

export default function ArchiveProjects() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <div className="mt-14">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-3 border-t border-line py-4 text-left"
      >
        <span className="label transition-colors group-hover:text-zinc-300">
          Archive — academic &amp; early projects ({academicProjects.length})
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-zinc-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul className="pb-2">
              {academicProjects.map((project) => (
                <li key={project.title} className="border-b border-line py-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="font-sans text-sm font-medium text-zinc-300">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[11px] text-zinc-600">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] leading-relaxed text-zinc-500">
                    {project.summary}
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] text-zinc-600">
                    {project.tech.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
