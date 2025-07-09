import React from 'react'
import '../css/popust.css'
import popust from '../slike/Popust-slika.jpg'

function Popust() {
  return (
    <section className='popust-sekcija'>
        <div className='popust-sadrzaj'>
            <div className='popust-slika'>
                <img src={popust} alt="" />
            </div>
            <div className='popust-tekst'>
                <h2>Prijavite se i ostvarite 10% popusta na sledeće putovanje!</h2>
                <button className='popust-dugme'>Prijavi se</button>
            </div>
        </div>
    </section>
  )
}

export default Popust