import axios from "axios"
// const BASE_URL = "http://localhost:8000"

export const routes = {
  "loginpage": "/login-page",
  "home": "/",
  "register": "/registerp",
  "userDetailsPage": "/user-details-page",
  "reservationsPage": "/reservation-page",
  "predictionPage": "/prediction-page",
  "leaderboardPage": "/leaderboard-page",
  "test": "/test"
}

export const postNewBooking = async (eventStart, id) => {
  await axios.post("http://localhost:8000/bookings", { eventStart, id })
}

export const getAllBookings = async (bookings) => {
  await axios.get("http://localhost:8000/bookings", bookings)
}
