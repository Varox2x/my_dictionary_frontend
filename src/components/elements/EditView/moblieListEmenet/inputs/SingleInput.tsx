import DeleteButton from "../buttons/DeleteButton"
import * as S from "../elements"
import { SingleInputProps } from "../types"

type Props = SingleInputProps

const SingleInput = ({ value, setValue, handleDelete, isCurrentlyEditing, index, resourceRef }: Props) => {

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        // e.stopPropagation()
        setValue(e)
    }

    const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        handleDelete()
    }

    return (
        <S.Wrapper>
            <S.SingleInput ref={(el) => {
                if (resourceRef.current) {
                    resourceRef.current[index] = el as HTMLInputElement
                }
            }} disabled={!isCurrentlyEditing} value={value} onClick={(e) => {
                if (isCurrentlyEditing) { e.stopPropagation() }
            }} onChange={(e) => handleInput(e)} />
            {isCurrentlyEditing && <DeleteButton disabled={!isCurrentlyEditing} onClick={(e) => handleButton(e)} />}
        </S.Wrapper>
    )
}

export default SingleInput