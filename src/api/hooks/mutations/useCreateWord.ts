import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createWord } from '../../setApi';
import {
  CreateWordApiArgsType,
  ResponseDataType,
  WordType,
} from '../../../global/types';

type HookArgs = {
  setId: number;
};

export const useCreateWord = ({ setId }: HookArgs) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<WordType, Error, CreateWordApiArgsType>({
    mutationFn: createWord,
    mutationKey: ['setswords', Number(setId)],
    onSuccess: (newData: WordType) => {
      queryClient.setQueryData<ResponseDataType<WordType[]>>(
        ['setswords', Number(setId)],
        (data: ResponseDataType<WordType[]> | undefined) => {
          if (!data) return undefined;
          data.data = [...data.data, newData];
          return data;
        },
      );
    },
  });

  return { ...mutation };
};
