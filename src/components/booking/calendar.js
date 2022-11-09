import React, { useState, useEffect } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import axios from "axios"
import VerticalLinearStepper from "./Stepper"
import Drawer from "@mui/material/Drawer"
const localizer = momentLocalizer(moment)

const CalendarBooking = () => {
  const [bookings, setBookings] = useState()
  const [open, setOpen] = useState(false)

  const openDrawer = () => {
    setOpen(true)
    console.log("hi Drawer")
  }
  const handleAwayClick = () => {
    setOpen(false)
    console.log("bye Drawer")
  }

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await axios("http://localhost:8000/bookings")
      setBookings(res.data)
      const mappedArray = res.data.map(d => ({
        ...d,
        eventStart: new Date(d.eventStart),
        eventEnd: new Date(d.eventEnd)
      }))
      setBookings(mappedArray)
    }
    fetchBookings()
  }, [])
  console.log("bookings: ", bookings)

  return (
    <div>
      <Calendar onSelectEvent={(e) => {
        console.log(e)
      }}
      selectable={true}
      onSelectSlot={(slot) => {
        openDrawer()
        console.log("slot select: ", slot)
      }
      }
      localizer={localizer}
      events={bookings}
      titleAccessor="id"
      startAccessor="eventStart"
      endAccessor="eventEnd"
      timeslots={1}
      step={5}
      style={{ height: 500 }}
      />
      <Drawer open={open} anchor={"right"} varient={"temporary"} onClose={handleAwayClick}>
        <h2> Create A Reservation </h2>
        <VerticalLinearStepper>
        </VerticalLinearStepper>
      </Drawer>
    </div>
  )
}
export default CalendarBooking
