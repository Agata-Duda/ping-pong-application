import axios from "axios"
export const BASE_URL = "http://localhost:8000"
// TODO - util folder  is great idea - now is ok, but later please create files in utils, like api.js, routes.js, etc.

// TODO - no need quotes here
export const routes = {
  loginpage: "/login-page",
  home: "/",
  register: "/registerp",
  userDetailsPage: "/user-details-page",
  reservationsPage: "/reservation-page",
  predictionPage: "/prediction-page",
  leaderboardPage: "/leaderboard-page",
  matchPage: "/match-page",
  test: "/test"
}

// TODO - BASE_URL ise defined, please use it
export const postNewBooking = async (id, eventStart, eventEnd, playerOne, playerTwo, sets, tournament) => {
  await axios.post(`${BASE_URL}/bookings`, { id, eventStart, eventEnd, playerOne, playerTwo, tournament, sets })
}

export const postBooking = async (booking) => {
  await axios.post(`${BASE_URL}/bookings`, booking)
}

export const postDateTime = async (id, eventStart, eventEnd) => {
  await axios.post(`${BASE_URL}/bookings`, { id, eventStart, eventEnd })
}
export const getAllBookings = async () => {
  await axios.get(`${BASE_URL}/bookings`)
}

export const getBookingById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/bookings/${id}`)
  return data
}
