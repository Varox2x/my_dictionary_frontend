
import { ROLE_ENUM, RoleType } from "../../../../../../global/types"
import * as S from "./elements"

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
            <button style={selecetedRole === ROLE_ENUM.OWNER ? { border: " 2px solid yellow" } : {}} onClick={() => handleButton(ROLE_ENUM.OWNER)} >O</button>
            <button style={selecetedRole === ROLE_ENUM.EDITABLE ? { border: " 2px solid yellow" } : {}} onClick={() => handleButton(ROLE_ENUM.EDITABLE)}>E</button>
            <button style={selecetedRole === ROLE_ENUM.READ_ONLY ? { border: " 2px solid yellow" } : {}} onClick={() => handleButton(ROLE_ENUM.READ_ONLY)}>R</button>
        </S.MenuWrapper>
    )
}

export default Menu