import axios from 'axios';

const axiosRealTimeInstance =  axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_REALTIME_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosRealTimeInstance;
