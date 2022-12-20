import React from "react"
import PropTypes from "prop-types"
import { Typography, Divider, Stack } from "@mui/material"


const WinLossDisplayTemplate = ({wins, totalGames, position}) => {

    return (
        <Stack 
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{
                bgcolor: "white",
                px: 2,
                borderRadius: 5,
                mx: 8
            }}
        >
            <Typography variant={position === "1st" ? "h6" : "subtitle1"}>W: {wins}</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant={position === "1st" ? "h6" : "subtitle1"} component="div">L: {parseInt(totalGames) - parseInt(wins)}</Typography>
        </Stack>
    )
    
}

WinLossDisplayTemplate.propTypes = {
    wins: PropTypes.number,
    totalGames: PropTypes.number,
    position: PropTypes.oneOf(["1st", "2nd", "3rd"])
  }

export default WinLossDisplayTemplate