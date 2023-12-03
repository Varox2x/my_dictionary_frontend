import * as S from "./elements"
import { useDispatchStore, useStore } from "../../../../store/StoreProvider";
import { ACTION_TYPES } from "../../../../store/actionTypes";


const HamburgerMenuLogo = () => {

    const state = useStore()
    const dispatch = useDispatchStore()


    const handleContainerClick = () => {
        if (state.isMobileMenuOpen) {
            dispatch({ type: ACTION_TYPES.CLOSE_MOBILE_MENU })
        } else {
            dispatch({ type: ACTION_TYPES.OPEN_MOBILE_MENU })

        }
    };

    return (
        <S.Container onClick={() => handleContainerClick()} >
            <div id="nav-icon2" className={state.isMobileMenuOpen ? "open" : ""}>
                <span ></span>
                <span ></span>
                <span ></span>
                <span ></span>
                <span ></span>
                <span ></span>
            </div>
        </S.Container>

    )
}

export default HamburgerMenuLogo