import Sidebar from "../elements/Sidebar/Sidebar";
import * as S from "../elements/global/elements"

type Props = {
    children: JSX.Element;
};

const PageWrapper = ({ children }: Props) => {



    return (
        <S.Container>
            <Sidebar />
            <S.Wrapper>
                {children}
            </S.Wrapper>
        </S.Container>
    )
}

export default PageWrapper