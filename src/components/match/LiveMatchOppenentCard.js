import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Stack } from "@mui/system"
import { Button } from "@mui/material"
import ScoreComponent from "./ScoreComponent"
import { getBookingById } from "../util/ApiMethods"



// TODO object
const style = {
  "opponentCard": {
    "width": "650px",
    "margin-right": "10px",
    "margin-bottom": "10px",
    "height": "370px",
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
const LiveMatchOpponentCard = ({
    player1Username, 
    player2Username, 
    matchDate, 
    matchStartTime, 
    setNumber, 
    scorePlayer1,
    scorePlayer2,
    setScorePlayer1, 
    setScorePlayer2}) => {


const incrementScorePlayer1 = (index) => {
    // let initialScore = scorePlayer1
    scorePlayer1[index] = scorePlayer1[index] + 1
    setScorePlayer1(scorePlayer1)
    console.log(scorePlayer1)
}

const incrementScorePlayer2 = (index) => {
    scorePlayer2[index] = scorePlayer2[index] + 1
    setScorePlayer2(scorePlayer2)
    console.log(scorePlayer2)
}

const decrementScorePlayer1 = (index) => {
    if(scorePlayer1[index] > 0){
    scorePlayer1[index] = scorePlayer1[index] - 1
    setScorePlayer1(scorePlayer1)
    console.log(scorePlayer1)
    }
}

const decrementScorePlayer2 = (index) => {
    if(scorePlayer2[index] > 0){
    scorePlayer2[index] = scorePlayer2[index] - 1
    setScorePlayer2(scorePlayer2)
    console.log(scorePlayer2)
    }
}

useEffect(() => {
  console.log("1") 
}, [incrementScorePlayer1, incrementScorePlayer2])

return(
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
        <Stack justifyContent="center" alignItems="center" direction="column">
            <Typography variant="h5">Score</Typography>
            <ScoreComponent
            setNumber={setNumber}
            incrementPlayer1={incrementScorePlayer1} 
            incrementPlayer2={incrementScorePlayer2}
            decrementPlayer1={decrementScorePlayer1} 
            decrementPlayer2={decrementScorePlayer2}
            scorePlayer1={scorePlayer1}
            scorePlayer2={scorePlayer2}
            />
            <Button>Submit</Button>
        </Stack>
    </CardContent>
  </Card>
)
}
LiveMatchOpponentCard.propTypes = {
  playerOneUsername: PropTypes.object,
  playerTwoUsername: PropTypes.object,
  matchDate: PropTypes.string,
  matchStartTime: PropTypes.string
}

export default LiveMatchOpponentCard