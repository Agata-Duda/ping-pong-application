import React from "react"
import {Box, Stack, Typography} from "@mui/material"
import notFoundImg from "./notFoundimg.png"

const NotFoundComp = () => {

    return (
        <Stack justifyContent="center" alignItems="center" direction="column" m={5}>
            <img width="400px" height="300px" src={notFoundImg} />
            <Box paddingTop={2}>
                <Typography variant={"h6"}> Page Not Found </Typography>
            </Box>
        </Stack>
    )
}
export default NotFoundComp

