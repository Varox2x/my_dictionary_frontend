import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteSet } from "../../../../../api/setApi"
import { QueryData, ROLE_ENUM } from "../../../../../global/types"
import { useNavigate } from "react-router-dom"
import AccessesBox from "./accessesBox/AccessesBox"
import AddPermission from "./addPermission/AddPermission"

type Props = {
    setId: number
}

const SetSettings = ({ setId }: Props) => {

    const queryClient = useQueryClient()
    const navigate = useNavigate();

    const {
        mutateAsync,
    } = useMutation<void, Error, number>({
        mutationFn: deleteSet,
        onSuccess: () => {
            queryClient.setQueryData<QueryData>(
                ['sets', ROLE_ENUM.OWNER],
                (data: QueryData | undefined) => {
                    if (!data || !data.pages) return undefined
                    const newPages = data.pages.map(page => {
                        page.data = [...page.data.filter(set => set.id !== setId)]
                        return page
                    })
                    data.pages = newPages
                    return data
                }
            )
        },
    })


    const handleDelete = () => {
        mutateAsync(setId).then(() => {
            navigate('/home')

        })
    }

    return (
        <>
            <div>SetSettings</div>
            <button onClick={() => handleDelete()} >DELETE SET</button>
            <AddPermission setId={setId} />
            <AccessesBox />
        </>
    )
}

export default SetSettings