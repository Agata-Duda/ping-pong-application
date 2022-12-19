import React, {useContext} from "react";
import { useQuery } from "react-query";

import { Box } from "@mui/system"

import { getAllReservations} from "../util/ApiMethods"
import { AppContext } from "../../context/appContext"
import LiveMatchOpponentCard from "./LiveMatchOppenentCard"
import MatchTimer from "./MatchTimer";


export const LiveMatchCard = () => {

    const date = new Date().toJSON();
    const {user} = useContext(AppContext);
    const {data : bookings, isFetching} = useQuery("booking",() => getAllReservations());

    !isFetching && (bookings.sort((a, b) => (
        Math.abs(Date.now() - new Date(a.event_start)) - Math.abs(Date.now() - new Date(b.event_start))
     )))
     const bookingFilteredByDate = (!isFetching && (bookings.filter(event => event.event_start >= date)))
     const bookingFiltered = (!isFetching &&  bookingFilteredByDate.filter(eventUser => eventUser.player_2 === user.userName || eventUser.player_1 === user.userName))

    return(
        <Box>
            {!isFetching && (bookingFiltered.map((booking, index) => index < 1 && (
                <>
                <MatchTimer 
                eventFinish={booking.event_finish}/>
                <LiveMatchOpponentCard
                key={booking.booking_id}
                loggedInUser={user.userName}
                bookingId={booking.booking_id}
                player1Username={booking.player_1}
                player2Username={booking.player_2}
                eventStart={booking.event_start}
                eventEnd={booking.event_finish}
                tournament={booking.tournamentName}
                matchDate={(booking.event_start).toString().split("T")[0]}
                matchStartTime={(booking.event_start).toString().split("T")[1].replace(":00", "")}
                setNumber={booking.sets}
                player1Score={booking.player_1_score}
                player2Score={booking.player_2_score}/>
                </>
            )))}
        </Box>
    )
}