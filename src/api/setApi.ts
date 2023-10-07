import axios, { AxiosError } from 'axios';
import config from '../config';
import authHeader from './helpers/authHeader';
import { getRefreshAccessTokensByRefresh, logout } from './authApi';

axios.defaults.headers.common['Authorization'] = authHeader('access_token');
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return getRefreshAccessTokensByRefresh()
        .then((r) => {
          originalRequest.headers.Authorization = `Bearer ${r.access_token}`;
          return axios(originalRequest);
        })
        .catch((err: AxiosError) => {
          if (err?.response?.status === 401) {
            logout();
          }
          throw err;
        });
    }
    return Promise.reject(error);
  },
);

export const getCurrentUserSets = async () => {
  return axios.get(`${config.API_URL}/sets`);
};
