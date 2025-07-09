import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './pages/Pocetna';
import Putovanja from './pages/Putovanja';
import Kontakt from './pages/Kontakt';
import MojProfil from './pages/MojProfil';
import Registracija from './pages/Registracija';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Pocetna/>}/>
      <Route path='/Putovanja' element={<Putovanja/>}/>
      <Route path='/Kontakt' element={<Kontakt/>}/>
      <Route path='/MojProfil' element={<MojProfil/>}/>
      <Route path='/Registracija' element={<Registracija/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

