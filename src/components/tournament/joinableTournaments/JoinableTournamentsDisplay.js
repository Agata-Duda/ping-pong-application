import React, { useEffect } from "react";
import JoinableTournamentsCard from "./JoinableTournamentsCard";
import { Stack } from "@mui/system";
import PropTypes from "prop-types";

const JoinableTournamentsDisplay = ({tournaments}) => {

  return ( 
    <Stack direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
      {
        tournaments?.filter(entry => Date.parse(entry.startedOn) > Date.now()).map((entry, index) => (
            <JoinableTournamentsCard
              key={"tournament-card" + index}
              tournamentName={entry.tournamentName}
              start={entry.startedOn}
              end={entry.endedOn}
            />
        ))
      }
    </Stack>
  )
}

JoinableTournamentsDisplay.propTypes = {

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

export default JoinableTournamentsDisplay;
