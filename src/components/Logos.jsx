import avromed from '../assets/images/logos/avromed.svg'
import azerimed from '../assets/images/logos/azerimed.png'
import zeytun from '../assets/images/logos/zeytun.png'
import { useTranslation } from '../i18n'

function Logos() {
  const { t } = useTranslation()

  const logos = [
    { src: avromed, alt: t('partners.names.avromed') },
    { src: azerimed, alt: t('partners.names.azerimed') },
    { src: zeytun, alt: t('partners.names.zeytun') },
  ]

  return (
    <section className="bg-black py-16 md:py-20 px-4 md:px-6 border-t border-slate-800">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">{t('partners.heading')}</h2>
        <p className="text-slate-400 mb-8">{t('partners.desc')}</p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 items-center">
          {logos.map((l, i) => (
            <div key={i} className="flex items-center justify-center p-4 bg-slate-900/40 rounded-lg border border-slate-800">
              <img src={l.src} alt={l.alt} className="max-h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos
