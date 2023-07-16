import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { PiSquaresFourFill } from 'react-icons/pi';
import { CgCloseR } from 'react-icons/cg';
import { LuInstagram } from 'react-icons/lu';
import { LuFacebook } from 'react-icons/lu';
import { LuLinkedin } from 'react-icons/lu';
import { LuYoutube } from 'react-icons/lu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navContainer'>
      <NavLink className='mobile' to="/" onClick={() => setShowMenu(false)}>
        Logo
      </NavLink>
      <div className={showMenu ? 'navBar show' : 'navBar not-show'}>
        <ul className="navBarLinks">
          <li className='navLink'>
            <NavLink 
              className={({ isActive }) => (isActive ? 'mobile currentPage' : 'mobile')}
              to="/about"
              onClick={handleMenu}
            >
              NOSOTROS
            </NavLink>
            <NavLink 
              className={({ isActive }) => (isActive ? 'pc currentPage' : 'pc')}
              to="/about"
            >
              NOSOTROS
            </NavLink>
          </li>
          <li className='navLink'>
            <NavLink 
              className={({ isActive }) => (isActive ? 'mobile currentPage' : 'mobile')}
              to="/contact"
              onClick={handleMenu}
            >
              CONTACTO
            </NavLink>
            <NavLink 
              className={({ isActive }) => (isActive ? 'pc currentPage' : 'pc')}
              to="/contact"
            >
              CONTACTO
            </NavLink>
          </li>
          <li className='navLink pc'>
            <NavLink 
              className={({ isActive }) => (isActive ? 'mobile currentPage' : 'mobile')}
              to="/"
              onClick={handleMenu}
            >
              LOGO
            </NavLink>
            <NavLink 
              className={({ isActive }) => (isActive ? 'pc currentPage' : 'pc')}
              to="/"
            >
              LOGO
            </NavLink>
          </li>
          <li className='navLink mobile'>
            <NavLink 
              className={({ isActive }) => (isActive ? 'mobile currentPage' : 'mobile')}
              to="/"
              onClick={handleMenu}
            >
              HOME
            </NavLink>
          </li>
          <li className='navLink'>
            <NavLink 
              className={({ isActive }) => (isActive ? 'mobile currentPage' : 'mobile')}
              to="/products"
              onClick={handleMenu}
            >
              PRODUCTOS
            </NavLink>
            <NavLink 
              className={({ isActive }) => (isActive ? 'pc currentPage' : 'pc')}
              to="/products"
            >
              PRODUCTOS
            </NavLink>
          </li>
          <li className='navLink'>
            <NavLink 
              className={({ isActive }) => (isActive ? 'mobile currentPage' : 'mobile')}
              to="/services"
              onClick={handleMenu}
            >
              SERVICIOS
            </NavLink>
            <NavLink 
              className={({ isActive }) => (isActive ? 'pc currentPage' : 'pc')}
              to="/services"
            >
              SERVICIOS
            </NavLink>
          </li>
        </ul>
        <div className="socialMedia">
          <hr className='divider' />
          <div className="socialMediaIcons">
            <a><LuYoutube style={{ color: '#fff' }} /></a>
            <a><LuLinkedin style={{ color: '#fff' }} /></a>
            <a><LuFacebook style={{ color: '#fff' }} /></a>
            <a><LuInstagram style={{ color: '#fff' }} /></a>
          </div>
        </div>
      </div>
      <li className={showMenu ? 'closeBtn show' : 'closeBtn not-show'} style={{ color: '#fff' }} onClick={handleMenu}>
        <CgCloseR />
      </li>
      <li className='burgerMenu mobile' style={{ color: '#293037' }} onClick={handleMenu}>
        MENU <PiSquaresFourFill />
      </li>
    </div>
  );
};

export default Navbar;
