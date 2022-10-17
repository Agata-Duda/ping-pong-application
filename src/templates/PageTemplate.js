import { Header } from "../components/shared/Header"
import { Footer } from "../components/shared/Footer"
import { NavBar } from "../components/shared/NavBar"
import { Box } from "@mui/material"
import React from "react"
import PropTypes from "prop-types"

const styles = {
  "box": {
    "marginTop": "158px"
  }
}

export const PageTemplate = ({ children }) => (
  <Box sx={styles.box}>
    <Header/>
    <NavBar/>
    {children}
    <Footer/>
  </Box>
)
PageTemplate.propTypes = {
  "children": PropTypes.element.isRequired
}
