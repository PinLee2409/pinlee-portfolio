import { site, type Dictionary } from "@/content";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-line-soft">
      <div className="wrap mono flex flex-wrap items-center justify-between gap-4 py-8 text-muted">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{dict.footer.built}</span>
        <a
          href="#top"
          className="link-reveal transition-colors hover:text-gold"
        >
          {dict.footer.top}
        </a>
      </div>
    </footer>
  );
}
