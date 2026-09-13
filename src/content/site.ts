/** Facts that read the same in every language. */
export const site = {
  name: "PinLee",
  email: "pinle2409@gmail.com",
  phone: "0816802596",
  github: "https://github.com/pinlee2409",
  available: true,
};

/** Section anchors stay in English so links keep working across languages. */
export const sectionIds = ["work", "stack", "path", "contact"] as const;

export type SectionId = (typeof sectionIds)[number];
