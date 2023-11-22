import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSetAccesses } from "../../../../../../api/setApi";
import { AccessType, DeleteSetAccessesApiArgsType, ResponseDataType, RoleType } from "../../../../../../global/types";

type Props = {
  user: {
    email: string,
    id: number
  },
  setId: number,
  role: RoleType,
  page: number
}


const ListElement = ({ user, setId, role, page }: Props) => {

  const queryClient = useQueryClient()

  const {
    mutate
  } = useMutation<void, Error, DeleteSetAccessesApiArgsType>({
    mutationFn: deleteSetAccesses,
    mutationKey: ['setswords', Number(setId)],
    onSuccess: () => {
      queryClient.setQueryData(
        ['accesses', role, page],
        (data: ResponseDataType<AccessType[]> | undefined) => {
          if (!data) return undefined
          data.data = [...data.data.filter(el => el.user.id != user.id)]
          return data
        }
      )
    },
  })

  const handleDelete = () => {
    mutate({ setId, userId: user.id })
  }

  return <li>{user.email} <button onClick={handleDelete} >Delete</button>{setId}</li>;
};

export default ListElement;
