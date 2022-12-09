import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import PropTypes from "prop-types";
import { Paper }from "@mui/material";
import { IconButton, Avatar, Grid, Stack } from "@mui/material";

// TODO object
const style = {
LeaderboardPodiumCard: {
    width: "100%",
    "margin-right": "10px",
    "margin-bottom": "10px",
    height: "80%",
    "border-radius": "20px",
    "background-color": "#F2E0E0",    
  },
  content: {
    background: "#F2E0E0",
  },
};

export const LeaderboardPodiumCard = ({
  avatar,
  username,
  finishingPosition,
  wins,
  totalGames
}) => (
  <Card sx={style.LeaderboardPodiumCard}>
    <CardContent>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Typography variant="subtitle1">
          <b>{username}</b>
        </Typography>
        <Stack>
          <Typography variant="subtitle1">W: {wins}</Typography>
          <Typography variant="subtitle1" component="div">L: {parseInt(totalGames) - parseInt(wins)}</Typography>
        </Stack>
        <Typography varient="h6" component="div" m={1}>
          <b>{finishingPosition}</b>
        </Typography>
      </Stack>
    </CardContent>
  </Card>
);

LeaderboardPodiumCard.propTypes = {
  username: PropTypes.string.isRequired,
  finishingPosition: PropTypes.string.isRequired,
  wins: PropTypes.number.isRequired,
  totalGames: PropTypes.number.isRequired,
};
