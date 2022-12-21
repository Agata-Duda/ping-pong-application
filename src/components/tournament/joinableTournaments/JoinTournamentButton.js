import React, { useContext } from "react"
import { Button } from "@mui/material"
import { JoinTournament } from "../../util/ApiMethods"
import { AppContext } from "../../../context/appContext"
import { toast } from "react-hot-toast"
import { styles } from "../../util/styles"

const JoinTournamentButton = ({tournamentName}) => {

    const { user } = useContext(AppContext)

    const handleClick = () => {
        const payload = {
            username: user.userName,
            tournamentName: tournamentName
        }

        JoinTournament(payload)
            .then(() => toast.success("Joined " + tournamentName))
            .catch(error => {
                if(error.response)
                    toast.error("Already a member of this tournament")
                else
                    toast.error("Something went wrong - Try again later")
        })
    }

    return (
        <Button
        sx={styles.buttonLogin}
            onClick={handleClick}
        >
            Join
        </Button>
    )
}

export default JoinTournamentButton