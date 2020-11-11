import React from 'react';
import logo from './logo.svg';
import human from './human.jpg';
import car from './car.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header className="Post-header">
          <img src={human} className="humanFace" alt="human" />
          <p className="faceName">Face</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="imgText"> Is it a car?</p>
          <img src={car} className="Car-image" alt="car" />
          </header>
        </header>
    </div>
  );
}

export default App;
