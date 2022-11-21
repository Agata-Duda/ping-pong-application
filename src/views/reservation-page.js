import { PageTemplate } from "../templates/PageTemplate"
import * as React from "react"
import CalendarBooking from "../components/booking/calendar"

const ReservationsPage = () => (
  <PageTemplate>
    {/* TODO BOX */}
    <div className="dateTime">
      <CalendarBooking/>
    </div>
  </PageTemplate>

)
export default ReservationsPage
