import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { toast, Toast } from "react-hot-toast"
import PropTypes from "prop-types"
import { Stack } from "@mui/system"
import { Button } from "@mui/material"

import ScoreComponent from "./ScoreComponent"
import { updateReservationByIdGameCompletion } from "../util/ApiMethods"



const style = {
  opponentCard: {
    width: "650px",
    marginRight: "10px",
    marginBottom: "10px",
    height: "370px",
    borderRadius: "20px",
    backgroundColor: "#F2E0E0"
  },
  content: {
    background: "#F2E0E0"
  },
  playerStack1: {
    marginLeft: "5px",
    marginRight: "10px"
  },
  playerStack2: {
    marginLeft: "10px",
    marginRight: "5px"
  }
}

const LiveMatchOpponentCard = ({
    bookingId,
    loggedInUser,
    player1Username, 
    player2Username,
    eventStart,
    eventEnd,
    tournament,
    matchDate, 
    matchStartTime, 
    setNumber}) => {

const [scorePlayer1, setScorePlayer1] = useState([0,0,0,0,0])
const [scorePlayer2, setScorePlayer2] = useState([0,0,0,0,0])

const incrementScorePlayer1 = (index) => {
    const scoreCounterPlayer1 = [...scorePlayer1]
    scoreCounterPlayer1[index] += 1
    setScorePlayer1(scoreCounterPlayer1)
}

const incrementScorePlayer2 = (index) => {
    const scoreCounterPlayer2 = [...scorePlayer2]
    scoreCounterPlayer2[index] += 1
    setScorePlayer2(scoreCounterPlayer2)
}

const decrementScorePlayer1 = (index) => {
    const scoreCounterPlayer1 = [...scorePlayer1]
    if(scoreCounterPlayer1[index] > 0){
    scoreCounterPlayer1[index] -=  1
    setScorePlayer1(scoreCounterPlayer1)
    }
}

const decrementScorePlayer2 = (index) => {
    const scoreCounterPlayer2 = [...scorePlayer2]
    if(scoreCounterPlayer2[index] > 0){
    scoreCounterPlayer2[index] -= 1
    setScorePlayer2(scoreCounterPlayer2)
    }
}

const determineWinner = () => {
  const scoreCounterPlayer1 = [...scorePlayer1]
  const scoreCounterPlayer2 = [...scorePlayer2]
  let player_1Score = 0;
  let player_2Score = 0;
  
  for (let index = 0; index < setNumber; index++) {
    if (scoreCounterPlayer1[index] > scoreCounterPlayer2[index]) {
      player_1Score += 1
    } if (scoreCounterPlayer2[index] > scoreCounterPlayer1[index]) {
      player_2Score += 1
    }
  } 

  updateReservationByIdGameCompletion(bookingId,loggedInUser,{
    booking_id: bookingId,
    player_1: player1Username,
    player_2: player2Username,
    sets: setNumber,
    event_start: eventStart,
    event_finish: eventEnd,
    tournamentName: tournament,
    player_1_score: player_1Score,
    player_2_score: player_2Score
  }).then(toast.success("Scores Submitted"))
}

const onSubmitScore = () => {
  determineWinner()
}

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
            <Button onClick={onSubmitScore}>Submit</Button>
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