import axios from "axios"
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";
import { checkAuth } from "./auth";

const authAxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 10000, // Set timeout to 10 seconds
  headers: {
    "Content-Type": 'application/json',
    //   "Access-Control-Allow-Origin": "*", // Allow CORS
  },
});

authAxiosInstance.interceptors.request.use(
  (config) => {
    const access_token = Cookies.get('access_token');
    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
  },
  // must return config
  (error) => {
    console.error('Request Interceptor Error:', error);
    return Promise.reject(error);
  }
);

authAxiosInstance.interceptors.request.use(
  (config)=>{
    console.log(checkAuth())
    if (checkAuth() == true){
      // if all tokens expired redirect users to login page   
    }

    return config
  }
);


export default authAxiosInstance;