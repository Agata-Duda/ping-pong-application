import axios from "axios";
import { toast } from "react-hot-toast";

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('jwt');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
    return config;
  }
)

axios.interceptors.response.use(
    response => response,
    error => {
      if(error.response.status === 401 && window.location.href !== "http://localhost:3000/") {
        toast.error("Session Expired")
        window.location.href = "/"
      }
      else return Promise.reject(error)
    }
  )

export const Reservation_URL = "http://localhost:8000/reservation-service";

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
  const data = await axios.get(`${Reservation_URL}`).then((res) => {
    return res?.data.response;
  });

  return data;
};
export const getBookingById = async (id) => {
  const { data } = await axios.get(`${Reservation_URL}/${id}`);
  return data;
};

export const updateReservationById = async (eventid, userName, booking) => {
  await axios.put(
    `${Reservation_URL}/${eventid}/gameComplete/false/userName/${userName}`,
    booking);
};

export const updateReservationByIdGameCompletion = async (
  eventid,
  userName,
  booking
) => {
  await axios.put(
    `${Reservation_URL}/${eventid}/gameComplete/true/userName/${userName}`,
    booking
  );
};

export const updateMatchScore = async (id) => {
  await axios.put(`${Reservation_URL}/${id}/gameComplete/{True}`, null);
};

export const deleteReservationById = async (eventid) => {
  await axios.delete(`${Reservation_URL}/${eventid}`);
};

export const User_URL = "http://localhost:8000/user-service";
export const GetUserByUsername_URL =
  "http://localhost:8000/user-service/filter/";
export const GetAllJobTitles_URL =
  "http://localhost:8000/user-service/jobTitles";

export const getAllUsers = async () => {
  await axios.get(`${User_URL}`);
};

export const postUser = async (user) => {
  await axios.post(`${User_URL}`, user);
};

export const getUserDetails = async (username) => {
  return await axios.get(`${User_URL}/filter/${username}`);
};

export const Tournament_URL = "http://localhost:8000/tournament-service";

export const postTournament = async (tournament) => {
  await axios
    .post(`${Tournament_URL}/`, tournament)
    .then(() =>
      toast.success("Tournament Created: " + tournament.tournamentName)
    )
    .catch((error) => {
      toast.error(error.response.data.response);
      throw error.response.data.response;
    });
};

export const getAllTournaments = async () => {
  return await axios.get(`${Tournament_URL}`);
};

export const Leaderboard_URL = "http://localhost:8000/leaderboard-service";

export const GetAllLeaderboardEntriesByUsername = async (username) => {
  return await axios
    .get(`${Leaderboard_URL}/userGames/`.concat(username))
    .catch((error) => {
      throw error;
    });
};

export const JoinTournament = async (leaderboardEntryDate) => {
  return await axios
    .post(`${Leaderboard_URL}`, leaderboardEntryDate)
    .catch((error) => {
      throw error;
    });
};

export const Security_URL = "http://localhost:8000/security-service";

export const authenticateUser = async (userCredentials) => {
  return await axios
    .post(`${Security_URL}/auth`, userCredentials)
    .catch((error) => {
      throw error;
    });
};
