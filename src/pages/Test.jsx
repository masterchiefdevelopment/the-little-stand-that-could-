import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Test() {
  return (
    <div style={{ backgroundColor: '#081A33', color: '#FFF7E5' }}>
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold" style={{ color: '#FCD34D' }}>
          Routing Test Page
        </h1>
        <p className="mt-6 text-lg" style={{ color: '#E8D8B0' }}>
          This page confirms the app routes render correctly.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#081A33] transition hover:opacity-90"
          >
            Back to Home
          </Link>
          <Link
            to="/menu"
            className="rounded-full bg-[#FCD34D] px-6 py-3 text-sm font-semibold text-[#081A33] transition hover:opacity-90"
          >
            Go to Menu
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Test
