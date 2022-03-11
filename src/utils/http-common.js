import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://gloppen-hotel-database.herokuapp.com/api",
    headers: {
    "Content-type": "application/json"
  }
})