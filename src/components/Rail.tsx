"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  locales,
  localeNames,
  sectionIds,
  site,
  type Dictionary,
  type Locale,
  type SectionId,
} from "@/content";

/**
 * Desktop: a fixed rail carrying the identity, the section index and a gold
 * thread that fills as you read. Mobile: a slim bar and a full-height sheet
 * with targets big enough for a thumb.
 */
export default function Rail({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const [active, setActive] = useState<string>("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nodes = ["top", ...sectionIds]
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  // While the sheet is up: hold the page still, close on Escape, and close if
  // the viewport grows into the desktop rail.
  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const scrollbar = window.innerWidth - body.clientWidth;
    const previous = [body.style.overflow, body.style.paddingRight];
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1080px)");
    const onDesktop = () => setOpen(false);

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);

    return () => {
      [body.style.overflow, body.style.paddingRight] = previous;
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <>
      <header className="rail">
        <div>
          <a href="#top" className="block w-fit">
            <span
              className="display block text-[1.9rem] leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              {site.name}
            </span>
            <span className="mono mt-2 block text-muted">{dict.hero.role}</span>
          </a>
          <LocaleSwitch lang={lang} label={dict.ui.language} />
        </div>

        <nav aria-label={dict.ui.sections}>
          <RailIndex dict={dict} active={active} />
        </nav>

        <div className="mono flex flex-col gap-2 text-muted">
          {site.available && (
            <span className="flex items-center gap-2 text-jade">
              <span
                className="size-1.5 rounded-full bg-jade"
                aria-hidden="true"
              />
              {dict.ui.openToWork}
            </span>
          )}
          <a
            href={`mailto:${site.email}`}
            className="link-reveal w-fit lowercase tracking-normal transition-colors hover:text-paper"
          >
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="link-reveal w-fit transition-colors hover:text-paper"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      <div className="topbar">
        <div className="flex items-center justify-between px-6 py-3">
          <a href="#top" className="display text-xl leading-none">
            {site.name}
          </a>
          <button
            type="button"
            className="menu-btn"
            data-open={open}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-sheet"
            aria-label={open ? dict.ui.closeIndex : dict.ui.openIndex}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <MenuSheet
          dict={dict}
          lang={lang}
          active={active}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

function MenuSheet({
  dict,
  lang,
  active,
  onClose,
}: {
  dict: Dictionary;
  lang: Locale;
  active: string;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  // The sheet holds the page still while it is up, so the jump has to wait
  // for it to close — otherwise the link sets the hash and nothing moves.
  function goToSection(event: React.MouseEvent, id: string) {
    event.preventDefault();
    onClose();
    window.setTimeout(() => {
      document.body.style.overflow = "";
      const target = document.getElementById(id);
      if (!target) return;
      const still = window.matchMedia("(prefers-reduced-motion: reduce)");
      target.scrollIntoView({
        behavior: still.matches ? "auto" : "smooth",
        block: "start",
      });
      history.replaceState(null, "", `#${id}`);
    }, 0);
  }

  return (
    <div
      id="menu-sheet"
      ref={ref}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={dict.ui.sections}
      className="menu-sheet"
    >
      <nav aria-label={dict.ui.sections}>
        {sectionIds.map((id: SectionId, i) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(event) => goToSection(event, id)}
            aria-current={active === id ? "true" : undefined}
            className="menu-link rise"
            style={{ animationDelay: `${60 + i * 55}ms` }}
          >
            <span className="rail-dot" aria-hidden="true" />
            {dict.nav[id]}
          </a>
        ))}
      </nav>

      <div className="rise mt-10 space-y-6" style={{ animationDelay: "300ms" }}>
        <div className="flex items-center gap-2">
          <span className="mono mr-1 text-muted">{dict.ui.language}</span>
          {locales.map((code) =>
            code === lang ? (
              <span key={code} className="lang-chip" aria-current="true">
                {localeNames[code]}
              </span>
            ) : (
              <Link
                key={code}
                href={`/${code}`}
                hrefLang={code}
                onClick={onClose}
                className="lang-chip"
              >
                {localeNames[code]}
              </Link>
            ),
          )}
        </div>

        <div className="mono flex flex-col gap-3 text-muted">
          {site.available && (
            <span className="flex items-center gap-2 text-jade">
              <span
                className="size-1.5 rounded-full bg-jade"
                aria-hidden="true"
              />
              {dict.ui.openToWork}
            </span>
          )}
          <a
            href={`mailto:${site.email}`}
            className="link-underline w-fit lowercase tracking-normal"
          >
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="link-underline w-fit"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function LocaleSwitch({ lang, label }: { lang: Locale; label: string }) {
  return (
    <div className="mono mt-5 flex items-center gap-2 text-muted">
      <span className="sr-only">{label}</span>
      {locales.map((code, i) => (
        <span key={code} className="flex items-center gap-2">
          {i > 0 && (
            <span className="text-line-soft" aria-hidden="true">
              /
            </span>
          )}
          {code === lang ? (
            <span className="text-gold" aria-current="true">
              {localeNames[code]}
            </span>
          ) : (
            <Link
              href={`/${code}`}
              hrefLang={code}
              className="link-reveal transition-colors hover:text-paper"
            >
              {localeNames[code]}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}

function RailIndex({ dict, active }: { dict: Dictionary; active: string }) {
  const listRef = useRef<HTMLUListElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const item = listRef.current?.querySelector<HTMLElement>(
      `[data-id="${active}"]`,
    );
    if (!fillRef.current) return;
    const height = item ? item.offsetTop + item.offsetHeight : 0;
    fillRef.current.style.height = `${height}px`;
  }, [active]);

  return (
    <ul ref={listRef} className="relative flex flex-col">
      <span className="rail-thread" aria-hidden="true">
        <span ref={fillRef} style={{ top: 0, height: 0 }} />
      </span>
      {sectionIds.map((id: SectionId) => (
        <li key={id} data-id={id}>
          <a
            href={`#${id}`}
            className="rail-link mono"
            aria-current={active === id ? "true" : undefined}
          >
            <span className="rail-dot" aria-hidden="true" />
            {dict.nav[id]}
          </a>
        </li>
      ))}
    </ul>
  );
}
