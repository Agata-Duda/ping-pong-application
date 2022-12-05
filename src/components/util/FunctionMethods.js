import axios from "axios";
import { GET_ALL_USERS } from "./ApiMethods";

export const getPlayerOneUsername = async (playerOne) => {
    const data = await axios.get(`${GET_ALL_USERS}/${playerOne}`)
    return data
}

    export const getPlayerTwoUsername = async (playerTwo) => {
       const data = await axios.get(`${GET_ALL_USERS}/${playerTwo}`)
            return data
        }