import React from "react"

import { PageTemplate } from "../templates/PageTemplate"
import ReservationCalendar from "../components/reservation/ReservationCalendar"

const ReservationsView = () => (
  <PageTemplate>
    {/* TODO BOX */}
    <div className="dateTime">
      <ReservationCalendar/>
    </div>
  </PageTemplate>

)
export default ReservationsView
