function VIPSignup() {
  return (
    <section className="w-full" style={{ backgroundColor: '#FFFBEB' }}>
      <div className="mx-auto max-w-2xl px-4 py-10 text-center sm:px-6">
        <h3 className="font-serif text-2xl font-bold" style={{ color: '#0B1F3A' }}>
          Join Our VIP List
        </h3>
        <p className="mt-2 text-sm" style={{ color: '#0B1F3A' }}>
          Get first dibs on new flavors, pop-up locations, and family events.
        </p>
        <form className="mt-5 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full rounded-lg border px-4 py-3 text-sm sm:flex-1"
            style={{ borderColor: 'rgba(11,31,58,0.2)', color: '#0B1F3A' }}
          />
          <button
            type="submit"
            className="w-full rounded-lg px-6 py-3 text-sm font-bold transition-colors hover:opacity-90 sm:w-auto"
            style={{ backgroundColor: '#D946A6', color: '#FFFBEB' }}
          >
            Sign Me Up
          </button>
        </form>
      </div>
    </section>
  )
}

export default VIPSignup
