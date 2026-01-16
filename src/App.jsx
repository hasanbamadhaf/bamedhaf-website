import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import CargoServices from './pages/CargoServices'
import PassengerTrips from './pages/PassengerTrips'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cargo" element={<CargoServices />} />
          <Route path="/travel" element={<PassengerTrips />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App
