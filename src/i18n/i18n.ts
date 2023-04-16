import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import en from './en.json';
import uk from './uk.json';

const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: "uk",
  detection: {
    order: ["cookie"],
    caches: ["cookie"]
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18n