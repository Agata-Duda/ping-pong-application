import * as React from "react"
import dayjs from "dayjs"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker"

export default function StaticTimePickerLandscape () {
  const [value, setValue] = React.useState(dayjs)
  const slots15Minutes = [5, 10, 20, 25, 35, 40, 50, 55]
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticTimePicker
        ampm
        orientation="portrait"
        openTo="minutes"
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        componentsProps={{
          actionBar: {
            actions: ["clear"]
          }
        }}
        minutesStep={5}
        minTime={dayjs("2018-01-01T07:00")}
        maxTime={dayjs("2018-01-01T18:45")}
        shouldDisableTime={(timeValue, clockType) => {
          if (clockType === "minutes" && slots15Minutes.includes(timeValue)) {
            return true
          }
          return false
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}
