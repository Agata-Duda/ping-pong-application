import React from "react"
import PropTypes from "prop-types"

import Typography from "@mui/material/Typography"
import { Stack } from "@mui/system"
import { Button } from "@mui/material"



const ScoreComponent = ({
    setNumber, 
    incrementPlayer1, 
    incrementPlayer2, 
    decrementPlayer1, 
    decrementPlayer2,
    scorePlayer1,
    scorePlayer2}) => {

    const setAmount = [] 

    for (let index = 0; index < setNumber; index++) {
        setAmount.push(
    <Stack key={index} justifyContent="center" alignItems="center" direction="row">
        <Button onClick={() => incrementPlayer1(index)}>+</Button>
        <Typography>{scorePlayer1[index]}</Typography>
        <Button onClick={() => decrementPlayer1(index)}>-</Button>
        <Typography>Set {index + 1}</Typography>
        <Button onClick={() => incrementPlayer2(index)}>+</Button>
        <Typography>{scorePlayer2[index]}</Typography>
        <Button onClick={() => decrementPlayer2(index)}>-</Button>
    </Stack>)
    }

    return (<Stack>{ setAmount }</Stack>);
    
}
ScoreComponent.propTypes = {
    setNumber: PropTypes.number,
    incrementPlayer1: PropTypes.func,
    incrementPlayer2: PropTypes.func,
    decrementPlayer1: PropTypes.func,
    decrementPlayer2: PropTypes.func,
    scorePlayer1: PropTypes.arrayOf(PropTypes.number),
    scorePlayer2: PropTypes.arrayOf(PropTypes.number),
}

export default ScoreComponent