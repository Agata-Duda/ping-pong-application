import React, { useState, useEffect } from "react"
import axios from "axios"
import Select from "react-select"
import { useForm, Controller } from "react-hook-form"
import { v4 } from "uuid"
import toast from "react-hot-toast"

import { GET_ALL_TOURNAMENTS_URL, GET_ALL_USERS, postBooking } from "../util/ApiMethods"

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
    const fetchUsers = async () => {
      await axios.get(`${GET_ALL_TOURNAMENTS_URL}`).then((res) =>{
      const mappedTournaments = res.data.response?.map((d) => {
        return({
          label: d.tournamentName,
          value: d.tournamentId })
        });
        setTournaments(mappedTournaments)
      }
      );
    };
    fetchUsers()
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
      window.location.reload();
      }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmitReservation)}>
      <label> Start Time : </label>
      <label> {new Date(timeDate.start).toString()}</label> <br/>
      <label> End Time : </label>
      <label> {new Date(timeDate.end).toString()}</label> <br/>

      <label> Select Player One </label>
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
       <br/>
      <label> Select Player Two </label>
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
      <br/>
      <label> Select Tournament </label>
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
      <br/>
      <label> Select Set Number </label>
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
      <br/>
      <button type="submit"> Submit </button>
    </form>
    </>
  )
}
