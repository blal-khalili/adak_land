import axios from "axios"

const authAxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 10000, // Set timeout to 10 seconds
    headers: {
      "Content-Type": 'application/json',
    //   "Access-Control-Allow-Origin": "*", // Allow CORS
    },
  });



export default authAxiosInstance;