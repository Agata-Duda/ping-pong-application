import { PageTemplate } from "../templates/PageTemplate"
import * as React from "react"
import CalendarBooking from "../components/booking/calendar"

const BookingPage = () => (
    <PageTemplate>
      <div className="dateTime">
        <h1> Ping Pong Table Booking </h1>
        <CalendarBooking/>
      </div>
    </PageTemplate>

  )
export default BookingPage
