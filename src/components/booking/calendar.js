import React from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
const localizer = momentLocalizer(moment)

const bookings = [
  {
    eventStart: new Date("2022-10-24T03:30:00"),
    eventEnd: new Date("2022-10-24T04:00:00"),
    userId: "User one",
    title: "title",
    bookingid: "asdfghjkl"
  },
  {
    start: new Date("2022-10-24T04:30:00"),
    end: new Date("2022-10-24T05:00:00"),
    title: "title",
    userId: "User two",
    bookingid: "asdfghjkl"
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
export default CalendarBooking
