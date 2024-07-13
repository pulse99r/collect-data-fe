import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
   
    <nav className='nav'>
      <p className='logo'>Collect Data</p>
      <ul className='menu'>
        <li className='menu-item'>Data Entry</li>
        <li className='menu-item'>View Users</li>
      </ul>
    </nav>
    
  )
}

export default Nav
