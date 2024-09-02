import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export function setupAxios() {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('authToken'); 

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (err) => Promise.reject(err),
  );
}


export default axiosInstance;