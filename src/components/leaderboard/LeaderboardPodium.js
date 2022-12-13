import { SORT_ARRAY_BY_WINS } from "../util/functions"
import { LeaderboardPodiumCard } from "./LeaderboardPodiumCard"
import {Card, CardContent, CardMedia, Stack, Box, Grid, Typography, Paper} from "@mui/material"

import medalFirst from "../../Images/medalFirst.png"
import medalSecond from "../../Images/medalSecond.png"
import medalThird from "../../Images/medalThird.png"
import podium from "../../Images/podium.png"

const LeaderboardPodium = (props) => {

    if (props.enoughEntries === true) {

      const podiumPositions = props.leaderboardEntries.sort(SORT_ARRAY_BY_WINS)

      return (
        <Grid container columnSpacing={2} rowSpacing={2}>
            <Grid item xs={12} sm={12} md={12}>
            <LeaderboardPodiumCard
                username = {podiumPositions[0].username}
                positionImage = {medalFirst}
                wins = {podiumPositions[0].wins}
                totalGames = {podiumPositions[0].total_games}
                position = "1st"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
            <LeaderboardPodiumCard
                username = {podiumPositions[1].username}
                positionImage = {medalSecond}
                wins = {podiumPositions[1].wins}
                totalGames = {podiumPositions[1].total_games}
                position = "2nd"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
            <LeaderboardPodiumCard
                username = {podiumPositions[2].username}
                positionImage = {medalThird}
                wins = {podiumPositions[2].wins}
                totalGames = {podiumPositions[2].total_games}
                position = "3rd"
              />
            </Grid>
        </Grid>
      )
    }
    
    else return (
      <Card sx={{ border: 1, borderRadius: 5}}>
        <CardContent sx={{padding: 1}}>
          <Stack spacing={1} justifyContent="space-evenly" alignItems="center">
            <Box justifyItems="center" alignSelf="center" width="50%">
              <Paper sx={{background: "transparent"}} elevation={0}>
                <CardMedia
                  sx={{
                    bgcolor: "transparent"}}
                    image={podium}
                    component="img"
                    width="100%"
                    alt={"Not Enough Players to Display Podium"}
                  />
            </Paper>
          </Box>
          <Typography>
              Not Enough Players to Display Podium
            </Typography>
        </Stack>
      </CardContent>
    </Card>
    )
}

export default LeaderboardPodium