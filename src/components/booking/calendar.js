import React, { useState, useEffect } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import axios from "axios"

const CalendarBooking = () => {
  const localizer = momentLocalizer(moment)
  const [bookings, setBookings] = useState()

  useEffect(async () => {
    const res = await axios("http://localhost:8000/bookings")
    setBookings(res.data)
  }, [])

return (
    <div>
     <Calendar onSelectEvent={(e) => {
        console.log(e)
      }}
      selectable
      localizer={localizer}
      events={bookings}
      titleAccessor="id"
      startAccessor= "eventStart"
      endAccessor= "eventEnd"
      timeslots={1}
      step={5}
      style={{ height: 500 }}
      />
      <p> Calendar where user can drag to create a slot</p>
      <button> Delete </button>
      <button> Update </button>
    </div>
  )
}
export default CalendarBooking
