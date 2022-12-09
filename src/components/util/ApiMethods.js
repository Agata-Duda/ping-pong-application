import axios from "axios";

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

     return(res?.data.response)

    })

    return data

  };
  export const getBookingById = async (id) => {
    const { data } = await axios.get(`${Reservation_URL}/${id}`);
    return data;
  };

export const updateReservationById = async (eventid, userId, booking) => {
  await axios.put(`${Reservation_URL}/${eventid}/gameComplete/false/userId/${userId}`, booking);
};

export const updateMatchScore = async (id) => {
  await axios.put(`${Reservation_URL}/${id}/gameComplete/{True}`); 
};

export const deleteReservationById = async (eventid) => {
  await axios.delete(`${Reservation_URL}/${eventid}`);
};

export const GET_ALL_USERS = "http://localhost:8000/user-service";
export const GetUserByUsername_URL = "http://localhost:8000/user-service/filter/";
export const GetAllJobTitles_URL = "http://localhost:8000/user-service/jobTitles/";

export const getAllUsers = async () => {
    await axios.get(`${GET_ALL_USERS}`)
  }

  //For getting users from event selected and displaying username in dialog 
  export const getUserByID = async (userId) => {
    await axios.get(`${GET_ALL_USERS}/${userId}`)
  }

  export const postUser = async (user) => {
    await axios.post(`${GET_ALL_USERS}`, user)
  }

export const getUserNameByID = async (playerOne) => {
  await axios.get(`${GET_ALL_USERS}/${playerOne}`)
}

export const Tournament_URL = "http://localhost:8000/tournament-service";

export const postTournament = async (tournament) => {
    await axios.post(`${Tournament_URL}/`, tournament)
  }
  
export const getAllTournaments = async () => {
  await axios.get(`${Tournament_URL}`)
}

export const Leaderboard_URL = "http://localhost:8000/leaderboard-service";

export const GetAllLeaderboardEntries = async () => {
  await axios.get(`${Leaderboard_URL}`)
}