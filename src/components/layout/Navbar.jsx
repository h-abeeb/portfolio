import { useState } from "react";
import { site } from "../../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3 font-display text-lg font-extrabold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-sm">
            {site.name[0]}
          </span>
          {site.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {site.nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-mono text-xs uppercase tracking-widest text-muted transition hover:text-text">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden rounded-full bg-accent px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest transition hover:bg-accent-hover md:block">
          Get in touch →
        </a>

        <button onClick={() => setOpen(!open)} className="font-mono text-xs uppercase md:hidden">
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-border px-6 py-4 md:hidden">
          {site.nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="font-mono text-sm uppercase tracking-widest text-muted">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}