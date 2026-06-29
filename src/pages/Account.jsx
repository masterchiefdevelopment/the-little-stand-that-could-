import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { useAuth } from '../context/AuthContext'

function Account() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    await signOut()
    navigate('/login', { replace: true })
  }

  return (
    <div className="min-h-screen bg-[#FFF7E5]">
      <Nav />

      <main className="mx-auto flex w-full max-w-2xl flex-col px-4 py-16">
        <section className="rounded-3xl border-2 border-[#081A33] bg-white p-6 shadow-lg sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#E84C89]">Account</p>
          <h1 className="mt-3 font-serif text-3xl font-black text-[#081A33]">Your Profile</h1>
          <p className="mt-4 text-sm font-bold text-[#333]">Logged in as</p>
          <p className="mt-1 text-lg font-black text-[#081A33]">{user?.email}</p>

          <button
            type="button"
            onClick={handleSignOut}
            className="mt-8 rounded-full bg-[#081A33] px-6 py-3 text-sm font-black text-white transition hover:opacity-90"
          >
            Sign Out
          </button>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Account
