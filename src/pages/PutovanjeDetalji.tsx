import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Putovanje } from '../models/Putovanje'
import axios from 'axios'
import NavBar from '../components/NavBar'
import '../css/putovanjeDetalji.css'

function PutovanjeDetalji() {
    const {id} = useParams();
    const [putovanje, setPutovanje] = useState<Putovanje | null>(null);

    const [trenutnaSlika, setTrenutnaSlika] = useState(0)

    interface Podaci {
        destinacije: Record<string, Putovanje>;
    }

    useEffect(() => {
        if (!id) return;
        axios.get<Podaci>('/podaci.json')
            .then(res => {
                const nizPutovanja = Object.values(res.data.destinacije);
                const idNum = Number(id);
                const odabrano = nizPutovanja.find(p => p.id === idNum) ?? null;

                if(odabrano){
                    odabrano.izracunajCenu = () => {
                        let novaCena = odabrano.cena;
                        if (odabrano.lastMinute) novaCena += 30;
                        if (odabrano.naAkciji) novaCena += 15;
                        return novaCena
                    }
                }

                setPutovanje(odabrano);
            })
    }, [id]);

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
                    <div className='cena-oznaka'>
                        <p className='cene'><strong>Cena od: </strong>
                            {(putovanje.lastMinute || putovanje.naAkciji) ? (
                                <>
                                    <span className='stara-cena'>{putovanje.izracunajCenu?.()}€</span> 
                                    <span className='nova-cena'>{putovanje.cena}€</span>
                                </>
                            ) : (
                                <span className='nova-cena'>{putovanje.cena}€</span>
                            )} 
                        </p>
                        {putovanje.lastMinute && <p className='hit-ponude'><strong>Last Minute ponuda!</strong></p>}
                        {putovanje.naAkciji && <p className='hit-ponude'><strong>Na akciji!</strong></p>}
                    </div>
                    <div className='detalji-termini'>
                        {putovanje.datumi.map((datum, i) =>(
                            <span key={i} className='detalji-termin'>{datum}</span>
                        ))}
                    </div>
                    <Link to='/Kontakt' state={{naziv: putovanje.naziv, cena: putovanje.cena, termini: putovanje.datumi}} className='upit-dugme'>POŠALJI UPIT</Link>
                    
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