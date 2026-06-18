import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer style={{ backgroundColor: '#0B1F3A', color: '#FFFBEB' }}>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-bold" style={{ color: '#FCD34D' }}>
              The Little Stand That Could
            </p>
            <p className="mt-2 text-sm" style={{ color: 'rgba(255,251,235,0.75)' }}>
              Family-owned, faith-forward, fresh-squeezed lemonade made right here in South Africa.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: '#FCD34D' }}>
              Explore
            </p>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <Link to="/menu" className="hover:opacity-70">
                Menu
              </Link>
              <Link to="/order" className="hover:opacity-70">
                Order Online
              </Link>
              <Link to="/location" className="hover:opacity-70">
                Visit The Shop
              </Link>
              <Link to="/events" className="hover:opacity-70">
                Book Us For Events
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: '#FCD34D' }}>
              Connect
            </p>
            <p className="mt-2 text-sm" style={{ color: 'rgba(255,251,235,0.75)' }}>
              hello@thelittlestand.co.za
            </p>
          </div>
        </div>
        <p className="mt-8 text-center text-xs" style={{ color: 'rgba(255,251,235,0.5)' }}>
          © {new Date().getFullYear()} The Little Stand That Could. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
