import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Student Reviews</li>
      </ul>
    </div>
  )
}

export default Navbar
