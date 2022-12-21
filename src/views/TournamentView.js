import React, { useContext, useEffect, useState } from "react";
import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CreateTournamentButton from "../components/tournament/createTournament/CreateTournamentButton";
import JoinableTournamentsDisplay from "../components/tournament/joinableTournaments/JoinableTournamentsDisplay";
import TournamentsDisplay from "../components/tournament/myTournaments/TournamentsDisplay";
import { getAllTournaments } from "../components/util/ApiMethods";
import { AppContext } from "../context/appContext";
import { PageTemplate } from "../templates/PageTemplate";

const PredictionView = () => {

  const { user } = useContext(AppContext)
  const [tournaments, setTournaments] = useState()

  useEffect(() => {
    getAllTournaments().then(response => setTournaments(response.data.response))
  },[])

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
