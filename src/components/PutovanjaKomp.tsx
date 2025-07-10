import React, { useState, useEffect } from 'react'
import '../css/putovanjaKomp.css'
import PutovanjaKart from './PutovanjaKart'
import barselona from '../slike/barselona.jpg'
import milano from '../slike/Milano.jpg'
import cinque from '../slike/Cinque.jpg'
import rim from '../slike/Rim.jpg'
import venecija from '../slike/Venecija.jpg'
import bec from '../slike/Bec.jpg'
import valensija from '../slike/Valensija.jpg'
import pariz from '../slike/Pariz.jpg'
import nica from '../slike/Nica.jpg'
import kolmar from '../slike/Kolmar.jpg'

export interface Putovanje{
    id: number;
    naziv: string;
    drzava: string;
    slika: string;
    cena: number;
    datumi: string[];
    lastMinute: boolean;
    naAkciji: boolean;
}

const svaPutovanja: Putovanje[] =[
    {
        id: 1,
        naziv: 'Milano | 5 dana / 2 noćenja',
        drzava: 'Italija',
        slika: milano,
        cena: 159,
        datumi: ['28.08. - 01.09.', '25.09. - 29.09.', '23.10. - 27.10.', '07.11. - 11.11.'],
        lastMinute: false,
        naAkciji: false,
    },
    {
        id: 2,
        naziv: 'Toskana i Cinque Terre | 6 dana / 3 noćenja',
        drzava: 'Italija',
        slika: cinque,
        cena: 169,
        datumi: ['27.08. - 01.09.', '24.09. - 29.09.', '22.10. - 27.10.'],
        lastMinute: false,
        naAkciji: true,
    },
    {
        id: 3,
        naziv: 'Rim | 6 dana / 3 noćenja',
        drzava: 'Italija',
        slika: rim,
        cena: 235,
        datumi: ['22.08. - 27.08.', '30.09. - 05.10.'],
        lastMinute: true,
        naAkciji: false,
    },
    {
        id: 4,
        naziv: 'Severna Italija | 4 dana / 3 noćenja',
        drzava: 'Italija',
        slika: venecija,
        cena: 79,
        datumi: ['22.08. - 25.08.', '19.09. - 22.09.'],
        lastMinute: true,
        naAkciji: false,
    },
    {
        id: 5,
        naziv: 'Beč | 5 dana / 2 noćenja',
        drzava: 'Austrija',
        slika: bec,
        cena: 119,
        datumi: ['21.08. - 25.08.', '25.09. - 29.09.', '16.10. - 20.10.', '08.11. - 12.11.'],
        lastMinute: false,
        naAkciji: false,
    },
    {
        id: 6,
        naziv: 'Barselona | 7 dana / 4 noćenja',
        drzava: 'Španija',
        slika: barselona,
        cena: 399,
        datumi: ['08.08. - 14.08.', '05.09. - 11.09.'],
        lastMinute: true,
        naAkciji: false,
    },
    {
        id: 7,
        naziv: 'Valensija | 9 dana / 6 noćenja',
        drzava: 'Španija',
        slika: valensija,
        cena: 629,
        datumi: ['13.11. - 21.11.'],
        lastMinute: false,
        naAkciji: false,
    },
    {
        id: 8,
        naziv: 'Pariz | 8 dana / 4 noćenja',
        drzava: 'Francuska',
        slika: pariz,
        cena: 319,
        datumi: ['16.08. - 25.08', '10.10. - 17.10.'],
        lastMinute: true,
        naAkciji: true,
    },
    {
        id: 9,
        naziv: 'Nica | 5 dana / 3 noćenja',
        drzava: 'Francuska',
        slika: nica,
        cena: 199,
        datumi: ['01.08. - 05.08.', '15.08. - 19.08.', '22.08. - 26.08.', '03.09. - 07.09.'],
        lastMinute: true,
        naAkciji: false,
    },
    {
        id: 10,
        naziv: 'Kolmar | 6 dana / 4 noćenja',
        drzava: 'Francuska',
        slika: kolmar,
        cena: 279,
        datumi: ['07.11. - 12.11.'],
        lastMinute: false,
        naAkciji: false,
    }
    /*
    {
        id: ,
        naziv: ,
        drzava: ,
        slika: ,
        cena: ,
        datumi: ,
        lastMinute: ,
        naAkciji: ,
    }
    */ 
]

function PutovanjaKomp() {
    const [search, setSearch] = useState('');
    const [izabraneDrzave, setIzabraneDrzave] = useState<string[]>([]);
    const [izabraniHit, setIzabaniHit] = useState<string[]>([]);
    const [trenutnaStrana, setTrenutnaStrana] = useState(1);

    const putovanjaPoStrani = 6;

    const handlePromenaDrzave = (drzava : string) => {
        setIzabraneDrzave(prev => prev.includes(drzava) ? prev.filter(d => d !== drzava) : [...prev, drzava]);
    };

    const handlePromenaHit = (hit : string) => {
        setIzabaniHit(prev => prev.includes(hit) ? prev.filter(h => h !== hit) : [...prev,hit]);
    };

    const filtriranaPutovanja = svaPutovanja.filter(putovanje =>{
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


