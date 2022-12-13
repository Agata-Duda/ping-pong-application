import React, { useContext } from "react";
import { useQuery } from "react-query";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import { OpponentCard } from "./OpponentCard";
import { getAllReservations } from "../util/ApiMethods";
import { AppContext } from "../../context/appContext";

export const EventsCard = () => {
  const date = new Date().toJSON();
  const { user } = useContext(AppContext);
  const { data: bookings, isFetching } = useQuery("booking", () =>
    getAllReservations()
  );

  !isFetching &&
    bookings.sort(
      (a, b) =>
        Math.abs(Date.now() - new Date(a.event_start)) -
        Math.abs(Date.now() - new Date(b.event_start))
    );
  const bookingFilteredByDate =
    !isFetching && bookings.filter((event) => event.event_start >= date);
  const bookingFiltered =
    !isFetching &&
    bookingFilteredByDate.filter(
      (eventUser) =>
        eventUser.player_2 === user.userName ||
        eventUser.player_1 === user.userName
    );
  return (
    <Box>
      <Typography align="center" varient="h2">
        {" "}
        Your Next Match{" "}
      </Typography>
      {!isFetching &&
        bookingFiltered.map(
          (booking, index) =>
            index < 1 && (
              <OpponentCard
                key={booking.booking_id}
                player1Username={booking.player_1}
                player2Username={booking.player_2}
                matchDate={booking.event_start.toString().split("T")[0]}
                matchStartTime={booking.event_start
                  .toString()
                  .split("T")[1]
                  .replace(":00", "")}
              />
            )
        )}
      <Typography align="center" varient="h1">
        {" "}
        Upcoming Matches{" "}
      </Typography>
      {!isFetching &&
        bookingFilteredByDate?.map(
          (booking, index) =>
            index < 2 && (
              <OpponentCard
                key={booking.booking_id}
                player1Username={booking.player_1}
                player2Username={booking.player_2}
                matchDate={booking.event_start.toString().split("T")[0]}
                matchStartTime={booking.event_start
                  .toString()
                  .split("T")[1]
                  .replace(":00", "")}
              />
            )
        )}
    </Box>
  );
};

export default EventsCard;
