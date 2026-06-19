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

function Home() {
  const previewFlavors = flavors.slice(0, 6)

  return (
    <div style={{ backgroundColor: '#FFFBEB' }}>
      <Nav />

      <section
        className="relative w-full overflow-hidden responsive-hero"
        style={{
          backgroundImage: "url('/photos/header.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          padding: 'clamp(1.5rem, 5vw, 3rem)',
          textAlign: 'center',
          position: 'relative',
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,26,46,0.6)' }} />

        <svg
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-24 opacity-30 sm:block"
          viewBox="0 0 100 600"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M90 0 C40 100, 110 200, 60 300 C20 380, 100 480, 50 600"
            stroke="#FCD34D"
            strokeWidth="4"
            fill="none"
          />
        </svg>

        <div
          className="relative z-10 responsive-container responsive-scale flex flex-col items-center text-center"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 3vw, 2rem)' }}
        >
          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-6xl">
            Fresh-Squeezed. Real Fruit. No Syrups Ever.
          </h1>
          <p className="mt-4 text-lg sm:text-xl" style={{ color: '#FCD34D' }}>
            From our family to yours
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/order"
              className="w-full rounded-lg px-6 py-3 text-center text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: '#FCD34D', color: '#1a1a2e' }}
            >
              Order Online
            </Link>
            <Link
              to="/events"
              className="w-full rounded-lg px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: '#E84C89' }}
            >
              Book Events
            </Link>
            <Link
              to="/location"
              className="w-full rounded-lg border border-white px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: '#1a1a2e' }}
            >
              Visit Shop
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundColor: '#ff69b4',
          padding: '4rem 2rem',
          borderRadius: '8px',
          marginTop: '2rem',
          marginBottom: '2rem',
        }}
      >
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

        <div
          className="relative z-10 responsive-container"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: 'clamp(1rem, 3vw, 2rem)',
          }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src="/photos/stand.jpg"
              alt="The Little Stand"
              style={{
                width: '100%',
                display: 'block',
                borderRadius: '8px',
                maskImage: 'linear-gradient(to right, transparent 0%, black 0.5%, black 99.5%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 0.5%, black 99.5%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%)',
                WebkitMaskComposite: 'source-in',
              }}
            />

            <div style={{ position: 'absolute', top: '20px', left: 0, right: 0, textAlign: 'center', zIndex: 10, padding: '0 2rem' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.8)', margin: 0, lineHeight: 1.2 }}>
                The Little Stand That Could
              </h2>
              <p style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', color: '#ffd700', fontStyle: 'italic', textShadow: '1px 1px 4px rgba(0,0,0,0.8)', margin: '10px 0', lineHeight: 1.4 }}>
                Those who refresh will themselves be refreshed.
              </p>
              <p style={{ fontSize: '1.3rem', color: '#ffd700', textShadow: '1px 1px 4px rgba(0,0,0,0.8)', margin: 0, lineHeight: 1.4 }}>
                — Proverbs 11:25
              </p>
            </div>

            <div style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, textAlign: 'center', padding: '0 2rem', zIndex: 10 }}>
              <div style={{ fontSize: 'clamp(0.9rem, 3vw, 1.3rem)', color: '#ffffff', textShadow: '1px 1px 4px rgba(0,0,0,0.8)', maxWidth: '900px', margin: '0 auto', lineHeight: 1.8 }}>
                <p>
                  We started as a family standing around a folding table with mason jars, smiles, and a goal. It was not just a lemonade stand — it was a shared dream, a way to be together, to hustle together, and to build something beautiful with our own hands.
                </p>
                <p className="mt-3">
                  Today, The Little Stand That Could is a family-owned business serving fresh-squeezed lemonade made with real fruit and real ingredients. No syrups. No shortcuts.
                </p>
                <p className="mt-3">
                  More than lemonade, our mission is to create a place where people can gather, connect, and experience the love of Jesus through community, kindness, and service. Every lemonade purchased helps support our family and the events we host for our community.
                </p>
                <p className="mt-3" style={{ color: '#ffd700' }}>
                  Those who refresh others will themselves be refreshed. — Proverbs 11:25
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p className="font-serif text-xl font-bold" style={{ color: '#FFF7E5' }}>
              Want to know the heart behind the stand?
            </p>
            <Link
              to="/story"
              className="mt-6 inline-flex rounded-full px-8 py-3 text-sm font-bold tracking-wide transition hover:opacity-90"
              style={{ backgroundColor: '#1a1a2e', color: '#FFF7E5' }}
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div
          className="responsive-container responsive-card-container"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 4vw, 2rem)' }}
        >
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
        <div
          className="responsive-container responsive-card-container"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 4vw, 2rem)' }}
        >
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
        <div
          className="relative z-10 responsive-container responsive-text-section flex flex-col items-center text-center"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 3vw, 2rem)' }}
        >
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

      <section className="w-full bg-white">
        <div
          className="responsive-container responsive-card-container"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 4vw, 2rem)' }}
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <Link
              to="/community-impact"
              className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-[#FCD34D] to-[#F4A460] p-8 text-center shadow-md transition-transform hover:scale-105"
              style={{ color: '#1a1a2e' }}
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold">Community Impact</h3>
              <p className="mt-3 text-sm font-semibold">See how we give back to San Antonio</p>
            </Link>
            <Link
              to="/upcoming-events"
              className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-[#FCD34D] to-[#F4A460] p-8 text-center shadow-md transition-transform hover:scale-105"
              style={{ color: '#1a1a2e' }}
            >
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-bold">Upcoming Events</h3>
              <p className="mt-3 text-sm font-semibold">Find us at local events and markets</p>
            </Link>
            <Link
              to="/reviews"
              className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-[#FCD34D] to-[#F4A460] p-8 text-center shadow-md transition-transform hover:scale-105"
              style={{ color: '#1a1a2e' }}
            >
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold">Customer Reviews</h3>
              <p className="mt-3 text-sm font-semibold">Hear what people are saying</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
