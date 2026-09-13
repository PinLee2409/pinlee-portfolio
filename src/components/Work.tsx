import type { Dictionary } from "@/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Work({ dict }: { dict: Dictionary }) {
  const t = dict.work;

  return (
    <section id="work" className="section">
      <div className="wrap">
        <SectionHead
          label={t.label}
          title={t.title}
          meta={`${t.projects.length} ${t.metaUnit} · ${t.metaYears}`}
        />

        <div className="entries">
          {t.projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 70}>
              <article className="entry">
                <div className="mono flex flex-wrap gap-x-3 gap-y-1 text-muted lg:flex-col lg:gap-1.5">
                  <span className="text-gold">{project.year}</span>
                  <span>{project.kind}</span>
                  {project.team && (
                    <span className="normal-case tracking-normal text-muted/80">
                      {project.team}
                    </span>
                  )}
                </div>

                <div className="relative">
                  <h3 className="entry-title">
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer">
                        {project.title}{" "}
                        <span aria-hidden="true" className="text-gold">
                          ↗
                        </span>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <ul className="mono mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-dim">
                    {project.stack.map((tech, index) => (
                      <li key={tech} className="flex items-center gap-3">
                        {tech}
                        {index < project.stack.length - 1 && (
                          <span className="text-gold/40" aria-hidden="true">
                            /
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
