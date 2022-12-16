import React from "react"
import { Modal, Box } from "@mui/material"
import CreateTournamentForm from "./CreateTournamentForm"
import { styles } from "../../util/styles"

const CreateTournamentModal = ({open, handleClose}) => {


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="create-tourament-modal"
            aria-describedby="create-tourament-modal"
        >
            <Box
                sx={styles.createTournamentBox}
            >
                <CreateTournamentForm 
                    handleClose={handleClose}
                />
            </Box>
        </Modal>
    )
    
}

export default CreateTournamentModal