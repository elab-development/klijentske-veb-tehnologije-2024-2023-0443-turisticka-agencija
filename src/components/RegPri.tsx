import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/regpri.css'

function RegPri() {
    const [activeTab, setActiveTab] = useState<'register' | 'login'>('register');
    const navigate = useNavigate();
    const [imePrezime, setImePrezime] = useState('');

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        if(form.checkValidity()){
            sessionStorage.setItem('imePrezime', imePrezime);
            setActiveTab('login');
        }
        else{
            form.reportValidity();
        }
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        if(form.checkValidity()){
            navigate('/');
        }
        else{
            form.reportValidity();
        }
    }

  return (
    <div className='container'>
        <div className='tabs'>
            <button 
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
            >Registracija</button>
            <button 
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
            >Prijava</button>
        </div>

        {activeTab === 'register' ? (
            <form key='register' className='form' onSubmit={handleRegister}>
                <input type="text" placeholder='Ime i prezime' required value={imePrezime} onChange={(e) => setImePrezime(e.target.value)}/>
                <input type="email" placeholder='Email' required/>
                <input type="password" placeholder='Lozinka' required/>
                <input type="password" placeholder='Potvrdi lozinku' required/>
                <button type='submit'>Registruj se</button>
            </form>
        ) : (
            <form key='login' className='form' onSubmit={handleLogin}>
                <input type="email" placeholder='Email' required/>
                <input type="password" placeholder='Lozinka' required/>
                <button type='submit'>Prijavi se</button>
            </form>
        )}
        </div>
  )
}

export default RegPri