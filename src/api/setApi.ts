import config from '../config';
import { ResponseDataType } from './types';
import { Set } from '../global/types';
import axiosInstance from './axiosInstance';

export const getCurrentUserSets = async (
  page: number,
): Promise<ResponseDataType<Set[]>> => {
  return axiosInstance.get(`${config.API_URL}/sets?role=1&page=${page}`);
};
