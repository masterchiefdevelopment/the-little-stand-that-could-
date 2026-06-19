import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import socialEventPhoto from '/photos/social_event.jpg'

function Story() {
  return (
    <div style={{ backgroundColor: '#081A33', color: '#FFF7E5' }}>
      <Nav />

      <section className="w-full" style={{ backgroundColor: '#081A33' }}>
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 text-center">
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

      <section className="w-full" style={{ backgroundColor: '#0E264C' }}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
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

          <div className="space-y-8">
            <img
              src={socialEventPhoto}
              alt="Community gathering"
              style={{ width: '100%', borderRadius: '8px', marginTop: '1.5rem' }}
            />

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20">
              <div className="rounded-3xl bg-[#112B58] p-6 text-center">
                <div className="mx-auto mb-6 h-64 rounded-3xl border-2 border-dashed border-white/30 bg-white/5 flex items-center justify-center">
                  <span className="text-sm uppercase tracking-[0.3em] text-white/60">
                    Family photo placeholder
                  </span>
                </div>
                <p className="text-base leading-7 text-[#D9D1B2]">
                  A warm family photo will go here. For now, this space holds our story and reminds us that every
                  part of our journey is built together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: '#081A33' }}>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 text-center">
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
