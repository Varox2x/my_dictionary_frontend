import { useState } from "react"
import DeleteButton from "../buttons/DeleteButton"
import * as S from "../elements"
import { SingleInputProps } from "../types"

type Props = SingleInputProps

const SingleInput = ({ value, setValue, handleDelete, isCurrentlyEditing, index, resourceRef, setValidateErrorContent }: Props) => {

    const [isMouseOn, setIsMouseOn] = useState<boolean>(false)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 30) {
            setValue(e)
            setValidateErrorContent("")
        } else {
            setValidateErrorContent('limit is 30 characters')
        }
    }

    const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        handleDelete()
    }

    return (
        <S.Wrapper onMouseEnter={() => setIsMouseOn(true)} onMouseLeave={() => setIsMouseOn(false)}>
            <S.SingleInput ref={(el) => {
                if (resourceRef.current) {
                    resourceRef.current[index] = el as HTMLInputElement
                }
            }} disabled={!isCurrentlyEditing} value={value} onClick={(e) => {
                if (isCurrentlyEditing) { e.stopPropagation() }
            }} onChange={(e) => handleInput(e)} />
            <DeleteButton color={(isMouseOn && isCurrentlyEditing) ? "#3E2265" : "transparent"} disabled={!isCurrentlyEditing} onClick={(e) => handleButton(e)} />
        </S.Wrapper>
    )
}

export default SingleInput