import { useState } from 'react'
import approvalImg from '../assets/images/docs/approval.png'
import certificateImg from '../assets/images/docs/certificate.png'
import letterImg from '../assets/images/docs/letter.png'
import purchaseImg from '../assets/images/docs/purchaseorder.png'

function Documentation() {
  const [selectedImage, setSelectedImage] = useState(null)

  const documents = [
    { id: 1, image: approvalImg, title: 'Approval Certificate' },
    { id: 2, image: certificateImg, title: 'Food Safety Certificate' },
    { id: 3, image: letterImg, title: 'Quality Assurance Letter' },
    { id: 4, image: purchaseImg, title: 'Purchase Order' },
  ]

  return (
    <>
      <section className="relative bg-black text-white overflow-hidden">
        <div className="pointer-events-none absolute -left-24 -top-16 h-64 w-64 rounded-full bg-orange-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 md:px-6 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-orange-400 bg-orange-900/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
              Our Credentials
            </p>
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Certifications & Documentation
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-300">
              Browse our official certifications, approvals, and documentation that
              demonstrate our commitment to quality and compliance.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setSelectedImage(doc)}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm shadow-slate-900/60 transition hover:shadow-md hover:border-slate-600 group"
              >
                <div className="rounded-lg overflow-hidden bg-slate-800 mb-4">
                  <img
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-40 object-contain group-hover:scale-105 transition"
                  />
                </div>
                <h2 className="font-semibold text-slate-100 text-left">{doc.title}</h2>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-slate-900 rounded-2xl shadow-2xl overflow-auto border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="sticky top-4 right-4 float-right text-slate-400 hover:text-slate-100 transition z-10"
              aria-label="Close modal"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain mx-auto"
              />

              <div className="mt-6 border-t border-slate-700 pt-6">
                <h2 className="font-display text-2xl text-white">{selectedImage.title}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Documentation
