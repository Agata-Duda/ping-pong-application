import React, {useContext, useState, useEffect} from "react";
import { useQuery } from "react-query";

import { Box } from "@mui/system"

import { getAllReservations, updateReservationById } from "../util/ApiMethods"
import { AppContext } from "../../context/appContext"
import LiveMatchOpponentCard from "./LiveMatchOppenentCard"

export const LiveMatchCard = () => {

    const [scorePlayer1, setScorePlayer1] = useState([0,0,0,0,0])
    const [scorePlayer2, setScorePlayer2] = useState([0,0,0,0,0])
    // const [value, setValue] = useState(scorePlayer1);

    const date = new Date().toJSON();
    const {user} = useContext(AppContext);
    console.log(user)
    const {data : bookings, isFetching} = useQuery("booking",() => getAllReservations());

    !isFetching && (bookings.sort((a, b) => (
        Math.abs(Date.now() - new Date(a.event_start)) - Math.abs(Date.now() - new Date(b.event_start))
     )))
     const bookingFilteredByDate = (!isFetching && (bookings.filter(event => event.event_start >= date)))
     const bookingFiltered = (!isFetching &&  bookingFilteredByDate.filter(eventUser => eventUser.player_2 === user.userName || eventUser.player_1 === user.userName))
     
     const onSubmitScores = () => {
        updateReservationById()
     }



    //  useEffect(() => { setValue(scorePlayer1) }, [scorePlayer1]);
    return(
        <Box>
            {!isFetching && (bookingFiltered.map((booking, index) => index < 1 && (
                <LiveMatchOpponentCard
                key={booking.booking_id}
                player1Username={booking.player_1}
                player2Username={booking.player_2}
                matchDate={(booking.event_start).toString().split("T")[0]}
                matchStartTime={(booking.event_start).toString().split("T")[1].replace(":00", "")}
                setNumber={booking.sets}
                setScorePlayer1={setScorePlayer1}
                setScorePlayer2={setScorePlayer2}
                scorePlayer1={scorePlayer1}
                scorePlayer2={scorePlayer2}/>
            )))}
        </Box>
    )
}