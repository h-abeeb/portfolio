import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center font-mono text-xs uppercase tracking-widest text-muted">
      © {new Date().getFullYear()} {site.name}
    </footer>
  );
}