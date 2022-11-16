import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import Form from "./StepperNew";
import Drawer from "@mui/material/Drawer";

import { GetAllReservations_URL } from "../util/util";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const CalendarBooking = () => {

  const [bookings, setBookings] = useState();
  const [open, setOpen] = useState();
  const [timeDate, setTimeDate] = useState([]);

  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer =() => {
    setOpen(false);
  };
  console.log(closeDrawer);

  const handleAwayClick = () => {
    setOpen(false);
  };
  const handleSelectEvent = () => {};

  useEffect(() => {
    const fetchBookings = async () => {
       await axios(`${GetAllReservations_URL}`).then((res) =>{
       console.log(res.data);
        // setBookings(res.data.response)
        const mappedArray = res.data.response?.map((d) => {
          console.log(d)
       return({   ...d,
          event_start: new Date(d.event_start.concat(".000Z")),
          event_finish: new Date(d.event_finish.concat(".000Z"))})
        });
        setBookings(mappedArray);

      }
      );
    };
    fetchBookings();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Calendar
        onSelectEvent={handleSelectEvent}
        selectable={true}
        onSelectSlot={(slot) => {
          setTimeDate(slot);
          openDrawer();
        }}
        localizer={localizer}
        events={bookings}
        titleAccessor="booking_id"
        startAccessor="event_start"
        endAccessor="event_finish"
        timeslots={1}
        step={5}
        style={{ height: 500 }}
      />
      <Drawer
        open={open}
        closable={true}
        anchor={"right"}
        varient={"temporary"}
        onClose={handleAwayClick}
        PaperProps={{
          sx: {
            width: 500,
          },
        }}
      >
        <h2> Create A Reservation </h2>
        <Form timeDate={timeDate} closeDrawer={closeDrawer} />
        <button onClick={closeDrawer}> Close </button>
      </Drawer>
    </div>
  );
};
export default CalendarBooking;
