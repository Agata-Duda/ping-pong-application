import * as React from "react"
import dayjs from "dayjs"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker"
import Button from "@mui/material/Button"
import toast from "react-hot-toast"
import { postNewBooking } from "../util/util"
import { v4 } from "uuid"

const isWeekend = (date) => {
  const day = date.day()

  return day === 0 || day === 6
}
export default function StaticDateTimePickerDemo () {
  const [value, setValue] = React.useState(dayjs)
  const slots15Minutes = [5, 10, 20, 25, 35, 40, 50, 55]

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker
        ampm={false}
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(value) => {
          setValue(value)
        }}
        componentsProps={{
          actionBar: {
            actions: ["today", "clear", "am"]
          }
        }}
        minutesStep={5}
        minTime={dayjs("2018-01-01T07:00")}
        maxTime={dayjs("2018-01-01T18:45")}
        // TODO You can try here:
        // shouldDisableTime={(timeValue, clockType) => clockType === "minutes" && slots15Minutes.includes(timeValue))
        // without return statement. Above is implicit return, and if both condition are ok, true will be returned
        shouldDisableTime={(timeValue, clockType) => {
          if (clockType === "minutes" && slots15Minutes.includes(timeValue)) {
            return true
          }
          return false
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <Button varient="contained"
        onClick={() => {
          if (value !== null) {
            console.log("Booking on ", value, "Successful")
            toast.success("Booking Successful", value)
            const eventStart = dayjs(value.$d).format("YYYY-MM-DDTHH:mm:ss")
            //  TODO is db defined here? I don't see it
            if (eventStart in db) {
              const id = v4()
              postNewBooking(eventStart, id)
            }
          } else {
            toast.error("No Time or Date Selected!")
            console.log("no time or date selected")
          }
        }}> Book Slot </Button>
    </LocalizationProvider>
  )
}
