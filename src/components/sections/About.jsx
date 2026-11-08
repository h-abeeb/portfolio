import { site } from "../../data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
        About
      </p>
      <h2 className="font-display text-4xl font-black tracking-tight md:text-6xl">
        Builder first.
      </h2>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I'm {site.name}, a CSE (AI &amp; ML) student who builds real products alongside
            coursework: web apps, AI features and hardware prototypes.
          </p>
          <p>
            I take part in hackathons, which taught me to ship fast, cut scope smartly and
            deliver something that works on demo day.
          </p>
          <p>
            Working with me means direct communication, quick iterations and no agency overhead.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-text">
            Skills
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {site.skills.map((s) => (
              <li key={s} className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}