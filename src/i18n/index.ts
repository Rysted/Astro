import spanish from "@/i18n/es.json";
import english from "@/i18n/en.json";

export const LANGUAGES = {
  SPANISH: "es",
  ENGLISH: "en",
};

type CurrentLocale = string;

export const getI18N = (currentLocale?: CurrentLocale) => {
  if (currentLocale === LANGUAGES.SPANISH) return spanish;

  return english;
};
