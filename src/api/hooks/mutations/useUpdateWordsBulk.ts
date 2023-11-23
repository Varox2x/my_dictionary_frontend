import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateWordsBulk } from '../../setApi';
import {
  ResponseDataType,
  UpdateBulkWordApiArgsType,
  WordType,
} from '../../../global/types';
import { AxiosResponse } from 'axios';

type HookArgs = {
  setId: number;
  stateWords: WordType[];
};

export const useUpdateWordsBulk = ({ setId, stateWords }: HookArgs) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<AxiosResponse, Error, UpdateBulkWordApiArgsType>(
    {
      mutationFn: updateWordsBulk,
      onSuccess: () => {
        queryClient.setQueryData<ResponseDataType<WordType[]>>(
          ['setswords', setId],
          (data: ResponseDataType<WordType[]> | undefined) => {
            if (!data) return undefined;
            data.data = stateWords;
            return data;
          },
        );
      },
    },
  );

  return { ...mutation };
};
