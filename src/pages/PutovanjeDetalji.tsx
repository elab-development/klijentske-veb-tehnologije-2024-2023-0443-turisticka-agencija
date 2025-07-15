import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Putovanje } from '../models/Putovanje'
import { Recenzija } from '../models/Recenzija'
import axios from 'axios'
import NavBar from '../components/NavBar'
import '../css/putovanjeDetalji.css'


function PutovanjeDetalji() {
    const {id} = useParams();
    const [putovanje, setPutovanje] = useState<Putovanje | null>(null);
    const [recenzije, setRecenzije] = useState<Recenzija[]>([]);

    const [trenutnaSlika, setTrenutnaSlika] = useState(0)

    const [dodavanje, setDodavanje] = useState(false);
    const [ime, setIme] = useState('');
    const [komentar, setKomentar] = useState('');
    const [ocena, setOcena] = useState(5);
    const [prosecnaOcena, setProsecnaOcena] = useState<number>(0);

    const izracunajProsecnuOcenu = (recenzije: Recenzija[]) => {
        if(recenzije.length === 0) return 0;
        const suma = recenzije.reduce((acc, r) => acc + r.ocena, 0);
        return +(suma / recenzije.length).toFixed(2);
    }

    useEffect(() => {
        const sacuvanoIme = localStorage.getItem('imePrezime');
        if(sacuvanoIme) {
            setIme(sacuvanoIme);
        }
    }, [])

    interface Podaci {
        destinacije: Record<string, Putovanje>;
    }


    useEffect(() => {
        sessionStorage.setItem('poslednjaStranica', window.location.pathname);

        if (!id) return;
        const idNum = Number(id);
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
            axios.get<Recenzija[]>('/recenzije.json').then(res => {
                const filtrirane = res.data.filter(r => r.idPutovanja === idNum);
                setRecenzije(filtrirane);
                setProsecnaOcena(izracunajProsecnuOcenu(filtrirane));
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

    const prikaziZvezdice = (ocena: number) => (
        <>
            {'★'.repeat(ocena)}
            {'☆'.repeat(5-ocena)}
        </>
    )

    const handleDodajRecenziju = (e: React.FormEvent) => {
        e.preventDefault();

        if(ime.trim() === '' || komentar.trim() === ''){
            alert("Popunite sva polja!");
            return;
        }

        const novaRecenzija: Recenzija = {
            idPutovanja: Number(id),
            korisnik: ime,
            komentar: komentar,
            ocena: ocena,
            datum: new Date().toLocaleDateString()
        };

        setRecenzije(prev => {
            const noveRecenzije = [...prev,novaRecenzija];
            setProsecnaOcena(izracunajProsecnuOcenu(noveRecenzije));
            return noveRecenzije;
        });
        setIme('');
        setKomentar('');
        setOcena(5);
        setDodavanje(false);
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

            
            <div className='destinacija-recenzije'>
                <div className='recenzije-header'>
                    <h2>Recenzije</h2>
                    {prosecnaOcena > 0 && (
                        <p className='prosecna-ocena'>{prosecnaOcena}★</p>
                    )}
                </div>
                {recenzije.length === 0 && <p>Još nema recenzija za ovu destinaciju.</p>}

                {recenzije.map((r,i) => (
                    <div key={i} className='destinacija-recenzija'>
                        <strong>{r.korisnik}</strong> - {prikaziZvezdice(r.ocena)}
                        <p>"{r.komentar}"</p>
                        <small>{r.datum}</small>
                    </div>
                ))}

                {!dodavanje && (
                    <button className='dodaj-recenziju-dugme' onClick={() => setDodavanje(true)}>
                        ➕ Dodaj recenziju
                    </button>
                )}

                {dodavanje && (
                    <form className='forma-recenzija' onSubmit={handleDodajRecenziju}>
                        <input type="text" placeholder='Unesite Vaše ime' value={ime} onChange={e => setIme(e.target.value)} required/>
                        <textarea placeholder='Unesite Vaš komentar' value={komentar} onChange={e => setKomentar(e.target.value)} required/>
                        <input type="number" min={1} max={5} value={ocena} onChange={e => setOcena(+e.target.value)} required/>
                        <button type='submit'>Pošalji recenziju</button>
                        <button type='button' onClick={() => setDodavanje(false)}>Otkaži</button>
                    </form>
                )}
            </div>
            
            
        </div>
    </>
  )
}

export default PutovanjeDetalji