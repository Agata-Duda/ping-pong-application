import React, {useContext} from "react"

import {Box, Stack} from "@mui/system"
import Divider from "@mui/material/Divider"
import {Typography} from "@mui/material";

import {style} from "./userStyle"
import {AppContext} from "../../context/appContext";

export const UserProgress= () => {
    const {user, setUser} = useContext(AppContext);
    console.log(user)

    return (
        <Box>
            <Divider role={"presentation"} sx={style.Divider}> Progress Details </Divider>
            <Stack direction={"row"} justifyContent="space-evenly">
                <Stack direction={"column"} justifyContent="center">
                    <Typography sx={style.Labels}> Total Games </Typography>
                    <Typography
                        sx={style.UserFieldID}>
                        {user.totalGames}
                    </Typography>
                </Stack>
                <Stack direction={"column"} justifyContent="center">
                <Typography sx={style.Labels}> Wins </Typography>
                <Typography
                    sx={style.UserFields}>
                    {user.wins}
                </Typography>
                </Stack>
                </Stack>
                <Typography sx={style.Labels}> Losses </Typography>
                <Typography
                    sx={style.UserFields}>
                    {user.totalGames - user.wins}
                </Typography>
        </Box>
    )
}


