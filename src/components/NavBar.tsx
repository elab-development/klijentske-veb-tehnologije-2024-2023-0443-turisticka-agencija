import React from 'react'
import "../css/navbar.css";
import "../App"
import Putovanja from "../pages/Putovanja"

function NavBar() {
  return (
    <nav>
      <div className='NavContainer'>
        <div className='NavBar'>
          <div className='left-part'>
            <p className='Logo'>GoTravel</p>
            <div className='right-part'>
              <div className='links'>
                <a href='#'>Pocetna</a>
                <a href='#'>Putovanja</a>
                <a href='#'>Kontakt</a>
              </div>
              <div className='sign-in'>
                <a href='#'>Registracija</a>
                <a href='#'>Moj Profil</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

