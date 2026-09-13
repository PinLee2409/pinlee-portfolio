import Reveal from "./Reveal";

/**
 * Every section opens the same way: the mono label used in the rail, a rule
 * that runs to the edge, a count or date range that says something true about
 * what follows — then the heading itself.
 */
export default function SectionHead({
  label,
  title,
  meta,
}: {
  label: string;
  title: string;
  meta: string;
}) {
  return (
    <Reveal>
      <div className="section-head">
        <span className="eyebrow">{label}</span>
        <span className="bar" aria-hidden="true" />
        <span className="mono text-muted">{meta}</span>
      </div>
      <h2
        className="display mb-[clamp(2.25rem,4vw,3.25rem)] max-w-[24ch]"
        style={{ fontSize: "var(--title-md)" }}
      >
        {title}
      </h2>
    </Reveal>
  );
}
