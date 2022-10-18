import { PageTemplate } from "../templates/PageTemplate"
import React from "react"
import DateTimeValidation from "../components/booking/dateTimePicker"

const BookingPage = () => {
  return (
    <PageTemplate>
      <div className="booking">
        <h1> Booking Service</h1>
        <DateTimeValidation/>
      </div>
    </PageTemplate>

  )
}
export default BookingPage
