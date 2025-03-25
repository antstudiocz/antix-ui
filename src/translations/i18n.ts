import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import default translations
import csProductCard from './locales/cs/productCard.json';
import enProductCard from './locales/en/productCard.json';

type TranslationObject = {
  [key: string]: string | TranslationObject;
};

// Default translations
const resources = {
  cs: {
    ...csProductCard,
  },
  en: {
    ...enProductCard,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'cs', // default language
    fallbackLng: 'cs',
    interpolation: {
      escapeValue: false,
    },
  });

// Function to add or update translations
export const updateTranslations = (
  language: string,
  namespace: string,
  translations: TranslationObject
) => {
  if (!i18n.hasResourceBundle(language, namespace)) {
    i18n.addResourceBundle(language, namespace, translations);
  } else {
    i18n.addResourceBundle(language, namespace, translations, true, true);
  }
};

export default i18n; 