import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Story() {
  return (
    <div style={{ backgroundColor: '#081A33', color: '#FFF7E5' }}>
      <Nav />

      <section className="w-full" style={{ backgroundColor: '#081A33' }}>
        <div
          className="responsive-container responsive-text-section text-center"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 3vw, 2rem)' }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: '#FCD34D' }}>
            Our story
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl" style={{ color: '#FFF7E5' }}>
            How The Little Stand That Could Was Born
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8" style={{ color: '#E8D8B0' }}>
            A family story rooted in faith, service, and a simple stand that became a blessing for our community.
          </p>
          <img src="/photos/event.jpg" alt="Community event" style={{ width: '100%', borderRadius: '8px', marginTop: '2rem', marginBottom: '2rem' }} />
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: '#0E264C' }}>
        <div
          className="responsive-container responsive-text-section"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 3vw, 2rem)' }}
        >
          <div className="space-y-10">
            <article>
              <h2 className="font-serif text-3xl font-bold" style={{ color: '#FFF7E5' }}>
                Family origins
              </h2>
              <p className="mt-4 max-w-2xl leading-8" style={{ color: '#E8D8B0' }}>
                We started as a family standing around a folding table with mason jars, smiles, and a goal.
                It was not just a lemonade stand — it was a shared dream, a way to be together, to hustle
                together, and to build something beautiful with our own hands.
              </p>
            </article>

            <article>
              <h2 className="font-serif text-3xl font-bold" style={{ color: '#FFF7E5' }}>
                Finding faith
              </h2>
              <p className="mt-4 max-w-2xl leading-8" style={{ color: '#E8D8B0' }}>
                Along the way, Jesus met our family right where we were. Faith changed the way we saw our
                business, from making money to making a difference. We learned that the best serving is
                loving well, and that every cup of lemonade can carry a message of hope.
              </p>
            </article>

            <article>
              <h2 className="font-serif text-3xl font-bold" style={{ color: '#FFF7E5' }}>
                Proverbs 11:25 deep dive
              </h2>
              <p className="mt-4 max-w-2xl leading-8" style={{ color: '#E8D8B0' }}>
                "Those who refresh others will be refreshed." For our family, that verse became a promise.
                When we share kindness, faith, and generosity, we are also renewed. Every event we serve is
                an invitation to refresh the people around us and to be refreshed in return.
              </p>
            </article>

            <article>
              <h2 className="font-serif text-3xl font-bold" style={{ color: '#FFF7E5' }}>
                Community mission
              </h2>
              <p className="mt-4 max-w-2xl leading-8" style={{ color: '#E8D8B0' }}>
                Our mission is simple: serve San Antonio with warm hearts, honest drinks, and community-first
                energy. We want every event to feel personal, welcoming, and full of the same care our own
                family would expect.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: '#081A33' }}>
        <div
          className="responsive-container responsive-text-section text-center"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 3vw, 2rem)' }}
        >
          <p className="font-serif text-3xl font-bold" style={{ color: '#FFF7E5' }}>
            Ready to bring our story to your event?
          </p>
          <p className="mx-auto mt-4 max-w-2xl leading-8" style={{ color: '#E8D8B0' }}>
            We love serving San Antonio with family-first energy, faith-inspired values, and a heart for hospitality.
          </p>
          <Link
            to="/events"
            className="mt-8 inline-flex rounded-full px-10 py-4 text-sm font-bold tracking-wide transition hover:opacity-90"
            style={{ backgroundColor: '#FCD34D', color: '#081A33' }}
          >
            Book Us For Your Event
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Story
