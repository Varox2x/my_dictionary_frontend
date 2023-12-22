import * as S from "../elements"

type Props = {
    value: string,
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleDelete: () => void,
    isCurrentlyEditing: boolean
}

const SingleInput = ({ value, setValue, handleDelete, isCurrentlyEditing }: Props) => {

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
            <input value={value} onClick={(e) => {
                if (isCurrentlyEditing) { e.stopPropagation() }
            }} onChange={(e) => handleInput(e)} style={{ width: '80%' }} />
            {isCurrentlyEditing && <button disabled={!isCurrentlyEditing} onClick={(e) => handleButton(e)} >x</button>}
        </S.Wrapper>
    )
}

export default SingleInput