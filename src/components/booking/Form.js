// TODO import React from 'react';
// TODO imports order
import React, { useState, useEffect } from "react"
import axios from "axios"
import Select from "react-select"
import { useForm } from "react-hook-form"
import { v4 } from "uuid"
import { GET_ALL_TOURNAMENTS_URL, GET_ALL_USERS, postBooking } from "../util/util"
//Add toast to on submit form and add validation to form from example at end of file 
export default function CreateReservationForm ({ timeDate, closeDrawer }) {
  const [ userNames, setUserName ] = useState([]);
  const [ tournaments, setTournaments ] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm()
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
      //TODO: add toast
      }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmitReservation)}>
      <label> Start Time : </label>
      <label {...register("event_start")}> {new Date(timeDate.start).toString()}</label> <br/>
      <label> End Time : </label>
      <label {...register("event_finish")}> {new Date(timeDate.end).toString()}</label> <br/>

      <label> Select Player One </label>
      <Select {...register("player_1", {required : true})}
      aria-invalid={errors.player_1 ? "true" : "false"} options={userNames} onChange={setSelectedPlayerOne} defaultValue={selectedPlayerOne} placeholder="Select Player one" />
      {errors.player_1?.type === 'required' && <p role="alert">Player One is required</p>}
       <br/>

      <label> Select Player Two </label>
      <Select {...register("player_2", {required : true})} options={userNames} onChange={setSelectedPlayerTwo} defaultValue={selectedPlayerTwo} placeholder="Select Player Two"
      aria-invalid={errors.player_2 ? "true" : "false"} />
      {errors.player_1?.type === 'required' && <p role="alert">Player Two is required</p>}
        <br/>

      <label> Select Tournament </label>
      {/* TODO Tip: at the end of this file you can find useful validation, you can use it*/}
      <Select {...register("tournament_name",{required : true})} options={tournaments} onChange={setSelectedTournament} defaultValue={selectedTournament} placeholder="Select Tournament"
      aria-invalid={errors.tournament_name ? "true" : "false"} />
      {errors.tournament_name?.type === 'required' && <p role="alert">Tournament name is required</p>}
      <br/>

      <label> Select Set Number </label>
      <Select {...register("sets", {required : true})} options={setsOptions} onChange={setSelectedSets} defaultValue={selectedTournament} placeholder="Select Sets"
      aria-invalid={errors.sets ? "true" : "false"} />
      {errors.sets?.type === 'required' && <p role="alert">Sets is required</p>}
      <br/>
      <button type="submit"> Submit </button>
    </form>
    </>
  )
}


//TODO Validation:
// {...register("tournament_name", {
//   required: "Tournament name is required",
//   minLength: {
//     value: 5,
//     message: "Comment must be at least 5 characters",
//   },
//   maxLength: {
//     value: 50,
//     message: "Comment must be under 50 characters",
//   },
// })}
