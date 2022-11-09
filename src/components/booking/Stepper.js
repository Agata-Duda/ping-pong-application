/* eslint-disable react/jsx-key */
// import { getAllBookings } from "../util/util"
import * as React from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import StepContent from "@mui/material/StepContent"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import AsyncSelect from "react-select/async"

const GameTypeOptions = [
  { value: "League", label: "League" },
  { value: "Knockout", label: "Knockout" },
  { value: "Group Stage", label: "Group Stage" },
  { value: "Practice", label: "Practice" }
]
const SetNoOptions = [
  { value: "1", label: "1" },
  { value: "3", label: "3" },
  { value: "5", label: "5" }
]
const PlayerOptions = [
  { value: "League", label: "League" },
  { value: "Knockout", label: "Knockout" },
  { value: "Group Stage", label: "Group Stage" },
  { value: "Practice", label: "Practice" }
]
function getSteps () {
  return [
    <b> Selected Time & Date </b>,
    <b>Select Game Type </b>,
    <b> Select Players </b>
  ]
}

export default function VerticalLinearStepper ({ timeDate }) {
  console.log("props: ", timeDate)
  function getStepContent (step: number) {
    switch (step) {
      case 0:
        return (
          <form>
            <label> Time & Date </label>
            <label>{new Date(timeDate).toString()} </label>
          </form>
        )
      case 1:
        return (
          <form>
            <label> Select Player One </label>
          <AsyncSelect options={PlayerOptions}/>
          <label> Select Player Two</label>
          <AsyncSelect options={PlayerOptions}/>
          </form>
        )
      case 2:
        return (
          <form>
            <label> Select Game Type </label>
            <AsyncSelect options={GameTypeOptions}/>
            <label> Select Set Number </label>
            <AsyncSelect options={SetNoOptions}/>
          </form>
        )
      default:
        return "Unknown Step"
    }
  }
  const steps = getSteps()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }
  const handleSaveReservation = () => {
    console.log("Send Reservation to Reservation Service")
  }
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
      {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              {label}
            </StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleSaveReservation} sx={{ mt: 1, mr: 1 }}>
            Save
          </Button>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>

        </Paper>
      )}
    </Box>
  )
}
