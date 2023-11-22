import { useState } from "react"
import Menu from "./Menu"
import UserList from "./UserList"
import * as S from "./elements"
import { ROLE_ENUM, RoleType } from "../../../../../../global/types"
import { useParams } from "react-router-dom"
import Pagination from "./Pagination"

const AccessesBox = () => {

    const { id: setId } = useParams();
    const [filterRole, setFilterRole] = useState<RoleType>(ROLE_ENUM.OWNER)

    return (
        <S.BoxContainer>
            <Menu selecetedRole={filterRole} setSelecetedRole={setFilterRole} />
            <UserList setId={Number(setId)} role={filterRole} />
        </S.BoxContainer>
    )
}

export default AccessesBox