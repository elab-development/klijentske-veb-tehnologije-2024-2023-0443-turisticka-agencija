import React, { use, useEffect, useState } from 'react';
import "../css/navbar.css";
import {Link,useLocation} from 'react-router-dom'

/*
 Imas na novom mejlu kako da dodas vise transparenih
*/

function NavBar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
      <div className={`NavContainer ${isHomePage ? (scrolled ? 'nav-scrolled' : '') : 'nav-scrolled'}`}>
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
              <Link to='/'>Početna</Link>
              <Link to='/Putovanja'>Putovanja</Link>
              <Link to='/Kontakt'>Kontakt</Link>
              <Link to='/MojProfil'>Moj Profil</Link>
              <Link to='/Registracija'>Registracija</Link>
            </div>
          </div>

          {menuOpen &&(
            <div className='mobile-menu'>
              <ul className='mobile-links'>
                <li><Link to='/' onClick={() => setMenuOpen(false)}>Početna <span>&rsaquo;</span></Link></li>
                <li><Link to='/Putovanja' onClick={() => setMenuOpen(false)}>Putovanja <span>&rsaquo;</span></Link></li>
                <li><Link to='/Kontakt' onClick={() => setMenuOpen(false)}>Kontakt <span>&rsaquo;</span></Link></li>
                <li><Link to='/MojProfil' onClick={() => setMenuOpen(false)}>Moj Profil <span>&rsaquo;</span></Link></li>
                <li><Link to='/Registracija' onClick={() => setMenuOpen(false)}>Registracija <span>&rsaquo;</span></Link></li>
              </ul>
            </div>
          )}

        </div>
      </div>
    
  )
}

export default NavBar

