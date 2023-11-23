import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteSet } from '../../setApi';
import { QueryData, ROLE_ENUM } from '../../../global/types';

type HookArgs = {
  setId: number;
};

export const useDeleteSet = ({ setId }: HookArgs) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<void, Error, number>({
    mutationFn: deleteSet,
    onSuccess: () => {
      queryClient.setQueryData<QueryData>(
        ['sets', ROLE_ENUM.OWNER],
        (data: QueryData | undefined) => {
          if (!data || !data.pages) return undefined;
          const newPages = data.pages.map((page) => {
            page.data = [...page.data.filter((set) => set.id !== setId)];
            return page;
          });
          data.pages = newPages;
          return data;
        },
      );
    },
  });

  return { ...mutation };
};
