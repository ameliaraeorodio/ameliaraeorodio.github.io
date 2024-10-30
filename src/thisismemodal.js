import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { Box } from '@mui/material';
import {Button} from '@mui/material';
import {Grid} from '@mui/material';
import {Tooltip, tooltipClasses,useTheme} from '@mui/material';
import {styled} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
function ThisIsMeModal({ open, handleClose }) {
    const dialog = {
        backgroundColor: "#8dc9fc",
        borderRadius: "1px"
    }
    const title = {
        backgroundColor: "#3b81db",
        paddingLeft:"1vw",
        paddingTop:"0.5vh",
        paddingBottom:"0.5vh",
        marginTop:"-0.5vh",
        borderRadius: "2px"
    }
    const XButton = styled(Button)(({ theme }) => ({
        position: "absolute",
        right: "0px",
        backgroundColor: "#8dc9fc",
        color: "black",
        transition: "transform 0.2s, box-shadow 0.2s",  // Smooth transition on press
        borderRight: "2px solid #7abaf0",
        borderBottom: "2px solid #7abaf0",
        borderRadius:"1px" ,
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.3), inset -1px -1px 5px rgba(255, 255, 255, 0.5)",  // Outer shadow and inner highlight
        '&:hover': {
            backgroundColor: "#6bb1f2",
        },
        '&:active': {
            transform: "translateY(2px)",  // Moves down slightly to simulate press
            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3), inset 1px 1px 2px rgba(0, 0, 0, 0.2)",
        },
        [theme.breakpoints.down('sm')]: {
            minWidth: "4vw",
            minHeight: "1vh",
            width: "1vw",
            height: "1.7vh",
            padding: "0",
            marginRight: "8vw",
            marginTop:"0.2vh",
        },
        [theme.breakpoints.up('md')]: {
            minWidth: "2.5vw",
            minHeight: "1vh",
            width: "1vw",
            height: "1.7vh",
            padding: "0",
            marginRight: "3vw",
            marginTop:"-0.1vh",
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: "1vw",
            minHeight: "1vh",
            width: "1vw",
            height: "1.7vh",
            padding: "0",
            marginRight: "2vw",
            marginTop:"0.2vh",
        },
      }));
    const img = {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-Start",
        flexDirection: "column",
    }

    const ColorCol = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-Start",
        flexDirection: "column",
        [theme.breakpoints.up('xs')]: {
            marginLeft:"-4vw"
        },
        [theme.breakpoints.up('md')]: {
            marginLeft:"0"
        },
      }));

    const ClosingButtonsGroup = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-Start",
        [theme.breakpoints.up('xs')]: {
            flexDirection: "row",
            marginRight:"-10vw",
            marginBottom:"1vh"
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: "column",
            marginRight:"0",
            marginBottom:"0"
        },
      }));

      const OkCancel = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "flex-start",  // Aligns items to the left
        alignItems: "center",  // Vertically centers the items
        flexDirection: "row",
        gap: "10px",
        [theme.breakpoints.up('xs')]: {
            flexDirection: "row",
            marginLeft:"1vw",
            marginTop:"1vh"
        },
        [theme.breakpoints.up('md')]: {
            marginLeft:"0",
            marginTop:"0"
        },
      }));
    const row = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row", 
        
    }

    const ClosingButtons = styled(Button)(({ theme }) => ({
        borderRight: "2px solid #7abaf0",
        borderBottom: "2px solid #7abaf0",
        borderRadius:"1px" ,
        color:"black",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.3), inset -1px -1px 5px rgba(255, 255, 255, 0.5)",  // Outer shadow and inner highlight
        transition: "transform 0.2s, box-shadow 0.2s",  // Smooth transition on press
        '&:hover': {
            backgroundColor: "#6bb1f2",
        },
        '&:active': {
            transform: "translateY(2px)",  // Moves down slightly to simulate press
            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3), inset 1px 1px 2px rgba(0, 0, 0, 0.2)",  // Decreased shadow for pressed effect
        },
        [theme.breakpoints.up('xs')]: {
            marginTop: "1vh",
            minWidth: "3vw",
            minHeight: "1vh",
            width: "15vw",
            height: "2vh",
            fontSize:"0.6rem",
        },
        [theme.breakpoints.up('md')]: {
            marginTop: "1vh",
            minWidth: "3vw",
            minHeight: "1vh",
            width: "8vw",
            height: "2vh",
            fontSize:"0.6rem"
        },
        [theme.breakpoints.up('lg')]:{
            marginTop: "1.5vh",
            minWidth: "3vw",
            minHeight: "3vh",
            width: "6vw",
            height: "3vh",
            fontSize:"0.8rem"
        }
      }));
    const DefineColors = styled(Button)(({ theme }) => ({
        borderRight: "2px solid #7abaf0",
        borderBottom: "2px solid #7abaf0",
        borderRadius:"1px" ,
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.3), inset -1px -1px 5px rgba(255, 255, 255, 0.5)",  // Outer shadow and inner highlight
        transition: "transform 0.2s, box-shadow 0.2s",  // Smooth transition on press
        '&:hover': {
            backgroundColor: "#6bb1f2",
        },
        '&:active': {
            transform: "translateY(2px)",  // Moves down slightly to simulate press
            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3), inset 1px 1px 2px rgba(0, 0, 0, 0.2)",  // Decreased shadow for pressed effect
        },
        [theme.breakpoints.up('xs')]: {
            marginTop: "2vh",
            minWidth: "10vw",
            minHeight: "1vh",
            width: "45vw",
            height: "2vh",
            fontSize:"0.6rem"
        },
        [theme.breakpoints.up('md')]: {
            marginTop: "2vh",
            minWidth: "10vw",
            minHeight: "1vh",
            width: "23vw",
            height: "2vh",
            fontSize:"0.6rem"
        },
        [theme.breakpoints.up('lg')]:{
            marginTop: "3vh",
            minWidth: "10vw",
            minHeight: "1vh",
            width: "16vw",
            height: "3vh",
            fontSize:"0.8rem"
        }
      }));

    const colors = [
        '#FF0000', '#FF7700', '#FFCC00', '#9DFF00', '#04FF00', '#00FFBB', '#00EAFF', '#0080FF', '#0000FF', '#7700FF',
        '#D900FF', '#FF00D0', '#FF7373', '#FFA473', '#FFDE73', '#D0FF73', '#8AFF73', '#73FFC9', '#73FFF8', '#73CEFF',
        '#7396FF', '#8873FF', '#BE73FF', '#EC73FF', '#FF73D7', '#A133FF', '#FF73A6', '#A82A2A', '#A8672A', '#a8692a',
        '#A8A82A', '#6FA82A', '#48A82A', '#2AA832', '#2AA874', '#2AA8A8', '#2A7AA8', '#2A4EA8', '#372AA8', '#5D2AA8',
        '#802AA8', '#A82AA2', '#A82A85', '#A82A65', '#D10000', '#D17A00', '#88D100', '#2DD100'
    ];
    const Image = styled(Box)(({ theme }) => ({
        objectFit: 'contain',
        border: "2px solid #3b81db",  // Border similar to the color boxes
        padding: "0",
        borderRadius:"0px",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.3), inset -1px -1px 5px rgba(255, 255, 255, 0.5)",
        backgroundColor: "#f0f0f0",
        [theme.breakpoints.up('xs')]: {
            width: "auto",  // Adjust the size as needed
            height: "15vh",  // Keeps the aspect ratio
            maxWidth: "auto",
            maxHeight:"100vh",
            marginBottom:"8vh",
            marginLeft:"-8vw"
        },
        [theme.breakpoints.up('md')]: {
            width: "auto",  // Adjust the size as needed
            height: "30vh",  // Keeps the aspect ratio
            maxWidth: "auto",
            maxHeight:"100vh",
            marginBottom:"0",
            marginLeft:"0"
        },
        [theme.breakpoints.up('lg')]: {
            width: "auto",  // Adjust the size as needed
            height: "40vh",  // Keeps the aspect ratio
            maxWidth: "auto",
            maxHeight:"100vh",
            marginBottom:"0",
            marginLeft:"0"
        },
      }));
      const Colors = styled(Box)(({ theme }) => ({
        padding: "0",
        border: "2px solid #3b81db",
        borderRadius:"0px",
        backgroundColor: "#f0f0f0",  // Light background color to enhance the sunken effect
        '&:hover': {
            boxShadow: `
                inset 3px 3px 0 rgba(0, 0, 0, 0.6),  /* More pronounced shadow on hover */
                inset -2px -2px 0 rgba(255, 255, 255, 0.8) /* Enhanced light on hover */
            `,
        },
        boxShadow: `
            inset 2px 2px 0 rgba(0, 0, 0, 0.6),
            inset -1px -1px 0 rgba(255, 255, 255, 0.7) 
        `,
        [theme.breakpoints.up('xs')]: {
            minWidth: "0.5rem",
            minHeight: "0.5rem",
            width: "0.5rem",
            height: "0.5rem",
        },
        [theme.breakpoints.up('md')]: {
            minWidth: "1rem",
            minHeight: "1rem",
            width: "1rem",
            height: "1rem",
        },
      }));
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

      const theme = useTheme();
      const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
      const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
      
      const spacing = isSmallScreen ? -1 : isMediumScreen ? 0.5 : 1; 
    return (
        <Dialog
        open={open} 
        onClose={handleClose}
        BackdropProps={{
            style: { backgroundColor: "transparent" }
          }}
          PaperProps={{
            sx: {
              width: {
                xs:'90vw',
                sm: '90vw', // Medium screens
                md: '60vw', // Default desktop screens
                lg: '40vw', // Larger desktops
              },
              maxHeight: {
                xs: '32vh',
                md: '90vh',
              },
            },
          }}
        >
            <DialogTitle
                sx = {dialog}
            >
                <Typography
                    sx = {{...title,
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '0.8rem',
                        fontWeight: 'normal',
                        textRendering: 'optimizeLegibility',  // Helps with smooth, sharp text rendering
                        '-webkit-font-smoothing': 'none',  // Disable font smoothing (MacOS/WebKit)
                        '-moz-osx-font-smoothing': 'auto', // Auto font smoothing (Firefox)
                        fontSmooth: 'never',  // Disable font smoothing (other browsers)
                    }}
                >
                    my name is amelia rae orodio btw...
                    <XButton
                    onClick={handleClose}
                    >
                        x
                    </XButton>
                </Typography>
            </DialogTitle>
            <DialogContent
                sx = {dialog} 
            >
                <Box sx = {img}>
                    <Box sx = {row}>
                        <Box>
                            <ColorCol>
                                <Box>
                                    <Typography sx = {{
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '0.7rem',
                                        fontWeight: 'normal',
                                        textRendering: 'optimizeLegibility',  // Helps with smooth, sharp text rendering
                                        '-webkit-font-smoothing': 'none',  // Disable font smoothing (MacOS/WebKit)
                                        '-moz-osx-font-smoothing': 'auto', // Auto font smoothing (Firefox)
                                        fontSmooth: 'never',  // Disable font smoothing (other browsers)
                                    }}>
                                        Basic Colors:
                                    </Typography>
                                    <Grid container spacing={spacing} columns={8}> {/* Creates a grid with 8 columns */}
                                        {colors.map((color, index) => (
                                            <Grid item xs={0.9} key={index}> {/* Each box takes up 1/8th of the row */}
                                                <Colors
                                                    sx={{
                                                        backgroundColor: color 
                                                    }} 
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                                <Box sx = {{marginTop:"3vh"}}>
                                    <Typography sx = {{fontFamily: 'Arial, sans-serif',
                                        fontSize: '0.7rem',
                                        fontWeight: 'normal',
                                        textRendering: 'optimizeLegibility',  // Helps with smooth, sharp text rendering
                                        '-webkit-font-smoothing': 'none',  // Disable font smoothing (MacOS/WebKit)
                                        '-moz-osx-font-smoothing': 'auto', // Auto font smoothing (Firefox)
                                        fontSmooth: 'never',}}>
                                        Customized Colors:
                                    </Typography>
                                    <Grid container spacing={spacing} columns={8}>
                                        {[...Array(16)].map((_, index) => (
                                            <Grid item xs={0.9} key={index}> {/* Each box takes up 1/8th of the row */}
                                                <Colors sx={{backgroundColor: "white"}} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                                <ClosingButtonsGroup>
                                    <DefineColors variant = "outlined" sx = {{
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '10pt',
                                            fontWeight: 'normal',
                                            textRendering: 'optimizeLegibility',  // Helps with smooth, sharp text rendering
                                            '-webkit-font-smoothing': 'none',  // Disable font smoothing (MacOS/WebKit)
                                            '-moz-osx-font-smoothing': 'auto', // Auto font smoothing (Firefox)
                                            fontSmooth: 'neveDefine Custom Colors >>',
                                        }}
                                        onClick={handleClose}
                                        >Define Custom Colors >></DefineColors>
                                    <OkCancel>
                                        <ClosingButtons variant = "outlined" sx = {{
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '10pt',
                                            fontWeight: 'normal',
                                            textRendering: 'optimizeLegibility',  // Helps with smooth, sharp text rendering
                                            '-webkit-font-smoothing': 'none',  // Disable font smoothing (MacOS/WebKit)
                                            '-moz-osx-font-smoothing': 'auto', // Auto font smoothing (Firefox)
                                            fontSmooth: 'never',
                                        }}
                                        onClick={handleClose}
                                        >ok</ClosingButtons>
                                        <ClosingButtons variant = "outlined" sx = {{
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '10pt',
                                            fontWeight: 'normal',
                                            textRendering: 'optimizeLegibility',  // Helps with smooth, sharp text rendering
                                            '-webkit-font-smoothing': 'none',  // Disable font smoothing (MacOS/WebKit)
                                            '-moz-osx-font-smoothing': 'auto', // Auto font smoothing (Firefox)
                                            fontSmooth: 'never',
                                        }}
                                        onClick={handleClose}
                                        >cancel</ClosingButtons>
                                    </OkCancel>
                                </ClosingButtonsGroup>
                            </ColorCol>
                        </Box>
                        <PinkTooltip followCursor
                        title = "eek!!! im stuck in this paint machine!"
                        >
                            <Box>
                                <Image
                                component="img"
                                src = "websitepic.jpg"
                                alt = "this is me btw"
                                />
                            </Box>
                        </PinkTooltip>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default ThisIsMeModal;