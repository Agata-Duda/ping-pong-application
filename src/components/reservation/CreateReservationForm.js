import React, { useState, useEffect } from "react"
import axios from "axios"
import Select from "react-select"
import { useForm, Controller } from "react-hook-form"
import toast from "react-hot-toast"
import { v4 } from "uuid"

import { Tournament_URL, GET_ALL_USERS, postBooking } from "../util/ApiMethods"
import { Typography, Button, Box, Stack } from "@mui/material"

const styles = {

  buttonSubmit: {
    color: 'white',
    margin: '4rem',
    width: '6rem',
    backgroundColor: '#FF0041',
    '&:hover': {
      backgroundColor: '#FF0041',
      borderColor: '#0062cc',
      boxShadow: '1px 1px 3px 1px #00193A;',
    },
  }
}


export default function CreateReservationForm ({ timeDate, closeDrawer }) {
  const [ userNames, setUserName ] = useState([]);
  const [ tournaments, setTournaments ] = useState([]);
  const { control, handleSubmit, formState: { errors } } = useForm()
  const [ selectedPlayerOne, setSelectedPlayerOne ] = useState(null)
  const [ selectedPlayerTwo, setSelectedPlayerTwo ] = useState(null)
  const [ selectedTournament, setSelectedTournament ] = useState(null)
  const [ selectedSets, setSelectedSets ] = useState(null)

  const setsOptions = [
    { value: "1", label: "1"},
    { value: "3", label: "3"},
    { value: "5", label: "5"},
  ]

  useEffect(() => {
    const fetchUsers = async () => {
      await axios(`${GET_ALL_USERS}`).then((res) =>{
      const mappedUsers = res.data.response?.map((d) => {
        return({
          label: d.userName,
          value: d.userId})
        });
        setUserName(mappedUsers)
      }
      );
    };
    fetchUsers()
  }, []);

  useEffect(() => {
    const fetchTournament = async () => {
      await axios.get(`${Tournament_URL}`).then((res) =>{
      const mappedTournaments = res.data.response?.map((d) => {
        return({
          label: d.tournamentName,
          value: d.tournamentId })
        });
        setTournaments(mappedTournaments)
      }
      );
    };
    fetchTournament()
  }, []);

  const onSubmitReservation = () => {
      postBooking({
        booking_id:  v4(),
        player_1: selectedPlayerOne.value,
        player_2: selectedPlayerTwo.value,
        sets: parseInt(selectedSets.value),
        event_start: timeDate.start,
        event_finish: timeDate.end,
        player_1_score: null,
        player_2_score: null,
        tournament_id: selectedTournament.value
      })
        closeDrawer()
      toast.success("Reservation Created Successfully!")

      }

  return (
    <form onSubmit={handleSubmit(onSubmitReservation)} padding={5} sx={{minWidth: 120}}>

      <Typography align="center"> Start Time:  {new Date(timeDate.start).toString().split('+')[0]}</Typography>
      <Typography align="center" paddingBottom={5}> End Time: {new Date(timeDate.end).toString().split('+')[0]} </Typography>

      <Stack spacing={3} direction="column" paddingLeft={1} paddingRight>
        <Stack spacing={0}>
        <Typography fontWeight={'bold'}> Select Player One </Typography>
        <Controller 
          control={control}
          name="SelectPlayerOne"
          render={({ field }) => 
          <Select
            {...field}
            options={userNames}
            onChange={setSelectedPlayerOne}
            defaultValue={selectedPlayerOne}
            placeholder="Select Player One"
            required
            error={!!errors.SelectPlayerOne}
            helperText={errors.SelectPlayerOne && `${errors.SelectPlayerOne.message}`}
          />
        }
        />
        </Stack>
        <Stack spacing={0}>
        <Typography fontWeight={'bold'}> Select Player Two </Typography>
        <Controller 
          control={control}
          name="SelectPlayerTwo"
          render={({ field }) => 
          <Select
            {...field}
            label="Select Player Two"
            options={userNames}
            onChange={setSelectedPlayerTwo}
            defaultValue={selectedPlayerTwo} 
            placeholder="Select Player Two"
            required
            error={!!errors.SelectPlayerTwo}
            helperText={errors.SelectPlayerTwo && `${errors.SelectPlayerTwo.message}`}
          />
        }
        />
        </Stack>
        <Stack spacing={0}>
        <Typography fontWeight={'bold'}> Select Tournament </Typography>
        <Controller 
          control={control}
          name="SelectTournamentName"
          render={({ field }) => 
          <Select 
            {...field}
            options={tournaments}
            onChange={setSelectedTournament}
            defaultValue={selectedTournament} 
            placeholder="Select Tournament"
            required
            error={!!errors.SelectTournamentName}
            helperText={errors.SelectTournamentName && `${errors.SelectTournamentName.message}`}
          />
        }
        />
        </Stack>
        <Stack spacing={0}>
        <Typography fontWeight={'bold'}> Select Set Number </Typography>
        <Controller 
          control={control}
          name="SelectSets"
          render={({ field }) => 
          <Select 
            {...field}
            options={setsOptions}
            onChange={setSelectedSets}
            defaultValue={setSelectedSets} 
            placeholder="Select Set"
            required
            error={!!errors.SelectSets}
            helperText={errors.SelectSets && `${errors.SelectSets.message}`}
          />
        }
        />
        
        </Stack>
      <Box align="center"> <Button sx={styles.buttonSubmit} type="submit"> Submit </Button></Box>
     
      </Stack>
    </form>
  )
}
