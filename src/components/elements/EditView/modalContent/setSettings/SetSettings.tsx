import { useNavigate } from "react-router-dom"
import AccessesBox from "./accessesBox/AccessesBox"
import AddPermission from "./addPermission/AddPermission"
import { useDeleteSet } from "../../../../../api/hooks/mutations/useDeleteSet"
import * as S from "../../../global/elements"

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
            <S.ModalTitle>SetSettings</S.ModalTitle>
            <AddPermission setId={setId} />
            <AccessesBox />
            <S.DeleteSetButton onClick={() => handleDelete()} >DELETE SET</S.DeleteSetButton>
        </>
    )
}

export default SetSettings