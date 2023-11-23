import { useNavigate } from "react-router-dom"
import AccessesBox from "./accessesBox/AccessesBox"
import AddPermission from "./addPermission/AddPermission"
import { useDeleteSet } from "../../../../../api/hooks/mutations/useDeleteSet"

type Props = {
    setId: number
}

const SetSettings = ({ setId }: Props) => {

    const navigate = useNavigate();

    const {
        mutateAsync,
    } = useDeleteSet({ setId })


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