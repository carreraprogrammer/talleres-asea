import React from 'react';
import './AboutAbstract.css';

const AboutAbstract = () => (
  <div className="aboutAbstractContainer">
    <div className="aboutAbstractTitleContainer">
      <h2 className="aboutAbstractTitle">QUIENES SOMOS</h2>
      <h3 className="aboutAbstractSubtitle">
        Más de 70 Años de Experiencia en la Industria Metalúrgica y Mecánica
      </h3>
    </div>
    <div className="aboutAbstractParagraphContainer">
      <p className="aboutAbstractParagraph">
        Somos una empresa orgullosamente colombiana, nariñense,
        fundada en el año 1946.
        {' '}
      </p>
      <p className="aboutAbstractParagraph">
        {' '}
        Desde entonces, nos hemos enfocado y especializado en los servicios
        de mecánica industrial, torno, fresa, soldadura y fundición de hierro gris, bronce
        y aluminio.
      </p>
      <p className="aboutAbstractParagraph">
        Contamos con un equipo altamente capacitado y tecnología de vanguardia
        para ofrecer soluciones integrales a nuestros clientes.
      </p>
    </div>
  </div>
);

export default AboutAbstract;
