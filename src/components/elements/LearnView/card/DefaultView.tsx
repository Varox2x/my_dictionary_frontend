import * as S from '../elements';

type Props = {
    data: string[],
    isrevert: boolean
}

const DefaultView = ({ data, isrevert }: Props) => {
    return (
        <S.DefaultStageList>
            <S.DefaultStageListElement  >
                <S.SingleText $isrevert={isrevert}>
                    {data.map((el) => {
                        return (
                            <>{el}{"    "}</>
                        )
                    })}
                </S.SingleText>
            </S.DefaultStageListElement>

        </S.DefaultStageList>
    )
}

export default DefaultView