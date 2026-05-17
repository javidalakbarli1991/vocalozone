import { useTranslation } from '../i18n'
import image7 from '../assets/images/7.jpeg'

function WhatIs() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background image on left */}
      <div className="absolute inset-x-0 top-0 h-[42vh] sm:h-[48vh] md:inset-y-0 md:left-0 md:w-1/2 md:h-full">
        <img src={image7} alt="Background" className="h-full w-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black via-black/55 to-black/85 md:bg-linear-to-l md:from-black md:via-black/50 md:to-transparent" />
      
      {/* Content on right */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-1px)] w-full max-w-6xl flex-col gap-8 px-4 py-16 md:ml-auto md:w-1/2 md:px-6 md:py-24 md:pl-10">
        <div>
          <h1 className="max-w-xl font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            {t('whatIs.heading')}
          </h1>
        </div>

        <article className="space-y-5 text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
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
