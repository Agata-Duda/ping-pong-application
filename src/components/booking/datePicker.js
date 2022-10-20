import * as React from "react"
import dayjs from "dayjs"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker"
import Button from "@mui/material/Button"
import toast from "react-hot-toast"

const isWeekend = (date) => {
  const day = date.day()

  return day === 0 || day === 6
}
export default function StaticDatePickerLandscape () {
  const [value, setValue] = React.useState(dayjs)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="portrait"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        componentsProps={{
          actionBar: {
            actions: ["clear"]
          }
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <Button varient="contained"
        onClick={() => {
          if (value === null) {
            toast.error("No Date Selected!")
            console.log("no date selected")
          } else {
            console.log("Booking on ", value, "Successful")
          }
        }}> Book Slot </Button>
    </LocalizationProvider>
  )
}
