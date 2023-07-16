import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <ul>
          <li className='navLink'><Link to="/about">Nosotros</Link></li>
          <li className='navLink'><Link to="/contact">Contacto</Link></li>
          <li className='navLink'><Link to="/">Logo</Link></li>
          <li className='navLink'><Link to="/products">Productos</Link></li>
          <li className='navLink'><Link to="/services">Servicios</Link></li>
       </ul>
    </div>
  )
}

export default Navbar;