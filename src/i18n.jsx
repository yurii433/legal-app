import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import ruTranslation from "./locales/ru.json";
import plTranslation from "./locales/pl.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation.translation,
    },
    ru: {
      translation: ruTranslation.translation,
    },
    pl: {
      translation: plTranslation.translation,
    },
    // Add more languages as needed
  },
  lng: "en", // Default language
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
