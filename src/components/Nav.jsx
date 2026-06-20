import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Order', to: '/order' },
  { label: 'Book Events', to: '/events' },
  { label: 'Location', to: '/location' },
  { label: 'Account', to: '/account' },
]

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: '#081A33' }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Title — centered breathing room on mobile, left on desktop */}
        <Link
          to="/"
          className="font-serif text-lg font-bold tracking-wide sm:text-2xl"
          style={{ color: '#FCD34D' }}
        >
          The Little Stand That Could
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-semibold text-white transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E84C89')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm font-bold text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav className="flex flex-col gap-3 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-white"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E84C89')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
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