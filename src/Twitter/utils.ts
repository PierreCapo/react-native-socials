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

export const formatLikeNumber = (likes: number): string => {
  if (likes < 1000) {
    return likes.toString();
  }
  const suffix = likes > 1_000_000_000 ? "Md" : likes > 1_000_000 ? "M" : "k";

  const numberToDisplay =
    likes > 1_000_000_000
      ? likes / 1_000_000_000
      : likes > 1_000_000
      ? likes / 1_000_000
      : likes / 1_000;
  return (
    (Math.floor(numberToDisplay * 10) / 10).toString().replace(".", ",") +
    " " +
    suffix
  );
};

export const getFormattedTimeByLanguage = (language?: string) => {
  switch (language) {
    case "de": {
      return {
        format: "HH:mm '-' d. MMM. yyyy",
        locale: de,
      };
    }
    case "es": {
      return {
        format: "H:mm '-' d MMM. yyyy",
        locale: es,
      };
    }
    case "fr": {
      return {
        format: "HH:mm '-' d MMM yyyy",
        locale: fr,
      };
    }
    case "it": {
      return {
        format: "HH:mm '-' d MMM yyyy",
        locale: it,
      };
    }
    case "pt": {
      return {
        format: "HH:mm '-' d 'de' MMM 'de' yyyy",
        locale: pt,
      };
    }
    case "ru": {
      return {
        format: "HH:mm '-' d MMM yyyy 'r.'",
        locale: ru,
      };
    }
    default: {
      return {
        format: "h:mm aa '-' MMM d, yyyy",
        locale: en,
      };
    }
  }
};
