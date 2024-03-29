import IconContainer from '../../../../../global/hoc/IconContainer'
import useHasPermission from '../../../../../global/hooks/useHasPermission'
import { ENUM_POPUP } from '../../../../../global/types'
import { useDispatchStore } from '../../../../../store/StoreProvider'
import { ACTION_TYPES } from '../../../../../store/actionTypes'
import * as S from "../elements"
import { IoMdSettings } from "react-icons/io";

type Props = {
    setId: number
}

const SetSettingsButton = ({ setId }: Props) => {

    const dispatch = useDispatchStore()
    const { removable } = useHasPermission(Number(setId))

    return (
        <S.Button $isDisabled={!removable} disabled={!removable} onClick={() => dispatch({ type: ACTION_TYPES.SET_ACTIVE_POPUP, payload: ENUM_POPUP.SET_SETTINGS })} >
            <S.ButtonText>Settings</S.ButtonText>
            <S.IconContainer>
                <IconContainer color="rgb(54, 2, 100)" icon={IoMdSettings} />
            </S.IconContainer>
        </S.Button>
    )
}

export default SetSettingsButton