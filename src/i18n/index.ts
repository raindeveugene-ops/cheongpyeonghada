import ko from "./locales/ko.json";
import en from "./locales/en.json";

export type Locale = "ko" | "en";
export type Translations = typeof ko;

const translations: Record<Locale, Translations> = { ko, en };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.ko;
}

export const locales: Locale[] = ["ko", "en"];
