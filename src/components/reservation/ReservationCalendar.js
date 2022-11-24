import React, { useState, useEffect } from "react";
// import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import axios from "axios";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { Box } from "@mui/material"
import { Typography } from "@mui/material";

import Form from "./CreateReservationForm";
import { deleteReservationById, Reservation_URL } from "../util/ApiMethods";
import { getDatePickerToolbarUtilityClass } from "@mui/x-date-pickers/DatePicker/datePickerToolbarClasses";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const ReservationCalendar = () => {
  const [bookings, setBookings] = useState();
  const [open, setOpen] = useState();
  const [timeDate, setTimeDate] = useState([]);
  const [openDialog, setOpenDialog] = useState(false)
  const [ selected, setSelected ] = useState();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [eventid, setId] = useState()
  const [ playersEvent, setPlayersEvent ] = useState([])
  const minDate = new Date()

  const handleSelected = (event) => {
    setSelected(event);
    console.log(event)
    setPlayersEvent(event.player_1, event.player_2)
    setId(event.booking_id)
    OpenDialog()
  }

  const OpenDialog = () => {
    setOpenDialog(true)
  }

  const CloseDialog = () => {
    setOpenDialog(false)
  }
  
  const handleConfirmationDelete  = () => {
    setOpenDeleteDialog(true)
    CloseDialog()
  }

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false)
  }

  const handleDelete = () => {
    console.log(eventid)
      deleteReservationById(eventid)
      handleCloseDeleteDialog()
    }

  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer =() => {
    setOpen(false);
  };

  const handleAwayClick = () => {
    setOpen(false);
  };

  //TODO I know, work in progress, but for handle errors try to use one approach:
    // 1. use try catch block if you are using async await
    // 2. use .then() and .catch() if you are using promises
  //   3. use .catch() if you are using callbacks
  //   consider react-query

  useEffect(() => {
    const fetchBookings = async () => {
       await axios(`${Reservation_URL}`).then((res) =>{
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
  }, []);

  return (
    <Box m={2}>
      <Calendar
        onSelectEvent={handleSelected}
        selected={selected}
        selectable={true}
        onSelectSlot={(slot) => {
          setTimeDate(slot);
          openDrawer();
        }}
        min={new Date(2022, 10, 24, 0,0,0,0)}
        localizer={localizer}
        events={bookings}
        titleAccessor="booking_id"
        startAccessor="event_start"
        endAccessor="event_finish"
        timeslots={1}
        step={10}
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
        <Typography paddingTop={3} variant="h6" align="center" fontWeight={'bold'}> Create Reservation </Typography>
        <Form timeDate={timeDate} closeDrawer={closeDrawer} />
      </Drawer>

      <Dialog
        open={openDialog}
        onClose={CloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="event-dialog-title">
        {"Event Selected With "}
        {"Reservation ID: "} {eventid}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="event-dialog-description">
          You have selected an existing reservation. Do you wish to update or delete? If not please press cancel to exit this menu.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={openDrawer}>Update</Button>{/* Update drawer */}
          <Button onClick={handleConfirmationDelete}>Delete</Button>
          <Button onClick={CloseDialog} autoFocus>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="delete-confirmation-dialog-title">
        {"Do you want to delete this reservation?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-confirmation-dialog-description">
          Please confirm if you wish to progress with removal of reservation {eventid}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Delete</Button> {/* REMOVES RESERVATION WITHOUT BEING CALLED! */}
          <Button onClick={handleCloseDeleteDialog} autoFocus>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default ReservationCalendar;
