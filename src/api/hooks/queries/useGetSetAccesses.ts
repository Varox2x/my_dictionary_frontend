import { useQuery } from '@tanstack/react-query';
import { RoleType } from '../../../global/types';
import { getSetAccesses } from '../../setApi';

export const useGetSetAccesses = (
  page: number,
  role: RoleType,
  setId: number,
) => {
  const query = useQuery(
    ['accesses', role, page],
    async () => getSetAccesses(role, page, setId),
    {
      keepPreviousData: true,
    },
  );
  return { ...query };
};
