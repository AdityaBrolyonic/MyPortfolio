import React from 'react'
import '../Css/Navbar.css'

function Navbar() {
   return (
    <nav className='navbar'>
      <div className='logo'>Aditya Parashar</div>
      <ul className='navLinks'>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar
