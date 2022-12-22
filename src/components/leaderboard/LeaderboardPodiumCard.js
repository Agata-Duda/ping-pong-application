import React from "react";
import PropTypes from "prop-types";
import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { styles } from "../util/styles";
import ValuePillDisplayTemplate from "../../templates/WinLossDisplayTemplate";

// TODO object

export const LeaderboardPodiumCard = ({
  position,
  username,
  positionImage,
  wins,
  totalGames,
}) => (
  <Card sx={styles.LeaderboardPodiumCard}>
    <CardContent>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box
          justifyItems="center"
          alignSelf="center"
          width={position === "1st" ? "20%" : "40%"}
        >
          <CardMedia
            sx={{
              bgcolor: "white",
              py: 1,
              borderRadius: 5,
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
          <ValuePillDisplayTemplate
            wins={wins}
            totalGames={totalGames}
            position={position}
          />
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
