import React from "react"
import { Link } from "react-router-dom"

import PropTypes from "prop-types"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"


// TODO Try to use objects here
const styles = {
  "card": {
    "float": "left",
    "margin-left": "5px",
    "margin-right": "5px",
    "border-radius": "20px",
    "&:hover": {
      "transform": "translateY(-5px)",
      "box-shadow": "1px 1px 7px 1px  #00193A"
    }
  },
  "content": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "background": "#F2E0E0"
  }
}
// TODO very good component, good name, good props, good styles. Good job!
export const OptionCardLarge = ({ title, path }) => (
  <Card component={Link} to={path} sx={styles.card}>
    <CardContent sx={styles.content}>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
    </CardContent>
  </Card>
)
OptionCardLarge.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}
