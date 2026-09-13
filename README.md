# PinLee — portfolio

A one-page portfolio: Next.js 16 (App Router, static export), Tailwind CSS v4,
deployed to GitHub Pages at `/pinlee-portfolio`.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000/pinlee-portfolio/en/ — the `basePath` applies in
development too.

```bash
npm run build   # writes the static site to ./out
```

## Languages

The site ships in English at `/en/` and Vietnamese at `/vi/`, both prerendered
as static HTML with their own `<html lang>`, title and `hreflang` tags. The
bare `/` is a small redirect page (`public/index.html`) that sends Vietnamese
browsers to `/vi/` and everyone else to `/en/`.

To change wording, edit `src/content/en.ts` and `src/content/vi.ts`. English
defines the shape of the dictionary, so a missing Vietnamese key is a
TypeScript error rather than a blank spot on the page. Adding a language means
adding one file and registering it in `src/content/index.ts`.

## Where things live

| Path                  | What it holds                                              |
| --------------------- | ---------------------------------------------------------- |
| `src/content/`        | Every fact and sentence, one file per language              |
| `src/app/globals.css` | Design tokens (colour, type, spacing) and component rules   |
| `src/components/`     | One component per section, plus the rail and reveal helper  |
| `src/app/[lang]/`     | The single page, prerendered once per language              |

The design runs on three typefaces loaded through `next/font`: Fraunces for
display, Inter Tight for body, JetBrains Mono for labels and data.

## Contact form

The form sends through [EmailJS](https://www.emailjs.com) when these variables
are set — in `.env.local` for development, and as build-time variables in the
GitHub Actions workflow for the deployed site:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Without them the submit button reads "Open in mail app" and hands the message
to the visitor's mail client instead, so the form always does something.

## Deploy

Pushing to `main` runs `.github/workflows`, which builds and publishes `out/`
to GitHub Pages.
