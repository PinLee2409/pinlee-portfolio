import type { Dictionary } from "@/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Path({ dict }: { dict: Dictionary }) {
  const t = dict.path;

  return (
    <section id="path" className="section">
      <div className="wrap">
        <SectionHead label={t.label} title={t.title} meta={t.meta} />

        <div>
          {t.roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 70}>
              <article
                className="tl"
                data-last={i === t.roles.length - 1 ? "true" : undefined}
              >
                <div className="tl-mark mono text-gold">{role.period}</div>
                <div>
                  <h3 className="text-lg font-medium tracking-tight">
                    {role.title}
                  </h3>
                  <p className="mono mt-1 text-muted">{role.org}</p>
                  <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted">
                    {role.summary}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
