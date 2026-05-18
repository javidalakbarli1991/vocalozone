import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n'
import bgImage from '../assets/images/1.jpeg'
import image2 from '../assets/images/2.jpeg'
import image3 from '../assets/images/3.jpeg'
import image4 from '../assets/images/4.jpeg'
import image5 from '../assets/images/5.jpeg'
import image9 from '../assets/images/9.jpeg'
import Carousel from '../components/Carousel'
import Logos from '../components/Logos'
import Reveal from '../components/Reveal'

function Home() {
  const { t } = useTranslation()
  const carouselImages = [image2, image3, image4, image5, image9]

  return (
    <>
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/35 to-black/70 sm:bg-linear-to-l sm:from-black sm:via-black/30 sm:to-transparent z-10" />
      
      <div className="relative mx-auto grid min-h-[calc(100svh-1px)] w-full max-w-6xl items-center gap-8 px-4 py-10 sm:py-14 md:grid-cols-2 md:gap-10 md:px-6 md:py-16 lg:py-24">
      {/* Background image on left */}
      <div className="order-2 md:order-1">
        <Reveal direction="left">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)] min-h-[240px] sm:min-h-[320px] md:min-h-[70vh]">
            <img
              src={bgImage}
              alt="Background"
              className="h-full w-full object-cover object-center scale-[1.03] transition duration-700 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/10" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </Reveal>
      </div>

      {/* Content on right */}
      <div className="relative z-20 order-1 flex flex-col gap-8 md:order-2 md:pl-6 lg:pl-10">
        <Reveal direction="right">
          <div className="max-w-3xl">
            <h1 className="max-w-xl font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              {t('home.heading')}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              {t('home.description')}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to="/contacts"
                className="inline-flex w-full items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 sm:w-auto"
              >
                {t('home.contactBtn')}
              </Link>
              <Link
                to="/documentation"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800 sm:w-auto"
              >
                {t('home.docBtn')}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
      </div>
      </section>

      {/* Carousel section */}
      <section className="bg-black py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8">
            <Reveal direction="up" delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">{t('home.carouselTitle')}</h2>
              <p className="mt-2 text-slate-400">{t('home.carouselDesc')}</p>
            </Reveal>
          </div>
          <Carousel images={carouselImages} />
        </div>
      </section>

      {/* Partners / Logos section */}
      <Logos />

      {/* Why Choose Vocalzone */}
      <section className="bg-black py-16 md:py-24 px-4 md:px-6 border-t border-slate-800">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">{t('home.whyChooseTitle')}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal direction="up" delay={0}><div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ {t('home.since1912')}</h3>
              <p className="text-slate-300 text-sm">{t('home.since1912Desc')}</p>
            </div></Reveal>
            <Reveal direction="up" delay={80}><div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ {t('home.noNumbing')}</h3>
              <p className="text-slate-300 text-sm">{t('home.noNumbingDesc')}</p>
            </div></Reveal>
            <Reveal direction="up" delay={160}><div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ {t('home.certifiedVegan')}</h3>
              <p className="text-slate-300 text-sm">{t('home.certifiedVeganDesc')}</p>
            </div></Reveal>
            <Reveal direction="up" delay={240}><div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ {t('home.professionalGrade')}</h3>
              <p className="text-slate-300 text-sm">{t('home.professionalGradeDesc')}</p>
            </div></Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
