import en, { type Dictionary } from "./en";
import vi from "./vi";

export const dictionaries = { en, vi };

export const locales = Object.keys(dictionaries) as Locale[];

export const defaultLocale = "en" satisfies Locale;

/** How each language names itself in the switcher. */
export const localeNames: Record<Locale, string> = {
  en: "EN",
  vi: "VI",
};

export type Locale = keyof typeof dictionaries;

export type { Dictionary };

export const isLocale = (value: string): value is Locale =>
  value in dictionaries;

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];

export { site, sectionIds, type SectionId } from "./site";
