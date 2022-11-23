import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import moment from "moment";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { Box } from "@mui/material"
import { Typography } from "@mui/material";

import Form from "./StepperNew";
import { deleteReservationById, GetAllReservations_URL, routes } from "../util/util";


moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const CalendarBooking = () => {

  const [bookings, setBookings] = useState();
  const [open, setOpen] = useState();
  const [timeDate, setTimeDate] = useState([]);
  const [openDialog, setOpenDialog] = useState(false)
  const [ selected, setSelected ] = useState();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [eventid, setId] = useState()

  const handleSelected = (event) => {
    setSelected(event);
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
      window.location.reload()
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
    <Box>
      <Calendar
        onSelectEvent={handleSelected}
        selected={selected}
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
        <Typography> Create Reservation </Typography>
        <Form timeDate={timeDate} closeDrawer={closeDrawer} />
        <Button onClick={closeDrawer}> Close </Button>
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
export default CalendarBooking;
