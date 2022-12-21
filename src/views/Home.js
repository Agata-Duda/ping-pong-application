import { Stack } from "@mui/material";
import React from "react";

import { EventsCard } from "../components/home/EventsCard";
import { OptionCardLarge } from "../components/home/OptionCardLarge";
import { OptionCardSmall } from "../components/home/OptionCardSmall";
import { routes } from "../components/util/routes";
import bookingCardImage from "../Images/bookingCardImage.png";
import match from "../Images/match.png";
import predictionCardImage from "../Images/predictionCardImage.png";
import ScoreBoardCardImage from "../Images/ScoreBoardCardImage.png";
import { PageTemplate } from "../templates/PageTemplate";

const Home = () => {

  return (
  <PageTemplate>
    <Stack direction="row">
      <Stack direction="column">
        <Stack
          justifyContent="left"
          alignItems="center"
          direction="column"
          m={3}
        >
          <OptionCardLarge
            image={bookingCardImage}
            title="Make a Reservation"
            path={routes.reservationsView}
          />
        </Stack>
        <Stack justifyContent="left" alignItems="center" direction="row" m={3}>
          <OptionCardSmall
            image={match}
            title="Match"
            path={routes.matchView}
          />
          <OptionCardSmall
            image={predictionCardImage}
            title="Predictions"
            path={routes.tournamentView}
          />
        </Stack>
        <Stack
          justifyContent="left"
          alignItems="center"
          direction="column"
          m={3}
        >
          <OptionCardLarge
            image={ScoreBoardCardImage}
            title="Tournament Leaderboards"
            path={routes.leaderboardView}
          />
        </Stack>
      </Stack>
      <Stack margin="auto">
        <EventsCard alignItems="center" />
      </Stack>
    </Stack>
  </PageTemplate>
  )
}

export default Home;
