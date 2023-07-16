import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    console.log(showMenu);
  };

  return (
    <div className='navContainer'>
      <Link to="/" onClick={() => setShowMenu(false)}>
        Logo
      </Link>
      <div className={showMenu ? 'navBar show' : 'navBar not-show'}>
        <ul className="navBarLinks">
          <li className='navLink' onClick={handleMenu}>
            <Link style={{ color: '#fff' }} to="/about">
              Nosotros
            </Link>
          </li>
          <li className='navLink' onClick={handleMenu}>
            <Link style={{ color: '#fff' }} to="/contact">
              Contacto
            </Link>
          </li>
          <li className='navLink pc'>
            <Link style={{ color: '#fff' }} to="/">
              Logo
            </Link>
          </li>
          <li className='navLink mobile' onClick={handleMenu}>
            <Link style={{ color: '#fff' }} to="/">
              Home
            </Link>
          </li>
          <li className='navLink' onClick={handleMenu}>
            <Link style={{ color: '#fff' }} to="/products">
              Productos
            </Link>
          </li>
          <li className='navLink' onClick={handleMenu}>
            <Link style={{ color: '#fff' }} to="/services">
              Servicios
            </Link>
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
      <li className='burgerMenu' onClick={handleMenu}>
        MENU <PiSquaresFourFill />
      </li>
    </div>
  );
};

export default Navbar;
