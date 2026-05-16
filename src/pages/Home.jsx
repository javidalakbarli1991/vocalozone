import { Link } from 'react-router-dom'
import bgImage from '../assets/images/1.jpeg'
import image2 from '../assets/images/2.jpeg'
import image3 from '../assets/images/3.jpeg'
import image4 from '../assets/images/4.jpeg'
import image5 from '../assets/images/5.jpeg'
import image9 from '../assets/images/9.jpeg'
import Carousel from '../components/Carousel'

function Home() {
  const carouselImages = [image2, image3, image4, image5, image9]

  return (
    <>
      <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/30 to-transparent z-10" />
      
      {/* Background image on left */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <img src={bgImage} alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Content on right */}
      <div className="relative z-20 ml-auto w-1/2 px-4 py-16 md:px-6 md:py-24 flex flex-col gap-10">
        <div className="max-w-3xl">
     
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Vocalozone helps you keep a clear voice when you need it most.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-200">
            The Vocalozone throat care range is specifically formulated to soothe hard-working voices and has been trusted by many of the world's most iconic voices since 1912.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contacts"
              className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Contact Team
            </Link>
            <Link
              to="/documentation"
              className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
      </section>

      {/* Carousel section */}
      <section className="bg-black py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Discover Our Collections</h2>
            <p className="mt-2 text-slate-400">Explore our premium product range and experience the difference</p>
          </div>
          <Carousel images={carouselImages} />
        </div>
      </section>

      {/* Why Choose Vocalzone */}
      <section className="bg-black py-16 md:py-24 px-4 md:px-6 border-t border-slate-800">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Why Choose Vocalzone?</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ Since 1912</h3>
              <p className="text-slate-300 text-sm">Over a century of trusted vocal care</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ No Numbing Agents</h3>
              <p className="text-slate-300 text-sm">Soothe without masking underlying issues</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ Certified Vegan</h3>
              <p className="text-slate-300 text-sm">Gluten & lactose free with sugar-free options</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-orange-400 mb-2">✓ Professional Grade</h3>
              <p className="text-slate-300 text-sm">Used by world-renowned voices</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
