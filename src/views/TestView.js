import React from "react"

import { Stack } from "@mui/material"

import { PageTemplate } from "../templates/PageTemplate"
import { OptionCardLarge } from "../components/home/OptionCardLarge"
import ScoreBoardCardImage from "../Images/ScoreBoardCardImage.png"
import bookingCardImage from "../Images/bookingCardImage.png"
import tournaments from "../Images/tournaments.png"
import { routes } from "../components/util/routes"

export const TestView = () => (
    <PageTemplate>
      <Stack direction="row" m={3}>
        <OptionCardLarge
          image={bookingCardImage}
          title="reservation"
          description="Book a 15 minute Ping Pong Slot"
           // TODO check urls
          path={routes.bookingPage}
        />
        <OptionCardLarge
          image={tournaments}
          title="Prediction service"
          description="Who will win the match?"
          path={routes.predictionPage}
        />
        <OptionCardLarge
          image={ScoreBoardCardImage}
          title="Score boards"
          description="Score Board of Tournaments"
          path={routes.scoreBoardPage}
        />
      </Stack>
    </PageTemplate>
  )