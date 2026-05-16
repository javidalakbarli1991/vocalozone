const products = [
  {
    name: 'Vocal Pro X1',
    category: 'Headset',
    price: '$249',
    desc: 'Balanced detail and comfort for all-day editing.',
  },
  {
    name: 'EchoFlow M7',
    category: 'Microphone',
    price: '$189',
    desc: 'Broadcast-quality tone with zero setup stress.',
  },
  {
    name: 'ZoneMix 24',
    category: 'Mixer',
    price: '$329',
    desc: 'Compact, powerful mixer for streaming and live sets.',
  },
  {
    name: 'RoomSoft Kit',
    category: 'Acoustics',
    price: '$99',
    desc: 'Fast acoustic treatment for cleaner recordings.',
  },
]

function Products() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">Catalog</p>
          <h1 className="mt-2 font-display text-4xl text-slate-900">Featured Products</h1>
        </div>
        <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
          {products.length} items
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {products.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">{item.category}</p>
            <h2 className="mt-2 font-display text-2xl text-slate-900">{item.name}</h2>
            <p className="mt-3 text-slate-600">{item.desc}</p>
            <p className="mt-6 text-lg font-semibold text-slate-900">{item.price}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Products
