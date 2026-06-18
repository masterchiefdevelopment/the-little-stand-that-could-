import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative flex min-h-[520px] w-full items-center justify-center bg-gray-400 sm:min-h-[600px]">
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

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
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
      </div>
    </section>
  )
}

export default Hero
