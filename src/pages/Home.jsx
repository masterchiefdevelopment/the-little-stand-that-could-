import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
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

function Home() {
  const previewFlavors = flavors.slice(0, 6)

  return (
    <div style={{ backgroundColor: '#FFFBEB' }}>
      <Nav />
      <Hero />

      <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#FFFBEB' }}>
        <svg
          className="pointer-events-none absolute -left-6 top-0 hidden h-full w-20 opacity-20 sm:block"
          viewBox="0 0 100 600"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 0 C60 100, -10 200, 40 300 C80 380, 0 480, 50 600"
            stroke="#E84C89"
            strokeWidth="4"
            fill="none"
          />
        </svg>

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a2e' }}>
              The Little Stand That Could
            </h2>
            <p className="mt-4 text-center text-base italic md:text-left" style={{ color: '#E84C89' }}>
              "Whoever brings blessing will be enriched, and one who waters will himself be watered."
              <br />— Proverbs 11:25
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed" style={{ color: '#1a1a2e' }}>
              <p>
                We started with a simple lemonade stand and a dream. What began as a small family
                hustle quickly became something much bigger. Along the way, we found faith,
                community, and purpose.
              </p>
              <p>
                Today, The Little Stand That Could is a family-owned business serving
                fresh-squeezed lemonade made with real fruit and real ingredients. No syrups. No
                shortcuts.
              </p>
              <p>
                More than lemonade, our mission is to create a place where people can gather,
                connect, and experience the love of Jesus through community, kindness, and
                service. Every lemonade purchased helps support our family and the events we host
                for our community.
              </p>
            </div>
          </div>
          <div className="aspect-square w-full rounded-2xl bg-gray-300 shadow-lg" />
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: '#1a1a2e' }}>
        <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-14">
          <p className="font-serif text-xl font-bold" style={{ color: '#FFFBEB' }}>
            Want to know the heart behind the stand?
          </p>
          <Link
            to="/story"
            className="mt-6 inline-flex rounded-full px-8 py-3 text-sm font-bold tracking-wide transition hover:opacity-90"
            style={{ backgroundColor: '#FCD34D', color: '#081A33' }}
          >
            Read Our Story
          </Link>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center font-serif text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a2e' }}>
            Why Choose Us?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl p-8 text-center shadow-md transition-colors"
                style={{ backgroundColor: '#E84C89' }}
              >
                <div className="text-4xl">{item.icon}</div>
                <h3
                  className="mt-4 text-xl font-bold transition-colors group-hover:opacity-80"
                  style={{ color: '#1a1a2e' }}
                >
                  <span className="group-hover:hidden">{item.title}</span>
                  <span className="hidden group-hover:inline" style={{ color: '#FCD34D' }}>
                    {item.title}
                  </span>
                </h3>
                <p className="mt-2 text-sm" style={{ color: '#FFFBEB' }}>
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: '#FFFBEB' }}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center font-serif text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a2e' }}>
            11 Fresh Flavors
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {previewFlavors.map((flavor) => (
              <div
                key={flavor.id}
                className="rounded-xl border bg-white p-4 text-center shadow-sm transition-transform hover:scale-105"
                style={{ borderColor: 'rgba(26,26,46,0.1)' }}
              >
                <p className="text-sm font-bold" style={{ color: '#1a1a2e' }}>
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
              className="w-full rounded-lg px-8 py-3 text-center text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: '#1a1a2e', color: '#FFFBEB' }}
            >
              See Full Menu
            </Link>
            <Link
              to="/why-companies-choose-us"
              className="w-full rounded-lg px-8 py-3 text-center text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: '#FCD34D', color: '#081A33' }}
            >
              Why Companies Choose Us
            </Link>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#FCD34D' }}>
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a2e' }}>
            Ready to refresh?
          </h2>
          <Link
            to="/order"
            className="mt-6 w-full rounded-lg px-8 py-3 text-center text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
            style={{ backgroundColor: '#1a1a2e', color: '#FFFBEB' }}
          >
            Order Online
          </Link>
        </div>
        <svg
          className="pointer-events-none absolute bottom-0 left-0 h-16 w-full opacity-30"
          viewBox="0 0 1200 100"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 80 C200 20, 400 100, 600 50 C800 0, 1000 90, 1200 30"
            stroke="#1a1a2e"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </section>

      <Footer />
    </div>
  )
}

export default Home
