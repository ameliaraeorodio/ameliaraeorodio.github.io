import Stars1ascii from '../stars1ascii';
import Stars2ascii from '../stars2ascii';
import Stars3ascii from '../stars3ascii';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ThisIsMeModal from '../thisismemodal';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Stars(){
    const [open, setOpen] = useState(false);
    const [hoveredStar, setHoveredStar] = useState(null)
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
        cursor: "zoom-in"
    }
    const starNames = {
        'this is me': 'this is me (if you even care)',
        'resume': 'my resume',
        'about me': 'about me',
        'my work': 'my work',
        'linkedin': 'my linkedin profile',
        'github': 'my github profile',
    };
    const navigate = useNavigate();
    const handleAboutMeClick = () => {
        navigate('/about-me');
    };
    return(
        <Box sx={box}>
            <Box sx = {starCollective}
            onClick = {handleClick}
            onMouseEnter={() => setHoveredStar('this is me')}
            onMouseLeave={() => setHoveredStar(null)}
            >
                <Stars1ascii sx = {star}/>
                <Typography sx={{ fontFamily: "Cormorant, serif" }}>this is me <br/>(if you even care)</Typography>
            </Box>
            <Box sx = {starCollective}
            onMouseEnter={() => setHoveredStar('resume')}
            onMouseLeave={() => setHoveredStar(null)}
            >
                <a 
                    href="/resume.pdf" 
                    alt="connect with me on linkedin :p"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ textDecoration: 'none', color: 'inherit', cursor: "zoom-in" }}
                >
                    <Stars2ascii sx={star} />
                    <Typography sx={{ fontFamily: "Cormorant, serif" }}>resume</Typography>
                </a>
            </Box>
            <Box sx = {starCollective}
            onClick = {handleAboutMeClick}
            onMouseEnter={() => setHoveredStar('about me')}
            onMouseLeave={() => setHoveredStar(null)}
            >
                <Stars3ascii sx = {star}/>
                <Typography sx={{ fontFamily: "Cormorant, serif" }}>about me </Typography>
            </Box>
            <Box sx={starCollective}
            onMouseEnter={() => setHoveredStar('my work')}
            onMouseLeave={() => setHoveredStar(null)}
            >
                <Stars1ascii sx={star} />
                <Typography sx={{ fontFamily: "Cormorant, serif" }}>my work</Typography>
            </Box>
            <Box sx={starCollective}
            onMouseEnter={() => setHoveredStar('linkedin')}
            onMouseLeave={() => setHoveredStar(null)}
            >
                <a 
                    href="https://www.linkedin.com/in/amelia-rae-orodio" 
                    alt="connect with me on linkedin :p"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ textDecoration: 'none', color: 'inherit' , cursor: "zoom-in"}}
                >
                    <Stars2ascii sx={star} />
                    <Typography sx={{ fontFamily: "Cormorant, serif" }}>linkedin</Typography>
                </a>
            </Box>
            <Box sx={starCollective}
            onMouseEnter={() => setHoveredStar('github')}
            onMouseLeave={() => setHoveredStar(null)}
            >
                <a 
                    href="https://github.com/ameliaraeorodio" 
                    alt="connect with me on linkedin :p"
                    target= "_blank"
                    style={{ textDecoration: 'none', color: 'inherit', cursor: "zoom-in" }}  // Ensures the text styling stays the same
                >
                    <Stars3ascii sx={star} />
                    <Typography sx={{ fontFamily: "Cormorant, serif" }}>github</Typography>
                </a>
            </Box>

            <ThisIsMeModal open={open} handleClose={handleClose} />
            {hoveredStar && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: '65%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'rgba(255, 255, 255, 0.8)',
                        padding: '1rem',
                        borderRadius: '8px',
                        boxShadow: 3,
                        zIndex: 1000,
                    }}
                >
                    <Typography variant="h4" sx={{ fontFamily: "Cormorant, serif" }}>
                        {starNames[hoveredStar]}
                    </Typography>
                </Box>
            )}
        
        </Box>
    )
}
export default Stars;