import React from "react"
import { Link } from "react-router-dom"

import { AppBar, Box } from "@mui/material"

import logo from "../../Images/zinkworks-ping-pong-logo.png"


const styles = {
  "header": {
    "backgroundColor": "#00193A",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "left",
    "fontSize": "calc(10px + 2vmin)",
    "color": "white",
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "width": "100%"
  },
  "logo": {
    "maxHeight": "128px",
    "pointerEvents": "none",
    "padding": "15px"
  }
}

export const Header = () => (
    <AppBar position="fixed" sx={styles.header}>
      <Link to="/home"> <Box component="img" src={logo} sx={styles.logo} alt="logo" /></Link>
    </AppBar>
   
  )
