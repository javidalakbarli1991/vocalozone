import { useTranslation } from '../i18n'
import image2 from '../assets/images/2.jpeg'

function About() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen bg-black overflow-hidden text-white">
      {/* Image on left */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <img src={image2} alt="About" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />
      </div>

      {/* Content on right */}
      <div className="relative ml-auto w-1/2 px-12 py-20 flex flex-col justify-center gap-16">
        
        {/* Header */}
        <div className="space-y-6 border-b border-slate-800 pb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">{t('about.eyebrow')}</p>
          <h1 className="font-display text-6xl font-bold leading-tight">
            {t('about.heading').split('\n').map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-lg text-slate-300 max-w-md leading-relaxed">
            {t('about.subheading')}
          </p>
        </div>

        {/* Family Business */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold">{t('about.familyTitle')}</h2>
          <div className="space-y-4 text-slate-300">
            <p>{t('about.familyText1')}</p>
            <p>{t('about.familyText2')}</p>
          </div>
          <div className="pt-4 border-t border-slate-800">
            <p className="text-sm text-slate-400">
              <span className="block font-semibold text-white">+994 55 282 0404</span>
              <span className="block">39/106 Shamsi Badalbeyli kucesi, Baku AZ1010</span>
            </p>
          </div>
        </div>

        {/* Manufacturers */}
        <div className="space-y-6 border-t border-slate-800 pt-12">
          <h2 className="font-display text-2xl font-semibold">{t('about.manufacturersTitle')}</h2>
          <div className="space-y-4 text-slate-300">
            <p>{t('about.manufacturersText1')}</p>
            <p>{t('about.manufacturersText2')}</p>
            <p>{t('about.manufacturersText3')}</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
