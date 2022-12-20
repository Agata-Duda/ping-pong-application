import React, {useContext, useState, useEffect} from "react";

import {Stack, Typography} from "@mui/material"
import Divider from "@mui/material/Divider";

import {style} from "./userStyle";
import {AppContext} from "../../context/appContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Box} from "@mui/system";


const UserTextField = () => {
    const { user, setUser } = useContext(AppContext);
    const [job, setJob ]=useState({})

    useEffect(()=> {
        setJob(user.jobTitle)
    },[])

    // function firstLetterUpper(job) {
    //     let newString = job.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
    //     return newString;
    // }


    return (
        <Card sx={style.PersonalDetailsCard}>
            <CardContent>
                <Box>
                    <Stack sx={style.PersonalDetailsStack} direction={"column"}>
                        <Stack spacing={0} direction={"column"}  justifyContent="flex-start">
                            <Divider role={"presentation"} sx={style.Divider}> Personal Details </Divider>
                            <Typography sx={style.Labels}> ID </Typography>
                            <Typography sx={style.UserFieldID}>
                                {user.userId}
                            </Typography>
                            <Typography sx={style.Labels}> Username </Typography>
                            <Typography
                                sx={style.UserFields}>
                                {user.userName}
                            </Typography>
                            <Typography sx={style.Labels}> First Name </Typography>
                            <Typography
                                sx={style.UserFields}>
                                {user.firstName}
                            </Typography>
                            <Typography sx={style.Labels}> Last Name </Typography>
                            <Typography
                                sx={style.UserFields}>
                                {user.lastName}
                            </Typography>
                            <Divider role={"presentation"} sx={style.Divider}> Work Details </Divider>
                            <Typography sx={style.Labels}> Job Description</Typography>
                            <Typography
                                sx={style.UserFields}>
                                {user.jobTitle?.title}
                            </Typography>
                            <Typography sx={style.Labels}> Work Email </Typography>
                            <Typography
                                sx={style.UserFields}>
                                {user.email}
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    )
}


export default UserTextField;
