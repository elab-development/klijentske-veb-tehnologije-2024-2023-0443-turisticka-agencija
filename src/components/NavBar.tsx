import React, { use, useEffect, useState } from 'react';
import "../css/navbar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
      <div className={`NavContainer ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className='NavBar'>

          <div className='left-part'>
            <p className='Logo'>GoTravel</p>
          </div>
          
          <button className='burger' onClick={toggleMenu}>
              <span className='line'></span>
              <span className='line'></span>
              <span className='line'></span>
            </button>

          <div className={`right-part ${menuOpen ? 'show' : ''}`}>
            <div className='links'>
              <a href='#'>Početna</a>
              <a href='#'>Putovanja</a>
              <a href='#'>Kontakt</a>
              <a href='#'>Moj Profil</a>
              <a href='#'>Registracija</a>
            </div>
          </div>

        </div>
      </div>
  )
}

export default NavBar

