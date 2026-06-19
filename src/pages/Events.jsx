import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const initialState = {
  eventType: 'Corporate Event',
  eventDate: '',
  guestCount: '',
  eventLocation: '',
  serviceTier: 'Starter ($700 + $100/mo)',
  fullName: '',
  email: '',
  phone: '',
  specialRequests: '',
  agreeContact: false,
}

function Events() {
  const [formData, setFormData] = useState(initialState)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Event inquiry submitted:', formData)
    alert('Thank you! Your event inquiry has been sent. We will follow up soon.')
    setFormData(initialState)
  }

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-[#f5f0e8]">
      <Nav />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <section className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#FCD34D]">
            Events & Catering
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Book The Little Stand For Your Event
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#E9E2D0] sm:text-lg">
            Perfect for corporate events, private parties, schools, churches, and community gatherings.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#F5E9D5] sm:text-xl">
            Fill out the form below and we&apos;ll send you a custom quote.
          </p>
        </section>

        <section className="mt-12 rounded-[2rem] border border-white/10 bg-[#111827] p-8 shadow-xl shadow-black/20 sm:p-10">
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 lg:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#F5E9D5]">Event Type</span>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-[#f5f0e8] outline-none transition focus:border-[#FCD34D] focus:ring-2 focus:ring-[#FCD34D]/30"
                >
                  <option>Corporate Event</option>
                  <option>Private Party</option>
                  <option>Wedding</option>
                  <option>School Event</option>
                  <option>Church Event</option>
                  <option>Community Gathering</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#F5E9D5]">Event Date</span>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-[#f5f0e8] outline-none transition focus:border-[#FCD34D] focus:ring-2 focus:ring-[#FCD34D]/30"
                />
              </label>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#F5E9D5]">Guest Count</span>
                <input
                  type="number"
                  name="guestCount"
                  min="1"
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="e.g. 75"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-[#f5f0e8] outline-none transition focus:border-[#FCD34D] focus:ring-2 focus:ring-[#FCD34D]/30"
                />
              </label>

              <label className="block lg:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-[#F5E9D5]">Event Location</span>
                <input
                  type="text"
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  placeholder="Address or ZIP code"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-[#f5f0e8] outline-none transition focus:border-[#FCD34D] focus:ring-2 focus:ring-[#FCD34D]/30"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#F5E9D5]">Service Tier</span>
              <select
                name="serviceTier"
                value={formData.serviceTier}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-[#f5f0e8] outline-none transition focus:border-[#FCD34D] focus:ring-2 focus:ring-[#FCD34D]/30"
              >
                <option>Starter ($700 + $100/mo)</option>
                <option>Standard ($1,000 + $150/mo)</option>
                <option>Premium ($1,400 + $200/mo)</option>
              </select>
            </label>

            <div className="grid gap-6 lg:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#F5E9D5]">Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-[#f5f0e8] outline-none transition focus:border-[#FCD34D] focus:ring-2 focus:ring-[#FCD34D]/30"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#F5E9D5]">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-[#f5f0e8] outline-none transition focus:border-[#FCD34D] focus:ring-2 focus:ring-[#FCD34D]/30"
                />
              </label>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#F5E9D5]">Phone</span>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(210) 555-0123"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-[#f5f0e8] outline-none transition focus:border-[#FCD34D] focus:ring-2 focus:ring-[#FCD34D]/30"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#F5E9D5]">Special Requests</span>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Let us know any dietary needs, themes, or timeline notes."
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-[#f5f0e8] outline-none transition focus:border-[#FCD34D] focus:ring-2 focus:ring-[#FCD34D]/30"
                />
              </label>
            </div>

            <label className="flex items-start gap-3 text-sm text-[#E9E2D0]">
              <input
                type="checkbox"
                name="agreeContact"
                checked={formData.agreeContact}
                onChange={handleChange}
                className="mt-1 h-5 w-5 rounded border-white/20 bg-[#0f172a] text-[#FCD34D] transition focus:ring-2 focus:ring-[#FCD34D]/50"
              />
              <span>I agree to be contacted about my event.</span>
            </label>

            <button
              type="submit"
              className="inline-flex justify-center rounded-full bg-[#FCD34D] px-8 py-3 text-sm font-semibold text-[#081A33] transition hover:bg-[#e3c30d]"
            >
              Get Your Quote
            </button>
          </form>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-[#111827] p-8 text-center shadow-lg shadow-black/10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FCD34D]">Response Time</p>
            <p className="mt-4 text-2xl font-semibold text-[#F5E9D5]">24 hours</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#111827] p-8 text-center shadow-lg shadow-black/10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FCD34D]">Service Area</p>
            <p className="mt-4 text-2xl font-semibold text-[#F5E9D5]">San Antonio & surrounding</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#111827] p-8 text-center shadow-lg shadow-black/10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FCD34D]">Payment Plans</p>
            <p className="mt-4 text-2xl font-semibold text-[#F5E9D5]">Available</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Events
