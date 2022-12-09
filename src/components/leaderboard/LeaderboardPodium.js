import { Grid } from "@mui/material"
import { useEffect } from "react"
import { SORT_ARRAY_BY_WINS } from "../util/functions"
import { LeaderboardPodiumCard } from "./LeaderboardPodiumCard"

const LeaderboardPodium = (props) => {

  useEffect(() => {

  })

    const podiumPositions = props.leaderboardEntries.sort(SORT_ARRAY_BY_WINS)

    return (
      <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={12} md={12}>
          <LeaderboardPodiumCard
              username = {podiumPositions[0].username}
              finishingPosition = "1st Place"
              wins = {podiumPositions[0].wins}
              totalGames = {podiumPositions[0].total_games}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
          <LeaderboardPodiumCard
              username = {podiumPositions[1].username}
              finishingPosition = "2nd Place"
              wins = {podiumPositions[1].wins}
              totalGames = {podiumPositions[1].total_games}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
          <LeaderboardPodiumCard
              username = {podiumPositions[2].username}
              finishingPosition = "3rd Place"
              wins = {podiumPositions[2].wins}
              totalGames = {podiumPositions[2].total_games}
            />
          </Grid>
      </Grid>
    )
    
}

export default LeaderboardPodium