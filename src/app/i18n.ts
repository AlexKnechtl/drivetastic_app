import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import { resources } from "./translation-resources";

i18n.use(initReactI18next).init({resources, lng: "de", keySeparator: false, interpolation:{ escapeValue: false}});
// i18n.changeLanguage("en");
export default i18n;