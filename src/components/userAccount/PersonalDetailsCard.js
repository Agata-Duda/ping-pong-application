import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import React from "react"
import PropTypes from "prop-types"
import { Stack } from "@mui/system"
import Divider from "@mui/material/Divider";

const style = {
    PersonalDetailsCard: {
        width: "360px",
        marginRight: "10px",
        marginBottom: "10px",
        height: "550px",
        borderRadius: "20px",
        backgroundColor: "#F2E0E0"
    }
}

export const PersonalDetailsCard = () => (
    <Card sx={style.PersonalDetailsCard}>
        <CardContent>
           <Stack direction={"column"}>
               <Divider textAlign={"center"}> Personal Details </Divider>
               <Divider textAlign={"center"}> Work Details </Divider>

           </Stack>
        </CardContent>
    </Card>
)
PersonalDetailsCard.propTypes = {
    playerOneUsername: PropTypes.object,
    playerTwoUsername: PropTypes.object,
    matchDate: PropTypes.string,
    matchStartTime: PropTypes.string
}
