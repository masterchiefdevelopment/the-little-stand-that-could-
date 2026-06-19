import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Order', to: '/order' },
  { label: 'Location', to: '/location' },
  { label: 'Events', to: '/events' },
  { label: 'Account', to: '/account' },
]

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: '#1a1a2e' }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => navigate(-1)}
            style={{
              display: window.innerWidth < 768 ? 'block' : 'none',
              background: 'none',
              border: 'none',
              color: '#ffd700',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              marginRight: '1rem',
            }}
          >
            ← Back
          </button>

          <Link to="/" className="font-serif text-xl font-bold sm:text-2xl" style={{ color: '#FCD34D' }}>
            The Little Stand That Could
          </Link>
        </div>

        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-semibold text-white transition-colors hover:text-pink-400"
              style={{ '--tw-text-opacity': 1 }}
              onMouseEnter={(e) => (e.target.style.color = '#E84C89')}
              onMouseLeave={(e) => (e.target.style.color = '#fff')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm font-bold text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col gap-3 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-white transition-colors"
              onMouseEnter={(e) => (e.target.style.color = '#E84C89')}
              onMouseLeave={(e) => (e.target.style.color = '#fff')}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Nav
