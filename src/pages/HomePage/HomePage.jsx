import React from 'react';
import Header from '../../containers/Header/Header';
import Projects from '../../containers/ProjectsGallery/ProjectsGallery';
import AboutAbstract from '../../components/AboutAbstract/AboutAbstract';
import ServicesAbstract from '../../components/ServicesAbstract/ServicesAbstract';
import Form from '../../containers/Form/Form';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Footer from '../../components/Footer/Footer';
import ProductsGallery from '../../containers/ProductsGallery/ProductsGallery';

import './HomePage.css';

const HomePage = () => {
  const formFields = [
    { name: 'name', label: 'Nombre', type: 'text' },
    { name: 'phone', label: 'Teléfono', type: 'tel' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'message', label: 'Mensaje', type: 'textarea' },
  ];

  return (
    <div className="homeContainer">
      <Header />
      <AboutAbstract />
      <Projects />
      <ServicesAbstract />
      <ProductsGallery />
      <Form
        subTitle="CONTACTO"
        title="Sientase Libre De contactarnos"
        fields={formFields}
        submitButtonText="ENVIA TU MENSAJE"
      />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default HomePage;
