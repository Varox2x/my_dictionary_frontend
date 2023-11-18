import config from '../config';
import {
  CreateWordApiArgsType,
  CreateWordType,
  ResponseDataType,
  UpdateBulkWordApiArgsType,
  UpdateWordType,
  WordType,
} from '../global/types';
import { Set } from '../global/types';
import axiosInstance from './axiosInstance';
import { AxiosResponse } from 'axios';

export const getCurrentUserSets = async (
  page: number,
): Promise<ResponseDataType<Set[]>> => {
  return axiosInstance.get(`${config.API_URL}/sets?role=1&page=${page}`);
};

export const createSet = async (name: string): Promise<Set> => {
  return axiosInstance.post(`${config.API_URL}/sets`, { name });
};

export const getSetWords = async (
  setId: number,
  page: number,
): Promise<ResponseDataType<WordType[]>> => {
  return axiosInstance.get(`${config.API_URL}/sets/${setId}?page=${page}`);
};

export const updateWordsBulk = async ({
  data,
  setId,
}: UpdateBulkWordApiArgsType): Promise<AxiosResponse> => {
  return axiosInstance.patch(`${config.API_URL}/sets/${setId}/words`, { data });
};

export const createWord = async ({
  data,
  setId,
}: CreateWordApiArgsType): Promise<WordType> => {
  return axiosInstance.post(`${config.API_URL}/sets/${setId}/words`, {
    ...data,
  });
};

export const deleteWord = async (wordId: number): Promise<void> => {
  return axiosInstance.delete(`${config.API_URL}/sets/words/${wordId}`);
};
