import React, { useEffect, useState } from "react";
import { GetAllLeaderboardEntriesByUsername } from "../../util/ApiMethods";
import MyTournamentsCard from "./MyTournamentsCard";
import { Stack } from "@mui/system";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

const TournamentsDisplay = ({username}) => {
  const [myLeaderboardEntries, setMyLeaderboardEntries] = useState([]);

  useEffect(() => {
    GetAllLeaderboardEntriesByUsername(username).then((response) => {
        setMyLeaderboardEntries(response.data.response)
      })
  },[])

  return ( 
    <Grid container direction="row" alignItems="center" justifyContent="flex-start" spacing={2}>
      {
        myLeaderboardEntries.map((entry, index) => (
          <Grid item xs={6} sm={6} md={4} lg={2}>
            <MyTournamentsCard
              key={"tournament-card" + index}
              tournamentName={entry.tournamentName}
              wins={entry.wins}
              totalGames={entry.total_games}
            />
          </Grid>        
        ))
      }
      </Grid>

  )
}

TournamentsDisplay.propTypes = {

    title: PropTypes.string,

    tournaments: PropTypes.arrayOf(PropTypes.shape({
      tournamentId: PropTypes.string,
      tournamentName: PropTypes.string,
      tournamentType: PropTypes.string,
      createdOn: PropTypes.string,
      startedOn: PropTypes.string,
      endedOn: PropTypes.string
    })),

    username: PropTypes.string
  }

export default TournamentsDisplay;
