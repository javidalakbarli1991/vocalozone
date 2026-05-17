import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n'
import bgImage from '../assets/images/1.jpeg'
import image2 from '../assets/images/2.jpeg'
import image3 from '../assets/images/3.jpeg'
import image4 from '../assets/images/4.jpeg'
import image5 from '../assets/images/5.jpeg'
import image9 from '../assets/images/9.jpeg'
import Carousel from '../components/Carousel'

function Home() {
  const { t } = useTranslation()
  const carouselImages = [image2, image3, image4, image5, image9]

  return (
    <>
      <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-linear-to-l from-black via-black/30 to-transparent z-10" />
      
      {/* Background image on left */}
      <div className="absolute left-0 top-0 h-full w-1/2 p-4 md:p-6">
        <div className="relative h-full overflow-hidden rounded-4xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <img
            src={bgImage}
            alt="Background"
            className="h-full w-full object-cover object-center scale-[1.03] transition duration-700 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/10" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>

      {/* Content on right */}
      <div className="relative z-20 ml-auto w-1/2 px-4 py-16 md:px-6 md:py-24 flex flex-col gap-10">
        <div className="max-w-3xl">
     
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            {t('home.heading')}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-200">
            {t('home.description')}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contacts"
              className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              {t('home.contactBtn')}
            </Link>
            <Link
              to="/documentation"
              className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
            >
              {t('home.docBtn')}
            </Link>
          </div>
        </div>
      </div>
      </section>

      {/* Carousel section */}
      <section className="bg-black py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">{t('home.carouselTitle')}</h2>
            <p className="mt-2 text-slate-400">{t('home.carouselDesc')}</p>
          </div>
          <Carousel images={carouselImages} />
        </div>
      </section>

      {/* Why Choose Vocalzone */}
      <section className="bg-black py-16 md:py-24 px-4 md:px-6 border-t border-slate-800">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">{t('home.whyChooseTitle')}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ {t('home.since1912')}</h3>
              <p className="text-slate-300 text-sm">{t('home.since1912Desc')}</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ {t('home.noNumbing')}</h3>
              <p className="text-slate-300 text-sm">{t('home.noNumbingDesc')}</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ {t('home.certifiedVegan')}</h3>
              <p className="text-slate-300 text-sm">{t('home.certifiedVeganDesc')}</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ {t('home.professionalGrade')}</h3>
              <p className="text-slate-300 text-sm">{t('home.professionalGradeDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
