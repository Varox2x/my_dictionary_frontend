import axios, { AxiosError } from 'axios';
import authHeader from './helpers/authHeader';
import { getRefreshAccessTokensByRefresh, logout } from './authApi';

const axiosInstance = axios.create({
  baseURL: 'URL/api',
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers['Authorization'] = authHeader('access_token');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return getRefreshAccessTokensByRefresh()
        .then((r) => {
          originalRequest.headers.Authorization = `Bearer ${r.access_token}`;
          return axios(originalRequest).then((r) => r.data);
        })
        .catch((err: AxiosError) => {
          if (err?.message === 'Wrong authorize data') {
            logout();
          }
          throw err;
        });
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
