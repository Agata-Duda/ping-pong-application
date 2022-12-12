import React from "react";
import { useQuery } from "react-query";

import { Box } from "@mui/system"

import { OpponentCard } from "../home/OpponentCard"
import { getAllReservations } from "../util/ApiMethods"


export const FutureMatchCard = () => {

    const date = new Date().toJSON();
    const {data : bookings, isFetching} = useQuery("booking",() => getAllReservations());
  
    !isFetching && (bookings.sort((a, b) => (
       Math.abs(Date.now() - new Date(a.event_start)) - Math.abs(Date.now() - new Date(b.event_start))
    )))
    const bookingFilteredByDate = (!isFetching && (bookings.filter(event => event.event_start >= date)))
  return(
  <Box>
  {!isFetching && (bookingFilteredByDate?.map((booking, index) => index < 3 &&  (
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