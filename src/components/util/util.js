import axios from "axios";

// export const Reservation_URL = "http://localhost:8120/reservations"
export const GetAllReservations_URL = "http://localhost:8120/reservations";
export const Reservation_URL = "http://localhost:8120/reservations";
export const BASE_URL = "http://localhost:8000";

export const routes = {
  loginpage: "/login-page",
  home: "/",
  register: "/registerp",
  userDetailsPage: "/user-details-page",
  reservationsPage: "/reservation-page",
  predictionPage: "/prediction-page",
  leaderboardPage: "/leaderboard-page",
  matchPage: "/match-page",
  test: "/test",
};

export const postNewBooking = async (
  eventStart,
  eventEnd,
  playerOne,
  playerTwo,
  sets,
  tournament
) => {
  await axios.post(`${Reservation_URL}`, {
    eventStart,
    eventEnd,
    playerOne,
    playerTwo,
    tournament,
    sets,
  });
};

export const postBooking = async (booking) => {
  //await axios.post(`${Reservation_URL}`, booking)
  await axios.post(`${Reservation_URL}`, booking);
};

export const postDateTime = async (id, eventStart, eventEnd) => {
  await axios.post(`${Reservation_URL}`, { id, eventStart, eventEnd });
};
export const getAllReservations = async () => {
  await axios.get(`${GetAllReservations_URL}`);
};
export const getUserIDAndName = async () => {
  await axios.get(`${Reservation_URL}`);
};

export const getBookingById = async (id) => {
  const { data } = await axios.get(`${Reservation_URL}/${id}`);
  return data;
};
