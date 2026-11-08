import { useRef } from "react";
import Tag from "./Tag";

export default function ProjectCard({ title, problem, stack, image, video, live, github }) {
  const ref = useRef(null);

  const play = () => ref.current?.play();
  const stop = () => {
    if (!ref.current) return;
    ref.current.pause();
    ref.current.currentTime = 0;
  };

  return (
    <article
      onMouseEnter={play}
      onMouseLeave={stop}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_40px_rgba(139,92,246,.25)]"
    >
      <div className="aspect-video bg-gradient-to-br from-accent/30 to-bg">
        {video ? (
          <video
            ref={ref}
            src={video}
            poster={image}
            muted
            loop
            playsInline
            preload="none"
            className="h-full w-full object-cover"
          />
        ) : (
          image && <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-extrabold">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{problem}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => <Tag key={s}>{s}</Tag>)}
        </div>

        <div className="mt-5 flex gap-5 font-mono text-xs font-bold uppercase tracking-widest">
          {live && <a href={live} target="_blank" rel="noreferrer" className="text-accent hover:text-accent-hover">Live →</a>}
          {github && <a href={github} target="_blank" rel="noreferrer" className="text-muted hover:text-text">GitHub</a>}
        </div>
      </div>
    </article>
  );
}