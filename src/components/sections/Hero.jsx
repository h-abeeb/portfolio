import { site } from "../../data/site";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32">
      <p className="mb-8 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
        {site.eyebrow}
      </p>

      <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-8xl">
        Ideas shipped <span className="text-accent">fast.</span>
        <br />
        Products built to <span className="text-accent">last.</span>
      </h1>

      <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted">
        I'm {site.name}. I build React, Flask and AI-powered products for founders and small
        teams, without the agency wait.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#work" className="rounded-full bg-accent px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition hover:bg-accent-hover">
          See work
        </a>
        <a href="#contact" className="rounded-full border border-border px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition hover:border-accent">
          Contact
        </a>
      </div>
    </section>
  );
}