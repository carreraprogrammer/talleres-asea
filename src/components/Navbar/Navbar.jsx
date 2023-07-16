import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { PiSquaresFourFill} from 'react-icons/pi'
import { CgCloseR } from 'react-icons/cg'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
    console.log(showMenu)
  }

  return (
    <div className='navContainer'>
      <li className='logo'><Link to="/">Logo</Link></li> 
      <ul className={showMenu ? 'navBar show' : 'navBar not-show'}>
         <li className='navLink' onClick={handleMenu}><Link to="/about">Nosotros</Link></li>
         <li className='navLink' onClick={handleMenu}><Link to="/contact">Contacto</Link></li>
         <li className='navLink pc'><Link to="/">Logo</Link></li>
         <li className='navLink mobile'onClick={handleMenu} ><Link to="/">Home</Link></li>
         <li className='navLink' onClick={handleMenu}><Link to="/products">Productos</Link></li>
         <li className='navLink' onClick={handleMenu}><Link to="/services">Servicios</Link></li>
      </ul>
      <li className={ showMenu ? 'closeBtn show' : 'closeBtn not-show'} onClick={handleMenu}><CgCloseR /></li>
      <li className='burgerMenu' onClick={handleMenu}>MENU <PiSquaresFourFill /></li>
    </div>
  )
}

export default Navbar;