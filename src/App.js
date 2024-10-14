import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import Asciiart from './asciiart';
import Flowersascii from './flowersascii';
import Stars from './stars/stars';
import MeAscii from './meascii';
import {Box} from '@mui/material';
import { Tooltip, tooltipClasses } from '@mui/material';
import {styled} from '@mui/material';
import {Typography} from '@mui/material';
function App() {

  let welcome = ["welcome inside my mind", "where good things are great",
    "and bad things dont exist", "and we can be silly",
    "and kitties never die"
  ]

  const PinkTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f7afbd",
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Stars></Stars>
      <PinkTooltip title = "this is my favorite anime character, kanna"
      followCursor      
      >
        <Box>
          <Asciiart/>
        </Box>
      </PinkTooltip>
      <PinkTooltip title = "amelia rae orodio circa spring 2024" followCursor>
        <Box>
          <MeAscii/>
        </Box>
      </PinkTooltip>
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
      <Box className = "footer">
        <Typography>amelia rae orodio's porfolio</Typography>
      </Box>
    </div>
  );
}

export default App;
