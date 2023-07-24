import React from 'react';
import { BsCheck } from 'react-icons/bs'; // Importa el ícono de react-icons
import './ServicesAbstract.css';

const ServicesAbstract = () => (
  <div className="servicesAbstractContainer">
    <div className="servicesAbstractTitleContainer">
      <h2 className="servicesAbstractTitle">NUESTROS SERVICIOS</h2>
      <h3 className="servicesAbstractSubtitle">NOS ESPECIALIZAMOS EN</h3>
    </div>
    <div className="servicesAbstractListContainer">
      <ul className="servicesAbstractList">
        <li className="servicesAbstractListItem">
          <BsCheck className="checkIcon" />
          <p>
            Fabricación de maquinaria para la construcción
            (mezcladoras, plumas grúas, cortadoras de concreto, reglas vibratorias, entre otros).
          </p>
        </li>
        <li className="servicesAbstractListItem">
          <BsCheck className="checkIcon" />
          <p>Fabricación de maquinaria agrícola</p>
        </li>
        <li className="servicesAbstractListItem">
          <BsCheck className="checkIcon" />
          <p>Fabricación de compuertas</p>
        </li>
        <li className="servicesAbstractListItem">
          <BsCheck className="checkIcon" />
          <p>Fabricación de implementos sanitarios y para acueductos</p>
        </li>
        <li className="servicesAbstractListItem">
          <BsCheck className="checkIcon" />
          <p>Fabricación e instalación de estructuras metálicas.</p>
        </li>
        <li className="servicesAbstractListItem">
          <BsCheck className="checkIcon" />
          <p>
            Construcción y reconstrucción de partes y piezas para maquinaria agrícola,
            industrial y de la construcción.
          </p>
        </li>
        <li className="servicesAbstractListItem">
          <BsCheck className="checkIcon" />
          <p>Fabricación, instalación y montajes industriales de puentes carreteros y peatonales</p>
        </li>
      </ul>
    </div>
  </div>
);

export default ServicesAbstract;
