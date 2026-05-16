import { NavLink } from 'react-router-dom'
import { useTranslation } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
  const { t } = useTranslation()

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/what-is', label: t('nav.whatIs') },
    { to: '/documentation', label: t('nav.documentation') },
    { to: '/contacts', label: t('nav.contacts') },
  ]
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <NavLink to="/" className="group flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.7)]" />
          <span className="font-display text-xl tracking-wide text-white transition group-hover:text-orange-400">
            Vocalozone
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

        <LanguageSwitcher />
      </div>
    </header>
  )
}

export default Navbar
