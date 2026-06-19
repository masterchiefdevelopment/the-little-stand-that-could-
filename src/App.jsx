import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VineAnimation from './components/VineAnimation'
import Home from './pages/Home'
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

function App() {
  return (
    <BrowserRouter>
      <VineAnimation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/location" element={<Location />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/why-companies-choose-us" element={<WhyCompaniesChooseUs />} />
          <Route path="/community-impact" element={<CommunityImpact />} />
          <Route path="/story" element={<Story />} />
          <Route path="/test" element={<Test />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </VineAnimation>
    </BrowserRouter>
  )
}

export default App
