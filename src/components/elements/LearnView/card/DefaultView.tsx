import * as S from '../elements';

type Props = {
    data: string[]
}

const DefaultView = ({ data }: Props) => {
    return (
        <S.DefaultStageList>
            {data.map((el, index) => {
                return (
                    <S.DefaultStageListElement key={index} >
                        <S.SingleText>{el}</S.SingleText>
                    </S.DefaultStageListElement>
                )
            })}
        </S.DefaultStageList>
    )
}

export default DefaultView