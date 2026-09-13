"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { site, type Dictionary } from "@/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/** With EmailJS keys the form sends from the page; without them it hands the
 *  message to the visitor's mail app, so the button never lies about what it does. */
const canSend = Boolean(service && template && publicKey);

type State = "idle" | "sending" | "sent" | "failed";

export default function Contact({ dict }: { dict: Dictionary }) {
  const t = dict.contact;
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!canSend) {
      const data = new FormData(form);
      const subject = `${t.form.mailSubject} ${data.get("from_name")}`;
      const body = `${data.get("message")}\n\n— ${data.get("from_name")} (${data.get("reply_to")})`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setState("sending");
    try {
      await emailjs.sendForm(service!, template!, form, publicKey!);
      form.reset();
      setState("sent");
    } catch (error) {
      console.error(error);
      setState("failed");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <SectionHead label={t.label} title={t.title} meta={t.meta} />

        <div className="grid gap-[clamp(2.5rem,6vw,4.5rem)] lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="lede max-w-[38ch]">{t.intro}</p>

            <dl className="dossier mt-10">
              <div>
                <dt className="mono text-muted">{t.rows.email}</dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="link-underline text-[0.9375rem]"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mono text-muted">{t.rows.phone}</dt>
                <dd>
                  <a
                    href={`tel:+84${site.phone.slice(1)}`}
                    className="link-underline text-[0.9375rem]"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mono text-muted">{t.rows.github}</dt>
                <dd>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-[0.9375rem]"
                  >
                    {site.github.replace("https://", "")}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mono text-muted">{t.rows.based}</dt>
                <dd className="text-[0.9375rem] text-dim">{dict.hero.city}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={90}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="from_name" className="mono block text-muted">
                  {t.form.name}
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={t.form.namePlaceholder}
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="reply_to" className="mono block text-muted">
                  {t.form.email}
                </label>
                <input
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={t.form.emailPlaceholder}
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="message" className="mono block text-muted">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={t.form.messagePlaceholder}
                  className="field"
                />
              </div>

              <button
                type="submit"
                className="btn w-full justify-center"
                disabled={state === "sending"}
              >
                {state === "sending"
                  ? t.form.sending
                  : canSend
                    ? t.form.send
                    : t.form.sendMail}
              </button>

              <p aria-live="polite" className="mono min-h-4">
                {state === "sent" && (
                  <span className="text-jade">{t.form.sent}</span>
                )}
                {state === "failed" && (
                  <span className="text-gold-soft">
                    {t.form.failed} {site.email}
                  </span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
