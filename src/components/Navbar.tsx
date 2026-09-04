import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...navLinks.map((link) => link.href.slice(1))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled ? "border-b border-line bg-ink-950" : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6">
          <a
            href="#home"
            className="font-display text-lg font-semibold text-zinc-100"
            aria-label="Arfaoui Badi — back to top"
          >
            Arfaoui Badi
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "u-line text-sm transition-colors",
                      isActive
                        ? "text-gold-300"
                        : "text-zinc-400 hover:text-zinc-100"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-md border border-line px-3 py-1.5 text-sm text-zinc-200 transition-colors hover:border-zinc-500 sm:block"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-md border border-line p-2 text-zinc-200 md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gold-400/70"
          aria-hidden="true"
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/90"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="absolute right-0 top-0 flex h-full w-72 max-w-[82vw] flex-col gap-1 border-l border-line bg-ink-900 p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display font-semibold text-zinc-100">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-line p-2 text-zinc-200"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-base transition-colors",
                    active === link.href.slice(1)
                      ? "text-gold-300"
                      : "text-zinc-300 hover:text-zinc-100"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-3"
              >
                Resume
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
