import { useState } from 'react';
import * as S from './elements';

const ENUM_SIDE = {
    RIGHT: "RIGHT",
    LEFT: "LEFT",
} as const

type Sideype = keyof typeof ENUM_SIDE;

type Props = {
    data: string[]
}

const Slider = ({ data }: Props) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const handleArrow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, arrow: Sideype) => {
        e.stopPropagation();
        switch (arrow) {
            case ENUM_SIDE.RIGHT:
                setCurrentIndex(prev => prev + 1)
                break;
            case ENUM_SIDE.LEFT:
                setCurrentIndex(prev => prev - 1)
                break;
        }
    }

    return (
        <>
            <S.SliderContainer translate={currentIndex * -100}>
                {data.map((el, i) => {
                    return <S.SliderElement key={i} translate={i * 100} >{el}</S.SliderElement>
                })}
            </S.SliderContainer>
            {data.length > 0 && <S.ArrowWrapper>
                <S.ArrowLeft $visible={currentIndex == 0} disabled={currentIndex == 0} onClick={(e) => handleArrow(e, ENUM_SIDE.LEFT)}  >{"<"}</S.ArrowLeft>
                <S.ArrowRight $visible={currentIndex == data.length - 1} disabled={currentIndex == data.length - 1} onClick={(e) => handleArrow(e, ENUM_SIDE.RIGHT)}>{">"}</S.ArrowRight>
            </S.ArrowWrapper>}
        </>

    )
}

export default Slider