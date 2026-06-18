import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Order', to: '/order' },
  { label: 'Location', to: '/location' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Events', to: '/events' },
  { label: 'Account', to: '/account' },
]

function Nav() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{ backgroundColor: '#FFFBEB', borderColor: 'rgba(8,7,20,0.08)' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="font-serif text-xl font-bold sm:text-2xl"
          style={{ color: '#0B1F3A' }}
        >
          The Little Stand That Could
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-semibold transition-colors hover:opacity-70"
              style={{ color: '#0B1F3A' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/order"
          className="rounded-lg px-4 py-2 text-sm font-bold transition-colors"
          style={{ backgroundColor: '#FCD34D', color: '#0B1F3A' }}
        >
          Order Online
        </Link>
      </div>
    </header>
  )
}

export default Nav
