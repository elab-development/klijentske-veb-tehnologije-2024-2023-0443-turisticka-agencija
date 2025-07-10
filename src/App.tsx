import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './pages/Pocetna';
import Putovanja from './pages/Putovanja';
import Kontakt from './pages/Kontakt';
import MojProfil from './pages/MojProfil';
import Registracija from './pages/Registracija';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route index path='/' element={<Pocetna/>}/>
      <Route path='/Putovanja' element={<Putovanja/>}/>
      <Route path='/Kontakt' element={<Kontakt/>}/>
      <Route path='/MojProfil' element={<MojProfil/>}/>
      <Route path='/Registracija' element={<Registracija/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

