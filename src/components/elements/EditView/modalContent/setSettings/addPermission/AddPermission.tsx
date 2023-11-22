import { useEffect, useState } from "react"
import { createSetAccess } from "../../../../../../api/setApi"
import { AccessType, CrreateSetAccessesApiArgsType, ROLE_ENUM, ResponseDataType, RoleType } from "../../../../../../global/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

type Props = {
    setId: number,
}

const AddPermission = ({ setId }: Props) => {

    const [email, setEmail] = useState<string>("")

    const queryClient = useQueryClient()
    const [selectedRole, setSelectedRole] = useState<RoleType | null>(null)

    const {
        mutate
    } = useMutation<AccessType, Error, CrreateSetAccessesApiArgsType>({
        mutationFn: createSetAccess,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['accesses'] })
        },
    })

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