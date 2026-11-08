export default function Tag({ children }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
      {children}
    </span>
  );
}