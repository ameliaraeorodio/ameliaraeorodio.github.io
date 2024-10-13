import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { Box } from '@mui/material';
import {Button} from '@mui/material';
import {Grid} from '@mui/material';
import {Tooltip} from '@mui/material';
function ThisIsMeModal({ open, handleClose }) {
    const dialog = {
        backgroundColor: "#8dc9fc",
        borderRadius: "1px"
    }
    const title = {
        backgroundColor: "#3b81db",
        paddingLeft:"5px",
        paddingTop:"5px",
        paddingBottom:"5px",
        marginTop:"-5px",
        borderRadius: "2px"
    }
    const xButton = {
        position: "absolute",
        right: "0px",
        backgroundColor: "#8dc9fc",
        color: "black",
        minWidth: "18px",  // Set minimum width
        minHeight: "18px",  // Set minimum height
        width: "18px",  // Fix the width to 32px
        height: "18px",  // Fix the height to 32px
        padding: "0",  // Remove padding
        marginRight: "32px",
        marginTop:"2px",
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
        }
    }
    const img = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
    const closingButtonsGroup = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: "50px"
    }
    const coloringGroup = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        
    }
    const closingButtons = {
        marginTop: "10px",
        minWidth: "100px",
        minHeight: "30px",
        width: "100px",
        height: "30px",
        color: "black",
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
    }
    const defineColors = {
        marginTop: "30px",
        minWidth: "280px",
        minHeight: "30px",
        width: "280px",
        height: "30px",
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
        }
    }

    const colors = [
        '#FF0000', '#FF7700', '#FFCC00', '#9DFF00', '#04FF00', '#00FFBB', '#00EAFF', '#0080FF', '#0000FF', '#7700FF',
        '#D900FF', '#FF00D0', '#FF7373', '#FFA473', '#FFDE73', '#D0FF73', '#8AFF73', '#73FFC9', '#73FFF8', '#73CEFF',
        '#7396FF', '#8873FF', '#BE73FF', '#EC73FF', '#FF73D7', '#A133FF', '#FF73A6', '#A82A2A', '#A8672A', '#a8692a',
        '#A8A82A', '#6FA82A', '#48A82A', '#2AA832', '#2AA874', '#2AA8A8', '#2A7AA8', '#2A4EA8', '#372AA8', '#5D2AA8',
        '#802AA8', '#A82AA2', '#A82A85', '#A82A65', '#D10000', '#D17A00', '#88D100', '#2DD100'
    ];

    const boxStyle = {
        minWidth: "20px",
        minHeight: "20px",
        width: "20px",
        height: "20px",
        padding: "0",
        border: "2px solid #3b81db",
        borderRadius:"0px",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.3), inset -1px -1px 5px rgba(255, 255, 255, 0.5)",
        backgroundColor: "#f0f0f0",  // Light background color to enhance the sunken effect
        boxShadow: `
            inset 2px 2px 0 rgba(0, 0, 0, 0.6),  /* Darker shadow on top-left */
            inset -1px -1px 0 rgba(255, 255, 255, 0.7) /* Lighter shadow on bottom-right for depth */
        `,
        '&:hover': {
            boxShadow: `
                inset 3px 3px 0 rgba(0, 0, 0, 0.6),  /* More pronounced shadow on hover */
                inset -2px -2px 0 rgba(255, 255, 255, 0.8) /* Enhanced light on hover */
            `,
        }
    };
    return (
        <Dialog
        open={open} 
        onClose={handleClose}>
            <DialogTitle
                sx = {dialog}
            >
                <Typography
                    sx = {{...title,
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '10pt',
                        fontWeight: 'normal',
                        textRendering: 'optimizeLegibility',  // Helps with smooth, sharp text rendering
                        '-webkit-font-smoothing': 'none',  // Disable font smoothing (MacOS/WebKit)
                        '-moz-osx-font-smoothing': 'auto', // Auto font smoothing (Firefox)
                        fontSmooth: 'never',  // Disable font smoothing (other browsers)
                    }}
                >
                    my name is amelia rae orodio btw...
                    <Button sx = {xButton}
                    onClick={handleClose}
                    >
                        x
                    </Button>
                </Typography>
            </DialogTitle>
            <DialogContent
                sx = {dialog} 
            >
                <Box sx = {img}>
                    <Box sx = {coloringGroup}>
                        <Box>
                            <Box sx = {img}>
                                <Box>
                                    <Typography sx = {{
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '10pt',
                                        fontWeight: 'normal',
                                        textRendering: 'optimizeLegibility',  // Helps with smooth, sharp text rendering
                                        '-webkit-font-smoothing': 'none',  // Disable font smoothing (MacOS/WebKit)
                                        '-moz-osx-font-smoothing': 'auto', // Auto font smoothing (Firefox)
                                        fontSmooth: 'never',  // Disable font smoothing (other browsers)
                                    }}>
                                        Basic Colors:
                                    </Typography>
                                    <Grid sx = {coloringGroup} container spacing={1} columns={8}> {/* Creates a grid with 8 columns */}
                                        {colors.map((color, index) => (
                                            <Grid item xs={1} key={index}> {/* Each box takes up 1/8th of the row */}
                                                <Button
                                                    sx={{ 
                                                        ...boxStyle, 
                                                        backgroundColor: color 
                                                    }} 
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                                <Box sx = {{marginTop:"30px"}}>
                                    <Typography sx = {{fontFamily: 'Arial, sans-serif',
                                        fontSize: '10pt',
                                        fontWeight: 'normal',
                                        textRendering: 'optimizeLegibility',  // Helps with smooth, sharp text rendering
                                        '-webkit-font-smoothing': 'none',  // Disable font smoothing (MacOS/WebKit)
                                        '-moz-osx-font-smoothing': 'auto', // Auto font smoothing (Firefox)
                                        fontSmooth: 'never',}}>
                                        Customized Colors:
                                    </Typography>
                                    <Grid container spacing={1} columns={8}>
                                        {[...Array(16)].map((_, index) => (
                                            <Grid item xs={1} key={index}> {/* Each box takes up 1/8th of the row */}
                                                <Button sx={{...boxStyle, backgroundColor: "white"}} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                                <Button variant = "outlined" sx = {{...defineColors,
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '10pt',
                                        fontWeight: 'normal',
                                        textRendering: 'optimizeLegibility',  // Helps with smooth, sharp text rendering
                                        '-webkit-font-smoothing': 'none',  // Disable font smoothing (MacOS/WebKit)
                                        '-moz-osx-font-smoothing': 'auto', // Auto font smoothing (Firefox)
                                        fontSmooth: 'neveDefine Custom Colors >>',
                                    }}>Define Custom Colors >></Button>
                                <Box sx = {{...closingButtonsGroup,
                                     display: "flex",
                                     justifyContent: "flex-start",  // Aligns items to the left
                                     alignItems: "center",  // Vertically centers the items
                                     flexDirection: "row",
                                     gap: "10px",  // Adds space between buttons if needed
                                }}>
                                    <Button variant = "outlined" sx = {{...closingButtons,
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '10pt',
                                        fontWeight: 'normal',
                                        textRendering: 'optimizeLegibility',  // Helps with smooth, sharp text rendering
                                        '-webkit-font-smoothing': 'none',  // Disable font smoothing (MacOS/WebKit)
                                        '-moz-osx-font-smoothing': 'auto', // Auto font smoothing (Firefox)
                                        fontSmooth: 'never',
                                    }}
                                    onClick={handleClose}
                                    >ok</Button>
                                    <Button variant = "outlined" sx = {{...closingButtons,
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '10pt',
                                        fontWeight: 'normal',
                                        textRendering: 'optimizeLegibility',  // Helps with smooth, sharp text rendering
                                        '-webkit-font-smoothing': 'none',  // Disable font smoothing (MacOS/WebKit)
                                        '-moz-osx-font-smoothing': 'auto', // Auto font smoothing (Firefox)
                                        fontSmooth: 'never',
                                    }}
                                    onClick={handleClose}
                                    >cancel</Button>
                                </Box>
                            </Box>
                        </Box>
                        <Tooltip title="this is me btw" arrow>  {/* Tooltip with hover message */}
                            <img
                            src = "websitepic.jpg"
                            />
                        </Tooltip>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default ThisIsMeModal;