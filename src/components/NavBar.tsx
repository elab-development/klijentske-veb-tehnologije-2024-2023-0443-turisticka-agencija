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
            {menuOpen ? '✕' : (
              <>
              <span className='line'></span>
              <span className='line'></span>
              <span className='line'></span>  
              </>
            )}      
            </button>

          <div className='right-part'>
            <div className='links'>
              <a href='#'>Početna</a>
              <a href='#'>Putovanja</a>
              <a href='#'>Kontakt</a>
              <a href='#'>Moj Profil</a>
              <a href='#'>Registracija</a>
            </div>
          </div>

          {menuOpen &&(
            <div className='mobile-menu'>
              <ul className='mobile-links'>
                <li><a href="#" onClick={() => setMenuOpen(false)}>Početna <span>&rsaquo;</span></a></li>
                <li><a href="#" onClick={() => setMenuOpen(false)}>Putovanja <span>&rsaquo;</span></a></li>
                <li><a href="#" onClick={() => setMenuOpen(false)}>Kontakt <span>&rsaquo;</span></a></li>
                <li><a href="#" onClick={() => setMenuOpen(false)}>Moj Profil <span>&rsaquo;</span></a></li>
                <li><a href="#" onClick={() => setMenuOpen(false)}>Registracija <span>&rsaquo;</span></a></li>
              </ul>
            </div>

          )}

        </div>
      </div>
  )
}

export default NavBar

/*

*/