import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/kontaktUpit.css'
import { Upit } from '../models/Upit'

function KontaktUpit() {
    const location = useLocation();
    const navigate = useNavigate();
    const { naziv, cena, termini } = location.state || {};

    const [brojOsoba, setBrojOsoba] = useState('');
    const [izabraniTermin, setIzabraniTermin] = useState('');
    const [poruka, setPoruka] = useState('');
    const [greskaBroj, setGreskaBroj] = useState(false);
    const [greskaTermin, setGreskaTermin] = useState(false);

    const handlePosalji = () => {
      let imaGreske = false;

      if(!brojOsoba){
        setGreskaBroj(true);
        imaGreske = true;
      }

      if(!izabraniTermin){
        setGreskaTermin(true);
        imaGreske = true;
      }

      if(imaGreske) return;

      const upit = new Upit(naziv, cena, izabraniTermin, Number(brojOsoba), poruka);
      navigate('/MojProfil', { state: upit });
    };

  
    return (
    <div className='kontakt-container'>
        <h2>Pošaljite upit</h2>
        <p className='kontakt-info'><strong>Destinacija:</strong>{naziv}</p>
        <p className='kontakt-info'><strong>Cena:</strong>{cena}€</p>

        <label>
          Broj osoba:
          {greskaBroj && <span className='greska'>(obavezno polje)</span>}
        </label>
        <input type="number" value={brojOsoba} onChange={e => {setBrojOsoba(e.target.value); if (e.target.value) setGreskaBroj(false)}} min={1}/>

        <label>
          Termin:
          {greskaTermin && <span className='greska'>(izaberite termin)</span>}  
        </label>
        <select value={izabraniTermin} onChange={e => {setIzabraniTermin(e.target.value); if (e.target.value) setGreskaTermin(false)}} >
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