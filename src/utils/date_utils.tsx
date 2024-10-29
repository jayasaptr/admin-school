// lib/dateUtils.js
import { format, Locale } from 'date-fns';
import { enUS, id } from 'date-fns/locale'; // Import locales

export const getMonthYearLabel = (date: Date, locale: 'en' | 'id') => {
    const locales: { [key: string]: Locale } = { en: enUS, id }; // Adjust based on your needs
    return format(date, 'MMMM yyyy', { locale: locales[locale] });
  };
