import React from "react";
import PropTypes from "prop-types"

import Divider from '@mui/material/Divider';
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Button from "@mui/material/Button"

const EventDialog = ({open, close, titles, subtitle, description, actionButtons, closeDialog}) => {
    return (
        <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="event-dialog-title">
          {description}
          <Divider variant="fullWidth" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="event-dialog-description">
            {titles}
          </DialogContentText>
          <DialogContentText id="event-dialog-description">
            {subtitle}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {actionButtons}
          <Button onClick={closeDialog} autoFocus>Cancel</Button>
        </DialogActions>
      </Dialog>
    )
}
export default EventDialog;
EventDialog.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  titles: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  actionButtons: PropTypes.object
}