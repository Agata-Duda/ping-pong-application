import * as React from "react"
import dayjs from "dayjs"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"

export default function DateTimeValidation () {
  const [value, setValue] = React.useState(dayjs("2022-04-07"))
  const slots15Minutes = [11, 0, 15, 30, 45]

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          renderInput={(params) => <TextField {...params} />}
          label="Slots"
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}

          shouldDisableTime={(timeValue, clockType) => {
            if (clockType === "minutes" && slots15Minutes.includes(timeValue)) {
              return false
            }
            return true
          }}
        />
    </LocalizationProvider>
  )
}
