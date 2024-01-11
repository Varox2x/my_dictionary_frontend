import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSingleWord } from '../../setApi';
import {
  ResponseDataType,
  UpdateSingleWordType,
  WordType,
} from '../../../global/types';
import { AxiosResponse } from 'axios';

type HookArgs = {
  wordId: number;
  setId: number;
};

export const useUpdateSingleWord = ({ wordId, setId }: HookArgs) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<AxiosResponse, Error, UpdateSingleWordType>({
    mutationFn: (data) => updateSingleWord({ data, wordId }),
    onSuccess: (_response, passedData) => {
      queryClient.setQueryData<ResponseDataType<WordType[]>>(
        ['setswords', setId],
        (oldData: ResponseDataType<WordType[]> | undefined) => {
          if (!oldData) return undefined;
          oldData.data = oldData.data.map((word) => {
            if (word.id == wordId) {
              return { ...word, ...passedData };
            }
            return word;
          });
          return oldData;
        },
      );
    },
  });

  return { ...mutation };
};
