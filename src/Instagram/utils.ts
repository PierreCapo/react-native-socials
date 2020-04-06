import {
  parse,
  format,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  isSameYear,
} from 'date-fns';
import {
  LanguageAvailableType,
  getLocaleForDateFnsTranslation,
  getPostDateFormatDaysAgo,
  getPostDateFormatHoursAgo,
  getPostDateFormatMinutesAgo,
  getPostDateFormatThisYear,
  getPostDateFormatPreviousYear,
} from './translations';
export const numberWithSpace = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const getPostTime = (
  timestamp: number,
  language: LanguageAvailableType,
) => {
  const today = Date.now();
  const instagramPostDate = parse(timestamp + '', 't', today);
  const daysDifference = differenceInDays(today, instagramPostDate);
  const hoursDifference = differenceInHours(today, instagramPostDate);
  const minutesDifference = differenceInMinutes(today, instagramPostDate);

  if (daysDifference > 7) {
    if (isSameYear(today, instagramPostDate)) {
      return format(instagramPostDate, getPostDateFormatThisYear(language), {
        locale: getLocaleForDateFnsTranslation(language),
      });
    } else {
      return format(
        instagramPostDate,
        getPostDateFormatPreviousYear(language),
        {
          locale: getLocaleForDateFnsTranslation(language),
        },
      );
    }
  } else if (daysDifference >= 1) {
    return getPostDateFormatDaysAgo(daysDifference, language);
  } else if (hoursDifference >= 1) {
    return getPostDateFormatHoursAgo(hoursDifference, language);
  } else if (minutesDifference >= 1) {
    return getPostDateFormatMinutesAgo(minutesDifference, language);
  } else {
    return null;
  }
};

export const textColorLightMode = 'rgb(38, 38, 38)';
export const textColorDarkMode = 'white';
export const backgroundColorDarkMode = 'black';
export const backgroundColorLightMode = 'white';
