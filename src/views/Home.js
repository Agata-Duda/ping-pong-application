import React from "react"
import { routes } from "../components/util/util"
import { OptionCard } from "../components/home/OptionCard"
import { PageTemplate } from "../templates/PageTemplate"
import { Stack } from "@mui/material"
import { OptionCardSmall } from "../components/home/OptionCardSmall"
import { OpponentCard } from "../components/home/OpponentCard"

const Home = () => (
  <PageTemplate>
    <div className="OptionCardsDiv">
      <Stack justifyContent="left" alignItems="center" direction="row" m={3}>
        <OptionCard
          // image={bookingCardImage}
          title="Make a Reservation"
          path={routes.bookingPage} />
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
        <OptionCard
          // image={}
          title="Tournament Leaderboards"
          path={routes.scoreBoardPage} />
      </Stack>
      </div>
      <div className="OpponentCardDiv">
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
