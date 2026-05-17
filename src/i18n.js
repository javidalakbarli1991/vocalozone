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
    whatIs: {
      heading: "Vocalzone Throat Pastilles",
      intro1: "In 1907, Enrico Caruso, the first man to sell one million records stepped off the stage at Covent Garden having brought the house down with his performance. Yet only days earlier, he had barely been able to sing. The secret to this remarkable turnaround?",
      brandLine: "Vocalzone.",
      intro2: "Formulated for Caruso to specifically relieve irritation from excessive singing, speaking or smoking and turned into a pastille in 1912, we have been there for hardworking voices ever since.",
      intro3: "An iconic staple in the toolkit of many of the world's most iconic voices, our pastilles with their unique blend of quality ingredients provide a soothing, clearing and relieving sensation for your throat to help you keep a clear voice and perform at your best.",
      intro4: "Importantly, our pastilles differ from others in that they do not contain numbing agents which can mask underlying vocal damage.",
      intro5: "Vocalzone Pastilles are gluten & lactose free and certified vegan. Our Blackcurrant pastilles are even sugar free!",
      whyTitle: "Why Choose Vocalzone?",
      since1912: "Since 1912",
      since1912Desc: "Over a century of trusted vocal care",
      noNumbing: "No Numbing Agents",
      noNumbingDesc: "Soothe without masking underlying issues",
      certifiedVegan: "Certified Vegan",
      certifiedVeganDesc: "Gluten & lactose free with sugar-free options",
      professionalGrade: "Professional Grade",
      professionalGradeDesc: "Used by world-renowned voices"
    },
    documentation: {
      eyebrow: "Our Credentials",
      heading: "Certifications & Documentation",
      subheading: "Browse our official certifications, approvals, and documentation that demonstrate our commitment to quality and compliance.",
      documents: {
        approval: "Approval Certificate",
        certificate: "Food Safety Certificate",
        letter: "Quality Assurance Letter",
        purchase: "Purchase Order"
      },
      closeLabel: "Close modal"
    },
    contacts: {
      eyebrow: "Contacts",
      heading: "Reach out with a message, a question, or a quick WhatsApp chat.",
      subheading: "Use the form for direct support, or get in touch through the contact details below. We keep the layout simple, focused, and fast to use.",
      directContact: "Direct contact",
      team: "Vocalzone team",
      emailLabel: "Email",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      addressLabel: "Address",
      sendNote: "Send a note",
      formHeading: "Start the conversation",
      quickResponse: "Quick response",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell us what you need",
      sending: "Sending...",
      submit: "Submit",
      footerNote: "We reply as soon as possible during business hours.",
      routedTo: "Messages are routed to",
      viaEmailJs: "through EmailJS.",
      status: {
        configuredError: "EmailJS is not configured yet. Add your VITE_EMAILJS values in .env.local.",
        success: "Message sent successfully. We will reply by email soon.",
        failure: "Message could not be sent. Please try again in a moment."
      }
    },
    about: {
      eyebrow: "About Vocalzone",
      heading: "Trusted Quality.\nProven Heritage.",
      subheading: "Founded on principles of excellence and family values",
      familyTitle: "Family Business",
      familyText1: "Ayriz MMC was incorporated in August 2016. It's a family business with all members of the family playing a key role in developing and nurturing the growth of the company.",
      familyText2: "Ayriz is the distributor for Vocalzone throat care products from Kestrel Medical in the United Kingdom, and Calmosissne baby welfare products made by Laboratoires Laudavie in France. Both ranges are non-medicine organic products.",
      manufacturersTitle: "About The Manufacturers",
      manufacturersText1: "Kestrel Medical Limited was incorporated in March 2001 when it purchased Vocalzone Throat Pastilles. It's a family business with all members of the family playing a key role in developing and nurturing the growth of the company.",
      manufacturersText2: "However, what sets us apart in the ordinary pharmaceutical business! We don't flood ourselves in corporate bureaucracy, or hide ourselves behind a business wall. We love getting stuck in!",
      manufacturersText3: "Vocalzone is not just our job, but our lifestyle and passion – music is at the heart of what we do, when the office playlist isn't playing, you'll probably find us at a concert or at a music festival."
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
    whatIs: {
      heading: "Пастилки для горла Vocalzone",
      intro1: "В 1907 году Энрико Карузо, первым продавший миллион записей, сошел со сцены в Ковент-Гарден, сорвав бурные аплодисменты своим выступлением. А всего несколькими днями ранее он едва мог петь. Секрет этого поразительного возвращения?",
      brandLine: "Vocalzone.",
      intro2: "Разработанные для Карузо, чтобы специально облегчать раздражение от чрезмерного пения, речи или курения, и ставшие пастилками в 1912 году, мы помогаем трудящимся голосам с тех пор.",
      intro3: "Будучи культовой частью набора многих из самых известных голосов мира, наши пастилки с уникальной смесью качественных ингредиентов обеспечивают успокаивающее, очищающее и облегчающее ощущение для горла, помогая вам сохранять четкий голос и выступать наилучшим образом.",
      intro4: "Важно, что наши пастилки отличаются от других тем, что не содержат средств, вызывающих онемение, которые могут маскировать скрытое повреждение голоса.",
      intro5: "Пастилки Vocalzone не содержат глютен и лактозу, а также сертифицированы как веганские. Наши пастилки Blackcurrant даже не содержат сахара!",
      whyTitle: "Почему выбрать Vocalzone?",
      since1912: "С 1912 года",
      since1912Desc: "Более столетия надежного ухода за голосом",
      noNumbing: "Без вызывающих онемение агентов",
      noNumbingDesc: "Успокаивание без маскирования основных проблем",
      certifiedVegan: "Сертифицирован как веган",
      certifiedVeganDesc: "Без глютена и лактозы с вариантами без сахара",
      professionalGrade: "Профессиональный класс",
      professionalGradeDesc: "Используется всемирно известными голосами"
    },
    documentation: {
      eyebrow: "Наши документы",
      heading: "Сертификаты и документация",
      subheading: "Ознакомьтесь с нашими официальными сертификатами, разрешениями и документами, подтверждающими нашу приверженность качеству и соответствию требованиям.",
      documents: {
        approval: "Сертификат одобрения",
        certificate: "Сертификат безопасности пищевых продуктов",
        letter: "Письмо по обеспечению качества",
        purchase: "Заказ на закупку"
      },
      closeLabel: "Закрыть окно"
    },
    contacts: {
      eyebrow: "Контакты",
      heading: "Напишите нам с вопросом, сообщением или через WhatsApp.",
      subheading: "Используйте форму для прямой связи или свяжитесь через контактные данные ниже. Мы сделали страницу простой, понятной и быстрой в использовании.",
      directContact: "Прямая связь",
      team: "Команда Vocalzone",
      emailLabel: "Email",
      phoneLabel: "Телефон",
      whatsappLabel: "WhatsApp",
      addressLabel: "Адрес",
      sendNote: "Отправить сообщение",
      formHeading: "Начните разговор",
      quickResponse: "Быстрый ответ",
      nameLabel: "Имя",
      namePlaceholder: "Ваше имя",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Сообщение",
      messagePlaceholder: "Расскажите, что вам нужно",
      sending: "Отправка...",
      submit: "Отправить",
      footerNote: "Мы отвечаем как можно скорее в рабочее время.",
      routedTo: "Сообщения отправляются на",
      viaEmailJs: "через EmailJS.",
      status: {
        configuredError: "EmailJS пока не настроен. Добавьте значения VITE_EMAILJS в .env.local.",
        success: "Сообщение успешно отправлено. Мы ответим по электронной почте в ближайшее время.",
        failure: "Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз через минуту."
      }
    },
    about: {
      eyebrow: "О Vocalzone",
      heading: "Доверенное качество.\nПроверенное наследие.",
      subheading: "Основано на принципах качества и семейных ценностей",
      familyTitle: "Семейный бизнес",
      familyText1: "Ayriz MMC была основана в августе 2016 года. Это семейный бизнес, в котором все члены семьи играют ключевую роль в развитии и укреплении роста компании.",
      familyText2: "Ayriz является дистрибьютором средств для ухода за горлом Vocalzone от Kestrel Medical в Великобритании и детских товаров Calmosissne от Laboratoires Laudavie во Франции. Обе линейки являются органическими и не являются лекарственными средствами.",
      manufacturersTitle: "О производителях",
      manufacturersText1: "Kestrel Medical Limited была основана в марте 2001 года после приобретения пастилок для горла Vocalzone. Это семейный бизнес, в котором все члены семьи играют ключевую роль в развитии и укреплении компании.",
      manufacturersText2: "Однако именно это отличает нас от обычного фармацевтического бизнеса. Мы не тонем в корпоративной бюрократии и не прячемся за стеной бизнеса. Нам нравится быть в деле!",
      manufacturersText3: "Vocalzone — это не просто наша работа, а наш образ жизни и страсть. Музыка лежит в основе того, что мы делаем; когда в офисе не играет плейлист, вы, скорее всего, найдете нас на концерте или музыкальном фестивале."
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
    whatIs: {
      heading: "Vocalzone Boğaz Pastilləri",
      intro1: "1907-ci ildə bir milyon nüsxə satmış ilk şəxs olan Enriko Karuzo Covent Garden səhnəsindən alqışlarla ayrıldı. Halbuki bundan cəmi bir neçə gün əvvəl o, demək olar ki, oxuya bilmirdi. Bu heyrətamiz dönüşün sirri nə idi?",
      brandLine: "Vocalzone.",
      intro2: "Karuzo üçün həddindən artıq oxuma, danışma və ya siqaretdən yaranan qıcıqlanmanı azaltmaq üçün hazırlanmış və 1912-ci ildə pastilə çevrilmiş bu məhsul, o vaxtdan bəri zəhmətkeş səslərin yanında olub.",
      intro3: "Dünyanın ən məşhur səslərinin alət çantasının simvolik hissəsi olan bu pastillər keyfiyyətli inqrediyentlərin unikal qarışığı ilə boğaz üçün sakitləşdirici, təmizləyici və rahatlaşdırıcı təsir yaradır, səsinizi aydın saxlamağa və ən yaxşı şəkildə ifa etməyə kömək edir.",
      intro4: "Əhəmiyyətli olan odur ki, bu pastillər gizli səs zədəsini maskalaya bilən uyuşdurucu maddələr ehtiva etmir.",
      intro5: "Vocalzone Pastilləri gluten və laktozasızdır, həmçinin sertifikatlı vegandır. Blackcurrant pastillərimiz hətta şəkərsizdir!",
      whyTitle: "Niyə Vocalzone seçilməlidir?",
      since1912: "1912-ci ildən bəri",
      since1912Desc: "Yüz ildən çox etibarlı səs qayğısı",
      noNumbing: "Uyuşdurucu maddələr yoxdur",
      noNumbingDesc: "Əsas problemləri maskalamadan sakitləşdirir",
      certifiedVegan: "Sertifikatlı vegan",
      certifiedVeganDesc: "Şəkərsiz variantlarla gluten və laktozasız",
      professionalGrade: "Peşəkar səviyyə",
      professionalGradeDesc: "Dünya şöhrətli səslər tərəfindən istifadə olunur"
    },
    documentation: {
      eyebrow: "Sənədlərimiz",
      heading: "Sertifikatlar və sənədləşmə",
      subheading: "Keyfiyyət və uyğunluğa sadiqliyimizi göstərən rəsmi sertifikatlarımızı, təsdiqlərimizi və sənədlərimizi nəzərdən keçirin.",
      documents: {
        approval: "Təsdiq Sertifikatı",
        certificate: "Qida Təhlükəsizliyi Sertifikatı",
        letter: "Keyfiyyət Təminatı Məktubu",
        purchase: "Satınalma Sifarişi"
      },
      closeLabel: "Pəncərəni bağla"
    },
    contacts: {
      eyebrow: "Əlaqə",
      heading: "Mesaj, sual və ya qısa WhatsApp söhbəti ilə bizimlə əlaqə saxlayın.",
      subheading: "Birbaşa dəstək üçün formadan istifadə edin və ya aşağıdakı əlaqə məlumatları vasitəsilə bizimlə əlaqə saxlayın. Biz tərtibatı sadə, fokuslanmış və sürətli istifadə üçün saxlayırıq.",
      directContact: "Birbaşa əlaqə",
      team: "Vocalzone komandası",
      emailLabel: "Email",
      phoneLabel: "Telefon",
      whatsappLabel: "WhatsApp",
      addressLabel: "Ünvan",
      sendNote: "Mesaj göndərin",
      formHeading: "Söhbətə başlayaq",
      quickResponse: "Sürətli cavab",
      nameLabel: "Ad",
      namePlaceholder: "Adınız",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Mesaj",
      messagePlaceholder: "Nəyə ehtiyacınız olduğunu yazın",
      sending: "Göndərilir...",
      submit: "Göndər",
      footerNote: "İş saatları ərzində mümkün qədər tez cavab veririk.",
      routedTo: "Mesajlar göndərilir",
      viaEmailJs: "EmailJS vasitəsilə.",
      status: {
        configuredError: "EmailJS hələ konfiqurasiya edilməyib. VITE_EMAILJS dəyərlərinizi .env.local faylına əlavə edin.",
        success: "Mesaj uğurla göndərildi. Qısa zamanda e-poçt vasitəsilə cavab verəcəyik.",
        failure: "Mesaj göndərilə bilmədi. Zəhmət olmasa bir az sonra yenidən cəhd edin."
      }
    },
    about: {
      eyebrow: "Vocalzone haqqında",
      heading: "Etibarlı keyfiyyət.\nSınaqdan keçmiş irs.",
      subheading: "Mükəmməllik və ailə dəyərləri prinsipləri üzərində qurulub",
      familyTitle: "Ailə şirkəti",
      familyText1: "Ayriz MMC 2016-cı ilin avqust ayında təsis olunub. Bu, ailə şirkətidir və ailənin bütün üzvləri şirkətin inkişafı və böyüməsinin dəstəklənməsində əsas rol oynayır.",
      familyText2: "Ayriz Birləşmiş Krallıqdakı Kestrel Medical şirkətinin Vocalzone boğaz baxımı məhsullarının və Fransadakı Laboratoires Laudavie tərəfindən istehsal edilən Calmosissne uşaq məhsullarının distribyutorudur. Hər iki məhsul xətti dərman olmayan üzvi məhsullardır.",
      manufacturersTitle: "İstehsalçılar haqqında",
      manufacturersText1: "Kestrel Medical Limited 2001-ci ilin mart ayında Vocalzone boğaz pastillərini aldıqdan sonra təsis olunub. Bu, ailə şirkətidir və ailənin bütün üzvləri şirkətin inkişafı və böyüməsinin dəstəklənməsində əsas rol oynayır.",
      manufacturersText2: "Bununla belə, bizi adi əczaçılıq biznesindən fərqləndirən məhz budur. Biz korporativ bürokratiyaya qapılmırıq və biznes divarının arxasında gizlənmirik. Biz işin içində olmağı sevirik!",
      manufacturersText3: "Vocalzone sadəcə işimiz deyil, həyat tərzimiz və həvəsimizdir. Musiqi etdiyimiz hər şeyin mərkəzindədir; ofisdə pleylist səslənmirsə, yəqin ki, bizi konsertdə və ya musiqi festivalında tapa bilərsiniz."
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
