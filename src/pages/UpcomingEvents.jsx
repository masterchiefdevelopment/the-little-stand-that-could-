import Nav from '../components/Nav'
import Footer from '../components/Footer'

const upcomingEvents = [
  {
    date: 'June 22',
    name: 'Sunday Funday Market',
    location: 'Brackenridge Park',
    time: '10am–2pm',
  },
  {
    date: 'June 28',
    name: 'Corporate Lunch',
    location: 'Downtown San Antonio',
    time: '11am–2pm',
  },
  {
    date: 'July 5',
    name: 'School Fundraiser',
    location: 'Lincoln High School',
    time: '3pm–6pm',
  },
]

function UpcomingEvents() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-[#f5f0e8]">
      <Nav />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <section className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#FCD34D]">
            Where To Find Us
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Where To Find Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#E9E2D0] sm:text-lg">
            Visit our storefront or catch us at upcoming events.
          </p>
        </section>

        <section className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-[#111827] p-8 shadow-xl shadow-black/20">
            <h2 className="text-3xl font-semibold text-[#FCD34D]">Our Storefront</h2>
            <p className="mt-6 text-lg font-semibold text-[#F5E9D5]">9355 Bandera Rd Ste 120, San Antonio, TX 78250</p>
            <div className="mt-6 space-y-4 text-[#E9E2D0]">
              <p>
                Hours: Mon/Tue Closed | Wed-Thu 12–7PM | Fri-Sat 12–9PM | Sun 12–7PM
              </p>
              <p>Phone: <a href="tel:+12103873016" className="text-[#FCD34D] hover:text-[#E5C326]">(210) 387-3016</a></p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=9355+Bandera+Rd+Ste+120+San+Antonio+TX+78250"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-[#FCD34D] px-6 py-3 text-sm font-semibold text-[#1a1a2e] transition hover:bg-[#e3c30d]"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#111827] p-8 shadow-xl shadow-black/20">
            <h2 className="text-3xl font-semibold text-[#FCD34D]">Upcoming Events</h2>
            <div className="mt-8 space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.date + event.name}
                  className="rounded-3xl border border-white/10 bg-[#0f172a] p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-[#FCD34D]">{event.date}</p>
                      <p className="mt-2 text-2xl font-semibold text-[#F5E9D5]">{event.name}</p>
                      <p className="mt-2 text-sm text-[#d9d4c2]">{event.location}</p>
                      <p className="mt-1 text-sm text-[#d9d4c2]">{event.time}</p>
                    </div>
                    <a
                      href="#"
                      className="inline-flex rounded-full bg-[#FCD34D] px-5 py-3 text-sm font-semibold text-[#1a1a2e] transition hover:bg-[#e3c30d]"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-white/10 bg-[#FCD34D] p-10 text-[#1a1a2e] shadow-xl shadow-black/20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6B7280]">
                Don&apos;t see your event listed?
              </p>
              <p className="mt-3 max-w-2xl text-2xl font-semibold leading-8">
                We&apos;re available for custom bookings and would love to bring The Little Stand to your next gathering.
              </p>
            </div>
            <a
              href="/events"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#1a1a2e] px-8 py-3 text-sm font-semibold text-[#FCD34D] transition hover:bg-[#111227] sm:w-auto"
            >
              Book Your Event
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default UpcomingEvents
