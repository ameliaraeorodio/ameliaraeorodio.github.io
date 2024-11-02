import React, {useState} from 'react';
import '../App.css';
import { Box } from '@mui/material';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import {IconButton} from '@mui/material';
import {Typography} from '@mui/material';
import Typewriter from 'typewriter-effect';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Tooltip, tooltipClasses} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {useMediaQuery} from '@mui/material';
function WorksScreen(){
    const [hoveredStar] = useState(null)
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
    };
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    
    const getColumnCount = () => {
    if (isSmallScreen) return 1;
    if (isMediumScreen) return 2; 
    return 4;
    };

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
    const works = [
        {
            key:1,
            height: 150,
            img: "",
            title:"Current Portfolio",
            description:'This portfolio is a reflection of my journey as a creative technologist, where I explore the exciting intersection of art and technology. Each project within is a testament to pushing the boundaries of both fields, blending code with aesthetic expression. Using tools beyond the conventional—like interactive components, animations, and generative design—this collection represents my evolution from technical development to crafting experiences that feel both personal and immersive. Here, I challenge the norm and experiment with web interfaces to create digital spaces that feel alive, whimsical, and deeply connected to my creative vision.',
            year:"2024",
            technologies:"Javascript, CSS, HTML, ReactJS, NodeJS",
            link: "https://github.com/ameliaraeorodio/insidemymind"
        },
        {
            key:2,
            img:"hellokitty.gif"
        },
        {
            key:3,
            height: 150,
            img: "",
            title:"Playlister",            
            description:"Playlister is a dynamic web app designed to help users curate and share personalized playlists using YouTube videos. With an intuitive interface, users can easily compile and organize their favorite content into themed playlists. Once created, these playlists can be published to a vibrant online forum, allowing community interaction, feedback, and discovery of new content. Playlister blends multimedia with social engagement, empowering users to express their tastes while connecting with others through shared experiences in music, education, entertainment, and more.",
            year:"2022",
            technologies:"Javascript, ReactJS, MongoDB, NodeJS, Express, HTML, CSS",
            link: "https://github.com/ameliaraeorodio/Playlister"
        },
        {
            key:4,
            img:"kirby.gif"
        },
        {
            key:5,
            height: 150,
            img: "",
            title:"ExploreX",
            description:"Explore X is a dynamic map rendering app designed for users to creatively visualize geographic data. Users can upload map data (specifically SHP/DBF, GeoJSON, and KML files) and transform it into compelling visuals, such as heat or spike maps, that highlight key information. The app offers a range of customization options, enabling users to fine-tune the appearance of their maps. Beyond personal use, Explore X fosters a community where users can explore, interact with, and export each other's maps, creating a collaborative environment for geographic data exploration and creativity. This project was created by me alongside a team of three talented individuals Juan Ospina, Jacob Niyazov, and Jesse Wang. ",
            year:"2023",
            technologies:"Javascript, ReactJS, MongoDB, NodeJS, Express, HTML, CSS",
            link: "https://github.com/JacobNiyazov/ExploreX"
        },
        {
            key:6,
            height: 150,
            img: "",
            title:"Old Portfolio",
            description:"My old portfolio was my first step into web development, crafted before I delved deep into building web applications. Built using Bootstrap, vanilla JavaScript, HTML, and CSS, this portfolio showcased my early projects and reflected my initial understanding of design and coding. It served as a minimalist, functional platform to present my skills and creativity, laying the foundation for the more dynamic and complex web applications I would later go on to create.",
            year:"2022",
            technologies:"Javascript, HTML, CSS, Bootstrap",
            link: "https://github.com/ameliaraeorodio/ameliaraeorodio.github.io"
        },
        {
            key:7,
            img:"adventuretime.gif"
        },
    ];

    const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    border: 'none',
    boxShadow: 'none'
    }));
    const row = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    }
    const col = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    }

    const Text = styled('div')(({ theme }) => ({
        lineHeight: 1,
        [theme.breakpoints.down('sm')]: {
          minHeight: "4rem",
          fontSize: "2rem"
        },
        [theme.breakpoints.up('md')]: {
          minHeight: "8rem",
          fontSize: "4rem"
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: "8vh"
        },
      }));
    return (
        <Box sx = {col}>
            <Box sx = {{...row, padding: "0.5rem",width: "90%", 
            gap: "2vw",}}>
                <PinkTooltip title = "back to home">
                <IconButton onClick={handleBackClick}>
                    <ArrowBackIcon/>
                </IconButton>
                </PinkTooltip>
                <Text className = "test">
                    <Typewriter
                    options={{
                    strings: "my works",
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 75,
                    }}
                    />
            </Text>
          </Box>
        <Box sx={{ width: "100vw",
         minHeight: 393,
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         }}>
          <Masonry columns={getColumnCount()} spacing={2}>
            {works.map((item) => (
              <Item key={item.key}>
                {item.img && (
                    <img
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        style = {{height:"20vh", }}
                    />
                )}
                {item.year &&(
                    <Box
                    >
                        <a 
                            href={item.link} 
                            alt="connect with me on linkedin :p"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ textDecoration: 'none', color: 'inherit' , cursor: "zoom-in"}}
                        > 
                            <Typography variant= "h5"sx = {{fontFamily: "Cormorant, serif", padding: "1vh"}}>
                            {item.title}, {item.year}
                            </Typography>
                            <Typography sx = {{fontFamily: "Cormorant, serif",padding:"2vh"}}>
                                {item.technologies}
                            </Typography>
                            <Typography sx = {{fontFamily: "Cormorant, serif",padding:"2vh"}}>
                            {item.description}
                            </Typography>
                        </a>
                    </Box>
                )}
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
                </Box>
            )}
                
              </Item>
            ))}
          </Masonry>
        </Box>
        </Box>
      );
}
export default WorksScreen;