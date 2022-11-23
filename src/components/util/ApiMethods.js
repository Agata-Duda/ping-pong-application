import axios from "axios";

export const GetAllReservations_URL = "http://localhost:8120/reservations";
export const Reservation_URL = "http://localhost:8120/reservations";

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
    return await axios.post(`${Reservation_URL}`, booking);
  };

  export const getAllReservations = async () => {
    await axios.get(`${GetAllReservations_URL}`);
  };

  export const getBookingById = async (id) => {
    const { data } = await axios.get(`${Reservation_URL}/${id}`);
    return data;
  };

  export const updateReservationById = async (id) => {
    await axios.put(`${Reservation_URL}/"${id}/gameComplete/{False}`); // If True it updates the scores for the users in the user service
  };

  export const deleteReservationById = async (id) => {
    await axios.delete(`${Reservation_URL}/${id}`);
  };

export const GET_ALL_USERS = "http://localhost:8110/users";
export const GetUserByUsername_URL = "http://localhost:8110/users/filter/";
export const GetAllJobTitles_URL = "http://localhost:8110/users/jobTitles/";

export const getAllUsers = async () => {
    await axios.get(`${GET_ALL_USERS}`)
  }

export const getUserIDAndName = async () => {
    await axios.get(`${Reservation_URL}`);
  };

export const Tournament_URL = "http://localhost:8130/tournament";
export const GET_ALL_TOURNAMENTS_URL = "http://localhost:8130/tournament/"

export const postTournament = async (tournament) => {
    await axios.post(`${Tournament_URL}/`, tournament)
  }
  
  export const getAllTournaments = async () => {
    await axios.get(`${GET_ALL_TOURNAMENTS_URL}`);
  }
  
