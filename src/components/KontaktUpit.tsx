import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/kontaktUpit.css'

function KontaktUpit() {
    const location = useLocation();
    const navigate = useNavigate();
    const { naziv, cena, termini } = location.state || {};

    const [brojOsoba, setBrojOsoba] = useState('');
    const [izabraniTermin, setIzabraniTermin] = useState('');
    const [poruka, setPoruka] = useState('');

    const handlePosalji = () => {
      const podaci = {
        naziv,
        cena,
        izabraniTermin,
        brojOsoba,
        poruka
      };
      navigate('/MojProfil', { state: podaci });
    };

  
    return (
    <div className='kontakt-container'>
        <h2>Pošaljite upit</h2>
        <p className='kontakt-info'><strong>Destinacija:</strong>{naziv}</p>
        <p className='kontakt-info'><strong>Cena:</strong>{cena}€</p>

        <label>Broj osoba:</label>
        <input type="number" value={brojOsoba} onChange={e => setBrojOsoba(e.target.value)} />

        <label>Termin:</label>
        <select value={izabraniTermin} onChange={e => setIzabraniTermin(e.target.value)}>
          <option value="">Izaberite termin</option>
          {termini?.map((t: string, i: number) => (
            <option key={i} value={t}>{t}</option>
          ))}
        </select>

        <label>Poruka:</label>
        <textarea rows={5} value={poruka} onChange={e => setPoruka(e.target.value)}/>
        <button onClick={handlePosalji}>Pošalji</button>
    </div>
  )
}

export default KontaktUpit