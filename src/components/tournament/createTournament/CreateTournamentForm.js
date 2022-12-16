import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { Stack, Typography, TextField, Button, InputLabel } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import Select from "react-select"
import { postTournament } from "../../util/ApiMethods"
import { styles } from "../../util/styles"
import { Box } from "@mui/system"
 
const CreateTournamentForm = ({handleClose}) => {

    const [tournamentName, setTournamentName] = useState("")
    const [tournamentType, setTournamentType] = useState("")
    const [startedOn, setStartedOn] = useState()
    const [endedOn, setEndedOn] = useState()

    const {
        control,
        handleSubmit,
    } = useForm();

    const onSubmit = () => {
        const payload = {
            tournamentName: tournamentName,
            tournamentType: tournamentType,
            startedOn: startedOn,
            endedOn: endedOn
        }
        postTournament(payload).then(handleClose)
    }
    
    const tournamentTypeOptions = [
        {
            label: "Practice",
            value: "Practice"
        },

        {
            label: "Knockout",
            value: "Knockout"
        }
    ]

    const handleTournamentTypeSelectChange = (value) => {
        setTournamentType(value.value)
    }

    return(
    <Stack 
        display='flex' 
        spacing={2} 
        align="center"
        direction="column"
        px={5}
        py={2}
    >
        <Typography fontWeight={'bold'}> Create Tournament </Typography>
        <form onSubmit={handleSubmit(onSubmit)} padding={5}>
          <Stack spacing={2} alignItems="stretch">
            <Controller 
                control={control}
                name="tournament_name"
                render={({ field }) => (
                <TextField variant="outlined" size="small" sx={styles.textFields}
                  {...field}
                  placeholder = "Tournament Name"
                  required
                  value={tournamentName}
                  onChange={e => setTournamentName(e.target.value)}/>
              )}
              />
              <Controller 
                control={control}
                name="tournament_type"
                render={({ field }) => (
              <Select
                  options = {tournamentTypeOptions}
                  onChange = {handleTournamentTypeSelectChange}
                  placeholder = "Tournament Type"
                /> 
              )}
              />
              <Controller 
                control={control}
                name="start_date"
                render={({ field }) => (
                  <Stack alignItems="flex-start">
                    <InputLabel>
                      Start Date
                    </InputLabel>
                    <DatePicker
                      value={startedOn === undefined ? null : startedOn}
                      disablePast={true}
                      onChange={(newValue) => {
                        setStartedOn(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField 
                          {...params}
                          required={true}
                          size="small" 
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "5px"
                          }}
                        />
                      )}
                    />
                </Stack>
              )}
              />
              <Controller 
                control={control}
                name="end-date"
                render={({ field }) => (
                  <Stack alignItems="flex-start">
                    <InputLabel>
                      End Date
                    </InputLabel>
                    <DatePicker
                      value={endedOn === undefined ? null : endedOn}
                      disablePast={true}
                      onChange={(newValue) => {
                        setEndedOn(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField 
                          {...params}
                          required={true} 
                          size="small" 
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "5px"
                          }}
                        />
                      )}
                    />
                  </Stack>
                )}
              />
          </Stack>
          <Button sx={styles.buttonLogin} type="submit">Submit</Button>
        </form>
      </Stack>
    )
}
export default CreateTournamentForm