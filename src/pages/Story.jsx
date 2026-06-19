import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const storyPhotos = [
  { src: '/photos/stand.jpg', alt: 'The stand setup' },
  { src: '/photos/social_event.jpg', alt: 'Community event' },
  { src: '/photos/event.jpg', alt: 'Event' },
  { src: '/photos/drink_1.jpg', alt: 'Fresh lemonade' },
  { src: '/photos/drink_2_background.jpg', alt: 'Lemonade drink' },
  { src: '/photos/drink_3_background.jpg', alt: 'Pink lemonade' },
  { src: '/photos/drink_4_corporate.jpg', alt: 'Corporate event' },
  { src: '/photos/header.jpg', alt: 'Event header' },
  { src: '/photos/logo.jpg', alt: 'Logo' },
  { src: '/photos/graphic.jpg', alt: 'Branding' },
  { src: '/photos/design.jpg', alt: 'Design element' },
]

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
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: '#102B57' }}>
        <div
          className="responsive-container responsive-text-section"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 3vw, 2rem)' }}
        >
          <div
            className="mx-auto"
            style={{
              maxWidth: '900px',
              backgroundColor: 'rgba(0,0,0,0.35)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '14px',
              padding: 'clamp(1rem, 3vw, 2rem)',
            }}
          >
            <h2 className="font-serif text-2xl font-bold sm:text-3xl" style={{ color: '#FFF7E5' }}>
              Where Purpose Took Root
            </h2>
            <div className="mt-4 space-y-4 text-base leading-8" style={{ color: '#E8D8B0' }}>
              <p>
                We started with a simple lemonade stand and a dream. What began as a small family hustle quickly
                became something much bigger. Along the way, we found faith, community, and purpose.
              </p>
              <p>
                Today, The Little Stand That Could is a family-owned business serving fresh-squeezed lemonade made
                with real fruit and real ingredients. No syrups. No shortcuts.
              </p>
              <p>
                More than lemonade, our mission is to create a place where people can gather, connect, and experience
                the love of Jesus through community, kindness, and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: '#0E264C' }}>
        <div
          className="responsive-container responsive-card-container"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 4vw, 2rem)' }}
        >
          <h2 className="text-center font-serif text-2xl font-bold sm:text-3xl" style={{ color: '#FFF7E5' }}>
            Moments From Our Journey
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {storyPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg transition duration-300 hover:shadow-2xl"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  style={{ minHeight: '240px' }}
                />
              </figure>
            ))}
          </div>
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
