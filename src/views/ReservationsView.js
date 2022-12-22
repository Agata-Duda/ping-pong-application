import React from "react"

import { Stack } from "@mui/system"
import { PageTemplate } from "../templates/PageTemplate"
import ReservationCalendar from "../components/reservation/ReservationCalendar"
import { Typography } from "@mui/material"



const ReservationsView = () => (
  <PageTemplate>
      <ReservationCalendar/>
      <Stack paddingLeft={4}>
        <Typography fontWeight="bold">Recommended Times For Bookings</Typography>
        <Typography> - 1 set = 10 mins</Typography>
        <Typography> - 3 sets = 20 mins</Typography>
        <Typography> - 5 sets = 30 mins</Typography>
      </Stack>
  </PageTemplate>

)
export default ReservationsView
