import { services } from "../../data/services";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
        Services
      </p>
      <h2 className="font-display text-4xl font-black tracking-tight md:text-6xl">
        How I can help.
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="rounded-2xl border border-border bg-surface p-8 transition hover:border-accent hover:shadow-[0_0_40px_rgba(139,92,246,.25)]"
          >
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <h3 className="mt-3 font-display text-2xl font-extrabold">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{s.desc}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {s.points.map((p) => (
                <li key={p} className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}