import React from 'react'
import Header from '../../containers/Header/Header'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../containers/Products/Products'
import Projects from '../../containers/Projects/Projects'

export const HomePage = () => {
  return (
  <div className='homeContainer'>
    <Navbar />
    <Header />
    <Products />
    <Projects />
    <Footer />
  </div>  
  )
}
