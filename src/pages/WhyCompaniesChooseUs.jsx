import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const trustCards = [
  {
    title: 'Fully Permitted',
    description: 'We operate under all required local health and safety permits so your event is served with full compliance.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#FCD34D]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  {
    title: 'Food Handler Certified',
    description: 'Every team member is certified and trained to food safety standards for catering and live events.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#A3E635]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 0-9 9v6a3 3 0 0 0 3 3h3" />
        <path d="M12 22a9 9 0 0 0 9-9V7a3 3 0 0 0-3-3h-3" />
        <path d="M9.5 12.5l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Fully Insured',
    description: 'We carry commercial insurance so your venue and guests are protected from start to finish.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#FCD34D]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 4v5a7 7 0 0 1-14 0V7l7-4z" />
        <path d="M9.5 12.5l1.5 1.5 3-3" />
      </svg>
    ),
  },
  {
    title: 'High-Volume Experience',
    description: 'We successfully support busy corporate events and conferences with speed, consistency, and calm execution.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#A3E635]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M2 21c0-3 2.5-5 6-5s6 2 6 5M10 21c0-3 2.5-5 6-5s6 2 6 5" />
      </svg>
    ),
  },
  {
    title: 'Fresh Ingredients On-Site',
    description: 'Our team brings fresh, thoughtfully sourced ingredients to every event, so your menu tastes vibrant every service.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#FCD34D]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4.5 8-11.5S13.046 2 12 2 4 5.5 4 10.5 12 22 12 22z" />
        <path d="M8 9.5c1-1 2.5-1.5 4-1.5s3 0.5 4 1.5" />
      </svg>
    ),
  },
  {
    title: 'Reliable Communication',
    description: 'From proposal to event day, we keep every point of contact clear so your planning stays on track.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#A3E635]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10a8.38 8.38 0 0 1-1.64 5.24 8.5 8.5 0 0 1-11.96 2.33L3 21l2.43-4.18A8.5 8.5 0 0 1 5 10.11" />
        <path d="M16 8h-5.5a1.5 1.5 0 0 0 0 3H16" />
      </svg>
    ),
  },
]

function WhyCompaniesChooseUs() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-[#f5f0e8]">
      <Nav />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <section className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#FCD34D]">
            Built for corporate catering
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Why Companies Choose Us For Events & Catering
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#E9E2D0] sm:text-lg">
            Corporate planners trust our team because we marry professional operations with thoughtful service. From permits and insurance to clear communication, we deliver dependable catering for events that matter.
          </p>
        </section>

        <section className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-300 hover:bg-[#ffd700] hover:text-[#1a1a2e]"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#FCD34D]">
                {card.icon}
              </div>
              <h2 className="mb-3 text-xl font-semibold">{card.title}</h2>
              <p className="text-sm leading-7 text-[#EEE7D9]">{card.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-[2rem] border border-white/10 bg-[#FCD34D] p-8 text-[#1a1a2e] shadow-[0_30px_80px_-40px_rgba(255,215,0,0.7)] sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6B7280]">
                Ready to book your event?
              </p>
              <p className="mt-3 max-w-2xl text-lg font-semibold leading-8">
                Let us help you plan a seamless, covered and compliant catering experience for your next corporate event.
              </p>
            </div>

            <Link
              to="/events"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#1a1a2e] px-6 py-3 text-sm font-semibold text-[#FCD34D] transition hover:bg-[#111227] sm:w-auto"
            >
              Get Your Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default WhyCompaniesChooseUs
