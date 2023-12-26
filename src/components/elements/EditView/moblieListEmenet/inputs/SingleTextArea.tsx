import DeleteButton from "../buttons/DeleteButton"
import * as S from "../elements"
import { SingleInputProps } from "../types"

type Props = SingleInputProps

const SingleTextArea = ({ value, setValue, handleDelete, resourceRef, index }: Props) => {

    const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.stopPropagation()
        setValue(e)
    }

    const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        handleDelete()
    }

    return (
        <S.SingleTextAreWrapper>
            <S.SingleTextArea ref={(el) => {
                if (resourceRef.current) {
                    resourceRef.current[index] = el as HTMLTextAreaElement
                }
            }} onClick={(e) => e.stopPropagation()} value={value} onChange={(e) => handleTextArea(e)} style={{ width: "100%" }} />
            <DeleteButton disabled={false} onClick={(e) => handleButton(e)} />
        </S.SingleTextAreWrapper>
    )
}

export default SingleTextArea