import React from 'react'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './pages/AboutUs/AboutUs'
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutUs />
      <ContactUs />
    </div>
  )
}

export default App