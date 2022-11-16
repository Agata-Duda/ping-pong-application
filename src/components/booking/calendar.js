import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import Form from "./StepperNew";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

import { GetAllReservations_URL } from "../util/util";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const CalendarBooking = () => {

  const [bookings, setBookings] = useState();
  const [open, setOpen] = useState();
  const [timeDate, setTimeDate] = useState([]);
  const [openDialog, setOpenDialog] = useState(false)

  const handleClickOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleUpdate = () => {
    
  }

  const handleDelete = () => {
    
  }

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
        onSelectEvent={handleClickOpenDialog}
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
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {"Do you wish to update or delete your reservation @ {}?"}
        {/* Confirm text title of pop up box */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          You have selected an existing reservation. Do you wish to update or delete it? If not please press cancel to exit this menu.
            {/* //update or delete res */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* //update and delete */}
          <Button onClick={handleUpdate}>Update</Button>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleCloseDialog} autoFocus>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CalendarBooking;
