import * as React from "react"
import Select from "react-select"
import { useForm } from "react-hook-form"
import { v4 } from "uuid"
import { GET_ALL_USERS, postBooking } from "../util/util"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Form ({ timeDate }) {
  const [ userNames, setUserName ] = useState([]);
  const { register, handleSubmit, reset } = useForm()
  const id = v4()

  useEffect(() => {
    const fetchUsers = async () => {
      await axios(`${GET_ALL_USERS}`).then((res) =>{
      console.log(res.data.response)
      const mappedUsers = res.data.response?.map((d) => {
        console.log(d)
        return({
          label: d.userName,
          value: d.userId})
        });
        setUserName(mappedUsers)
        console.log(mappedUsers)
      }
      );
    };
    
    fetchUsers()
  }, []);

  const onSubmitReservation = (booking) => {
    postBooking(
      {
      booking_id: id,
      player_1: booking.player_1,
      player_2: booking.player_2,
      sets: parseInt(booking.sets),
      event_start: timeDate.start,
      event_finish: timeDate.end, 
      player_1_score: null, 
      player_2_score: null, 
      tournament_id: "4464b9e1-b5a0-40fb-a5c0-552ef07fca07" })
    reset()
    //when postBooking success -> toast success
  }
  return (
    <form onSubmit={handleSubmit(onSubmitReservation)}>
      <label> Start Time : </label>
      <label {...register("event_start")}> {new Date(timeDate.start).toString()}</label> <br/>
      <label> End Time : </label>
      <label {...register("event_finish")}> {new Date(timeDate.end).toString()}</label> <br/>
      <label> Select Player One </label>
      <Select {...register("player_1")} options={userNames} placeholder="select player one" />
       <br/>
      <label> Select Player Two </label>
      <Select {...register("player_2")} options={userNames} placeholder="select player two" />
        <br/>
      <label> Select Game Type </label>
      <select {...register("game_type")}>
        <option value="Knock Out">Knock Out </option>
        <option value="Practice"> Practice </option>
        <option value="League"> League </option>
        <option value="Group Stage"> Group Stages </option>
      </select> <br/>
      <label> Select Set Number </label>
      <select {...register("sets")}>
        <option type="number" value={parseInt("1")} > 1 </option>
        <option type= "number" value="3"> 3 </option>
        <option type="number" value="5"> 5 </option>
      </select>
      <br/>
      <button> Save </button>
    </form>
  )
}
