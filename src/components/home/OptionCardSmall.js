import CardMedia from "@mui/material/CardMedia"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import React from "react"
import PropTypes from "prop-types"

const styles = {
  card : {
    "margin-left": "10px",
    "margin-right": "10px",
    "border-radius": "20px",
    "&:hover": {
      "transform": "translateY(-2px)",
      "box-shadow": "1px 1px 3px 1px  #00193A"
    }
  },
  content : {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "background": "#F2E0E0"
  }
}

export const OptionCardSmall = ({ image, title, path }) => (
  <Card component={Link} to={path} sx={styles.card}>
    <CardMedia
      component="img"
      height="150"
      width="255"
      image={image}
      alt="option description"
    />
    <CardContent sx={styles.content}>
      <Typography variant="h5" component="div" >
        {title}
      </Typography>
    </CardContent>
  </Card>
)

OptionCardSmall.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}
