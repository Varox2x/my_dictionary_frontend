import axios from 'axios';
import config from '../config';
import { STATUS, Tokens } from './types';
import authHeader from './helpers/authHeader';
import routerList from '../routerList';
import { LoginBodyType } from '../global/types';

export const getRefreshAccessTokensLogin = async (
  body: LoginBodyType,
): Promise<Tokens> => {
  return axios
    .post<Tokens>(`${config.API_URL}/auth/signin`, {
      ...body,
    })
    .then((r) => {
      if (r.status === STATUS._200 && r?.data?.access_token) {
        return r.data;
      } else {
        const error = new Error();
        throw error;
      }
    })
    .catch(() => {
      const error = new Error('Wrong authorize data');
      throw error;
    });
};

export const getRefreshAccessTokensRegister = async (
  body: LoginBodyType,
): Promise<Tokens> => {
  return axios
    .post<Tokens>(`${config.API_URL}/auth/signup`, {
      ...body,
    })
    .then((r) => {
      if (r.status === STATUS._200 && r.data) {
        return r.data;
      } else {
        const error = new Error();
        throw error;
      }
    })
    .catch(() => {
      const error = new Error('Wrong authorize data');
      throw error;
    });
};

export const getRefreshAccessTokensByRefresh = async (): Promise<Tokens> => {
  const reqInstance = axios.create({
    headers: {
      Authorization: authHeader('refresh_token'),
    },
  });

  return reqInstance
    .post<Tokens>(`${config.API_URL}/auth/refresh`)
    .then((r) => {
      if (r.status === STATUS._200) {
        localStorage.setItem('tokens', JSON.stringify(r.data)); // set items to local storage
        return r.data;
      } else {
        const error = new Error();
        throw error;
      }
    })
    .catch(() => {
      throw new Error('Wrong authorize data');
    });
};

export const login = (body: LoginBodyType): Promise<boolean> => {
  return getRefreshAccessTokensLogin(body)
    .then((r) => {
      localStorage.setItem('tokens', JSON.stringify(r));
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const register = (body: LoginBodyType): Promise<boolean> => {
  return getRefreshAccessTokensRegister(body)
    .then((r) => {
      localStorage.setItem('tokens', JSON.stringify(r));
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const logout = (): void => {
  localStorage.removeItem('tokens');
  window.location.href = routerList.LoginPage.url;
};
