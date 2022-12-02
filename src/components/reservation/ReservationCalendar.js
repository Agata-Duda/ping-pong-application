import React, { useState, useEffect } from "react";
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
// import { useQuery } from "react-query";

import Form from "./CreateReservationForm";
import UpdateForm from "./UpdateReservationForm";
import { deleteReservationById, Reservation_URL, GET_ALL_USERS } from "../util/ApiMethods";
import toast from "react-hot-toast";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const ReservationCalendar = () => {
  const [bookings, setBookings] = useState();
  const [open, setOpen] = useState();
  const [openUpdate, setOpenUpdate] = useState();
  const [timeDate, setTimeDate] = useState([]);
  const [openDialog, setOpenDialog] = useState(false)
  const [ selected, setSelected ] = useState();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [eventid, setId] = useState()
  const [ playerOne, setPlayerOne ] = useState()
  const [ playerTwo, setPlayerTwo ] = useState()
  const [ playerOneUsername, setPlayerOneUsername ] = useState()
  const [ playerTwoUsername, setPlayerTwoUsername ] = useState()
  const [ updateEventStart, setUpdateEventStart] = useState()
  const [updateEventEnd, setUpdateEventEnd ] = useState()
  const [isLoading, setLoading] = useState(true)

  const handleSelected = (event) => {
    setSelected(event);
    console.log(event)
    setPlayerOne(event.player_1)
    setPlayerTwo(event.player_2)
    setId(event.booking_id)
    setUpdateEventStart(event.event_start)
    setUpdateEventEnd(event.event_finish)
    OpenDialog()
    getPlayerOneUsername()

  }

    const getPlayerOneUsername = async () => {
    try{
      await axios.get(`${GET_ALL_USERS}/${playerOne}`).then((res) => {
        setPlayerOneUsername(res?.data.response.userName) 
        console.log(res?.data.response.userName)
      })
      await axios.get(`${GET_ALL_USERS}/${playerTwo}`).then((res) => { 
        setPlayerTwoUsername(res?.data.response.userName) 
        console.log(res?.data.response.userName)
        setLoading(false)
      })
    }catch(error){
      toast.error(error.response.data.error)
    }
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

  const openUpdateDrawer = () =>{
    CloseDialog()
    setOpenUpdate(true);
  }
  const closeUpdateDrawer = () =>{
    setOpenUpdate(false);
  }
  const closeDrawer =() => {
    setOpen(false);
  };

  const handleAwayClick = () => {
    setOpen(false);
    setOpenUpdate(false);
  };

  //TODO I know, work in progress, but for handle errors try to use one approach:
    // 1. use try catch block if you are using async await
    // 2. use .then() and .catch() if you are using promises
  //   3. use .catch() if you are using callbacks
  //   consider react-query

  useEffect(() => {
    const fetchBookings = async () => {
      try{
       await axios(`${Reservation_URL}`).then((res) =>{
        const mappedArray = res.data.response?.map((d) => {
       return({   ...d,
          event_start: new Date(d.event_start.concat(".000Z")),
          event_finish: new Date(d.event_finish.concat(".000Z"))})
        });
        setBookings(mappedArray);
      }
      );
    }catch(error){
      toast.error(error.response.data.error)
    }}
    fetchBookings()
  }, []);
  return (

    <Box m={3}>
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

      <Drawer
        open={openUpdate}
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
        <Typography paddingTop={3} variant="h6" align="center" fontWeight={'bold'}> Update Reservation </Typography>
        <UpdateForm updateEventEnd={updateEventEnd} updateEventStart={updateEventStart} closeUpdateDrawer={closeUpdateDrawer} eventid={eventid}/>
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
        {"Users :"} {playerOneUsername} {playerTwoUsername}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="event-dialog-description">
          You have selected an existing reservation. Do you wish to update or delete? If not please press cancel to exit this menu.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={openUpdateDrawer}>Update</Button>
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
