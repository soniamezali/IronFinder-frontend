import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5005",
});

service.interceptors.request.use((interceptedRequest) => {
  interceptedRequest.headers.Authorization = `Bearer ${localStorage.getItem(
    "token"
  )}`;
  return interceptedRequest;
});

export default service;
