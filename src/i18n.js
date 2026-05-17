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
      heading: "Vocalzone helps you keep a clear voice when you need it most.",
      description: "The Vocalzone throat care range is specifically formulated to soothe hard-working voices and has been trusted by many of the world's most iconic voices since 1912.",
      contactBtn: "Contact Team",
      docBtn: "View Documentation",
      carouselTitle: "Discover Our Collections",
      carouselDesc: "Explore our premium product range and experience the difference",
      whyChooseTitle: "Why Choose Vocalzone?",
      since1912: "Since 1912",
      since1912Desc: "Over a century of trusted vocal care",
      noNumbing: "No Numbing Agents",
      noNumbingDesc: "Soothe without masking underlying issues",
      certifiedVegan: "Certified Vegan",
      certifiedVeganDesc: "Gluten & lactose free with sugar-free options",
      professionalGrade: "Professional Grade",
      professionalGradeDesc: "Used by world-renowned voices"
    },
    footer: {
      tagline: "Built for creators. Powered by sound.",
      company: "Vocalzone",
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
      heading: "Vocalzone помогает вам сохранить четкий голос, когда вы нуждаетесь в нем больше всего.",
      description: "Линейка средств для ухода за горлом Vocalzone специально разработана для успокоения перегруженных голосов и пользуется доверием многих из самых знаковых голосов мира с 1912 года.",
      contactBtn: "Связаться с нами",
      docBtn: "Просмотреть документацию",
      carouselTitle: "Откройте наши коллекции",
      carouselDesc: "Изучите нашу премиум-линейку продуктов и почувствуйте разницу",
      whyChooseTitle: "Почему выбрать Vocalzone?",
      since1912: "С 1912 года",
      since1912Desc: "Более столетия надежного ухода за голосом",
      noNumbing: "Без вызывающих онемение агентов",
      noNumbingDesc: "Успокаивание без маскирования основных проблем",
      certifiedVegan: "Сертифицирован как веган",
      certifiedVeganDesc: "Без глютена и лактозы с вариантами без сахара",
      professionalGrade: "Профессиональный класс",
      professionalGradeDesc: "Используется всемирно известными голосами"
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
      heading: "Vocalzone ən çox ehtiyac duyduğunuz zaman açıq sesinizi saxlamağa kömək edir.",
      description: "Vocalzone boğaz qayğısı seriyası çox çalışan səsləri yatışdırmaq üçün xüsusi olaraq formalaşdırılmışdır və 1912-ci ildən bəri dünyanın ən ikonik səslərinin etibarına layiq olmuşdur.",
      contactBtn: "Bizimlə Əlaqə",
      docBtn: "Sənədləşməni Görmək",
      carouselTitle: "Koleksiyalarımızı kəşf edin",
      carouselDesc: "Premium məhsul diapazonumuzu kəşf edin və fərqi yaşayın",
      whyChooseTitle: "Nə Üçün Vocalzone Seçilir?",
      since1912: "1912-ci İldən Bəri",
      since1912Desc: "Yüzildən çox sürənən səs qayğısı",
      noNumbing: "Olmayan Uyuşturma Agentləri",
      noNumbingDesc: "Əsas problemləri maskə salsa da, sakinləşdirin",
      certifiedVegan: "Sertifikasiyalı Vegan",
      certifiedVeganDesc: "Şəkərsiz variantlarla gluten və laktoza olmayan",
      professionalGrade: "Peşəkar Səviyyə",
      professionalGradeDesc: "Dünya məşhur səsləri tərəfindən istifadə olunur"
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
