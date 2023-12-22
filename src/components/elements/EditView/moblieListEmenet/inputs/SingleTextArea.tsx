import * as S from "../elements"

type Props = {
    value: string,
    setValue: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    handleDelete: () => void
}

const SingleTextArea = ({ value, setValue, handleDelete }: Props) => {

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
            <textarea onClick={(e) => e.stopPropagation()} value={value} onChange={(e) => handleTextArea(e)} style={{ width: "100%" }} />
            <button onClick={(e) => handleButton(e)} >x</button>
        </S.SingleTextAreWrapper>
    )
}

export default SingleTextArea