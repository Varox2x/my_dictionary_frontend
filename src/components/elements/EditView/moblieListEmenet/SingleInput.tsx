import * as S from "./elements"

type Props = {
    value: string,
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleDelete: () => void
}

const SingleInput = ({ value, setValue, handleDelete }: Props) => {

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        setValue(e)
    }

    const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        handleDelete()
    }

    return (
        <S.Wrapper>
            <input value={value} onClick={(e) => e.stopPropagation()} onChange={(e) => handleInput(e)} style={{ width: '80%' }} />
            <button onClick={(e) => handleButton(e)} >x</button>
        </S.Wrapper>
    )
}

export default SingleInput