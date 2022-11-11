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
import { postNewBooking } from "../util/util"

// const GameTypeOptions = [
//   { value: "League", label: "League" },
//   { value: "Knockout", label: "Knockout" },
//   { value: "Group Stage", label: "Group Stage" },
//   { value: "Practice", label: "Practice" }
// ]
// const SetNoOptions = [
//   { value: "1", label: "1" },
//   { value: "3", label: "3" },
//   { value: "5", label: "5" }
// ]
// const PlayerOptions = [
//   { value: "Joan Doe ", label: "Joan Doe" },
//   { value: "Alan Doe", label: "Alan Doe" },
//   { value: "Joseph Doe", label: "Joseph Doe" },
//   { value: "Mike Doe", label: "Mike Doe" }
// ]

export default function Form ({ timeDate }) {
  const { register, handleSubmit, reset } = useForm()
  const onSubmitReservation = (bookings) => {
    postNewBooking(bookings)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmitReservation)}>
      <label> Start Time : </label>
      <label {...register("eventStart")}> {new Date(timeDate.start).toISOString()}</label> <br/>
      <label> End Time : </label>
      <label {...register("eventEnd")}> {new Date(timeDate.end).toISOString()}</label> <br/>
      <label> Select Player One </label>
      <select {...register("playerOne")}>
        <option value="Joan Doe"> Joan Doe </option>
        <option value="Jose Doe"> Jose Doe </option>
      </select>
      <label> Select Player Two </label>
      <select {...register("playerTwo")}>
        <option value="Joan Doe"> Joan Doe </option>
        <option value="Jose Doe"> Jose Doe </option>
      </select>
      <label> Select Game Type </label>
      <select {...register("tournament")}>
        <option value="Winter 2022">Winter 2022 </option>
        <option value="Practice"> Practice </option>
      </select>
      <label> Select Set Number </label>
      <select {...register("sets")}>
        <option value="1"> 1 </option>
        <option value="3"> 3 </option>
        <option value="5"> 5 </option>
      </select>
      <button> Save </button>
    </form>
  )
}
