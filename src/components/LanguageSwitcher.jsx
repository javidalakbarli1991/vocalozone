import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../i18n'

function LanguageSwitcher() {
  const { language, changeLanguage } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef(null)

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'az', name: 'Azərbaycanca', flag: '🇦🇿' },
  ]

  const currentLang = languages.find((lang) => lang.code === language) ?? languages[0]

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  const handleLanguageSelect = (lang) => {
    changeLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-2 text-sm font-semibold text-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.18)] backdrop-blur-md transition hover:border-orange-400/40 hover:bg-slate-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/70"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-base shadow-inner ring-1 ring-white/10 transition group-hover:bg-orange-400/15 group-hover:ring-orange-400/30">
          {currentLang.flag}
        </span>
        <span className="hidden min-w-0 sm:inline">
          <span className="block text-[11px] uppercase tracking-[0.24em] text-slate-400">Language</span>
          <span className="block leading-tight text-white">{currentLang.name}</span>
        </span>
        <svg
          className={`h-4 w-4 text-slate-400 transition duration-200 ${isOpen ? 'rotate-180 text-orange-300' : 'group-hover:text-white'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-3 w-60 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-[0_24px_60px_rgba(15,23,42,0.45)] backdrop-blur-xl">
          <div className="mb-2 px-3 py-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Choose a language</p>
          </div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageSelect(lang.code)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${
                language === lang.code
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-lg ring-1 ring-white/10">
                {lang.flag}
              </span>
              <span className="flex min-w-0 flex-col">
                <span>{lang.name}</span>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  {lang.code}
                </span>
              </span>
              {language === lang.code && (
                <span className="ml-auto rounded-full bg-white/15 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-white">
                  Active
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
