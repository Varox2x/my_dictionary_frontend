import React from 'react'
import * as S from "../elements/global/elements"

type Props = {
    children: JSX.Element;
};

const PageWrapper = ({ children }: Props) => {
    return (
        <div>
            <S.Container>
                <S.Wrapper>
                    {children}
                </S.Wrapper>
            </S.Container>
        </div>
    )
}

export default PageWrapper