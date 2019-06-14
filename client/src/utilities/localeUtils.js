import i18n from 'i18next';

export const switchLocale = (locale) => {
  i18n.changeLanguage(locale);
};

export const toggleLocale = () => {
  const localeKeys = {
    en: ['en', 'en-US'],
    ch: ['zh-cn', 'zh-hk', 'zh-tw'],
  };
  const newLocale = Object.keys(localeKeys)
    .find(localeKey => !localeKeys[localeKey].includes(i18n.language));

  switchLocale(newLocale);
};
