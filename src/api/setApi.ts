import config from '../config';
import {
  AccessType,
  CreateSetAccessesApiArgsType,
  CreateWordApiArgsType,
  DeleteSetAccessesApiArgsType,
  ResponseDataType,
  RoleType,
  UpdateBulkWordApiArgsType,
  WordType,
} from '../global/types';
import { Set } from '../global/types';
import axiosInstance from './axiosInstance';
import { AxiosResponse } from 'axios';

export const getCurrentUserSets = async (
  page: number,
  role: number,
): Promise<ResponseDataType<Set[]>> => {
  return axiosInstance.get(`${config.API_URL}/sets?role=${role}&page=${page}`);
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

export const deleteSet = async (setId: number): Promise<void> => {
  return axiosInstance.delete(`${config.API_URL}/sets/${setId}`);
};

export const createSetAccess = async ({
  setId,
  email,
  role,
}: CreateSetAccessesApiArgsType): Promise<AccessType> => {
  return axiosInstance.post(`${config.API_URL}/accesses/${setId}`, {
    email,
    role,
  });
};

export const getSetAccesses = async (
  role: RoleType,
  page: number,
  setId: number,
): Promise<ResponseDataType<AccessType[]>> => {
  return axiosInstance.get(
    `${config.API_URL}/accesses/${setId}?role=${role}&${page}`,
  );
};

export const deleteSetAccesses = async ({
  setId,
  userId,
}: DeleteSetAccessesApiArgsType): Promise<void> => {
  return axiosInstance.delete(`${config.API_URL}/accesses/${setId}/${userId}`);
};
