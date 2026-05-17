import image2 from '../assets/images/2.jpeg'

function About() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden text-white">
      {/* Image on left */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <img src={image2} alt="About" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      {/* Content on right */}
      <div className="relative ml-auto w-1/2 px-12 py-20 flex flex-col justify-center gap-16">
        
        {/* Header */}
        <div className="space-y-6 border-b border-slate-800 pb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">About Vocalzone</p>
          <h1 className="font-display text-6xl font-bold leading-tight">
            Trusted Quality. <br /> Proven Heritage.
          </h1>
          <p className="text-lg text-slate-300 max-w-md leading-relaxed">
            Founded on principles of excellence and family values
          </p>
        </div>

        {/* Family Business */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold">Family Business</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              Ayriz MMC was incorporated in August 2016. It's a family business with all members of the family playing a key role in developing and nurturing the growth of the company.
            </p>
            <p>
              Ayriz is the distributor for Vocalzone throat care products from Kestrel Medical in the United Kingdom, and Calmosissne baby welfare products made by Laboratoires Laudavie in France. Both ranges are non-medicine organic products.
            </p>
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
          <h2 className="font-display text-2xl font-semibold">About The Manufacturers</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              Kestrel Medical Limited was incorporated in March 2001 when it purchased Vocalzone Throat Pastilles. It's a family business with all members of the family playing a key role in developing and nurturing the growth of the company.
            </p>
            <p>
              However, what sets us apart in the ordinary pharmaceutical business! We don't flood ourselves in corporate bureaucracy, or hide ourselves behind a business wall. We love getting stuck in!
            </p>
            <p>
              Vocalzone is not just our job, but our lifestyle and passion – music is at the heart of what we do, when the office playlist isn't playing, you'll probably find us at a concert or at a music festival.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
