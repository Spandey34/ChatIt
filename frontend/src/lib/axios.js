import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL ? `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api` : (`${import.meta.env.MODE}` === "development" ? "http://localhost:5001/api" : "/api");
console.log(BASE_URL);
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
