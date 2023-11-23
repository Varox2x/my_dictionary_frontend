import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ResponseDataType } from '../../../global/types';

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
