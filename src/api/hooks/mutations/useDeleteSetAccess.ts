import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteSetAccesses } from '../../setApi';
import {
  AccessType,
  DeleteSetAccessesApiArgsType,
  ResponseDataType,
  RoleType,
} from '../../../global/types';

type HookArgs = {
  setId: number;
  userId: number;
  role: RoleType;
  page: number;
};

export const useDeleteSetAccess = ({ setId, userId, role, page }: HookArgs) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<void, Error, DeleteSetAccessesApiArgsType>({
    mutationFn: deleteSetAccesses,
    mutationKey: ['setswords', Number(setId)],
    onSuccess: () => {
      queryClient.setQueryData(
        ['accesses', role, page],
        (data: ResponseDataType<AccessType[]> | undefined) => {
          if (!data) return undefined;
          data.data = [...data.data.filter((el) => el.user.id != userId)];
          return data;
        },
      );
    },
  });

  return { ...mutation };
};
