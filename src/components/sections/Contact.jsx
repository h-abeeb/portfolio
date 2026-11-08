import { site } from "../../data/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
        Contact
      </p>
      <h2 className="font-display text-4xl font-black tracking-tight md:text-6xl">
        Let's build <span className="text-accent">something.</span>
      </h2>

      <p className="mt-6 max-w-xl text-lg text-muted">
        Have a project in mind? Message me and I'll reply within a day.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-accent px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition hover:bg-accent-hover"
        >
          Email me →
        </a>
        <a
          href={site.socials.find((s) => s.label === "WhatsApp")?.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition hover:border-accent"
        >
          WhatsApp
        </a>
      </div>

      <ul className="mt-10 flex gap-6 font-mono text-xs font-bold uppercase tracking-widest">
        {site.socials
          .filter((s) => s.label !== "WhatsApp")
          .map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="text-muted hover:text-text">
                {s.label}
              </a>
            </li>
          ))}
      </ul>
    </section>
  );
}