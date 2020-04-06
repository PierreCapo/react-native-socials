import {
  // @ts-ignore
  en,
  af,
  id,
  ms,
  da,
  de,
  es,
  fil,
  fr,
  hr,
  it,
  hu,
  nl,
  nb,
  pl,
  pt,
  ro,
  sk,
  fi,
  sv,
  vi,
  tr,
  cs,
  el,
  bg,
  ru,
  uk,
  sr,
} from "date-fns/locale";

export type LanguageAvailableType =
  // English
  | "en"
  // German
  | "de"
  // Spanish
  | "es"
  // French
  | "fr"
  // Italian
  | "it"
  // Portuguese
  | "pt"
  // Russian
  | "ru";

export const getLocaleForDateFnsTranslation = (
  language: LanguageAvailableType
) => {
  return {
    en,
    af,
    id,
    ms,
    da,
    de,
    es,
    fil,
    fr,
    hr,
    it,
    hu,
    nl,
    nb,
    pl,
    pt,
    ro,
    sk,
    fi,
    sv,
    vi,
    tr,
    cs,
    el,
    bg,
    ru,
    uk,
    sr,
  }[language];
};

export const getPostDateFormatDaysAgo = (
  value: number,
  language: string | LanguageAvailableType
): string => {
  const translations: { [key in LanguageAvailableType]: string } = {
    de: `Vor ${value} Tagen`,
    en: value + " days ago",
    es: `hace ${value} días`,
    fr: `il y a ${value} jours`,
    it: `${value} giorni fa`,
    pt: `há ${value} dias`,
    ru: `${value} дней назад`,
  };
  // @ts-ignore
  return translations[language] || translations.en;
};

export const getPostDateFormatMinutesAgo = (
  value: number,
  language: string | LanguageAvailableType
): string => {
  const translations: { [key in LanguageAvailableType]: string } = {
    de: `Vor ${value} Minuten`,
    en: value + " minutes ago",
    es: `hace ${value} minutos`,
    fr: `il y a ${value} minutes`,
    it: `${value} giorni fa`,
    pt: `há ${value} minutos`,
    ru: `${value} минут назад`,
  };
  // @ts-ignore
  return translations[language] || translations.en;
};

export const getPostDateFormatHoursAgo = (
  value: number,
  language: string | LanguageAvailableType
): string => {
  const translations: { [key in LanguageAvailableType]: string } = {
    de: `Vor ${value} Stunden`,
    en: value + " hours ago",
    es: `hace ${value} horas`,
    fr: `il y a ${value} heures`,
    it: `${value} giorni fa`,
    pt: `há ${value} horas`,
    ru: `${value} часов назад`,
  };
  // @ts-ignore
  return translations[language] || translations.en;
};

export const getPostDateFormatThisYear = (
  language: string | LanguageAvailableType
): string => {
  const translations: { [key in LanguageAvailableType]: string } = {
    de: "d. MMMM",
    en: "MMMM d",
    es: "d 'de' MMMM",
    fr: "d MMMM",
    it: "d MMMM",
    pt: "d 'de' MMMM",
    ru: "d MMMM",
  };
  // @ts-ignore
  return translations[language] || translations.en;
};

export const getPostDateFormatPreviousYear = (
  language: string | LanguageAvailableType
): string => {
  const translations: { [key in LanguageAvailableType]: string } = {
    de: "d. MMMM yyyy",
    en: "MMMM d, yyyy",
    es: "d 'de' MMMM 'de' yyyy",
    fr: "d MMMM yyyy",
    it: "d MMMM yyyy",
    pt: "d 'de' MMMM 'de' yyyy",
    ru: "d MMMM yyyy 'r.'",
  };
  // @ts-ignore
  return translations[language] || translations.en;
};

export const getLikeTranslation = (
  likeNumber: string,
  language: LanguageAvailableType | string
) => {
  const translations: { [key in LanguageAvailableType]: string } = {
    de: `Gefällt ${likeNumber} Mal`,
    en: likeNumber + " likes",
    es: likeNumber + " Me gusta",
    fr: likeNumber + " J'aime",
    it: `Piace a ${likeNumber} persone`,
    pt: likeNumber + " curtidas",
    ru: likeNumber + " отметки Нравится",
  };
  // @ts-ignore
  return translations[language] || translations.en;
};
