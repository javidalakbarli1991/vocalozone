import { useState } from 'react'
import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const recipientEmail = import.meta.env.VITE_CONTACT_RECIPIENT_EMAIL || 'hello@vocalozone.com'

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'EmailJS is not configured yet. Add your VITE_EMAILJS values in .env.local.',
      })
      return
    }

    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: recipientEmail,
      }, {
        publicKey,
      })

      setStatus({
        type: 'success',
        message: 'Message sent successfully. We will reply by email soon.',
      })
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus({
        type: 'error',
        message: 'Message could not be sent. Please try again in a moment.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="bg-black text-white min-h-screen">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <article className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Contacts</p>
          <h1 className="mt-2 font-display text-4xl text-white">Let us build your audio setup.</h1>
          <p className="mt-4 text-slate-300">
            Reach out for product support, partnership ideas, or tailored creator
            bundles.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-300">
            <p>Email: hello@vocalozone.com</p>
            <p>Phone: +1 (555) 904-2211</p>
            <p>Address: 218 Harbor Lane, Studio District</p>
          </div>
        </article>

        <form className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-sm" onSubmit={handleSubmit}>
          <h2 className="font-display text-2xl text-white">Send Message</h2>
          <p className="mt-2 text-sm text-slate-400">
            Messages are delivered to {recipientEmail} through EmailJS.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-300">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-white placeholder-slate-500 outline-none ring-orange-300 transition focus:ring"
                required
              />
            </label>
            <label className="text-sm font-medium text-slate-300">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-white placeholder-slate-500 outline-none ring-orange-300 transition focus:ring"
                required
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium text-slate-300">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us what you need"
              className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-white placeholder-slate-500 outline-none ring-orange-300 transition focus:ring"
              required
            />
          </label>
          {status.message ? (
            <p
              className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${
                status.type === 'success'
                  ? 'bg-emerald-900/50 text-emerald-300'
                  : 'bg-rose-900/50 text-rose-300'
              }`}
            >
              {status.message}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={isSending}
            className="mt-5 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-orange-800"
          >
            {isSending ? 'Sending...' : 'Submit'}
          </button>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts
