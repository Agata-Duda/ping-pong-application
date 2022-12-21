import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import toast from "react-hot-toast";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import axios from "axios";
import { format } from "date-fns";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button"
import { Box } from "@mui/material"
import { Typography } from "@mui/material";

import EventDialog from "./EventDialog";
import Form from "./CreateReservationForm";
import UpdateForm from "./UpdateReservationForm";
import { deleteReservationById, Reservation_URL } from "../util/ApiMethods";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const ReservationCalendar = () => {
  const [bookings, setBookings] = useState()
  const [open, setOpen] = useState()
  const [openUpdate, setOpenUpdate] = useState()
  const [timeDate, setTimeDate] = useState([])
  const [openOptionsDialog, setOpenOptionsDialog] = useState(false)
  const [ selected, setSelected ] = useState()
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [eventid, setId] = useState()
  const [updateEventStart, setUpdateEventStart] = useState()
  const [updateEventEnd, setUpdateEventEnd ] = useState()
  const [ playerUsernames, setPlayerUsernames ] = useState([])

  const handleSelected = (event) => {
    setSelected(event);
    setPlayerUsernames(event.player_1 + " vs " + event.player_2)
    setId(event.booking_id)
    setUpdateEventStart(event.event_start)
    setUpdateEventEnd(event.event_finish)
    handleOpenOptionsDialog()
  }

  const handleOpenOptionsDialog = () => {
    setOpenOptionsDialog(true)
  }

  const handleCloseOptionsDialog = () => {
    setOpenOptionsDialog(false)
  }
  
  const handleConfirmationDelete  = () => {
    setOpenDeleteDialog(true)
    handleCloseOptionsDialog()
  }

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false)
  }

  const handleDeleteReservation = () => {
      deleteReservationById(eventid)
      handleCloseDeleteDialog()
    }

  const openDrawer = () => {
    setOpen(true);
  };

  const openUpdateDrawer = () =>{
    handleCloseOptionsDialog()
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
          event_start: new Date(d.event_start.concat(".000")),
          event_finish: new Date(d.event_finish.concat(".000"))})
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
        titleAccessor={bookings => bookings.player_1 + " vs " + bookings.player_2 + 
        " - " + format(bookings.event_start, "hh:mm")}
        startAccessor="event_start"
        endAccessor="event_finish"
        min={new Date(2022, 11, 15, 8, 30, 0)}
        max={new Date(2022, 11, 15, 18, 0, 0)}
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

      <EventDialog
      open={openOptionsDialog}
      close={handleCloseOptionsDialog}
      titles={"Selected Event with reservation ID: " + eventid} 
      subtitle={" Players : " + playerUsernames}
      description="Do you want to delete or update this event?"
      closeDialog={handleCloseOptionsDialog}
      actionButtons=
      {
      <Box>
        <Button onClick={openUpdateDrawer}>Update</Button>
        <Button onClick={handleConfirmationDelete}>Delete</Button>
        </Box>
      }/>
      <EventDialog
      open={openDeleteDialog}
      close={handleCloseDeleteDialog}
      titles={"Selected Event with reservation ID: " + eventid} 
      subtitle={"Please confirm if you want to delete reservation with ID: " + eventid}
      description="Do you want to delete this reservation?"
      closeDialog={handleCloseDeleteDialog}
      actionButtons={<Button onClick={handleDeleteReservation}>Delete</Button>}
      />
    </Box>
  );
};
export default ReservationCalendar;
