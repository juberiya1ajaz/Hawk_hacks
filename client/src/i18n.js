import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './locales/en/translationEn.json' // English
import translationDe from './locales/de/translationDe.json' // German
import translationJa from './locales/ja/translationJa.json' // Japanese

const resources = {
    en: {
        translation: translationEn
    },
    de: {
        translation: translationDe
    },
    ja: {
        translation: translationJa
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
