import * as React from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import StepContent from "@mui/material/StepContent"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
// import AsyncSelect from "react-select/async"
import Select from "react-select"
import { useForm } from "react-hook-form"
import { postNewBooking } from "../util/util"

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
  { value: "Joan Doe ", label: "Joan Doe" },
  { value: "Alan Doe", label: "Alan Doe" },
  { value: "Joseph Doe", label: "Joseph Doe" },
  { value: "Mike Doe", label: "Mike Doe" }
]

function getSteps () {
  return [
    <> Selected Time & Date </>,
    <> Select Game Type </>,
    <> Select Players </>
  ]
}
export default function VerticalLinearStepper ({ timeDate }) {
  const { register, handleSubmit } = useForm()
  const onSubmitReservation = (reservation) => {
    postNewBooking(reservation)
  }
  function getStepContent (stepNum) {
    switch (stepNum) {
    case 0:
      return (
        <form onSubmit={handleSubmit(onSubmitReservation)}>
          <label> Start Time : {new Date(timeDate.start).toString()} </label> <br/>
          <label>End Time : {new Date(timeDate.end).toString()} </label>
        </form>
      )
    case 1:
      return (
        <form>
          <label> Select Player One </label>
          <Select {...register("playerOne")} options={ PlayerOptions }/>
          <label> Select Player Two</label>
          <Select {...register("playerTwo")} options={ PlayerOptions }/>
        </form>
      )
    case 2:
      return (
        <form>
          <label> Select Game Type </label>
          <Select {...register("tournament")} options={GameTypeOptions}/>
          <label> Select Set Number </label>
          <Select {...register("sets")}options={SetNoOptions}/>
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
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((lbl, stepNum) => (
          <Step key={stepNum}>
            <StepLabel>
              {lbl}
            </StepLabel>
            <StepContent>
              <Typography>{getStepContent(stepNum)}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {stepNum === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={stepNum === 0}
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
          <Button onClick={} sx={{ mt: 1, mr: 1 }}>
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
