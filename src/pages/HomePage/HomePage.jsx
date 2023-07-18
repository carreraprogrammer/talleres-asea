import React from 'react'
import Header from '../../containers/Header/Header'
import Projects from '../../containers/ProjectsGallery/ProjectsGallery'
import AboutAbstract from '../../components/AboutAbstract/AboutAbstract'
import ServicesAbstract from '../../components/ServicesAbstract/ServicesAbstract'
import './HomePage.css'

const HomePage = () => {
  return (
  <div className='homeContainer'>
    <Header />
    <AboutAbstract />
    <Projects />
    <ServicesAbstract />
  </div>  
  )
}

export default HomePage