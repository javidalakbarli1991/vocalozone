import React, { createContext, useContext, useState, useEffect } from 'react'

const TranslationContext = createContext()

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      whatIs: "What is Vocalzone?",
      documentation: "Documentation",
      contacts: "Contacts"
    },
    home: {
      heading: "Vocalozone helps you keep a clear voice when you need it most.",
      description: "The Vocalozone throat care range is specifically formulated to soothe hard-working voices and has been trusted by many of the world's most iconic voices since 1912.",
      contactBtn: "Contact Team",
      docBtn: "View Documentation"
    },
    footer: {
      tagline: "Built for creators. Powered by sound.",
      company: "Vocalozone",
      phone: "📞 +994 55 282 0404",
      address1: "39/106 Shamsi Badalbeyli kucesi",
      address2: "Baku AZ1010"
    }
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      whatIs: "Что такое Vocalzone?",
      documentation: "Документация",
      contacts: "Контакты"
    },
    home: {
      heading: "Vocalozone помогает вам сохранить четкий голос, когда вы нуждаетесь в нем больше всего.",
      description: "Линейка средств для ухода за горлом Vocalozone специально разработана для успокоения перегруженных голосов и пользуется доверием многих из самых знаковых голосов мира с 1912 года.",
      contactBtn: "Связаться с нами",
      docBtn: "Просмотреть документацию"
    },
    footer: {
      tagline: "Построено для творцов. Приводится в движение звуком.",
      company: "Vocalzone",
      phone: "📞 +994 55 282 0404",
      address1: "39/106 Shamsi Badalbeyli kucesi",
      address2: "Baku AZ1010"
    }
  },
  az: {
    nav: {
      home: "Əsas Səhifə",
      about: "Haqqımızda",
      whatIs: "Vocalzone nədir?",
      documentation: "Sənədləşmə",
      contacts: "Əlaqə"
    },
    home: {
      heading: "Vocalozone ən çox ehtiyac duyduğunuz zaman açıq sesinizi saxlamağa kömək edir.",
      description: "Vocalozone boğaz qayğısı seriyası çox çalışan səsləri yatışdırmaq üçün xüsusi olaraq formalaşdırılmışdır və 1912-ci ildən bəri dünyanın ən ikonik səslərinin etibarına layiq olmuşdur.",
      contactBtn: "Bizimlə Əlaqə",
      docBtn: "Sənədləşməni Görmək"
    },
    footer: {
      tagline: "Yaradıcılar üçün qurulmuş. Səs tərəfindən idarə olunur.",
      company: "Vocalzone",
      phone: "📞 +994 55 282 0404",
      address1: "39/106 Shamsi Badalbeyli kucesi",
      address2: "Baku AZ1010"
    }
  }
}

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const changeLanguage = (lang) => {
    setLanguage(lang)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return React.createElement(TranslationContext.Provider, { value: { language, changeLanguage, t } }, children)
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider')
  }
  return context
}
