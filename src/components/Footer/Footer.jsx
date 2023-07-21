import React from 'react'
import './Footer.css'
import logo from '../../assets/ASEA_logo.png'
import { LuInstagram } from 'react-icons/lu';
import { LuFacebook } from 'react-icons/lu';
import { LuLinkedin } from 'react-icons/lu';
import { LuYoutube } from 'react-icons/lu';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footerFirstSection">
          <div className="footerLogoContainer">
            <img src={logo} alt="footerLogo" className="footerLogo" />
          </div>
          <div className="footerSocialContainer">
            <LuYoutube  className="footerSocialIcons"/>
            <LuLinkedin className="footerSocialIcons"/>
            <LuFacebook className="footerSocialIcons" />
            <LuInstagram className="footerSocialIcons" />
          </div>
        </div>
        <div className="footerContainer">
          <div className="footerAboutContainer footerPc">
            <h1 className="footerTitle">
              ACERCA DE
            </h1>
            <ul className="footerList">
              <li className="footerListItem">
                Quienes Somos?
              </li>
            </ul>
          </div>
          <div className="footerServicesContainer footerPc">
            <h1 className="footerTitle">
              SERVICIOS
            </h1>
            <ul className="footerList">
              <li className="footerListItem">
                Fabricación de maquinaria para la construcción 
              </li>
              <li className="footerListItem">
                Fabricación de maquinaria agrícola
              </li>
              <li className="footerListItem">
                Fabricación de compuertas
              </li>
              <li className="footerListItem">
                Fabricación de implementos sanitarios y para acueductos
              </li>
              <li className="footerListItem">
              Fabricación e instalación de estructuras metálicas.
              </li>
              <li className="footerListItem">
                Fabricación, instalación y montajes industriales de puentes carreteros y peatonales
              </li>
            </ul>
          </div>
          <div className="footerProductsContainer footerPc">
            <h1 className="footerTitle">
              PRODUCTOS
            </h1>
            <ul className="footerList">
              <li className="footerListItem">
                Mezcladoras
              </li>
              <li className="footerListItem">
                Plumas Grúas
              </li>
              <li className="footerListItem">
                Cortadoras De Concreto
              </li>
              <li className="footerListItem">
                Reglas Vibratorias,
              </li>
              <li className="footerListItem">
                Maquinaria Agrícola
              </li>
              <li className="footerListItem">
                Compuertas
              </li>
              <li className="footerListItem">
                Implementos Sanitarios y Para Acueductos
              </li>
            </ul>
          </div>
          <div className="footerLocationContainer">
            <h1 className="footerTitle">
              LOCACION
            </h1>
            <p className="footerParagraph">
              Carrera 19 No. 22B-03 INT 
            </p>
          </div>
          <div className="footerContactContainer">
            <h1 className="footerTitle">
              CONTACTO
            </h1>
            <p className="footerParagraph">
              Tel. 7212449 - 720 3488
              <br />Celular 3154087386
            </p>
          </div>      
        </div>
      </div>
      <div className="footerCopyWrite">
        <hr></hr>
        <div className="footerCopyWriteContainer">
          <p>©carreraprogrammer   .   AllrightReserved   .   Design by Ali Abbas</p>
          <div className="footerSocialContainerPc footerPc">
            <LuYoutube  className="footerSocialIcons"/>
            <LuLinkedin className="footerSocialIcons"/>
            <LuFacebook className="footerSocialIcons" />
            <LuInstagram className="footerSocialIcons" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer