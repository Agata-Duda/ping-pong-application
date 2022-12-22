import React, {useContext, useEffect, useState} from "react"

import {Box, Stack} from "@mui/system"
import {Button, Typography} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import {style} from "./userStyle"
import {UserProgress} from "./UserProgress";
import {AccountDetails} from "./AccountDetails";
import UpdateUserDetailsForm from "./UpdateUserDetailsForm"
import {useQuery} from "react-query";
import {getUserByID} from "../util/ApiMethods";
import {AppContext} from "../../context/appContext";

export const ProgressAccountCard = () => {
    const [openDrawer, setOpenDrawer] = useState('')
    const DrawerTriggerOpen = () => {
        setOpenDrawer(true)
    }
    const DrawerTriggerClose = () => {
        setOpenDrawer(false);
    };
    const handleAwayClick = () => {
        setOpenDrawer(false);
    };

    return (
        <Card sx={style.WorkDetailsCard}>
            <CardContent>
                <Box>
                    <Stack direction={"column"} spacing={4} justifyContent={"center"} paddingLeft={1} paddingRight={1}>
                        <UserProgress/>
                        <AccountDetails/>
                        <Box align="center">
                            <Button sx={style.buttonSubmit} onClick={DrawerTriggerOpen}> Update </Button>
                        </Box>
                        <Drawer
                            open={openDrawer}
                            closable="true"
                            anchor={"right"}
                            varient={"temporary"}
                            onClose={handleAwayClick}
                            PaperProps={{
                                sx: {
                                    width: 500,
                                },
                            }}>
                            <Typography paddingTop={3} variant="h6" align="center" fontWeight={'bold'}> Update User Details </Typography>
                            <UpdateUserDetailsForm DrawerTriggerClose={DrawerTriggerClose}/>
                        </Drawer>
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    )
}


