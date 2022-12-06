import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import AppProvider from "./context/appContext"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import {QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </QueryClientProvider>
    </AppProvider>
  </LocalizationProvider>,
  document.getElementById("root")
)
