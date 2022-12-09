import CardMedia from "@mui/material/CardMedia"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import React from "react"
import PropTypes from "prop-types"

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

export const OptionCardLarge = ({ image, title, path }) => (
  <Card component={Link} to={path} sx={styles.card}>
    <CardMedia
      component="img"
      height="105"
      width="535"
      image={image}
      alt="option description"
    />
    <CardContent sx={styles.content}>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
    </CardContent>
  </Card>
)
OptionCardLarge.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired

}
