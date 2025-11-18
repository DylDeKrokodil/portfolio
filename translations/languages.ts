import en from "./en";
import nl from "./nl";
import es from "./es";

export type Locale = "en" | "nl" | "es";

export const languages: Record<Locale, any> = {
    en,
    nl,
    es,
};

export const flags: Record<Locale, string> = {
    en: "🇬🇧",
    nl: "🇳🇱",
    es: "🇪🇸",
}