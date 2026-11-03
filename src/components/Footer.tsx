import { navLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Arfaoui Badi · Tunis, Tunisia
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="u-line py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#home"
            className="py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
