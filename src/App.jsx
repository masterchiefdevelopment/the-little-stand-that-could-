import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { CartProvider } from './CartContext'
import { AuthProvider } from './context/AuthContext'
import CartButton from './components/CartButton'
import ProtectedRoute from './components/ProtectedRoute'
import VineAnimation from './components/VineAnimation'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Location from './pages/Location'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import Story from './pages/Story'
import Test from './pages/Test'
import Account from './pages/Account'
import Admin from './pages/Admin'
import WhyCompaniesChooseUs from './pages/WhyCompaniesChooseUs'
import CommunityImpact from './pages/CommunityImpact'
import UpcomingEvents from './pages/UpcomingEvents'
import Reviews from './pages/Reviews'

function AppContent() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <VineAnimation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/location" element={<Location />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/why-companies-choose-us" element={<WhyCompaniesChooseUs />} />
        <Route path="/community-impact" element={<CommunityImpact />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/story" element={<Story />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </VineAnimation>
  )
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <AppContent />
          <CartButton />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App