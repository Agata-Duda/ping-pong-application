import React, {useState} from "react"
import { Button, Box, Typography, Tooltip } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import CreateTournamentModal from "./CreateTournamentModal";


const CreateTournamentButton = ({accountType}) => {
    const [openCreateTournamentModal, setOpenCreateTournamentModal] = useState(false);
    const handleOpen = () => setOpenCreateTournamentModal(true);
    const handleClose = () => setOpenCreateTournamentModal(false);


    return (
        <Box>
            <Tooltip
                title = {accountType === "REGULAR" ? "Only Administrators can create tournaments" : null}
            >
                <span>
                    <Button 
                        variant="contained"
                        disabled={accountType !== "ROLE_ADMIN"}
                        startIcon={<AddIcon />}
                        onClick={handleOpen}
                        sx={{
                            backgroundColor: "#00193F",
                            '&: hover': {
                                backgroundColor: "#00193A"
                            }
                        }}
                    >
                        <Typography variant="body">
                            Create Tournament
                        </Typography>
                    </Button>
                </span>
            </Tooltip>
            
            <CreateTournamentModal
                handleClose={handleClose}
                open={openCreateTournamentModal}
            />
        </Box>
    )
}

export default CreateTournamentButton