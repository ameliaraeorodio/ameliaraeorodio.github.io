import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import Asciiart from './asciiart';
import Flowersascii from './flowersascii';
import Stars from './stars/stars';

function App() {

  let welcome = ["welcome inside my mind", "where good things are great",
    "and bad things dont exist", "and we can be silly",
    "and kitties never die"
  ]
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Stars></Stars>
      <Asciiart/>
      <Typewriter className="welcomes"
          options={{
            strings: welcome,
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 75,
          }}
        />
      <div className = "flowergarden">
        <Flowersascii/>
        <Flowersascii/>
        <Flowersascii/>
      </div>
    </div>
  );
}

export default App;
