import { RoleType } from "../../../../../../global/types";
import { useDeleteSetAccess } from "../../../../../../api/hooks/mutations/useDeleteSetAccess";

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
  const {
    mutate
  } = useDeleteSetAccess({ userId: user.id, setId: Number(setId), page, role })

  const handleDelete = () => {
    mutate({ setId, userId: user.id })
  }

  return <li>{user.email} <button onClick={handleDelete} >Delete</button>{setId}</li>;
};

export default ListElement;
