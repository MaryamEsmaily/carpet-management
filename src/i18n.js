import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// translate files
import translation_en from "locales/en/translation.json";
import translation_fa from "locales/fa/translation.json";
//
i18n.use(initReactI18next).init({
  supportedLngs: ["en", "fa"],
  fallbackLng: "fa",
  debug: false,
  lng: localStorage.getItem("locale") ?? "fa",

  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      translation: translation_en,
    },
    fa: {
      translation: translation_fa,
    },
  },

  react: { useSuspense: false },
});

export default i18n;
