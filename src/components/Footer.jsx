import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="relative w-full" style={{ backgroundColor: '#1a1a2e', color: '#FFFBEB' }}>
      <svg
        className="pointer-events-none absolute top-0 left-0 h-3 w-full opacity-40"
        viewBox="0 0 1200 24"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 12 C200 0, 400 24, 600 12 C800 0, 1000 24, 1200 12" stroke="#FCD34D" strokeWidth="3" fill="none" />
      </svg>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: '#FCD34D' }}>
              Visit Us
            </p>
            <p className="mt-2 text-sm" style={{ color: 'rgba(255,251,235,0.75)' }}>
              123 Lemonade Lane<br />San Antonio, TX
            </p>
            <p className="mt-2 text-sm" style={{ color: 'rgba(255,251,235,0.75)' }}>
              (210) 555-0123
            </p>
            <p className="mt-2 text-sm" style={{ color: 'rgba(255,251,235,0.75)' }}>
              Tue–Sun, 11am–6pm
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: '#FCD34D' }}>
              Quick Links
            </p>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <Link to="/menu" className="hover:opacity-70">
                Menu
              </Link>
              <Link to="/order" className="hover:opacity-70">
                Order Online
              </Link>
              <Link to="/events" className="hover:opacity-70">
                Book Events
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: '#FCD34D' }}>
              Follow Us
            </p>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <a href="https://instagram.com/thelittlestandthatcould" target="_blank" rel="noreferrer" className="hover:opacity-70">
                Instagram
              </a>
              <a href="https://facebook.com/thelittlestandthatcould" target="_blank" rel="noreferrer" className="hover:opacity-70">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs" style={{ color: 'rgba(255,251,235,0.5)' }}>
          © 2026 The Little Stand That Could. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
