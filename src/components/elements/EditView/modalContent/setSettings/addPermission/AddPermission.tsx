import { useEffect, useState } from "react"
import { ROLE_ENUM, RoleType } from "../../../../../../global/types"
import { useCreateSetAccess } from "../../../../../../api/hooks/mutations/useCreateSetAccess"
import * as S from "./elements"
import PermissionButton from "./PermissionButton"
import { FaKey } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FaBook } from "react-icons/fa";

type Props = {
    setId: number,
}

const AddPermission = ({ setId }: Props) => {

    const [email, setEmail] = useState<string>("")
    const [selectedRole, setSelectedRole] = useState<RoleType | null>(null)

    const {
        mutate
    } = useCreateSetAccess()

    useEffect(() => {
        if (selectedRole) {
            mutate({ setId, email, role: selectedRole })

        }
    }, [email, mutate, selectedRole, setId])

    return (
        <S.Wrapper>
            <S.Title>Grant permissions</S.Title>
            <S.Input placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <PermissionButton onClick={() => setSelectedRole(ROLE_ENUM.OWNER)} color="black" icon={FaKey} />
            <PermissionButton onClick={() => setSelectedRole(ROLE_ENUM.EDITABLE)} color="black" icon={CiEdit} />
            <PermissionButton onClick={() => setSelectedRole(ROLE_ENUM.READ_ONLY)} color="black" icon={FaBook} />
        </S.Wrapper>
    )
}

export default AddPermission