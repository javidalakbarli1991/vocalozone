import { useTranslation } from '../i18n'
import image7 from '../assets/images/7.jpeg'

function WhatIs() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* Background image on left */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <img src={image7} alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-linear-to-l from-black via-black/50 to-transparent" />
      
      {/* Content on right */}
      <div className="relative z-20 ml-auto w-1/2 px-4 py-16 md:px-6 md:py-24 flex flex-col gap-10">
        <div>
          <h1 className="font-display text-5xl leading-tight text-white md:text-6xl">
            {t('whatIs.heading')}
          </h1>
        </div>

        <article className="space-y-6 text-lg leading-relaxed text-slate-200">
          <p>{t('whatIs.intro1')}</p>

          <p className="text-3xl font-display text-orange-400">
            {t('whatIs.brandLine')}
          </p>

          <p>{t('whatIs.intro2')}</p>

          <p>{t('whatIs.intro3')}</p>

          <p>{t('whatIs.intro4')}</p>

          <p>{t('whatIs.intro5')}</p>
        </article>

        <div className="pt-8 border-t border-slate-800">
          <h2 className="font-display text-2xl text-white mb-4">{t('whatIs.whyTitle')}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ {t('whatIs.since1912')}</h3>
              <p className="text-slate-300 text-sm">{t('whatIs.since1912Desc')}</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ {t('whatIs.noNumbing')}</h3>
              <p className="text-slate-300 text-sm">{t('whatIs.noNumbingDesc')}</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ {t('whatIs.certifiedVegan')}</h3>
              <p className="text-slate-300 text-sm">{t('whatIs.certifiedVeganDesc')}</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ {t('whatIs.professionalGrade')}</h3>
              <p className="text-slate-300 text-sm">{t('whatIs.professionalGradeDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIs
