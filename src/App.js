import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/navbar'
import HeaderBar from './components/Header/header'



function App() {
  return (
    <div className="App">
      <HeaderBar name='Porcelain' />
      <h1>Test</h1>
      {/* <Mapof LocalArea /> */}
      <NavBar name='Mike' />
    </div>
  );
}

export default App;