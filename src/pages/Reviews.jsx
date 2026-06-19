import Nav from '../components/Nav'
import Footer from '../components/Footer'

const reviews = [
  {
    quote:
      'Fresh, delicious, and the team is so friendly. Perfect for our company event and made every guest feel welcome.',
    name: 'Sarah M.',
    location: 'San Antonio, TX',
  },
  {
    quote:
      'The lemonade was the highlight of our school fundraiser. The service was warm, professional, and truly local.',
    name: 'EduCare Academy',
    location: 'San Antonio, TX',
  },
  {
    quote:
      'We booked them for an office lunch and the whole team raved about the flavors and how smoothly everything was handled.',
    name: 'James T.',
    location: 'Downtown SA',
  },
  {
    quote:
      'Family-owned feel with event-level polish. They showed up on time and delivered fresh taste with a smile.',
    name: 'Olivia R.',
    location: 'Alamo Heights',
  },
  {
    quote:
      'A reliable choice for community gatherings. Great flavors, inviting staff, and a stress-free experience from start to finish.',
    name: 'River City Church',
    location: 'San Antonio, TX',
  },
  {
    quote:
      'Friendly service, bright branding, and the lemonade was exceptional. Our guests loved every sip.',
    name: 'Michael B.',
    location: 'Southtown',
  },
]

function Reviews() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-[#f5f0e8]">
      <Nav />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <section className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#FCD34D]">
            Trust & Testimonials
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            What People Are Saying
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#E9E2D0] sm:text-lg">
            Join hundreds of happy customers who love our fresh flavors, friendly service, and event-ready hospitality.
          </p>
        </section>

        <section className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="rounded-[2rem] border border-white/10 bg-[#111827] p-8 shadow-xl shadow-black/20"
            >
              <div className="mb-5 flex items-center gap-1 text-[#FCD34D]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex} className="text-lg">⭐</span>
                ))}
              </div>
              <p className="text-base leading-8 text-[#E9E2D0]">“{review.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-4 text-sm text-[#F5E9D5]">
                <p className="font-semibold">{review.name}</p>
                {review.location && <p className="mt-1 text-[#D9D4C2]">{review.location}</p>}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-[2rem] border border-white/10 bg-[#FCD34D] p-10 text-[#1a1a2e] shadow-xl shadow-black/20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6B7280]">
                Ready to try The Little Stand?
              </p>
              <p className="mt-3 max-w-2xl text-2xl font-semibold leading-8">
                Experience our fresh, family-owned flavor at your next order or event.
              </p>
            </div>
            <a
              href="/order"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#1a1a2e] px-8 py-3 text-sm font-semibold text-[#FCD34D] transition hover:bg-[#111227] sm:w-auto"
            >
              Order Online
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Reviews
