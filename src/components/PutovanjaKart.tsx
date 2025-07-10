import React from 'react'
import { Putovanje } from './PutovanjaKomp'
import '../css/putovanjaKomp.css'
import { Link } from 'react-router-dom'

interface Props {
    putovanje: Putovanje;
}

const PutovanjaKart: React.FC<Props> = ({putovanje}) => {
    return(
        <div className='kartica'>
            <img src={putovanje.slika} alt={putovanje.naziv} className='slika'/>
            <div className='oznaka-drzava'>{putovanje.drzava}</div>
            <h3 className='naslov'>{putovanje.naziv}</h3>
            <p className='termini-labela'>Termini putovanja:</p>
            <div className='termini'>
                {putovanje.datumi.map((datum, i) => (
                    <span key={i} className='termin'>{datum}</span>
                ))}
            </div>
            <p className='cena'>od {putovanje.cena}€</p>
            <div className='dugmici'>
                <Link to='/Kontakt' className='dugme tamno'>POŠALJI UPIT</Link>
                <Link to='/' className='dugme svetlo'>SAZNAJ VIŠE</Link>
            </div>
        </div>
    )
}

export default PutovanjaKart