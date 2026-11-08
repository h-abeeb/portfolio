import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
        Selected Work
      </p>
      <h2 className="font-display text-4xl font-black tracking-tight md:text-6xl">
        Things I've built.
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}