import React from "react"

import {Stack, Typography} from "@mui/material"

import { PageTemplate } from "../templates/PageTemplate"
import { FutureMatchCard } from "../components/match/FutureMatchCard"
import { LiveMatchCard } from "../components/match/LiveMatchCard"

const MatchView = () => {
return(
    <PageTemplate>
   <Stack direction="row">
    <Stack direction="column" margin="auto">
   <h3 style={ { textAlign: "center" } }> Live Match </h3>
        <Typography variant={"h6"} textAlign={"center"}> Submit scores before timer runs out </Typography>
   <LiveMatchCard />
      </Stack>
      <Stack direction="column" margin="auto">
    <h3  style={ { textAlign: "center" } }> Upcoming Matches </h3>
    <FutureMatchCard alignItems="center"/>
    </Stack>
    </Stack>
    </PageTemplate>
  )
}
export default MatchView
