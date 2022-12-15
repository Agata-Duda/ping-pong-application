import React, { useState } from "react"

import { Stack } from "@mui/material"

import { PageTemplate } from "../templates/PageTemplate"
import { FutureMatchCard } from "../components/match/FutureMatchCard"
import { LiveMatchCard } from "../components/match/LiveMatchCard"

const MatchView = () => {
return(
    <PageTemplate>
   {/*  TODO try to use one style - below is inline CSS*/}
   <Stack direction="row">
    <Stack direction="column" margin="auto">
   <h3 style={ { textAlign: "center" } }> Live Match </h3>
   <LiveMatchCard />
      </Stack>
      <Stack direction="column" margin="auto">
    <h3 style={ { textAlign: "center" } }> Upcoming Matches </h3>
    <FutureMatchCard alignItems="center"/>
    </Stack>
    </Stack>
    </PageTemplate>
  )
}
export default MatchView
