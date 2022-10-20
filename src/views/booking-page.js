import { PageTemplate } from "../templates/PageTemplate"
import * as React from "react"
import StaticDateTimePickerDemo from "../components/booking/dateTimePicker"

const BookingPage = () => {
  return (
    <PageTemplate>
      <div className="dateTime">
        <h1> Ping Pong Table Booking </h1>

        <StaticDateTimePickerDemo/>
      </div>
    </PageTemplate>

  )
}
export default BookingPage
