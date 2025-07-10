import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../css/mojProfilUpiti.css'

interface Upit{
    naziv: string;
    cena: number;
    izabraniTermin: string;
    brojOsoba: string;
    poruka: string;
}

function MojProfilUpiti() {
    const location = useLocation();
    const navigate = useNavigate();

    const upit = location.state as Upit | null;
    const [upiti, setUpiti] = useState<Upit[]>(() => {
        const sacuvani = localStorage.getItem('upiti');
        return sacuvani ? JSON.parse(sacuvani) : [];
    })

    useEffect(() => {
        if(upit){
            const noviUpiti = [...upiti, upit];
            setUpiti(noviUpiti);
            localStorage.setItem('upiti', JSON.stringify(noviUpiti));
            navigate('/MojProfil', {replace:true, state: null})
        }
    }, [upit])

    const obrisiUpit = (index: number) => {
        const noviUpiti = [...upiti];
        noviUpiti.splice(index,1);
        setUpiti(noviUpiti);
        localStorage.setItem('upiti', JSON.stringify(noviUpiti));
    }

  return (
    <div className='profil-container'>
        <h2>Moja putovanja:</h2>
        {upiti.length === 0 ? (
            <p>Nema sačuvanih upita.</p>
        ) : (
            <div className='upiti-lista'>
                {upiti.map((u,i) => (
                    <div key={i} className='upit-kartica'>
                        <div className='red'>
                            <strong>{u.naziv}</strong>
                            <span className='cena'>{u.cena}€</span>
                        </div>
                        <div className='red'>
                            <span>Termin: {u.izabraniTermin}</span>
                            <span>Broj osoba: {u.brojOsoba}</span>
                        </div>
                        <p className='poruka'>{u.poruka}</p>
                        <div className='kartica-footer'>
                            <span className='status'>Čeka se odgovor</span>
                            <button onClick={() => obrisiUpit(i)}>Obriši</button>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default MojProfilUpiti