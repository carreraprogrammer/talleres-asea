import React from 'react'
import Header from '../../containers/Header/Header'
import Footer from '../../components/Footer/Footer'
import Products from '../../containers/Products/ProductsContainer'
import Projects from '../../containers/Projects/Projects'

const HomePage = () => {
  return (
  <div className='homeContainer'>
    <Header />
    <Products />
    <Projects />
    <Footer />
  </div>  
  )
}

export default HomePage