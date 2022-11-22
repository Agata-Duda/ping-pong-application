import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import Form from "./Form";
import Drawer from "@mui/material/Drawer";
import { GetAllReservations_URL } from "../util/util";
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

  const handleAwayClick = () => {
    setOpen(false);
  };
  const handleSelectEvent = () => {

  };
  //TODO I know, work in progress, but for handle errors try to use one approach:
    // 1. use try catch block if you are using async await
    // 2. use .then() and .catch() if you are using promises
  //   3. use .catch() if you are using callbacks
  //   consider react-query


  useEffect(() => {
    const fetchBookings = async () => {
       await axios(`${GetAllReservations_URL}`).then((res) =>{
        const mappedArray = res.data.response?.map((d) => {
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
        closable="true"
        anchor={"right"}
        varient={"temporary"}
        onClose={handleAwayClick}
        PaperProps={{
          sx: {
            width: 500,
          },
        }}
      >
        {/*  TODO mui*/}
        <h2> Create A Reservation </h2>
        <Form timeDate={timeDate} closeDrawer={closeDrawer} />
      </Drawer>
    </div>
  );
};
export default CalendarBooking;
