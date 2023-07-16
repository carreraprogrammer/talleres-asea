import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <ul>
          <li className='navLink'><Link to="/">Home</Link></li>
          <li className='navLink'><Link to="/about">Nosotros</Link></li>
          <li className='navLink'><Link to="/contact">Contacto</Link></li>
       </ul>
    </div>
  )
}

export default Navbar;