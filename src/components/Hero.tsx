import React from 'react'
import '../css/hero.css';
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Kreni na put svojih snova</h1>
          <p>Evropske metropole. Pristupačne cene. Nezaboravna iskustva.</p>
          <Link to='/Putovanja' className="hero-button">Pogledaj ponudu</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero


/*
    proveriti ovde html i css
    da li je navbar kad je fiksiran na ovoj strani normalan zbog velicine slike i paddinga 
    teksta ili je tako namesteno u css-u
    pokusati dodavanje kada se skroluje da se pojavi pozadina u navbaru
    burger
*/