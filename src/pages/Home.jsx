import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { flavors } from '../data/menu'

const whyUs = [
  {
    title: 'Real Ingredients',
    copy: 'Fresh-squeezed fruit, real sugar, no syrups or shortcuts — ever.',
    icon: '🍋',
  },
  {
    title: 'Family Owned',
    copy: 'Started as a kid’s lemonade stand, grown by faith and family hands.',
    icon: '🏡',
  },
  {
    title: 'Community First',
    copy: 'Every cup helps fund the events we host for our neighbors.',
    icon: '🤝',
  },
]

// Continuous page-wide gradient — sections sit transparent on top so they melt
// into each other (Magic Spoon style). Pastel + premium: family-warm, catering-clean.
const PAGE_GRADIENT =
  'linear-gradient(180deg, #FFF7E5 0%, #FFE3F1 14%, #FFF3C4 30%, #FFF7E5 46%, #FFE3F1 62%, #FFF3C4 78%, #FFF7E5 100%)'

function Home() {
  const previewFlavors = flavors.slice(0, 6)

  return (
    <div style={{ background: PAGE_GRADIENT }}>
      <Nav />

      {/* ===== HERO (edge-to-edge photo) ===== */}
      <section className="w-full">
        <img
          src="/photos/header.jpg"
          alt="The Little Stand That Could"
          className="block w-full rounded-none"
        />
      </section>

      {/* ===== TAGLINE (intro to menu) ===== */}
      <section className="w-full px-5 pt-8 pb-2 text-center">
        <h1
          className="font-serif text-2xl font-bold leading-tight sm:text-4xl"
          style={{ color: '#081A33' }}
        >
          Fresh-Squeezed. Real Fruit. No Syrups Ever.
        </h1>
        <p className="mt-3 text-sm sm:text-lg" style={{ color: '#E84C89' }}>
          From our family to yours
        </p>
      </section>

      {/* ===== 🍋 SWIPE MENU SLOTS IN HERE (building next) ===== */}

      {/* ===== STORY (mobile-first: photo, then text card) ===== */}
      <section className="w-full px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
        <div
            className="mx-auto w-full overflow-hidden rounded-3xl shadow-lg"
            style={{ aspectRatio: '16 / 10' }}
          >
            <img
              src="/photos/stand.jpg"
              alt="The Little Stand That Could"
              className="h-full w-full"
style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            />
          </div>

          <div className="mt-8 rounded-3xl bg-white/70 p-6 backdrop-blur-sm sm:p-10">
            <h2
              className="text-center font-serif text-2xl font-bold sm:text-3xl"
              style={{ color: '#081A33' }}
            >
              The Little Stand That Could
            </h2>
            <p
              className="mt-3 text-center text-sm italic sm:text-base"
              style={{ color: '#E84C89' }}
            >
              “Those who refresh others will themselves be refreshed.” — Proverbs 11:25
            </p>

            <div
              className="mt-6 space-y-4 text-sm leading-relaxed sm:text-base"
              style={{ color: '#333' }}
            >
              <p>
                We started as a family standing around a folding table with mason jars,
                smiles, and a goal. It was not just a lemonade stand — it was a shared dream,
                a way to be together, to hustle together, and to build something beautiful
                with our own hands.
              </p>
              <p>
                Today, The Little Stand That Could is a family-owned business serving
                fresh-squeezed lemonade made with real fruit and real ingredients. No syrups.
                No shortcuts.
              </p>
              <p>
                More than lemonade, our mission is to create a place where people can gather,
                connect, and experience the love of Jesus through community, kindness, and
                service. Every lemonade purchased helps support our family and the events we
                host for our community.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/story"
                className="inline-flex rounded-full px-8 py-3 text-sm font-bold tracking-wide text-white transition hover:opacity-90"
                style={{ backgroundColor: '#081A33' }}
              >
                Read Our Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="w-full px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2
            className="text-center font-serif text-2xl font-bold sm:text-4xl"
            style={{ color: '#081A33' }}
          >
            Why Choose Us?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white/70 p-8 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-1"
              >
                <div className="text-5xl">{item.icon}</div>
                <h3 className="mt-4 text-xl font-bold" style={{ color: '#081A33' }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: '#555' }}>
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FLAVORS PREVIEW ===== */}
      <section className="w-full px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2
            className="text-center font-serif text-2xl font-bold sm:text-4xl"
            style={{ color: '#081A33' }}
          >
            11 Fresh Flavors
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {previewFlavors.map((flavor) => (
              <div
                key={flavor.id}
                className="rounded-2xl bg-white/80 p-4 text-center shadow-sm backdrop-blur-sm transition-transform hover:scale-105"
              >
                <p className="text-sm font-bold" style={{ color: '#081A33' }}>
                  {flavor.name}
                </p>
                <p className="mt-1 text-sm font-semibold" style={{ color: '#E84C89' }}>
                  ${flavor.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/menu"
              className="w-full rounded-full px-8 py-3 text-center text-sm font-bold text-white transition hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: '#081A33' }}
            >
              See Full Menu
            </Link>
            <Link
              to="/why-companies-choose-us"
              className="w-full rounded-full px-8 py-3 text-center text-sm font-bold transition hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: '#FCD34D', color: '#081A33' }}
            >
              Catering & Companies
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="w-full px-5 py-14 text-center">
        <h2 className="font-serif text-2xl font-bold sm:text-4xl" style={{ color: '#081A33' }}>
          Ready to refresh?
        </h2>
        <Link
          to="/order"
          className="mt-6 inline-flex rounded-full px-10 py-3 text-sm font-bold text-white transition hover:opacity-90"
          style={{ backgroundColor: '#E84C89' }}
        >
          Order Online
        </Link>
      </section>

      {/* ===== EXPLORE CARDS ===== */}
      <section className="w-full px-5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          <Link
            to="/community-impact"
            className="flex flex-col items-center rounded-3xl bg-white/70 p-8 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-1"
            style={{ color: '#081A33' }}
          >
            <div className="mb-4 text-4xl">🤝</div>
            <h3 className="text-xl font-bold">Community Impact</h3>
            <p className="mt-3 text-sm" style={{ color: '#555' }}>
              See how we give back to San Antonio
            </p>
          </Link>
          <Link
            to="/upcoming-events"
            className="flex flex-col items-center rounded-3xl bg-white/70 p-8 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-1"
            style={{ color: '#081A33' }}
          >
            <div className="mb-4 text-4xl">📅</div>
            <h3 className="text-xl font-bold">Upcoming Events</h3>
            <p className="mt-3 text-sm" style={{ color: '#555' }}>
              Find us at local events and markets
            </p>
          </Link>
          <Link
            to="/reviews"
            className="flex flex-col items-center rounded-3xl bg-white/70 p-8 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-1"
            style={{ color: '#081A33' }}
          >
            <div className="mb-4 text-4xl">⭐</div>
            <h3 className="text-xl font-bold">Customer Reviews</h3>
            <p className="mt-3 text-sm" style={{ color: '#555' }}>
              Hear what people are saying
            </p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home