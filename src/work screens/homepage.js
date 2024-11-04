import React from 'react';
import '../App.css';
import Typewriter from 'typewriter-effect';
import Asciiart from '../asciiart';
import Flowersascii from '../flowersascii';
import Stars from '../stars/stars';
import MeAscii from '../meascii';
import {Box} from '@mui/material';
import { Tooltip, tooltipClasses } from '@mui/material';
import {styled} from '@mui/material';
import {Typography} from '@mui/material';

function Homepage() {

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
  const Text = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
      minHeight: "4rem",
      fontSize: "2rem"
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: "4rem",
      fontSize: "3rem"
    },
    [theme.breakpoints.up('md')]: {
      minHeight: "6rem",
      fontSize: "4rem"
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: "0rem",
      fontSize: "8vh"
    },
  }));
  const Footer = styled(Typography)(({ theme }) => ({
    fontFamily: "Cormorant, serif" ,
    [theme.breakpoints.down('sm')]: {
      fontSize: "1vh"
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "1.2vh"
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "3vh"
    },
  }));
  return (
    <div className="App">
      <header className="App-header">
      <Stars></Stars>
      </header>
      <PinkTooltip title = "this is my favorite anime character, kanna"
      followCursor>
        <Box>
          <Asciiart/>
        </Box>
      </PinkTooltip>
      <PinkTooltip title = "amelia rae orodio circa spring 2024" followCursor>
        <Box>
          <MeAscii/>
        </Box>
      </PinkTooltip>
      <Text>
      <Typewriter
        options={{
          strings: welcome,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 75,
        }}
      />
      </Text>      
      <div className = "flowergarden">
        <Flowersascii/>
        <Flowersascii/>
        <Flowersascii/>
      </div>
        <Footer
        >.·:·.✧ ✦ ✧.·:·.**.·:·.✧ ✦ ✧.·:·.**.·:·.✧ ✦ ✧.·:·.**.·:·.✧ ✦ ✧.·:·.*amelia rae orodio's portfolio*.·:·.✧ ✦ ✧.·:·.**.·:·.✧ ✦ ✧.·:·.**.·:·.✧ ✦ ✧.·:·.**.·:·.✧ ✦ ✧.·:·.
        </Footer>
    </div>
  );
}

export default Homepage;

