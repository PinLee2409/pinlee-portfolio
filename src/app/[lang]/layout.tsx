import "../globals.css";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { getDictionary, isLocale, locales } from "@/content";

const fraunces = Fraunces({
  subsets: ["latin", "vietnamese"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jetbrains",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL("https://pinlee2409.github.io/pinlee-portfolio/"),
    title: meta.title,
    description: meta.description,
    authors: [{ name: "PinLee" }],
    alternates: {
      canonical: `${lang}/`,
      languages: { en: "en/", vi: "vi/", "x-default": "en/" },
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      type: "website",
      locale: lang === "vi" ? "vi_VN" : "en_US",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0908",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${fraunces.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body>
        <noscript>
          <style>{`[data-reveal],.rise{opacity:1;transform:none;animation:none}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
