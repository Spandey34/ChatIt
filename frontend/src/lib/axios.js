import axios from "axios";

const BASE_URL = import.meta.env.VITE_STREAM_API_KEY ? `${import.meta.env.VITE_STREAM_API_KEY}/api` : (`${import.meta.env.MODE}` === "development" ? "http://localhost:5001/api" : "/api");
console.log(BASE_URL);
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
