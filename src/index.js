import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import AppProvider from "./context/appContext"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

ReactDOM.render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <AppProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppProvider>
  </LocalizationProvider>,
  document.getElementById("root")
)
