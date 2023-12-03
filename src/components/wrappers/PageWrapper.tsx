import { useEffect } from "react";
import { useIsMobile } from "../../global/hooks/useIsMobile";
import Sidebar from "../elements/Sidebar/Sidebar";
import * as S from "../elements/global/elements"
import MobileMenu from "../elements/mobileMenu/MobileMenu";
import HamburgerMenuLogo from "../elements/mobileMenu/HamburgerMenuLogo/HamburgerMenuLogo";

type Props = {
    children: JSX.Element;
};

const PageWrapper = ({ children }: Props) => {

    const isMobile = useIsMobile()



    return (
        <S.Container>
            {!isMobile && <Sidebar />}
            {isMobile && <MobileMenu />}
            {isMobile && <HamburgerMenuLogo />}
            <S.Wrapper>
                {children}
            </S.Wrapper>
        </S.Container>
    )
}

export default PageWrapper