import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import PrivacyPolicy from './pages/PrivacyPolicy';
import PriceHistory from './pages/PriceHistory';


const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
          <Route path="/historia-cen" element={<PriceHistory />} />
        </Routes>
      </Router>
    </>
  )
}

export default App