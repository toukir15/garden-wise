import { envConfig } from "@/src/config/envConfig";
import axios from "axios";

// Create the Axios instance
const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

export default axiosInstance;
