import React from "react"
import { Stack } from "@mui/material"

import { routes } from "../components/util/util"
import { OptionCardLarge } from "../components/home/OptionCardLarge"
import { PageTemplate } from "../templates/PageTemplate"
import { OptionCardSmall } from "../components/home/OptionCardSmall"
import { OpponentCard } from "../components/home/OpponentCard"

const Home = () => (
  <PageTemplate>
    {/*  TODO: Box instead of div, we have mui*/}
    <div className="OptionCardsDiv">
      <Stack justifyContent="left" alignItems="center" direction="row" m={3}>
        <OptionCardLarge
          // image={bookingCardImage}
          title="Make a Reservation"
          path={routes.reservationsPage} />
      </Stack>
      <Stack justifyContent="left" alignItems="center" direction="row" m={3}>
        <OptionCardSmall
          // image={Matchimage}
          title="Match"
          path={routes.matchPage} />
        <OptionCardSmall
          // image={PredictionsImage}
          title="Predictions"
          path={routes.predictionPage} />
      </Stack>
      <Stack justifyContent="left" alignItems="center" direction="row" m={3}>
        <OptionCardLarge
          // image={}
          title="Tournament Leaderboards"
           // TODO this url not exists
          path={routes.scoreBoardPage} />
      </Stack>
    </div>
      {/*  TODO: Box instead of div, we have mui*/}
      <div className="OpponentCardDiv">
          {/*  TODO: Typography instead of h3, we have mui*/}
          {/*<Typography variant="h3">*/}
          {/*     Your Next Match */}
          {/*</Typography>*/}
          <h3 style={ { textAlign: "center" } }> Your Next Match </h3>
      <OpponentCard
        player1Avatar="Avatar1"
        player2Avatar="Avatar2"
        player1Username="Joan Joe"
        player2Username="John Joe"
        matchDate="Tuesday 1st October, 2022"
        matchStartTime="12:15"/>
      <h3 style={ { textAlign: "center" } }> Upcoming Matches </h3>
      <OpponentCard
        player1Avatar="Avatar1"
        player2Avatar="Avatar2"
        player1Username="Joan Joe"
        player2Username="John Joe"
        matchDate="Tuesday 1st October, 2022"
        matchStartTime="12:15"/>
      <OpponentCard
        player1Avatar="Avatar1"
        player2Avatar="Avatar2"
        player1Username="Joan Joe"
        player2Username="John Joe"
        matchDate="Tuesday 1st October, 2022"
        matchStartTime="12:15"/>
    </div>
  </PageTemplate>
)
export default Home
