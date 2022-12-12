import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import React from "react"
import PropTypes from "prop-types"
import { Stack } from "@mui/system"



// TODO object
const style = {
  "opponentCard": {
    "width": "430px",
    "margin-right": "10px",
    "margin-bottom": "10px",
    "height": "160px",
    "border-radius": "20px",
    "background-color": "#F2E0E0"
  },
  "content": {
    "background": "#F2E0E0"
  },
  "playerStack1": {
    "margin-left": "5px",
    "margin-right": "10px"
  },
  "playerStack2": {
    "margin-left": "10px",
    "margin-right": "5px"
  }
}

export const OpponentCard = ({ player1Avatar, player2Avatar, player1Username, player2Username, matchDate, matchStartTime }) => (
  <Card sx={style.opponentCard}>
    <CardContent>
    <Stack justifyContent="center" alignItems="center" direction="row" >
    <Typography variant="subtitle1">
            <b>{matchDate}</b>
    </Typography>
    </Stack>
    <Stack justifyContent="center" alignItems="center" direction="row">
    <Stack sx={style.playerStack1} justifyContent="left" alignItems="left" direction="column">
        <Typography variant="subtitle1">
            {player1Username}
        </Typography>
        </Stack>
        <Stack justifyContent="center" align="center" direction="column">
            <Typography varient="h6" component="div">
                Vs
            </Typography>
            <Typography varient="h6" component="div" m={1}>
                <b>{matchStartTime}</b>
            </Typography>
        </Stack>
        <Stack sx={style.playerStack2} justifyContent="right" alignItems="right" direction="column">
            <Typography variant="subtitle1" component="div">
                {player2Username}
            </Typography>
        </Stack>
        </Stack>
    </CardContent>
  </Card>
)
OpponentCard.propTypes = {
  playerOneUsername: PropTypes.object,
  playerTwoUsername: PropTypes.object,
  matchDate: PropTypes.string,
  matchStartTime: PropTypes.string
}
