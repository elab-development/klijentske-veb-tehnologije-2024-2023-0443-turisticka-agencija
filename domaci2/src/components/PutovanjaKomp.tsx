import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../css/putovanjaKomp.css'
import PutovanjaKart from './PutovanjaKart'
import { Putovanje } from '../models/Putovanje'
import axios from 'axios'

function PutovanjaKomp() {
    const [search, setSearch] = useState('');
    const [izabraneDrzave, setIzabraneDrzave] = useState<string[]>([]);
    const [izabraniHit, setIzabaniHit] = useState<string[]>([]);
    const [trenutnaStrana, setTrenutnaStrana] = useState(1);
    const [putovanja, setPutovanja] = useState<Putovanje[]>([]);
    
    const location = useLocation();
    const drzavaSaPocetne = location.state?.drzava;

    interface Podaci {
        destinacije: Record<string, Putovanje>;
    }

    useEffect(() => {
        axios.get<Podaci>('/podaci.json')
            .then(res => {
                const nizPutovanja = Object.values(res.data.destinacije);
                setPutovanja(nizPutovanja);
            })
            .catch(err => console.error("Greška prilikom učitavanja podataka:", err));
    }, []);

    useEffect(() => {
        if(drzavaSaPocetne && !izabraneDrzave.includes(drzavaSaPocetne)){
            setIzabraneDrzave([drzavaSaPocetne]);
            
        }
    }, [drzavaSaPocetne]);

    const putovanjaPoStrani = 6;

    const handlePromenaDrzave = (drzava : string) => {
        setIzabraneDrzave(prev => prev.includes(drzava) ? prev.filter(d => d !== drzava) : [...prev, drzava]);
    };

    const handlePromenaHit = (hit : string) => {
        setIzabaniHit(prev => prev.includes(hit) ? prev.filter(h => h !== hit) : [...prev,hit]);
    };

    const filtriranaPutovanja = putovanja.filter(putovanje =>{
        const poklapanjePoSearch = putovanje.naziv.toLowerCase().includes(search.toLowerCase());
        const poklapanjePoDrzavi = izabraneDrzave.length === 0 || izabraneDrzave.includes(putovanje.drzava);
        const poklapanjePoHitu = 
            izabraniHit.length === 0 ||
            (izabraniHit.includes('Last Minute') && putovanje.lastMinute) ||
            (izabraniHit.includes('Akcija') && putovanje.naAkciji);
        
        return poklapanjePoSearch && poklapanjePoDrzavi && poklapanjePoHitu;
    });

    const ukupnoStrana = Math.ceil(filtriranaPutovanja.length / putovanjaPoStrani);
    const razdvojenaPutovanja = filtriranaPutovanja.slice(
        (trenutnaStrana - 1) * putovanjaPoStrani, trenutnaStrana * putovanjaPoStrani
    );

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [trenutnaStrana])

    useEffect(() => {
        setTrenutnaStrana(1);
    }, [search,izabraneDrzave,izabraniHit]);

  return (
    <div className='putovanja-container'>
        <div className='filteri'>
            <h3>Pretražite destinaciju</h3>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Unesite destinaciju'/>
        
            <h3>Države</h3>
            {['Francuska', 'Španija', 'Italija', 'Austrija'].map(drzava => (
                <label key={drzava}>
                    <input type="checkbox" checked={izabraneDrzave.includes(drzava)} onChange={() => handlePromenaDrzave(drzava)}/>{' '}
                    {drzava}
                </label>
            ))}

            <h3>HIT Ponude</h3>
            {['Last Minute', 'Akcija'].map(hit =>(
                <label key={hit}>
                    <input type="checkbox" checked={izabraniHit.includes(hit)} onChange={() => handlePromenaHit(hit)}/>{' '}
                    {hit}
                </label>
            ))}
        </div>

        <div className='putovanja'>
            {razdvojenaPutovanja.map(putovanje => (
                <PutovanjaKart key={putovanje.id} putovanje={putovanje}/>
            ))}

            <div className='razdvajanje-stranica'>
                {Array.from({length: ukupnoStrana}, (_, i) => i + 1).map(broj => (
                    <button 
                        key={broj}
                        className={broj === trenutnaStrana ? 'active' : ''}
                        onClick={() => setTrenutnaStrana(broj)}
                    >
                        {broj}
                    </button>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PutovanjaKomp


