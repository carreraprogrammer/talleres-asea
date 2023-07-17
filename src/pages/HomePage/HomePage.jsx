import React from 'react'
import Header from '../../containers/Header/Header'
import Footer from '../../components/Footer/Footer'
import Products from '../../containers/ProductsGallery/ProductsGallery'
import Projects from '../../containers/ProjectsGallery/ProjectsGallery'
import AboutAbstract from '../../components/AboutAbstract/AboutAbstract'
import './HomePage.css'

const HomePage = () => {
  return (
  <div className='homeContainer'>
    <Header />
    <AboutAbstract />
    <Projects />
    <Products />
    <Footer />
  </div>  
  )
}

export default HomePage