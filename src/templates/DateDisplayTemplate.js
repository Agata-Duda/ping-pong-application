import React from "react"
import PropTypes from "prop-types"
import { Typography, Divider, Stack } from "@mui/material"
import { format } from "date-fns"

const DateDisplayTemplate = ({startDate, endDate}) => {

    return (
        <Stack 
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{
                bgcolor: "white",
                px: 2,
                borderRadius: 5
            }}
        >
            <Typography variant="subtitle1">Starts: {format(Date.parse(startDate), "MM/dd/yyyy")}</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="subtitle1">Ends: {format(Date.parse(endDate), "MM/dd/yyyy")}</Typography>
        </Stack>
    )
    
}

DateDisplayTemplate.propTypes = {
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }

export default DateDisplayTemplate