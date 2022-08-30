import React from 'react';

import { Burger, Navbar } from './Components'

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="burgerContent">
        <Burger />
      </div>
    </>
  );
}

export default App;