import React from 'react'
import '../css/popust.css'
import popust from '../slike/Popust-slika.jpg'
import {Link} from 'react-router-dom'

function Popust() {
  return (
    <section className='popust-sekcija'>
        <div className='popust-sadrzaj'>
            <div className='popust-slika'>
                <img src={popust} alt="" />
            </div>
            <div className='popust-tekst'>
                <h2>Prijavite se i ostvarite 10% popusta na sledeće putovanje!</h2>
                <Link to='/Registracija' className='popust-dugme'>Prijavi se</Link>
                
            </div>
        </div>
    </section>
  )
}

export default Popust