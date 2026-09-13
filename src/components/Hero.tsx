import { site, type Dictionary } from "@/content";
import Trace from "./Trace";

const step = (i: number) => ({ animationDelay: `${i * 90}ms` });

export default function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero;

  return (
    <section
      id="top"
      className="wrap pb-[clamp(4rem,8vw,7rem)] pt-[clamp(4rem,10vw,8.5rem)]"
    >
      <p className="eyebrow rise" style={step(0)}>
        {t.role} · {t.cityShort}
      </p>

      <h1
        className="display rise mt-5"
        style={{ ...step(1), fontSize: "var(--title-xl)" }}
      >
        {site.name}
      </h1>

      <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-[clamp(2.5rem,5vw,4rem)] lg:grid-cols-[1fr_20rem] lg:items-start">
        <div>
          <p className="lede rise max-w-[46ch]" style={step(2)}>
            {t.lede}
          </p>

          <dl className="dossier rise mt-10" style={step(3)}>
            {t.dossier.map((row) => (
              <div key={row.label}>
                <dt className="mono text-muted">{row.label}</dt>
                <dd className="text-[0.9375rem] text-dim">{row.value}</dd>
              </div>
            ))}
            {site.available && (
              <div>
                <dt className="mono text-muted">{t.statusLabel}</dt>
                <dd className="flex items-center gap-2 text-[0.9375rem] text-jade">
                  <span
                    className="size-1.5 rounded-full bg-jade"
                    aria-hidden="true"
                  />
                  {t.status}
                </dd>
              </div>
            )}
          </dl>

          <div className="rise mt-10 flex flex-wrap gap-3" style={step(4)}>
            <a href="#work" className="btn">
              {t.primaryAction}
            </a>
            <a href="#contact" className="btn-ghost">
              {t.secondaryAction}
            </a>
          </div>
        </div>

        <div className="rise" style={step(3)}>
          <Trace dict={dict} />
        </div>
      </div>
    </section>
  );
}
