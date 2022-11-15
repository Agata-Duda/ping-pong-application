import * as React from "react"
// import Box from "@mui/material/Box"
// import Stepper from "@mui/material/Stepper"
// import Step from "@mui/material/Step"
// import StepLabel from "@mui/material/StepLabel"
// import StepContent from "@mui/material/StepContent"
// import Button from "@mui/material/Button"
// import Paper from "@mui/material/Paper"
// import Typography from "@mui/material/Typography"
// import AsyncSelect from "react-select/async"
// import Select from "react-select"
import { useForm } from "react-hook-form"
import { v4 } from "uuid"
import { postBooking } from "../util/util"

export default function Form ({ timeDate }) {
  const { register, handleSubmit, reset } = useForm()
  const id = v4()

  const onSubmitReservation = (booking) => {
    postBooking(
      {
      booking_id: id,
      player_1: booking.player_1,
      player_2: booking.player_2,
      sets: parseInt(booking.sets),
      //get tournamnet id and use tournament name not game_type
     //game_type: booking.game_type,
      event_start: timeDate.start,
      event_finish: timeDate.end, 
      player_1_score: null, 
      player_2_score: null, 
      tournament_id: "4464b9e1-b5a0-40fb-a5c0-552ef07fca07" })
    reset()
    console.log(booking)
  }
  return (
    <form onSubmit={handleSubmit(onSubmitReservation)}>
      <label> Start Time : </label>
      <label {...register("event_start")}> {new Date(timeDate.start).toString()}</label> <br/>
      <label> End Time : </label>
      <label {...register("event_finish")}> {new Date(timeDate.end).toString()}</label> <br/>
      <label> Select Player One </label>
      <select {...register("player_1")}>
        {/* //get users */}
        <option value="2a40e112-3da2-11ed-b878-0242ac120002"> Joan Doe </option>
        <option value="2a40e2b6-3da2-11ed-b878-0242ac120002"> Jose Doe </option>
      </select> <br/>
      <label> Select Player Two </label>
      <select {...register("player_2")}>
        {/* //get users  */}
      <option value="2a40e112-3da2-11ed-b878-0242ac120002"> Joan Doe </option>
        <option value="2a40e2b6-3da2-11ed-b878-0242ac120002"> Jose Doe </option>
      </select> <br/>
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
