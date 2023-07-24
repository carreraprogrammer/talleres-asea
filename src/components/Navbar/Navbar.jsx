import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { PiSquaresFourFill } from 'react-icons/pi';
import { CgCloseR } from 'react-icons/cg';
import {
  LuInstagram, LuFacebook, LuLinkedin, LuYoutube,
} from 'react-icons/lu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  // Add this function to handle keyboard events
  const handleMenuKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleMenu();
    }
  };

  return (
    <div className="navContainer">
      <NavLink className="mobile logo" to="/" onClick={() => setShowMenu(false)}>
        <div className="logoContainer" />
      </NavLink>
      <div className={showMenu ? 'navBar show' : 'navBar not-show'}>
        <ul className="navBarLinks">
          <li className="navLink">
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
          <li className="navLink">
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
          <li className="navLink pc">
            {/* Remove the outer NavLink, it's unnecessary */}
            <NavLink to="/" role="link" tabIndex={0}>
              <div className="logoContainer lazyload" />
            </NavLink>
          </li>
          <li className="navLink mobile">
            <NavLink
              className={({ isActive }) => (isActive ? 'mobile currentPage' : 'mobile')}
              to="/"
              onClick={handleMenu}
            >
              HOME
            </NavLink>
          </li>
          <li className="navLink">
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
          <li className="navLink">
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
          <hr className="divider" />
          <div className="socialMediaIcons">
            <div><LuYoutube style={{ color: '#fff' }} /></div>
            <div><LuLinkedin style={{ color: '#fff' }} /></div>
            <div><LuFacebook style={{ color: '#fff' }} /></div>
            <div><LuInstagram style={{ color: '#fff' }} /></div>
          </div>
        </div>
      </div>
      {/* Use a button element instead of anchor */}
      <button
        type="button" // Add type attribute to button element
        className={showMenu ? 'closeBtn show noScroll' : 'closeBtn not-show'}
        style={{ color: '#fff' }}
        onClick={handleMenu}
        onKeyDown={handleMenuKeyPress} // Add keyDown event listener
      >
        <CgCloseR />
      </button>
      <button
        type="button"
        className="burgerMenu mobile"
        style={{ color: '#293037' }}
        onClick={handleMenu}
        onKeyDown={handleMenuKeyPress}
        tabIndex={0}
      >
        MENU
        {' '}
        <PiSquaresFourFill />
      </button>
    </div>
  );
};

export default Navbar;
