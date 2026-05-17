import { useTranslation } from '../i18n'
import image2 from '../assets/images/2.jpeg'

function About() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Image on left */}
      <div className="absolute inset-x-0 top-0 h-[38vh] sm:h-[44vh] md:inset-y-0 md:left-0 md:w-1/2 md:h-full">
        <img src={image2} alt="About" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/35 to-black/80 md:bg-linear-to-r md:from-black md:via-black/50 md:to-transparent" />
      </div>

      {/* Content on right */}
      <div className="relative mx-auto flex min-h-[calc(100svh-1px)] w-full max-w-6xl flex-col gap-12 px-4 pt-[42vh] pb-16 sm:pt-[48vh] md:ml-auto md:w-1/2 md:gap-16 md:px-8 md:py-20 lg:px-12">
        
        {/* Header */}
        <div className="space-y-4 border-b border-slate-800 pb-10 sm:space-y-6 sm:pb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">{t('about.eyebrow')}</p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {t('about.heading').split('\n').map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="max-w-md text-base leading-7 text-slate-300 sm:text-lg sm:leading-relaxed">
            {t('about.subheading')}
          </p>
        </div>

        {/* Family Business */}
        <div className="space-y-5">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t('about.familyTitle')}</h2>
          <div className="space-y-4 text-slate-300">
            <p>{t('about.familyText1')}</p>
            <p>{t('about.familyText2')}</p>
          </div>
          <div className="border-t border-slate-800 pt-4">
            <p className="text-sm text-slate-400">
              <span className="block font-semibold text-white">+994 55 282 0404</span>
              <span className="block">39/106 Shamsi Badalbeyli kucesi, Baku AZ1010</span>
            </p>
          </div>
        </div>

        {/* Manufacturers */}
        <div className="space-y-5 border-t border-slate-800 pt-10 sm:pt-12">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t('about.manufacturersTitle')}</h2>
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
