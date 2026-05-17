import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from '../i18n'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const recipientEmail = import.meta.env.VITE_CONTACT_RECIPIENT_EMAIL || 'hello@vocalozone.com'

function Contacts() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: t('contacts.status.configuredError'),
      })
      return
    }

    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: recipientEmail,
      }, {
        publicKey,
      })

      setStatus({
        type: 'success',
        message: t('contacts.status.success'),
      })
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus({
        type: 'error',
        message: t('contacts.status.failure'),
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.2),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.98)_0%,rgba(15,23,42,0.96)_100%)]" />
      <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">{t('contacts.eyebrow')}</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            {t('contacts.heading')}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            {t('contacts.subheading')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-4xl border border-slate-800/80 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-10">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                📍
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{t('contacts.directContact')}</p>
                <h2 className="mt-1 font-display text-2xl text-white">{t('contacts.team')}</h2>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:hello@vocalozone.com"
                className="group flex items-center justify-between rounded-2xl border border-slate-700/80 bg-slate-950/60 px-4 py-4 transition hover:border-orange-500/60 hover:bg-slate-900"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{t('contacts.emailLabel')}</p>
                  <p className="mt-1 text-sm font-medium text-white">hello@vocalozone.com</p>
                </div>
                <span className="text-slate-500 transition group-hover:text-orange-400">↗</span>
              </a>

              <a
                href="tel:+994552820404"
                className="group flex items-center justify-between rounded-2xl border border-slate-700/80 bg-slate-950/60 px-4 py-4 transition hover:border-orange-500/60 hover:bg-slate-900"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{t('contacts.phoneLabel')}</p>
                  <p className="mt-1 text-sm font-medium text-white">+994 55 282 0404</p>
                </div>
                <span className="text-slate-500 transition group-hover:text-orange-400">↗</span>
              </a>

              <a
                href="https://wa.me/994102033003"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-slate-700/80 bg-slate-950/60 px-4 py-4 transition hover:border-emerald-500/60 hover:bg-slate-900"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{t('contacts.whatsappLabel')}</p>
                  <p className="mt-1 text-sm font-medium text-white">+994 10 203 30 03</p>
                </div>
                <span className="text-slate-500 transition group-hover:text-emerald-400">↗</span>
              </a>

              <div className="rounded-2xl border border-slate-700/80 bg-slate-950/40 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{t('contacts.addressLabel')}</p>
                <p className="mt-1 text-sm font-medium leading-6 text-white">
                  39/106 Shamsi Badalbeyli kucesi
                  <br />
                  Baku AZ1010
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-400/5 px-4 py-4 text-sm text-slate-300">
              {t('contacts.routedTo')} <span className="font-semibold text-white">{recipientEmail}</span> {t('contacts.viaEmailJs')}
            </div>
          </article>

          <form className="rounded-4xl border border-slate-800/80 bg-slate-950/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-10" onSubmit={handleSubmit}>
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{t('contacts.sendNote')}</p>
                <h2 className="mt-2 font-display text-3xl text-white">{t('contacts.formHeading')}</h2>
              </div>
              <div className="hidden rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400 sm:block">
                {t('contacts.quickResponse')}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-300">
                {t('contacts.nameLabel')}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contacts.namePlaceholder')}
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
                  required
                />
              </label>
              <label className="text-sm font-medium text-slate-300">
                {t('contacts.emailLabel')}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contacts.emailPlaceholder')}
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
                  required
                />
              </label>
            </div>

            <label className="mt-4 block text-sm font-medium text-slate-300">
              {t('contacts.messageLabel')}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder={t('contacts.messagePlaceholder')}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
                required
              />
            </label>

            {status.message ? (
              <p
                className={`mt-4 rounded-2xl border px-4 py-3 text-sm font-medium ${
                  status.type === 'success'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                    : 'border-rose-500/30 bg-rose-500/10 text-rose-300'
                }`}
              >
                {status.message}
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={isSending}
                className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-orange-800"
              >
                {isSending ? t('contacts.sending') : t('contacts.submit')}
              </button>
              <p className="text-sm text-slate-400">{t('contacts.footerNote')}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts
