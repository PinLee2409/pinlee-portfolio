import type { Dictionary } from "@/content";

/**
 * The hero's centrepiece: one checkout request walking through the services,
 * drawn line by line. It illustrates how the work is put together — nothing
 * here claims to be a live measurement.
 */
const hops = [
  { name: "api-gateway", ms: "12ms" },
  { name: "order-service", ms: "31ms" },
  { name: "payment-service", ms: "64ms" },
  { name: "inventory-service", ms: "77ms" },
];

export default function Trace({ dict }: { dict: Dictionary }) {
  const t = dict.hero;
  let step = 0;
  const delay = () => ({ animationDelay: `${(step++ * 0.42).toFixed(2)}s` });

  return (
    <figure className="w-full max-w-[26rem]">
      <div className="console">
        <div className="console-head mono">
          <span className="text-gold">{t.traceTitle}</span>
          <span className="normal-case tracking-normal text-muted">trace</span>
        </div>

        <div className="console-body">
          <p className="console-row" style={delay()}>
            <span>
              <span className="text-gold">$</span> POST /orders/8412/checkout
            </span>
          </p>

          {hops.map((hop) => (
            <p key={hop.name} className="console-row" style={delay()}>
              <span className="text-dim">
                <span className="text-gold/50">→</span> {hop.name}
              </span>
              <span className="text-muted">{hop.ms}</span>
            </p>
          ))}

          <p className="console-row text-jade" style={delay()}>
            <span>200 OK · order paid</span>
            <span>107ms</span>
          </p>

          <p className="console-row" style={delay()}>
            <span className="console-caret" aria-hidden="true" />
          </p>
        </div>
      </div>

      <figcaption className="mt-3 font-mono text-[0.7rem] leading-relaxed text-muted">
        {t.traceNote}
      </figcaption>
    </figure>
  );
}
