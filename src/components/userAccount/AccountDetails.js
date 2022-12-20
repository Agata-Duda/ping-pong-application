import React, {useContext} from "react"

import {Box, Stack} from "@mui/system"
import Divider from "@mui/material/Divider"
import {Typography, TextField } from "@mui/material";

import {style} from "./userStyle"
import {AppContext} from "../../context/appContext";

export const AccountDetails = () => {
    const {user, setUser} = useContext(AppContext);

    return (
        <Box>
            <Divider role={"presentation"} sx={style.Divider}> Account Details </Divider>
            <Stack direction={"row"} justifyContent="space-evenly">
                <Stack direction={"column"} justifyContent="center">
                    <Typography sx={style.Labels}> Account Type </Typography>
                    <Typography
                        sx={style.UserFieldID}>
                        {user.accountType}
                    </Typography>
                </Stack>
                <Stack direction={"column"} justifyContent="center">
                    <Typography sx={style.Labels}> Created On</Typography>
                    <Typography
                        sx={style.UserFields}>
                        {user.createdOn}
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent="space-evenly">
                <Stack direction={"column"} justifyContent="center">
                    <Typography sx={style.Labels}> Last Updated On</Typography>
                    <Typography
                        sx={style.UserFields}>
                        {user.updatedOn}
                    </Typography>
                </Stack>
                <Stack direction={"column"} justifyContent="center">
                    <Typography sx={style.Labels}>Password</Typography>
                    <TextField
                        sx={style.PasswordField}
                        size={"small"}
                        value={user.password}
                        type="password"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Stack>
            </Stack>
        </Box>
    )
}


