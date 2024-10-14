import Stars1ascii from '../stars1ascii';
import Stars2ascii from '../stars2ascii';
import Stars3ascii from '../stars3ascii';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ThisIsMeModal from '../thisismemodal';

import React, { useEffect, useState } from 'react';

function Stars(){
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false); 
    };
    const box = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        maxWidth: "100vw",
        maxHeigth: "10vh"
    }
    const star = {
        marginTop:"-35vh",
        padding: "0",
    }
    const starCollective = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0",

    }

    return(
        <Box sx={box}>
            <Box sx = {starCollective}
            onClick = {handleClick}>
                <Stars1ascii sx = {star}/>
                <Typography>this is me <br/>(if you even care)</Typography>
            </Box>
            <Box sx = {starCollective}>
                <a 
                    href="/resume.pdf" 
                    alt="connect with me on linkedin :p"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <Stars2ascii sx={star} />
                    <Typography>resume</Typography>
                </a>
            </Box>
            <Box sx = {starCollective}>
                <Stars3ascii sx = {star}/>
                <Typography>about me :3</Typography>
            </Box>
            <Box sx={starCollective}>
                <a 
                    href="https://www.linkedin.com/in/amelia-rae-orodio" 
                    alt="connect with me on linkedin :p"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <Stars1ascii sx={star} />
                    <Typography>linkedin</Typography>
                </a>
            </Box>
            <Box sx={starCollective}>
                <a 
                    href="https://github.com/ameliaraeorodio" 
                    alt="connect with me on linkedin :p"
                    target= "_blank"
                    style={{ textDecoration: 'none', color: 'inherit' }}  // Ensures the text styling stays the same
                >
                    <Stars2ascii sx={star} />
                    <Typography>github</Typography>
                </a>
            </Box>
            <Box sx = {starCollective}>
                <Stars3ascii sx = {star}/>
                <Typography>contact me</Typography>
            </Box>

            <ThisIsMeModal open={open} handleClose={handleClose} />
        </Box>
    )
}
export default Stars;