import axios from "axios";

export const apiInstance = axios.create({
    baseURL: "https://locahost:3000/",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})