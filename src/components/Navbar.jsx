import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null)

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/what-is', label: t('nav.whatIs') },
    { to: '/documentation', label: t('nav.documentation') },
    { to: '/contacts', label: t('nav.contacts') },
  ]

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  return (
    <header ref={mobileMenuRef} className="sticky top-0 z-30 border-b border-slate-800 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <NavLink to="/" className="group flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.7)]" />
          <span className="font-display text-xl tracking-wide text-white transition group-hover:text-orange-400">
            Vocalzone
          </span>
        </NavLink>

        <nav aria-label="Primary" className="hidden gap-2 sm:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-orange-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition hover:border-orange-400/40 hover:bg-slate-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/70 sm:hidden"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span className={`h-0.5 w-full rounded-full bg-current transition ${isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`h-0.5 w-full rounded-full bg-current transition ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full rounded-full bg-current transition ${isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>

          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-800 bg-black/98 sm:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-orange-600 text-white'
                      : 'bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
