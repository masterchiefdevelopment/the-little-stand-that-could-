import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import VIPSignup from '../components/VIPSignup'
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
            stroke="#D946A6"
            strokeWidth="4"
            fill="none"
          />
        </svg>

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl" style={{ color: '#0B1F3A' }}>
              The Little Stand That Could
            </h2>
            <p className="mt-4 text-center text-base italic md:text-left" style={{ color: '#D946A6' }}>
              "Whoever brings blessing will be enriched, and one who waters will himself be watered."
              <br />— Proverbs 11:25
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed" style={{ color: '#0B1F3A' }}>
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
          <img
            src="https://placehold.co/700x700/FCD34D/0B1F3A?text=Family+Photo"
            alt="The family behind The Little Stand That Could"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: '#FFFBEB' }}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center font-serif text-3xl font-bold sm:text-4xl" style={{ color: '#0B1F3A' }}>
            Why Choose Us?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl p-8 text-center shadow-md transition-colors"
                style={{ backgroundColor: '#D946A6' }}
              >
                <div className="text-4xl">{item.icon}</div>
                <h3
                  className="mt-4 text-xl font-bold transition-colors group-hover:opacity-80"
                  style={{ color: '#FCD34D' }}
                >
                  {item.title}
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
          <h2 className="text-center font-serif text-3xl font-bold sm:text-4xl" style={{ color: '#0B1F3A' }}>
            11 Fresh Flavors
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {previewFlavors.map((flavor) => (
              <div
                key={flavor.id}
                className="rounded-xl border p-4 text-center shadow-sm"
                style={{ borderColor: 'rgba(11,31,58,0.1)', backgroundColor: '#fff' }}
              >
                <p className="text-sm font-bold" style={{ color: '#0B1F3A' }}>
                  {flavor.name}
                </p>
                <p className="mt-1 text-sm font-semibold" style={{ color: '#D946A6' }}>
                  ${flavor.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/menu"
              className="w-full rounded-lg px-8 py-3 text-center text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: '#0B1F3A', color: '#FFFBEB' }}
            >
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#FCD34D' }}>
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl" style={{ color: '#0B1F3A' }}>
            Ready to refresh?
          </h2>
          <Link
            to="/order"
            className="mt-6 w-full rounded-lg px-8 py-3 text-center text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
            style={{ backgroundColor: '#0B1F3A', color: '#FFFBEB' }}
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
            stroke="#0B1F3A"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </section>

      <VIPSignup />
    </div>
  )
}

export default Home
