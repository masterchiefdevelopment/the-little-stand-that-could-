import Nav from '../components/Nav'
import Footer from '../components/Footer'

const impactCards = [
  {
    title: 'Backpack Drives',
    description: 'Providing school supplies and meals to students in need during back-to-school season.',
    icon: (
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCD34D]/10 text-2xl text-[#FCD34D]">🎒</span>
    ),
  },
  {
    title: 'Church Partnerships',
    description: 'Supporting local churches with events, youth group gatherings, and community service projects.',
    icon: (
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A3E635]/10 text-2xl text-[#A3E635]">🤲</span>
    ),
  },
  {
    title: 'Nonprofit Support',
    description: 'Sponsoring fundraising events for community nonprofits and local organizations.',
    icon: (
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCD34D]/10 text-2xl text-[#FCD34D]">❤️</span>
    ),
  },
  {
    title: 'Community Events',
    description: 'Showing up at local festivals, markets, and neighborhood gatherings to build connections.',
    icon: (
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A3E635]/10 text-2xl text-[#A3E635]">👥</span>
    ),
  },
]

function CommunityImpact() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-[#f5f0e8]">
      <Nav />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <section className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#FCD34D]">
            Community Impact
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Community Is Everything
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#E9E2D0] sm:text-lg">
            Serving San Antonio, one event at a time.
          </p>
          <div className="mx-auto mt-8 max-w-2xl rounded-[2rem] border border-white/10 bg-[#111827] px-6 py-8 text-left text-[#F5E9D5] shadow-lg shadow-black/20 sm:px-8">
            <p className="text-xl font-semibold">Those who refresh others will themselves be refreshed.</p>
            <p className="mt-3 text-sm text-[#D9D4C2]">— Proverbs 11:25</p>
          </div>
        </section>

        <section className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <div className="rounded-[2rem] border border-white/10 bg-[#111827] p-10 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold sm:text-4xl">Our Mission</h2>
              <div className="mt-6 space-y-6 text-base leading-8 text-[#E9E2D0] sm:text-lg">
                <p>
                  We believe serving our neighbors is the heart of who we are. As a faith-based, family-owned team rooted in San Antonio, we show up for our city with humility and hospitality. Every event we serve is an opportunity to support local families, churches, and organizations.
                </p>
                <p>
                  Our commitment is long-term, not seasonal. We partner with community groups and create programs that help students, volunteers, and neighbors thrive. This work is shaped by our values and our desire to live out Proverbs 11:25 in a way that feels warm, genuine, and useful.
                </p>
                <p>
                  When we say community is everything, we mean it. We give back through service, local partnerships, and events that refresh others — because we believe those who refresh others will themselves be refreshed.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-[#111827] p-8 shadow-xl shadow-black/20">
              <h3 className="text-2xl font-semibold">Faith & Family First</h3>
              <p className="mt-4 text-[#E9E2D0]">
                Our local roots keep us grounded, and our faith gives us purpose. We serve with integrity, care, and an open heart.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#111827] p-8 shadow-xl shadow-black/20">
              <h3 className="text-2xl font-semibold">Action-Focused Support</h3>
              <p className="mt-4 text-[#E9E2D0]">
                Whether it’s a fundraiser, a school drive, or a neighborhood festival, we show up ready to help and ready to listen.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">What We Do</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {impactCards.map((card) => (
              <div key={card.title} className="rounded-[2rem] border border-white/10 bg-[#111827] p-8 shadow-xl shadow-black/20">
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-xl font-semibold text-[#FCD34D]">{card.title}</h3>
                <p className="mt-4 text-[#E9E2D0]">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-white/10 bg-[#111827] p-10 shadow-xl shadow-black/20">
          <h2 className="text-3xl font-semibold">Organizations We Support</h2>
          <p className="mt-6 max-w-3xl text-[#E9E2D0]">
            We partner with local churches, nonprofits, neighborhood groups, and schools across San Antonio. These relationships help us make a meaningful difference through food, fellowship, and service.
          </p>
          <ul className="mt-8 grid gap-4 text-[#F5E9D5] sm:grid-cols-2">
            <li className="rounded-3xl bg-[#0f172a] px-6 py-5">Local churches and youth ministries</li>
            <li className="rounded-3xl bg-[#0f172a] px-6 py-5">Neighborhood food drives and school supply events</li>
            <li className="rounded-3xl bg-[#0f172a] px-6 py-5">Community nonprofits and charity fundraisers</li>
            <li className="rounded-3xl bg-[#0f172a] px-6 py-5">San Antonio festivals, markets, and outreach gatherings</li>
          </ul>
        </section>

        <section className="mt-14 rounded-[2rem] border border-white/10 bg-[#FCD34D] p-10 text-[#1a1a2e] shadow-xl shadow-black/20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6B7280]">
                Want to partner with us or suggest a community project?
              </p>
              <p className="mt-3 max-w-2xl text-2xl font-semibold leading-8">
                We&apos;re ready to listen and work alongside neighbors who want to make San Antonio stronger.
              </p>
            </div>
            <a
              href="mailto:hello@thelittlestand.com"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#1a1a2e] px-8 py-3 text-sm font-semibold text-[#FCD34D] transition hover:bg-[#111227] sm:w-auto"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default CommunityImpact
