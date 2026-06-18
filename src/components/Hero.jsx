import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative flex min-h-[520px] w-full items-center justify-center sm:min-h-[600px]"
        style={{ backgroundColor: '#0B1F3A' }}
      >
        <img
          src="https://placehold.co/1600x900/0B1F3A/0B1F3A?text=Hero+Photo"
          alt="The Little Stand That Could hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(11,31,58,0.55)' }}
        />

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

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <h1
            className="font-serif text-4xl font-bold leading-tight sm:text-6xl"
            style={{ color: '#FFFBEB' }}
          >
            Fresh-Squeezed. Real Fruit. No Syrups Ever.
          </h1>
          <p className="mt-4 text-lg sm:text-xl" style={{ color: '#FCD34D' }}>
            From our family to yours
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/order"
              className="w-full rounded-lg px-6 py-3 text-center text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: '#FCD34D', color: '#0B1F3A' }}
            >
              Order Online
            </Link>
            <Link
              to="/events"
              className="w-full rounded-lg px-6 py-3 text-center text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: '#D946A6', color: '#FFFBEB' }}
            >
              Book Us For Events
            </Link>
            <Link
              to="/location"
              className="w-full rounded-lg px-6 py-3 text-center text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: '#0B1F3A', color: '#FFFBEB', border: '1px solid #FFFBEB' }}
            >
              Visit The Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
