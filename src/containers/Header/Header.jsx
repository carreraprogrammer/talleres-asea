import React from 'react';
import './Header.css';
import 'lazysizes'
import videoSource from '../../assets/header_background.mp4'

const Header = () => {
  return (
    <div className="headerContainer lazyload">
      <div className='titlesContainer'>
        <p className='mainTitle'>SOMOS TALLERES ASEA</p>
        <h1 className="headerTitle">Más De 70 Años En La Industria.</h1>
      </div>   
      <video className="galleryVideo lazyload" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
      <p className="headerSubtitle">
        Somos una empresa familiar con más de 70 años de experiencia en la industria de la metalmecánica y la construcción. Durante décadas, hemos
        brindado soluciones innovadoras y de alta calidad a nuestros clientes, estableciendo una reputación sólida y confiable en el mercado.
      </p>
    </div>
  );
};

export default Header;
