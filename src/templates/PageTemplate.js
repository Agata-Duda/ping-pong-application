// TODO order for imports - external libraries, one line break, then your own files
import PropTypes from "prop-types"
import React from "react"
import { Box } from "@mui/material"

import { Header } from "../components/shared/Header"
import ResponsiveAppBar from "../components/shared/ResponsiveAppBar"
// TODO very good practice to styles. If object will be too big, consider moving it to separate file
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
  </Box>
)

PageTemplate.propTypes = {
  children: PropTypes.object
}
