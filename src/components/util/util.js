import axios from "axios"

// const BASE_URL = "http://localhost:8000"

export const routes = {
  "loginpage": "/login",
  "home": "/",
  "login": "/loginp",
  "register": "/registerp",
  "userDetailsPage": "/user-details-page",
  "bookingPage": "/booking-page",
  "predictionPage": "/prediction-page",
  "scoreBoardPage": "/scoreboard-page",
  "test": "/test"
}

export const postNewBooking = async (jsonValue) => {
  await axios.post("http://localhost:8000/bookings", { jsonValue })
}
