import axios from "axios"
const BASE_URL = "http://localhost:8000"

export const routes = {
  "loginpage": "/login-page",
  "home": "/",
  "register": "/registerp",
  "userDetailsPage": "/user-details-page",
  "reservationsPage": "/reservation-page",
  "predictionPage": "/prediction-page",
  "leaderboardPage": "/leaderboard-page",
  "matchPage": "/match-page",
  "test": "/test"
}

export const postNewBooking = async (id, eventStart, eventEnd, playerOne, playerTwo, sets, tournament) => {
  await axios.post("http://localhost:8000/bookings", { id, eventStart, eventEnd, playerOne, playerTwo, tournament, sets })
}

export const postBooking = async (booking) => {
  await axios.post("http://localhost:8000/bookings", booking)
}

export const postDateTime = async (id, eventStart, eventEnd) => {
  await axios.post("http://localhost:8000/bookings", { id, eventStart, eventEnd })
}
export const getAllBookings = async () => {
  await axios.get("http://localhost:8000/bookings")
}

export const getBookingById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/bookings/${id}`)
  return data
}
