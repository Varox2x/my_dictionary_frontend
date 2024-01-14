import { useEffect, useState } from "react"
import ExtendedMenu from "./ExtendedMenu/ExtendedMenu"
import * as S from "./elements"
import SetsView from "./ExtendedMenu/views/setsView/SetsView"
import { MODE_ENUM, ROLE_ENUM, RoleType } from "../../../global/types"
import { useDispatchStore, useStore } from "../../../store/StoreProvider"
import { ACTION_TYPES } from "../../../store/actionTypes"
import routerList from "../../../routerList"
import { useLocation } from "react-router-dom"

const MobileMenu = () => {

    const [isMenuExtanded, setIsMenuExtanded] = useState<boolean>(false)
    const [role, setRole] = useState<RoleType>(ROLE_ENUM.OWNER)
    const [currentIndex,] = useState(0)
    let location = useLocation()

    const dispatch = useDispatchStore()
    const { isMobileMenuOpen, currentMode } = useStore()

    useEffect(() => {
        console.log('page')
        console.log(location)
        console.log(routerList.CreateNewSetPage.url)
    }, [location])

    const isCreateNewSetPageOpen = (): boolean => {
        return location.pathname == `/${routerList.CreateNewSetPage.url}`
    }



    const handleShowSetList = (role: RoleType) => {
        setIsMenuExtanded(true)
        setRole(role)
    }

    return (
        <S.Container $isActive={isMobileMenuOpen} >
            <S.Wrapper>
                <S.Nav>
                    <S.Menu>
                        <S.UnderMenuTitle>
                            Mode
                        </S.UnderMenuTitle>
                        <S.UnderMenu>
                            <S.MenuElement onClick={() => {
                                dispatch({ type: ACTION_TYPES.CHANGE_MODE, payload: MODE_ENUM.LEARN })
                                dispatch({ type: ACTION_TYPES.CLOSE_MOBILE_MENU })
                            }} >
                                <S.MenuElementTitle $isActive={(currentMode == MODE_ENUM.LEARN) && !isCreateNewSetPageOpen()}>
                                    Learn
                                </S.MenuElementTitle>
                            </S.MenuElement>
                            <S.MenuElement onClick={() => {
                                dispatch({ type: ACTION_TYPES.CLOSE_MOBILE_MENU })
                                dispatch({ type: ACTION_TYPES.CHANGE_MODE, payload: MODE_ENUM.EDIT })
                            }} >
                                <S.MenuElementTitle $isActive={(currentMode == MODE_ENUM.EDIT) && !isCreateNewSetPageOpen()}>
                                    Edit
                                </S.MenuElementTitle>
                            </S.MenuElement>
                        </S.UnderMenu>
                        <S.PageLink to={`/${routerList.CreateNewSetPage.url}`} ><S.PageTitle $isActive={isCreateNewSetPageOpen()}>Create New Set</S.PageTitle></S.PageLink>
                        <S.UnderMenuTitle>
                            Sets
                        </S.UnderMenuTitle>
                        <S.UnderMenu>
                            <S.MenuElement onClick={() => handleShowSetList(ROLE_ENUM.OWNER)}>
                                <S.MenuElementTitle $isActive={(role == ROLE_ENUM.OWNER) && !isCreateNewSetPageOpen()}>
                                    Owner
                                </S.MenuElementTitle>
                            </S.MenuElement>
                            <S.MenuElement onClick={() => handleShowSetList(ROLE_ENUM.EDITABLE)}>
                                <S.MenuElementTitle $isActive={(role == ROLE_ENUM.EDITABLE) && !isCreateNewSetPageOpen()} >
                                    Edit
                                </S.MenuElementTitle>
                            </S.MenuElement>
                            <S.MenuElement onClick={() => handleShowSetList(ROLE_ENUM.READ_ONLY)}>
                                <S.MenuElementTitle $isActive={(role == ROLE_ENUM.READ_ONLY) && !isCreateNewSetPageOpen()}>
                                    Learn
                                </S.MenuElementTitle>
                            </S.MenuElement>
                        </S.UnderMenu>
                    </S.Menu>
                </S.Nav>
                <ExtendedMenu isMenuExtanded={isMenuExtanded && isMobileMenuOpen} currentIndex={currentIndex}>
                    <SetsView role={role} />
                </ExtendedMenu>
            </S.Wrapper>
        </S.Container>
    )
}

export default MobileMenu