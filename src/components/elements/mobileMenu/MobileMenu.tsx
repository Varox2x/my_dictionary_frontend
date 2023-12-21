import { useState } from "react"
import ExtendedMenu from "./ExtendedMenu/ExtendedMenu"
import * as S from "./elements"
import SetsView from "./ExtendedMenu/views/setsView/SetsView"
import { MODE_ENUM, ROLE_ENUM, RoleType } from "../../../global/types"
import { useDispatchStore, useStore } from "../../../store/StoreProvider"
import { ACTION_TYPES } from "../../../store/actionTypes"
import { Link } from "react-router-dom"
import routerList from "../../../routerList"

const MobileMenu = () => {

    const [isMenuExtanded, setIsMenuExtanded] = useState<boolean>(false)
    const [role, setRole] = useState<RoleType>(ROLE_ENUM.OWNER)
    const [currentIndex, setCurrentIndex] = useState(0)

    const dispatch = useDispatchStore()
    const state = useStore()



    const handleShowSetList = (role: RoleType) => {
        setIsMenuExtanded(true)
        setRole(role)
    }

    return (
        <S.Container $isActive={state.isMobileMenuOpen} >
            <S.Wrapper>
                <S.Nav>
                    <S.Menu>
                        <S.UnderMenuTitle>
                            Mode
                        </S.UnderMenuTitle>
                        <S.UnderMenu>
                            <S.MenuElement onClick={() => dispatch({ type: ACTION_TYPES.CHANGE_MODE, payload: MODE_ENUM.LEARN })} >
                                Learn
                            </S.MenuElement>
                            <S.MenuElement onClick={() => dispatch({ type: ACTION_TYPES.CHANGE_MODE, payload: MODE_ENUM.EDIT })} >
                                Edit
                            </S.MenuElement>
                        </S.UnderMenu>
                        <S.UnderMenuTitle>
                            <Link to={`/${routerList.CreateNewSetPage.url}`} >New Set</Link>
                        </S.UnderMenuTitle>
                        <S.UnderMenuTitle>
                            Sets
                        </S.UnderMenuTitle>
                        <S.UnderMenu>
                            <S.MenuElement onClick={() => handleShowSetList(ROLE_ENUM.OWNER)}>
                                Owner
                            </S.MenuElement>
                            <S.MenuElement onClick={() => handleShowSetList(ROLE_ENUM.EDITABLE)}>
                                Edit
                            </S.MenuElement>
                            <S.MenuElement onClick={() => handleShowSetList(ROLE_ENUM.READ_ONLY)}>
                                Learn
                            </S.MenuElement>
                        </S.UnderMenu>
                    </S.Menu>
                </S.Nav>
                <ExtendedMenu isMenuExtanded={isMenuExtanded && state.isMobileMenuOpen} currentIndex={currentIndex}>
                    <SetsView role={role} />
                </ExtendedMenu>
            </S.Wrapper>
        </S.Container>
    )
}

export default MobileMenu