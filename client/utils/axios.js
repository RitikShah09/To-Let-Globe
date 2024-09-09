import axios from "axios";

const instance = axios.create({
  // "http://localhost:8080/"
  baseURL: "https://to-let-globe-api.onrender.com/",
  withCredentials: true,
});
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default instance;
