import React, { useEffect, useState } from 'react';
import '../App.css';
import { Box, Typography, TextField, IconButton, styled, Snackbar } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typewriter from 'typewriter-effect';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Tooltip, tooltipClasses} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CatAscii from '../catascii';
import { useNavigate } from 'react-router-dom';

function AboutMe(){
    const itemData = [
        {
          img: 'strawberry.jpeg',
          title: 'strawberry tiramisu <3',
        },
        {
          img: 'ph.jpeg',
          title: 'philippines',
        },
        {
          img: 'train.jpeg',
          title: 'me waiting for the train',
        },
        {
          img: 'soop.jpeg',
          title: 'my baby soopi joe cool drinking matcha',
        },
        {
          img: 'pretty.jpeg',
          title: 'first pic of me on my digital camera',
        },
        {
          img: 'mandy.jpeg',
          title: 'dj set',
        },
        {
          img: 'mono.jpeg',
          title: 'at lunch :p',
        },
        {
          img: 'phkittie.jpeg',
          title: ':3',
        },
        {
          img: 'nums.jpeg',
          title: 'nummies',
        },
      ];
    const col = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    }
    const row = {
        display: "flex",
        justifyContent: "space-between", // Use space-between to distribute space evenly
        alignItems: "center",
        flexDirection: "row",
    }
    const welcome = ["hi my name is amelia rae orodio",
        "welcome to my life",
        "it may not always be easy",
        "but i love my life",
        "and i love what i know",
        "and the people in my life",
        "and cute things",
        "and im forever grateful for everything"
    ];
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
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const copyEmailToClipboard = () => {
      const email = 'ameliaraeorodio@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
         setSnackbarOpen(true);
      }).catch(err => {
          console.error('oh no! failed to copy email: ', err);
      });
  };
    const handleCloseSnackbar = () => {
      setSnackbarOpen(false);  // Close Snackbar
  };

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  };
    return(
        <Box sx = {col}>
          <Box sx = {{...row, padding: "1rem",width: "90%", 
            gap: "2vw",}}>
            <PinkTooltip title = "back to home">
              <IconButton onClick={handleBackClick}>
                <ArrowBackIcon/>
              </IconButton>
            </PinkTooltip>
            <Box className = "test" sx = {{flex: 1}}>
                <Typewriter
                options={{
                strings: welcome,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
                }}
                />
            </Box>
          </Box>
            <Box sx = {{...row,
            width: "90%", 
            gap: "2vw",}}>
                <ImageList sx={{flex: 1, height: "100%", padding: 0, margin: 0 }} cols={3}>
                    {itemData.map((item) => (
                      <PinkTooltip title = {item.title} followCursor>
                        <ImageListItem key={item.img}>
                          <img
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          alt={item.title}
                          loading="lazy"
                          />
                      </ImageListItem>
                      </PinkTooltip>
                    ))}
                </ImageList>
                <Box sx={{
                  height: '100%', 
                  width:"100%",
                  maxHeight: "40rem",
                  maxWidth:"50rem", 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderRadius:"1rem",
                  padding:"1.5rem",
                  flex: "1",
                  marginTop:"5rem"
                  }}>
                  <Typography align="center" sx = {{fontFamily: "Cormorant, serif"}}>
                  Amelia Rae Orodio (b. 2002, New York) is a first generation Filipino-American web developer and creative technologist exploring the intersection of code, art, and human connection. Her work navigates the vast digital landscape, building experiences that blend interactivity, aesthetics, and technical depth. Amelia’s passion lies in creating meaningful, playful, and experimental web interfaces that reflect her curiosity about the world and her love for all things whimsical and cute.<br/><br/>
                  Through her digital projects, Amelia seeks to find harmony between structure and chaos, merging technical precision with the freedom of creative expression. She believes in the power of technology to inspire and uplift, and her work aims to create digital spaces that reflect warmth, joy, and personal growth.<br/><br/>
                  (Mostly, she wants to create a world where tech feels personal and beautiful, where code becomes a canvas for self-discovery.)<br/><br/>
                  </Typography>
                  <Box sx = {{...row, marginTop:"-5rem"}}>
                    <Box sx={{
                      alignItems:"center",
                      display: "flex",flexDirection: 
                      'column',  
                      }}>
                      <Typography sx={{ fontFamily: "Cormorant, serif" }}>contact me:</Typography>
                      <a
                          onClick={copyEmailToClipboard}
                          style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                      >
                          <Typography sx={{ fontFamily: "Cormorant, serif" }}>ameliaraeorodio@gmail.com</Typography>
                      </a>
                    </Box>
                    <PinkTooltip title = "plz talk to me" followCursor>
                        <span style={{display: 'inline-block'}}>
                          <CatAscii />
                        </span>
                      </PinkTooltip >
                  </Box>
                  <Snackbar
                      open={snackbarOpen}
                      autoHideDuration={4000}
                      onClose={handleCloseSnackbar}
                      message="thx for copying my email. come message me."
                      action={
                          <IconButton size="small" color="inherit" onClick={handleCloseSnackbar}>
                              <CloseIcon fontSize="small" />
                          </IconButton>
                      }
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                      sx={{
                          '& .MuiSnackbarContent-root': {
                              backgroundColor: '#f7afbd',
                              color: '#ffffff',
                              fontFamily: 'Cormorant, serif',
                          },
                      }}
                  />
              </Box>
            </Box>
        </Box>
    );
}

export default AboutMe;