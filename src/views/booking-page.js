import { PageTemplate } from "../templates/PageTemplate"
import StaticDatePickerLandscape from "../components/booking/datePicker"
import StaticTimePickerLandscape from "../components/booking/timePicker"
import * as React from "react"

const BookingPage = () => {
  return (
    <PageTemplate>
      <h1> Ping Pong Table Booking </h1>
        <div className="dateTime">
          <StaticDatePickerLandscape/>
          <StaticTimePickerLandscape/>
          <h1> heading </h1>
        </div>
    </PageTemplate>

  )
}
export default BookingPage
