// TODO line below looks weird, no need define React that way
import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

export default function AlertDialog () {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         
         Confirm text title of pop up box
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
//update or delete res
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          //update and delete
          <Button onClick={handleDelete}>Disagree</Button>
          <Button onClick={handleUpdate} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
