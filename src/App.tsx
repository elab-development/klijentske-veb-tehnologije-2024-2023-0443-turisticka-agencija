import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Drzave from './components/Drzave';
import Popust from './components/Popust';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Drzave/>
      <Popust/>
      
    </div>
  );
}

export default App;
