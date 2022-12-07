import { useQuery } from "react-query";
import { getAllReservations } from "../util/ApiMethods"
import React, {useState} from "react"
import { Box } from "@mui/system"
import { OpponentCard } from "./OpponentCard"
import { Typography } from "@mui/material"


const EventsCard = () => {

  const {data : bookings, isFetching} = useQuery("booking",() => getAllReservations());
    
    // console.log(data[0])
    //setPlayerOneUsername(bookings[0].player_1)
    // const [ playerOneUsername, setPlayerOneUsername ] = useState()
    // const [ playerTwoUsername, setPlayerTwoUsername ] = useState()
    // const [ fixtureDate, setFixtureDate] = useState()
    // const [ fixtureStartTime, setFixtureStartTime ] = useState()
    
return(
<Box>
<Typography align="center" varient="h2"> Your Next Match </Typography>
{!isFetching && (bookings?.map((booking) => (
      <OpponentCard  
      key={booking.booking_id}
      player1Username={booking.player_1}
      player2Username={booking.player_2}
      matchDate={(booking.event_start).toString().split("T")[0]}
      matchStartTime={(booking.event_start).toString().split("T")[1].replace(":00", "")}/>
)))
  }
<Typography align="center" varient="h1"> Upcoming Matches </Typography>
<OpponentCard
  player1Username
  player2Username
  matchDate="Tuesday 1st October, 2022"
  matchStartTime="12:15"/>
<OpponentCard
  player1Username
  player2Username
  matchDate="Tuesday 1st October, 2022"
  matchStartTime="12:15"/>
</Box>
)
}

export default EventsCard;