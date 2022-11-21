import React from "react"

import { PageTemplate } from "../templates/PageTemplate"
import { OpponentCard } from "../components/home/OpponentCard"

const MatchPage = () => (
    <PageTemplate>
   {/*  TODO try to use one style - below is inline CSS*/}
   <h3 style={ { textAlign: "center" } }> Live Match </h3>
    <OpponentCard
        player1Avatar="Avatar1"
        player2Avatar="Avatar2"
        player1Username="Joan Joe"
        player2Username="John Joe"
        matchDate="Tuesday 1st October, 2022"
        matchStartTime="12:15"/>
    </PageTemplate>
  )
export default MatchPage
