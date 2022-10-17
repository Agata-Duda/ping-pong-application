import CardMedia from "@mui/material/CardMedia"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import React from "react"
import PropTypes from "prop-types"

const styles = {
  "card": {
    "maxWidth": 400,
    "margin": "40px",
    "&:hover": {
      "transform": "translateY(-5px)",
      "color": "#FF0041"
    }
  },
  "content": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center"
  }
}

export const OptionCard = ({ image, title, description, path }) => (
  <Card component={Link} to={path} sx={styles.card}>
    <CardMedia
      component="img"
      height="200"
      width="170"
      image={image}
      alt="option description"
    />
    <CardContent sx={styles.content}>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
)
OptionCard.propTypes = {
  "image": PropTypes.string.isRequired,
  "title": PropTypes.string.isRequired,
  "description": PropTypes.string.isRequired,
  "path": PropTypes.string.isRequired

}
