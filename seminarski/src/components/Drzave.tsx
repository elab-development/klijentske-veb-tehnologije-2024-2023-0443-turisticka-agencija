import React from 'react';
import KarticaDrzave from './KarticaDrzave';
import '../css/drzave.css';
import Francuska from '../slike/Francuska.png'
import Spanija from '../slike/Spanija.png'
import Italija from '../slike/Italija.png'
import Austrija from '../slike/Austrija.png'

const drzave = [
    {
        slika: Francuska,
        naziv: 'Francuska',
        link: '/Putovanja'
    },
    {
        slika: Spanija,
        naziv: 'Španija',
        link: '/Putovanja'
    },
    {
        slika: Italija,
        naziv: 'Italija',
        link: '/Putovanja'
    },
    {
        slika: Austrija,
        naziv: 'Austrija',
        link: '/Putovanja'
    }
];

function Drzave() {
  return (
    <section className='drzave-sekcija'>
        <h2 className='naslov-sekcije'>Države koje možete da posetite</h2>
        <div className='drzave-grid'>
            {drzave.map((drzava, index) => (
                <KarticaDrzave 
                    key={index}
                    slika={drzava.slika}
                    naziv={drzava.naziv}
                    link={drzava.link}
                    />
            ))}
        </div>
    </section>
  )
}

export default Drzave