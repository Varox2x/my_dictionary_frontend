import { useState } from "react"
import { ROLE_ENUM, RoleType } from "../../../../../../global/types"
import ListElement from "./ListElement"
import { useGetSetAccesses } from "../../../../../../api/hooks/queries/useGetSetAccesses"
import * as S from './elements'

type Props = {
    role: RoleType,
    setId: number,
}

const UserList = ({ role, setId }: Props) => {

    const [currentPage,] = useState({
        [ROLE_ENUM.OWNER]: 1,
        [ROLE_ENUM.EDITABLE]: 1,
        [ROLE_ENUM.READ_ONLY]: 1,
    })

    const { data } = useGetSetAccesses(currentPage[role], role, setId)


    if (!data?.data) {
        return null
    }

    return (
        <>
            <S.List>
                {data.data.map((element, index) => {
                    return <ListElement key={index} user={element.user} setId={setId} role={role} page={currentPage[role]} />
                })}
            </S.List>
            {/* <Pagination currentPage={currentPage[role]} setCurrentPage={(page: number) => setCurrentPage({ ...currentPage, [role]: page })} /> */}
        </>

    )
}

export default UserList