import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { flavors, addOns } from '../data/menu'

function Menu() {
  return (
    <div style={{ backgroundColor: '#FFFBEB' }}>
      <Nav />
      <section className="w-full" style={{ backgroundColor: '#0B1F3A' }}>
        <div
          className="responsive-container responsive-hero text-center"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1.5rem, 5vw, 3rem)' }}
        >
          <h1 className="font-serif text-4xl font-bold sm:text-5xl" style={{ color: '#FFFBEB' }}>
            11 Fresh Flavors
          </h1>
          <p className="mt-3 text-lg font-semibold" style={{ color: '#FCD34D' }}>
            No Syrups Ever
          </p>
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: '#FFFBEB' }}>
        <div
          className="responsive-container responsive-card-container"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 4vw, 2rem)' }}
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {flavors.map((flavor, index) => (
              <div
                key={flavor.id}
                className="rounded-xl border-2 bg-white p-5 text-center shadow-sm transition-transform hover:scale-105"
                style={{ borderColor: index % 2 === 0 ? '#E84C89' : '#FCD34D' }}
              >
                <p className="text-base font-bold" style={{ color: '#0B1F3A' }}>
                  {flavor.name}
                </p>
                <p className="mt-2 text-xl font-bold" style={{ color: '#FCD34D' }}>
                  ${flavor.price.toFixed(2)}
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
          <h2 className="text-center font-serif text-2xl font-bold sm:text-3xl" style={{ color: '#0B1F3A' }}>
            Add-Ons
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md sm:mx-auto">
            {addOns.map((addOn) => (
              <div
                key={addOn.id}
                className="rounded-xl border-2 bg-white p-5 text-center shadow-sm transition-transform hover:scale-105"
                style={{ borderColor: '#E84C89' }}
              >
                <p className="text-base font-bold" style={{ color: '#0B1F3A' }}>
                  {addOn.name}
                </p>
                <p className="mt-2 text-xl font-bold" style={{ color: '#FCD34D' }}>
                  +${addOn.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: '#FFFBEB' }}>
        <div
          className="responsive-container responsive-text-section flex justify-center"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 3vw, 2rem)' }}
        >
          <Link
            to="/order"
            className="w-full rounded-lg px-8 py-3 text-center text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
            style={{ backgroundColor: '#E84C89', color: '#FFFBEB' }}
          >
            Order Online
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Menu
