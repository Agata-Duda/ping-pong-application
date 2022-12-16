import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
import { PageTemplate } from "../templates/PageTemplate";
import CreateTournamentButton from "../components/tournament/createTournament/CreateTournamentButton";
import { Stack } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import TournamentsDisplay from "../components/tournament/myTournaments/TournamentsDisplay";
import JoinableTournamentsDisplay from "../components/tournament/joinableTournaments/JoinableTournamentsDisplay";

const PredictionView = () => {

  const { user, tournaments } = useContext(AppContext)

  return (
  <PageTemplate>
        <Stack paddingTop={5}  paddingX={5} direction="row" justifyContent="flex-end">
          <CreateTournamentButton 
            accountType={user.accountType}/>
        </Stack>
      <Stack spacing={2} paddingX={5} paddingBottom={5}>
        <Typography variant="h4">My Tournaments</Typography>
        <Divider />
        <TournamentsDisplay 
          username={user.userName}
        />
        <Typography variant="h4">Joinable Tournaments</Typography>
        <Divider />
        <JoinableTournamentsDisplay 
          tournaments={tournaments}
        />
      </Stack>
    </PageTemplate>
  )
  
}

export default PredictionView;
