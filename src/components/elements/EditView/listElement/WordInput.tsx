import * as S from "../elements"

type Props = {
    input_id: string,
    value: string,
    handleType: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleRemove: () => void,
}

const WordInput = ({ input_id, value, handleType, handleRemove }: Props) => {
    return (
        <S.WordInputWrapper>
            <S.Input id={`${input_id}`} $width={`${value.length * 10}px`} key={input_id} value={value} onChange={(e) => handleType(e)} />
            <S.DeteleButton onClick={() => handleRemove()} >x</S.DeteleButton>
        </S.WordInputWrapper>
    )
}

export default WordInput