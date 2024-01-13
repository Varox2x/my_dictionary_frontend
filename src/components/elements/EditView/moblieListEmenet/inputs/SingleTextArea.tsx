import { useState } from "react"
import DeleteButton from "../buttons/DeleteButton"
import * as S from "../elements"
import { SingleInputProps } from "../types"
import { useIsMobile } from "../../../../../global/hooks/useIsMobile"

type Props = SingleInputProps

const SingleTextArea = ({ value, setValue, handleDelete, resourceRef, index, isCurrentlyEditing, setValidateErrorContent }: Props) => {
    const [isMouseOn, setIsMouseOn] = useState<boolean>(false)
    const isMobile = useIsMobile()

    const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.stopPropagation()
        if (e.target.value.length <= 320) {
            setValue(e)
            setValidateErrorContent("")
        } else {
            setValidateErrorContent('limit is 320 characters')
        }
    }

    const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        handleDelete()
    }

    return (
        <S.SingleTextAreWrapper onMouseEnter={() => setIsMouseOn(true)} onMouseLeave={() => setIsMouseOn(false)}>
            <S.SingleTextArea rows={!isMobile ? 3 : 6} ref={(el) => {
                if (resourceRef.current) {
                    resourceRef.current[index] = el as HTMLTextAreaElement
                }
            }} onClick={(e) => e.stopPropagation()} value={value} onChange={(e) => handleTextArea(e)} style={{ width: "100%" }} />
            <DeleteButton color={(isMouseOn && isCurrentlyEditing) ? "#3E2265" : "transparent"} disabled={false} onClick={(e) => handleButton(e)} />
        </S.SingleTextAreWrapper>
    )
}

export default SingleTextArea