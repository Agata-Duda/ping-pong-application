import React, { useState, useEffect } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import axios from "axios"
import Form from "./StepperNew"
import Drawer from "@mui/material/Drawer"
import { BASE_URL } from "../util/util"
const localizer = momentLocalizer(moment)

const CalendarBooking = () => {
  const [bookings, setBookings] = useState()
  const [open, setOpen] = useState(false)
  const [timeDate, setTimeDate] = useState([])

  const openDrawer = () => {
    setOpen(true)
  }
  const closeDrawer = () => {
    setOpen(false)
  }
  console.log(closeDrawer)
  const handleAwayClick = () => {
    setOpen(false)
  }
  const handleSelectEvent = () => {
  }

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await axios(`${BASE_URL}/bookings`)
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
      <Calendar onSelectEvent={handleSelectEvent}
        selectable={true}
        onSelectSlot={(slot) => {
          setTimeDate(slot)
          openDrawer()
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
        <Form timeDate={timeDate} />
      </Drawer>
    </div>
  )
}
export default CalendarBooking
