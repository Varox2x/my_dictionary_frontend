import { useEffect, useState } from "react"
import { ROLE_ENUM, RoleType } from "../../../../../../global/types"
import { useCreateSetAccess } from "../../../../../../api/hooks/mutations/useCreateSetAccess"

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
        <div>
            <p>Dodaj uprawnienia</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} />
            <button onClick={() => setSelectedRole(ROLE_ENUM.OWNER)} >O</button>
            <button onClick={() => setSelectedRole(ROLE_ENUM.EDITABLE)}>E</button>
            <button onClick={() => setSelectedRole(ROLE_ENUM.READ_ONLY)}>R</button>
        </div>
    )
}

export default AddPermission