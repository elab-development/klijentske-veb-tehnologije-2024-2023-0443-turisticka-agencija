import React, { useState } from 'react'
import '../css/kontaktUpit.css'

function KontaktUpit() {
  const [poruka, setPoruka] = useState('');
  const [porukaPoslata, setPorukaPoslata] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!poruka.trim()) return;

    setPorukaPoslata(true);
    setPoruka('');
    setTimeout(() => {
        setPorukaPoslata(false);
    }, 3000);
   };
  
    return (
    <div className='kontakt-forma-container'>
        <h2>Pošaljite upit:</h2>

        <form onSubmit={handleSubmit} className='kontakt-forma'>
            <textarea placeholder='Unesite Vašu poruku...' value={poruka} 
            onChange={(e) => setPoruka(e.target.value)} required/>
            <button type='submit'>Pošalji</button>
        </form>

        {porukaPoslata &&(
            <p className='poslata-poruka'>Poruka je uspešno poslata!</p>
        )}
    </div>
  )
}

export default KontaktUpit