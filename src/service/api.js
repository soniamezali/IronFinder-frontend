import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const service = axios.create({
  baseURL: BACKEND_URL,
});

service.interceptors.request.use((interceptedRequest) => {
  interceptedRequest.headers.Authorization = `Bearer ${localStorage.getItem(
    "token"
  )}`;
  return interceptedRequest;
});

export default service;
