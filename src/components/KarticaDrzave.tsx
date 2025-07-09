import React from 'react';
import '../css/karticaDrzave.css';

type Props = {
    slika: string;
    naziv: string;
    link: string;   
};

const KarticaDrzave: React.FC<Props> = ({ slika, naziv, link}) => {
    return (
        <div className='drzava-kartica'>
            <img src={slika} alt={naziv} />
            <a href={link} className='link-drzava'>{naziv}</a>
        </div>
    )
}


export default KarticaDrzave