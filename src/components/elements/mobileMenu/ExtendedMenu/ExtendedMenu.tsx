import { Children, ReactNode } from "react"
import * as S from "./elements"

type Props = {
    children: ReactNode,
    currentIndex: number,
    isMenuExtanded: boolean
}

const ExtendedMenu = ({ children, currentIndex, isMenuExtanded }: Props) => {


    const currentChild = Children.toArray(children)[currentIndex]

    return (
        <S.Container $isActive={isMenuExtanded}>
            <S.Wrapper $isActive={isMenuExtanded}>
                {currentChild}
            </S.Wrapper>
        </S.Container>
    )
}

export default ExtendedMenu