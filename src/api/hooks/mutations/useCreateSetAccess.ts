import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createSetAccess } from '../../setApi';
import {
  AccessType,
  CrreateSetAccessesApiArgsType,
} from '../../../global/types';

export const useCreateSetAccess = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    AccessType,
    Error,
    CrreateSetAccessesApiArgsType
  >({
    mutationFn: createSetAccess,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accesses'] });
    },
  });

  return { ...mutation };
};
