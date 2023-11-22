import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ResponseDataType, RoleType } from '../../global/types';
import { getSetAccesses } from '../setApi';

export const useGetSetWords = <T>(
  fn: (page: number, id: number) => Promise<ResponseDataType<T>>,
  page: number,
  id: number,
) => {
  const query = useQuery<ResponseDataType<T>, AxiosError>(
    ['setswords', id],
    async () => {
      return await fn(id, page)
        .then((r: ResponseDataType<T>) => {
          return r;
        })
        .catch((err: AxiosError) => {
          throw err;
        });
    },
    {
      keepPreviousData: true,
    },
  );

  return { ...query };
};

export const useGetInfinite = <T>(
  fn: (page: number, role: RoleType) => Promise<ResponseDataType<T>>,
  role: RoleType,
) => {
  const query = useInfiniteQuery<ResponseDataType<T>, AxiosError>(
    ['sets', role],
    async ({ pageParam = 1 }) => {
      return await fn(pageParam, role)
        .then((r: ResponseDataType<T>) => {
          return r;
        })
        .catch((err: AxiosError) => {
          throw err;
        });
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.current_page != lastPage.page_count
          ? Number(lastPage.current_page) + 1
          : undefined;
      },
    },
  );

  return { ...query };
};

export const useGetSetAccesses = (
  page: number,
  role: RoleType,
  setId: number,
) => {
  const query = useQuery(
    ['accesses', role, page],
    async () => getSetAccesses(role, page, setId),
    {
      keepPreviousData: true,
    },
  );
  return { ...query };
};
