import { useState } from 'react'
import { supabase } from '../lib/supabase'

function VIPSignup() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error: insertError } = await supabase.from('vip_signups').insert([{ email }])
    setLoading(false)

    if (insertError) {
      setError('Something went wrong. Try again.')
      return
    }

    setEmail('')
    setSubmitted(true)
  }

  return (
    <section className="w-full" style={{ backgroundColor: '#FFFBEB' }}>
      <div className="mx-auto max-w-2xl px-4 py-10 text-center sm:px-6">
        <h3 className="font-serif text-2xl font-bold" style={{ color: '#0B1F3A' }}>
          Join Our VIP List
        </h3>
        <p className="mt-2 text-sm" style={{ color: '#0B1F3A' }}>
          Get first dibs on new flavors, pop-up locations, and family events.
        </p>
        {submitted ? (
          <p className="mt-5 text-sm font-bold" style={{ color: '#0B1F3A' }}>
            You're on the list! 🍋
          </p>
        ) : (
          <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border px-4 py-3 text-sm sm:flex-1"
              style={{ borderColor: 'rgba(11,31,58,0.2)', color: '#0B1F3A' }}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg px-6 py-3 text-sm font-bold transition-colors hover:opacity-90 sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
              style={{ backgroundColor: '#D946A6', color: '#FFFBEB' }}
            >
              {loading ? 'Signing up...' : 'Sign Me Up'}
            </button>
          </form>
        )}
        {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}
      </div>
    </section>
  )
}

export default VIPSignup
