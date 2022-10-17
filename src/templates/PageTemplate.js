import { Header } from "../components/shared/Header"
import { Footer } from "../components/shared/Footer"
import { Box } from "@mui/material"
import React from "react"
import PropTypes from "prop-types"
import ResponsiveAppBar from "../components/shared/ResponsiveAppBar"

const styles = {
  "box": {
    "marginTop": "158px"
  }
}

export const PageTemplate = ({ children }) => (
  <Box sx={styles.box}>
    <Header/>
    <ResponsiveAppBar/>
    {children}
    <Footer/>
  </Box>
)
PageTemplate.propTypes = {
  "children": PropTypes.element.isRequired
}
