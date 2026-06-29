import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { useAuth } from '../context/AuthContext'

function Login() {
  const { signIn, user, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const from = location.state?.from?.pathname || '/account'

  useEffect(() => {
    if (!authLoading && user) {
      navigate('/account', { replace: true })
    }
  }, [authLoading, navigate, user])

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setError('')

    const { error: authError } = await signIn(email, password)

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    navigate(from, { replace: true })
  }

  return (
    <div className="min-h-screen bg-[#FFF7E5]">
      <Nav />

      <main className="mx-auto flex w-full max-w-md flex-col px-4 py-16">
        <section className="rounded-3xl border-2 border-[#081A33] bg-white p-6 shadow-lg sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#E84C89]">Welcome back</p>
          <h1 className="mt-3 font-serif text-3xl font-black text-[#081A33]">Log In</h1>
          <p className="mt-2 text-sm text-[#333]">Use your email and password to access your account.</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-bold text-[#081A33]" htmlFor="login-email">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border-2 border-[#081A33] bg-[#FFFBF0] px-4 py-3 text-[#081A33] outline-none transition focus:border-[#FCD34D]"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#081A33]" htmlFor="login-password">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full border-2 border-[#081A33] bg-[#FFFBF0] px-4 py-3 text-[#081A33] outline-none transition focus:border-[#FCD34D]"
                required
              />
            </div>

            {error ? <p className="text-sm font-bold text-[#C62828]">{error}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#FCD34D] px-6 py-3 text-sm font-black text-[#081A33] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-[#333]">
            Need an account?{' '}
            <Link to="/signup" className="font-bold text-[#081A33] underline decoration-[#E84C89] underline-offset-4">
              Sign up
            </Link>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Login