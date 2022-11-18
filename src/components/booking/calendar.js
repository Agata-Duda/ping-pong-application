import React, { useState, useEffect, useCallback } from "react";
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
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { deleteReservationById, GetAllReservations_URL, routes } from "../util/util";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const CalendarBooking = () => {

  const [bookings, setBookings] = useState();
  const [open, setOpen] = useState();
  const [timeDate, setTimeDate] = useState([]);
  const [openDialog, setOpenDialog] = useState(false)
  // const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [eventId, setId] = useParams()

  const handleClickOpenDialog = useCallback((calEvent) => {
    setOpenDialog(true)
    // Logic to retrieve Bookig ID from the calendar event/clicked upon
    //setId(calEvent.booking_id)
    loophole(calEvent.booking_id)
    console.log(eventId)
    //handleDelete(calEvent.booking_id)
  }
  )

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleConfirmation  = () => {
    setOpenDeleteDialog(true)
  }
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false)
    setOpenDialog(true)
  }

  // const handleCloseUpdateDialog = () => {
  //   setOpenUpdateDialog(false)
  // }

  // const handleUpdateBooking = () => {
  //   setOpenUpdateDialog(true)
  // }

  const loophole = (id) => {
    setId(id.booking_id)
    console.log(id)
  }

  const handleDelete = (id) => {
    //Delete booking logic
    console.log(id)
    deleteReservationById(id)

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
        <DialogTitle id="event-dialog-title">
        {"Do you wish to update, delete or alter your reservation @{}?"}
        {/* Confirm text title of pop up box */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="event-dialog-description">
          You have selected an existing reservation. Do you wish to update, delete or alter it? If not please press cancel to exit this menu.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={openDrawer}>Update</Button>{/* Update drawer */}
          <Button onClick={handleConfirmation}>Delete</Button>
          <Link to={routes.matchPage}> <Button>Alter</Button> </Link>
          <Button onClick={handleCloseDialog} autoFocus>Cancel</Button>
        </DialogActions>
      </Dialog>
      
      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="delete-confirmation-dialog-title">
        {"Are you sure about deleting your reservation?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-confirmation-dialog-description">
          Please confirm if you wish to progress with removal of your reservation.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Delete</Button> {/* REMOVES RESERVATION WITHOUT BEING CALLED! */}
          <Button onClick={handleCloseDeleteDialog} autoFocus>Cancel</Button>
        </DialogActions>

      </Dialog>
    </div>
  );
};
export default CalendarBooking;
