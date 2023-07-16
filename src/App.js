import React from 'react'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './pages/AboutUs/AboutUs'
import HomePage from './pages/HomePage/HomePage'
import ContactUs from './pages/ContactUs/ContactUs'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App