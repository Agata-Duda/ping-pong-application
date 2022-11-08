import React from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
const localizer = momentLocalizer(moment)

const bookings = [
  {
    start: new Date("2022-11-08T06:30:00"),
    end: new Date("2022-11-08T07:00:00"),
    title: "titrwwwwwwsrle",
    userId: "User threwwwe",
    bookingid: "asdfgdfrwwwwwwwwwwwwwrrrrhjkl"
  },
  {
    start: new Date("2022-10-24T04:30:00"),
    end: new Date("2022-10-24T05:00:00"),
    title: "titrrle",
    userId: "User three",
    bookingid: "asdfgdfrrrrrhjkl"
  }
]

const CalendarBooking = () => (
  <div>
    <Calendar onSelectEvent={(e) => {
      console.log(e)
    }}
    selectable
    localizer={localizer}
    events={bookings}
    titleAccessor="bookingid"
    startAccessor= "start"
    endAccessor= "end"
    timeslots={1}
    step={5}
    style={{ height: 500 }}
    />
    <p> Calendar where user can drag to create a slot</p>
    <button> Delete </button>
    <button> Update </button>
  </div>
)
export default CalendarBooking
