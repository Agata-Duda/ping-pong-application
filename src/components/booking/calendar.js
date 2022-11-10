import React, { useState, useEffect } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import axios from "axios"
import VerticalLinearStepper from "./Stepper"
import Drawer from "@mui/material/Drawer"
const localizer = momentLocalizer(moment)

const CalendarBooking = (props) => {
  const [bookings, setBookings] = useState()
  const [open, setOpen] = useState(false)
  const [timeDate, setTimeDate] = useState([])

  const openDrawer = () => {
    setOpen(true)
  }
  const handleAwayClick = () => {
    setOpen(false)
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

  return (
    <div>
      <Calendar onSelectEvent={(e) => {
        console.log(e)
      }}
      selectable={true}
      onSelectSlot={(slot) => {
        setTimeDate(slot)
        // console.log("time date ", timeDate)
        openDrawer()
        const data = () => {
          return slot
        }
        console.log("slot select: ", data())
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
      <Drawer open={open} anchor={"right"} varient={"temporary"} onClose={handleAwayClick}
        PaperProps={{
          sx: {
            width: 500
          }
        }}>
        <h2> Create A Reservation </h2>
        <VerticalLinearStepper timeDate={timeDate} />
      </Drawer>
    </div>
  )
}
export default CalendarBooking
