import React from "react"

import { Stack } from "@mui/material"
import { Box } from "@mui/material"
 import { Typography } from "@mui/material"

import { routes } from "../components/util/routes"
import { OptionCardLarge } from "../components/home/OptionCardLarge"
import { PageTemplate } from "../templates/PageTemplate"
import { OptionCardSmall } from "../components/home/OptionCardSmall"
import bookingCardImage from "../Images/bookingCardImage.png"
import predictionCardImage from "../Images/predictionCardImage.png"
import ScoreBoardCardImage from "../Images/ScoreBoardCardImage.png"
import match from "../Images/match.png"
import { OpponentCard } from "../components/home/OpponentCard"
import EventsCard from "../components/home/EventsCard"


const Home = () => (
  <PageTemplate>
    <Box>
      <Stack justifyContent="left" alignItems="center" direction="row" m={3}>
        <OptionCardLarge
           image={bookingCardImage}
          title="Make a Reservation"
          path={routes.reservationsView} />
      </Stack>
      <Stack justifyContent="left" alignItems="center" direction="row" m={3}>
        <OptionCardSmall
          image={match}
          title="Match"
          path={routes.matchView} />
        <OptionCardSmall
         image={predictionCardImage}
          title="Predictions"
          path={routes.predictionView} />
      </Stack>
      <Stack justifyContent="left" alignItems="center" direction="row" m={3}>
        <OptionCardLarge
          image={ScoreBoardCardImage}
          title="Tournament Leaderboards"
          path={routes.leaderboardView} />
      </Stack>
    </Box>
    <EventsCard/>
  </PageTemplate>
)
export default Home
