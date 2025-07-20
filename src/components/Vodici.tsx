import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Vodic } from '../models/Vodic'
import '../css/Vodici.css'

function Vodici() {
    const [vodici, setVodici] = useState<Vodic[]>([]);

    useEffect(() => {
        axios.get('/vodici.json').then((res) => {
            const podaci: Vodic[] = res.data.map((v: any) =>
            new Vodic(v.ime, v.pol, v.jezici, v.drzave, v.godineIskustva, v.ocena, v.slika)
        );
        setVodici(podaci);
        })
    }, []);

  return (
    <div className='vodici-container'>
        {vodici.map((v, i1) => (
            <div key={i1} className='vodic-kartica'>
                <img src={v.slika} alt={v.ime} className='vodic-slika' />
                <div className='vodic-podaci'>
                    <h2 className='vodic-ime'>{v.ime}</h2>

                    <div className='vodic-drzave'>
                        {v.drzave.map((drzava, i2) =>(
                            <span key={i2} className='vodic-drzava'>{drzava}</span>
                        ))}
                    </div>

                    <div className='vodic-titule'>
                        {v.dodajTitule().map((titula, i3) => (
                            <span key={i3} className='vodic-titula'>{titula}</span>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Vodici