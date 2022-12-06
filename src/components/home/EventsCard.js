import { getAllReservations } from "../util/ApiMethods"
import React, {useState} from "react"
import { Box } from "@mui/system"
import { OpponentCard } from "./OpponentCard"
import { Typography } from "@mui/material"
import { useQuery, useQueryClient } from "react-query";

const EventsCard = () => {

    const { response : bookings } = useQuery("response",() => getAllReservations());

    console.log(bookings)
    // const [ playerOneUsername, setPlayerOneUsername ] = useState()
    // const [ playerTwoUsername, setPlayerTwoUsername ] = useState()
    // const [ fixtureDate, setFixtureDate] = useState()
    // const [ fixtureStartTime, setFixtureStartTime ] = useState()

return(
<Box>
<Typography varient="h2"> Your Next Match </Typography>
<OpponentCard
  player1Username={bookings}
  player2Username={bookings}
  matchDate="Tuesday 1st October, 2022"
  matchStartTime="12:15"/>
<Typography varient="h1"> Upcoming Matches </Typography>
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