import { envConfig } from "@/src/config/envConfig";
import axios from "axios";
import Cookies from "js-cookie";

// Create the Axios instance
const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = Cookies.get("accessToken");
    config.headers.Authorization = accessToken;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
