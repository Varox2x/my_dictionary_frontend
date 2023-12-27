
import { ROLE_ENUM, RoleType } from "../../../../../../global/types"
import PermissionButton from "../addPermission/PermissionButton"
import * as S from "./elements"
import { FaKey } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FaBook } from "react-icons/fa";

type Props = {
    selecetedRole: RoleType,
    setSelecetedRole: React.Dispatch<React.SetStateAction<RoleType>>,
}

const Menu = ({ selecetedRole, setSelecetedRole }: Props) => {

    const handleButton = (role: RoleType) => {
        setSelecetedRole(role)
    }

    return (
        <S.MenuWrapper>
            <PermissionButton onClick={() => handleButton(ROLE_ENUM.OWNER)} color={selecetedRole == ROLE_ENUM.OWNER ? '#33BBCF' : 'black'} icon={FaKey} />
            <PermissionButton onClick={() => handleButton(ROLE_ENUM.EDITABLE)} color={selecetedRole == ROLE_ENUM.EDITABLE ? '#33BBCF' : 'black'} icon={CiEdit} />
            <PermissionButton onClick={() => handleButton(ROLE_ENUM.READ_ONLY)} color={selecetedRole == ROLE_ENUM.READ_ONLY ? '#33BBCF' : 'black'} icon={FaBook} />
        </S.MenuWrapper>
    )
}

export default Menu