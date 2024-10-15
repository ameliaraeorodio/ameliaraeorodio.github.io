import React, { useEffect, useState } from 'react';
import '../App.css';
import { Box, Typography, TextField } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typewriter from 'typewriter-effect';
function AboutMe(){
    const itemData = [
        {
          img: 'strawberry.jpeg',
          title: 'strawberri :3',
        },
        {
          img: 'ph.jpeg',
          title: 'Burger',
        },
        {
          img: 'train.jpeg',
          title: 'Camera',
        },
        {
          img: 'soop.jpeg',
          title: 'Coffee',
        },
        {
          img: 'pretty.jpeg',
          title: 'Hats',
        },
        {
          img: 'mandy.jpeg',
          title: 'Honey',
        },
        {
          img: 'mono.jpeg',
          title: 'Basketball',
        },
        {
          img: 'phkittie.jpeg',
          title: 'Fern',
        },
        {
          img: 'nums.jpeg',
          title: 'Mushrooms',
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
        width: "90%", // Ensure the row takes full width
        gap: "2vw", // Adds gap between ImageList and text box
    }
    const welcome = ["my name is amelia rae orodio",
        "welcome to my life",
        "i'm still trying to find myself",
        "but i love my life",
        "and i love what i know",
        "and the people in my life",
        "and cute things",
        "and im forever grateful for everything"
    ];

    
    return(
        <Box className = "test" sx = {col}>
            <Box sx = {{padding: "1rem"}}>
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
            <Box sx = {row}>
                <ImageList sx={{flex: 1, height: "100%", padding: 0, margin: 0 }} cols={3}>
                    {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        />
                    </ImageListItem>
                    ))}
                </ImageList>
                <Box sx={{ bgcolor: 'pink',
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
              flex: "1"
              }}>
              <TextField
                  id="outlined-multiline-static"
                  label="this is me"
                  multiline
                  rows={27}
                  defaultValue={`hello`}
                  color="primary"
                  sx={{ flex: 1,
                     width:"100%",
                     fontFamily: "Jacquard 12, system-ui"
                    }}
                    slotProps={{
                        input: {
                          readOnly: true,
                        },
                      }}
              />
            </Box>
            </Box>
        </Box>
    );
}

export default AboutMe;