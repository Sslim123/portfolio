import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import  LanguageDetector  from "i18next-browser-languagedetector";
import Backends  from "i18next-http-backend";
import ArabicAndEnglish from "./Localization/Arabices.json"  
const allLanguage = ArabicAndEnglish.map( elem => {
  if(elem.English === "English"){

    return (

      elem.English
    )
  }else{
    return elem.Arabic
  }
});

i18n.use(initReactI18next).use(LanguageDetector).use(Backends) // passes i18n down to react-i18next
  .init({
    debug: true,
    resources: {
      en: {
        translation: {
          allLanguage
        }
      },
      ar: {
        translation: {
          allLanguage
        }
      },detection:{

        order:["cookie"],
        caches: ["cookie"]
      },
      Backend:{
        loadPath:'/localization/{{lng}}/Arabices.json',
      }
      
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    react:{
      useSuspense: false
    }
  });


export default i18n;