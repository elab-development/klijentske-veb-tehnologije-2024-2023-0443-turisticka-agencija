import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { svaPutovanja } from '../podaci/putovanjaPodaci'
import NavBar from '../components/NavBar'
import '../css/putovanjeDetalji.css'

function PutovanjeDetalji() {
    const {id} = useParams();
    const putovanje = svaPutovanja.find(p => p.id === Number(id));

    const [trenutnaSlika, setTrenutnaSlika] = useState(0);

    if(!putovanje){
        return <p>Putovanje nije pronađeno.</p>
    }

    const slike = putovanje.galerija ?? [putovanje.slika];

    const sledecaSlika = () => {
        setTrenutnaSlika((prev) => (prev+1) % slike.length);
    }

    const prethodnaSlika = () => {
        setTrenutnaSlika((prev) => (prev-1 + slike.length) % slike.length)
    }

  return (
    <>
        <NavBar/>
        <div className='detalji-container'>
            <h1>{putovanje.naziv}</h1>
            <h3 className='podnaslov'>{putovanje.drzava}</h3>

            <div className='galerija-sa-info'>
                <div className='carousel'>
                    <button className='strelica' onClick={prethodnaSlika}>&lsaquo;</button>
                    <img src={slike[trenutnaSlika]} alt={putovanje.naziv} className='slika-galerije' />
                    <button className='strelica' onClick={sledecaSlika}>&rsaquo;</button>
                </div>

                <div className='info-putovanja'>
                    <p><strong>Cena od:</strong> {putovanje.cena}€</p>
                    <div className='detalji-termini'>
                        {putovanje.datumi.map((datum, i) =>(
                            <span key={i} className='detalji-termin'>{datum}</span>
                        ))}
                    </div>
                    <Link to='/Kontakt' state={{naziv: putovanje.naziv, cena: putovanje.cena, termini: putovanje.datumi}} className='upit-dugme'>POŠALJI UPIT</Link>
                    {putovanje.lastMinute && <p><strong>Last Minute ponuda!</strong></p>}
                    {putovanje.naAkciji && <p><strong>Na akciji!</strong></p>}
                </div>
            </div>

            {putovanje.plan && putovanje.dan && (
                <div className='plan-puta'>
                    <h2>Plan puta</h2>
                    <ul>
                        {putovanje.plan.map((opis, i) => (
                            <li key={i}>
                                <span className='dan-naslov'>{putovanje.dan?.[i] ?? `Dan ${i+1}`}</span>
                                <p className='plan-opis'>{opis}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </>
  )
}

export default PutovanjeDetalji