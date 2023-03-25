import React from 'react'
import { useState } from 'react';

const Navbar = () => {
    const [toggleButton, setToggleButton] = useState(false);
  const toggleSwitch = () => {
    toggleButton ? setToggleButton(false) : setToggleButton(true);
  }
  const toggleOff = () => {
    toggleButton ? setToggleButton(false) : setToggleButton(false);
  }
  function scroll(tujuan){
    toggleOff();
    const element = document.getElementById(tujuan);
    if (tujuan == 'project'){
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center'});
    }
    else{
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
    }
  };
  return (
    <nav className='container-nav'>
      <a className='wrapper-logo' href="#">
      <p className='logo-navbar'>
        <span className='kurawal'>{'{'}</span>
        A
        <span className='kurawal'>{'}'}</span>
      </p>
    </a>
    <div>
    <ul className={`container-navitem ${toggleButton ? 'slide' : null}`}>
      <div className="wrapper-navitem">
      <a className='navitem' onClick={() => scroll('home')}>Home</a>
      <a className='navitem' onClick={() => scroll('profil')}>Profil</a>
      <a className='navitem' onClick={() => scroll('project')}>Project</a>
      </div>
    </ul>
    <div className="menu-toggle" onClick={toggleSwitch}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
      </nav>
  )
}

export default Navbar
