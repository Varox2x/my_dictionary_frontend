import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteWord } from '../../setApi';
import { ResponseDataType, WordType } from '../../../global/types';

type HookArgs = {
  setId: number;
  id: number;
};

export const useDeleteWord = ({ setId, id }: HookArgs) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<void, Error, number>({
    mutationFn: deleteWord,
    mutationKey: ['setswords', setId],
    onSuccess: () => {
      queryClient.setQueryData<ResponseDataType<WordType[]>>(
        ['setswords', setId],
        (data: ResponseDataType<WordType[]> | undefined) => {
          if (!data) return undefined;
          data.data = [...data.data.filter((el) => el.id != id)];
          return data;
        },
      );
    },
  });

  return { ...mutation };
};
