import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import DrinkBuilder from '../components/DrinkBuilder'
import WhyWheel from '../components/WhyWheel'

const PAGE_GRADIENT =
  'linear-gradient(180deg, #FFF7E5 0%, #FFE3F1 14%, #FFF3C4 30%, #FFF7E5 46%, #FFE3F1 62%, #FFF3C4 78%, #FFF7E5 100%)'

function Home() {
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
      <section className="w-full px-5 pt-10 pb-2 text-center">
        <p
          className="text-xs font-bold uppercase tracking-[0.25em]"
          style={{ color: '#E84C89' }}
        >
          From our family to yours
        </p>
        <h1
          className="mt-3 font-serif text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl"
          style={{ color: '#081A33' }}
        >
          Fresh-Squeezed.<br />Real Fruit.<br />No Syrups Ever.
        </h1>
      </section>

      {/* ===== 🍋 BUILD-A-DRINK MENU ===== */}
      <DrinkBuilder />

      {/* ===== STORY (short hook -> Read Our Full Story) ===== */}
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
              className="text-center font-serif text-2xl font-black sm:text-3xl"
              style={{ color: '#081A33' }}
            >
              More Than Lemonade
            </h2>
            <p
              className="mt-3 text-center text-sm italic sm:text-base"
              style={{ color: '#E84C89' }}
            >
              “Those who refresh others will themselves be refreshed.” — Proverbs 11:25
            </p>

            <p
              className="mt-6 text-center text-base leading-relaxed sm:text-lg"
              style={{ color: '#333' }}
            >
              What started as a family around a folding table became a faith-driven
              business serving fresh-squeezed lemonade — and a whole lot of love — to
              our San Antonio community.
            </p>

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

      {/* ===== WHY CHOOSE US — ROTATING WHEEL ===== */}
      <WhyWheel />

      {/* ===== CORPORATE HOOK ===== */}
      <section className="w-full px-5 py-10">
        <div
          className="mx-auto max-w-3xl rounded-3xl p-8 text-center shadow-lg"
          style={{ backgroundColor: '#081A33' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#FCD34D' }}>
            Planning an event?
          </p>
          <h2 className="mt-3 font-serif text-2xl font-black leading-tight text-white sm:text-3xl">
            Bring The Little Stand to Your Next Event
          </h2>
          <p className="mt-4 text-sm font-semibold" style={{ color: '#FFF7E5' }}>
            ✅ Insured &nbsp;·&nbsp; ✅ Permitted &nbsp;·&nbsp; ✅ Food Handler Certified
          </p>
          <Link
            to="/why-companies-choose-us"
            className="mt-6 inline-flex rounded-full px-8 py-3 text-sm font-black transition hover:opacity-90"
            style={{ backgroundColor: '#FCD34D', color: '#081A33' }}
          >
            See Why Companies Book Us →
          </Link>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="w-full px-5 py-14 text-center">
        <h2 className="font-serif text-2xl font-black sm:text-4xl" style={{ color: '#081A33' }}>
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

      <Footer />
    </div>
  )
}

export default Home