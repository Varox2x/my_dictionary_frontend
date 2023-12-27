import { RoleType } from "../../../../../../global/types";
import { useDeleteSetAccess } from "../../../../../../api/hooks/mutations/useDeleteSetAccess";
import * as S from "./elements"
import IconContainer from "../../../../../../global/hoc/IconContainer";
import { MdDelete } from "react-icons/md";

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

  return <S.ListElement><S.ListElementTitle>{user.email}</S.ListElementTitle> <S.ListElementIconButton onClick={handleDelete} ><IconContainer color="black" icon={MdDelete} /> </S.ListElementIconButton></S.ListElement>;
};

export default ListElement;
