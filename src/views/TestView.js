import { PageTemplate } from "../templates/PageTemplate"
import { OptionCardLarge } from "../components/home/OptionCardLarge"
import { Stack } from "@mui/material"
import ScoreBoardCardImage from "../Images/ScoreBoardCardImage.png"
import bookingCardImage from "../Images/bookingCardImage.png"
import predictionCardImage from "../Images/predictionCardImage.png"
import { routes } from "../components/util/util"
import React from "react"
export const TestView = () => (
    <PageTemplate>
      <Stack direction="row" m={3}>
        <OptionCardLarge
          image={bookingCardImage}
          title="Booking"
          description="Book a 15 minute Ping Pong Slot"
           // TODO check urls
          path={routes.bookingPage}
        />
        <OptionCardLarge
          image={predictionCardImage}
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