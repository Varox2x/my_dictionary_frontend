import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ResponseDataType, RoleType } from '../../../global/types';

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
