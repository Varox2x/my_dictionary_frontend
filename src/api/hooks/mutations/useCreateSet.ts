import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createSet } from '../../setApi';
import { QueryData, ROLE_ENUM, Set } from '../../../global/types';

export const useCreateSet = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<Set, Error, string>({
    mutationFn: createSet,
    onSuccess: (newData: Set) => {
      queryClient.setQueryData<QueryData>(
        ['sets', ROLE_ENUM.OWNER],
        (data: QueryData | undefined) => {
          if (!data) return undefined;
          if (data?.pages.length == 0) return data;
          const increasedPage: Set[] = [...data.pages[0].data, newData];
          data.pages[0].data = increasedPage;
          return data;
        },
      );
    },
  });

  return { ...mutation };
};
