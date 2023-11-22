import { useEffect, useState } from "react"
import { useGetSetAccesses } from "../../../../../../api/hooks/useGet"
import { ROLE_ENUM, RoleType } from "../../../../../../global/types"
import ListElement from "./ListElement"
import Pagination from "./Pagination"

type Props = {
    role: RoleType,
    setId: number,
}

const UserList = ({ role, setId }: Props) => {

    const [currentPage, setCurrentPage] = useState({
        [ROLE_ENUM.OWNER]: 1,
        [ROLE_ENUM.EDITABLE]: 1,
        [ROLE_ENUM.READ_ONLY]: 1,
    })

    const { data } = useGetSetAccesses(currentPage[role], role, setId)

    useEffect(() => {
        console.log(data)
    }, [data])

    if (!data?.data) {
        return null
    }

    return (
        <>
            <ul>
                {data.data.map((element, index) => {
                    return <ListElement key={index} user={element.user} setId={setId} role={role} page={currentPage[role]} />
                })}
            </ul>
            {/* <Pagination currentPage={currentPage[role]} setCurrentPage={(page: number) => setCurrentPage({ ...currentPage, [role]: page })} /> */}
        </>

    )
}

export default UserList