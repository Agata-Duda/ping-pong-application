import { useQuery } from "react-query";
import React, {useState} from "react"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"

import { OpponentCard } from "./OpponentCard"
import { getAllReservations } from "../util/ApiMethods"

const EventsCard = () => {

  const [user, setUser] = useState({});
  const {data : bookings, isFetching} = useQuery("booking",() => getAllReservations());


  !isFetching && (bookings.sort((a, b) => (
     Math.abs(Date.now() - new Date(a.event_start)) - Math.abs(Date.now() - new Date(b.event_start))
  )))

  !isFetching && (bookings.filter(event => event.event_start > Date.now() ))
    
return(
<Box>
<Typography align="center" varient="h2"> Your Next Match </Typography>
{!isFetching && (bookings?.map((booking, index) => index < 1 &&  ( 
      <OpponentCard  
      key={booking.booking_id}
      player1Username={booking.player_1}
      player2Username={booking.player_2}
      matchDate={(booking.event_start).toString().split("T")[0]}
      matchStartTime={(booking.event_start).toString().split("T")[1].replace(":00", "")}/>
)))
  }
<Typography align="center" varient="h1"> Upcoming Matches </Typography>
{!isFetching && (bookings?.map((booking, index) => index < 2 &&  ( 
      <OpponentCard  
      key={booking.booking_id}
      player1Username={booking.player_1}
      player2Username={booking.player_2}
      matchDate={(booking.event_start).toString().split("T")[0]}
      matchStartTime={(booking.event_start).toString().split("T")[1].replace(":00", "")}/>
)))
  }
</Box>
)
}

export default EventsCard;