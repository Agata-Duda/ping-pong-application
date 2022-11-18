import * as React from "react"
import Select from "react-select"
import { useForm } from "react-hook-form"
import { v4 } from "uuid"
import { GET_ALL_TOURNAMENTS_URL, GET_ALL_USERS, postBooking } from "../util/util"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Form ({ timeDate, closeDrawer }) {
  const [ userNames, setUserName ] = useState([]);
  const [ tournaments, setTournaments ] = useState([]);
  const { register, handleSubmit,                 reset } = useForm()
  const [ selectedPlayerOne, setSelectedPlayerOne ] = useState(null)
  const [ selectedPlayerTwo, setSelectedPlayerTwo ] = useState(null)
  const [ selectedTournament, setSelectedTournament ] = useState(null)
  const [ selectedSets, setSelectedSets ] = useState(null)
  const id = v4()

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
    postBooking(
      {
      booking_id: id,
      player_1: selectedPlayerOne.value,
      player_2: selectedPlayerTwo.value,
      sets: parseInt(selectedSets.value),
      event_start: timeDate.start,
      event_finish: timeDate.end, 
      player_1_score: null, 
      player_2_score: null, 
      tournament_id: selectedTournament.value})
    }
  
    const onError = (errors, e) => console.log(errors, e);
  return (
    <>    
    <form onSubmit={handleSubmit(onSubmitReservation, onError)} >
      <label> Start Time : </label>
      <label {...register("event_start")}> {new Date(timeDate.start).toString()}</label> <br/>
      <label> End Time : </label>
      <label {...register("event_finish")}> {new Date(timeDate.end).toString()}</label> <br/>
      <label> Select Player One </label>
      <Select {...register("player_1")} options={userNames} onChange={setSelectedPlayerOne} defaultValue={selectedPlayerOne} placeholder="Select Player one" />
       <br/>
      <label> Select Player Two </label>
      <Select {...register("player_2")} options={userNames} onChange={setSelectedPlayerTwo} defaultValue={selectedPlayerTwo} placeholder="Select Player Two" />
        <br/>
      <label> Select Tournament </label>
      <Select {...register("tournament_name")} options={tournaments} onChange={setSelectedTournament} defaultValue={selectedTournament} placeholder="Select Tournament"/>
      <br/>
      <label> Select Set Number </label>
      <Select {...register("sets")} options={setsOptions} onChange={setSelectedSets} defaultValue={selectedTournament} placeholder="Select Sets"/>
      <br/>
      <button type="submit"> Submit</button>
    </form>  
    <button onClick={closeDrawer}> Close </button>
    </>
  )
}
