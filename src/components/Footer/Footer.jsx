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
                Servicio 1
              </li>
              <li className="footerListItem">
                Servicio 2
              </li>
              <li className="footerListItem">
                Servicio 3
              </li>
              <li className="footerListItem">
                Servicio 4
              </li>
            </ul>
          </div>
          <div className="footerProductsContainer footerPc">
            <h1 className="footerTitle">
              PRODUCTOS
            </h1>
            <ul className="footerList">
              <li className="footerListItem">
                Producto 1
              </li>
              <li className="footerListItem">
                Producto 2
              </li>
              <li className="footerListItem">
                Producto 3
              </li>
              <li className="footerListItem">
                Producto 4
              </li>
              <li className="footerListItem">
                Producto 5
              </li>
              <li className="footerListItem">
                Producto 6
              </li>
              <li className="footerListItem">
                Producto 7
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