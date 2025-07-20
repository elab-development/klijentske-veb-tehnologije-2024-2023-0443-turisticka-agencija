import React from 'react';
import '../css/karticaDrzave.css';
import {Link} from 'react-router-dom'

type Props = {
    slika: string;
    naziv: string;
    link: string;   
};

const KarticaDrzave: React.FC<Props> = ({ slika, naziv, link}) => {
    return (
        <div className='drzava-kartica'>
            <img src={slika} alt={naziv} />
            <Link to={link} className='link-drzava' state={{drzava: naziv}}>{naziv}</Link>
        </div>
    )
}


export default KarticaDrzave