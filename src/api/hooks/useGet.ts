import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ResponseDataType } from '../../global/types';

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
  fn: (page: number) => Promise<ResponseDataType<T>>,
) => {
  const query = useInfiniteQuery<ResponseDataType<T>, AxiosError>(
    ['sets'],
    async ({ pageParam = 1 }) => {
      return await fn(pageParam)
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
