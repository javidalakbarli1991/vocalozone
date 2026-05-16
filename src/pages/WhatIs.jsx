import image7 from '../assets/images/7.jpeg'

function WhatIs() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* Background image on left */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <img src={image7} alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent" />
      
      {/* Content on right */}
      <div className="relative z-20 ml-auto w-1/2 px-4 py-16 md:px-6 md:py-24 flex flex-col gap-10">
        <div>
         
          <h1 className="font-display text-5xl leading-tight text-white md:text-6xl">
            Vocalzone Throat Pastilles
          </h1>
        </div>

        <article className="space-y-6 text-lg leading-relaxed text-slate-200">
          <p>
            In 1907, Enrico Caruso, the first man to sell one million records stepped off the stage at Covent Garden having brought the house down with his performance. Yet only days earlier, he had barely been able to sing. The secret to this remarkable turnaround?
          </p>

          <p className="text-3xl font-display text-orange-400">
            Vocalzone.
          </p>

          <p>
            Formulated for Caruso to specifically relieve irritation from excessive singing, speaking or smoking and turned into a pastille in 1912, we have been there for hardworking voices ever since.
          </p>

          <p>
            An iconic staple in the toolkit of many of the world's most iconic voices, our pastilles with their unique blend of quality ingredients provide a soothing, clearing and relieving sensation for your throat to help you keep a clear voice and perform at your best.
          </p>

          <p>
            Importantly, our pastilles differ from others in that they do not contain numbing agents which can mask underlying vocal damage.
          </p>

          <p>
            Vocalzone Pastilles are gluten & lactose free and certified vegan. Our Blackcurrant pastilles are even sugar free!
          </p>
        </article>

        <div className="pt-8 border-t border-slate-800">
          <h2 className="font-display text-2xl text-white mb-4">Why Choose Vocalzone?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
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
      </div>
    </section>
  )
}

export default WhatIs
