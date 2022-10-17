import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import bookingImg from "./bookingCardImage.png"

export default function ActionAreaCard () {
  return (
    <Card sx={{ "maxWidth": 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image= {bookingImg}
          alt="Booking Slot Time Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Book a Slot
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ping Pong Table Booking System
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
