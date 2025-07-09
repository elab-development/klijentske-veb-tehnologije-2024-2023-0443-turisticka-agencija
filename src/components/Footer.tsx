import React from 'react'
import '../css/footer.css'
import instagram from '../slike/instagram.svg'
import youtube from '../slike/youtube.svg'
import x from '../slike/X.svg'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-sadrzaj'>

            <div className='footer-kontakt'>
                <p>Email: kontakt@agencija.rs</p>
                <p>Telefon: +381 11 123 456</p>
                <p>Adresa: Bulevar Kralja Aleksandra 73, Beograd</p>
            </div>
            
            <div className='footer-ikonice'>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <img src={youtube} alt="YouTube" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <img src={x} alt="Twitter" />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer