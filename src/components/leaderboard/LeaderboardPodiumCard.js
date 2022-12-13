import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import PropTypes from "prop-types";
import { CardMedia, Divider, Icon, Paper, paperClasses }from "@mui/material";
import { IconButton, Avatar, Grid, Stack, Box } from "@mui/material";
import { border, borderRadius } from "@mui/system";

// TODO object
const style = {
LeaderboardPodiumCard: {
    width: "100%",
    height: "100%",
    "border-radius": "20px",
    "background-color": "#F2E0E0",
    border: 1 
  },
  content: {
    background: "#F2E0E0",
  },
};

export const LeaderboardPodiumCard = ({
  position,
  username,
  positionImage,
  wins,
  totalGames
}) => (
  <Card sx={
    style.LeaderboardPodiumCard}>
    <CardContent>
      <Stack direction="row" spacing={1} justifyContent="space-evenly" alignItems="center">
        <Box 
          justifyItems="center" 
          alignSelf="center"
          width={position === "1st" ? "20%" : "40%"}
        >
            <CardMedia
              sx={{
                bgcolor: "white",
                py: 1,
                border: 1,
                borderColor:"#00193A",
                borderRadius: 5
              }}
                image={positionImage}
                component="img"
                height="50%"
                width="50%"
                alt={position}
              />
        </Box>
        <Stack alignItems="center" justifyContent="space-between" spacing={2}>
          <Typography variant={position === "1st" ? "h4" : "h6"}>
            <b>{username}</b>
          </Typography>
            <Stack 
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              sx={{
                bgcolor: "white",
                px: 2,
                borderRadius: 5
              }}
            >
              <Typography variant={position === "1st" ? "h6" : "subtitle1"}>W: {wins}</Typography>
              <Divider orientation="vertical" flexItem />
              <Typography variant={position === "1st" ? "h6" : "subtitle1"} component="div">L: {parseInt(totalGames) - parseInt(wins)}</Typography>
            </Stack>
        </Stack>
      </Stack>
    </CardContent>
  </Card>
);

LeaderboardPodiumCard.propTypes = {
  username: PropTypes.string.isRequired,
  positionImage: PropTypes.any.isRequired,
  wins: PropTypes.number.isRequired,
  totalGames: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
};
