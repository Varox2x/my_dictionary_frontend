import IconContainer from '../../../../../global/hoc/IconContainer';
import { ENUM_POPUP } from '../../../../../global/types'
import { useDispatchStore } from '../../../../../store/StoreProvider'
import { ACTION_TYPES } from '../../../../../store/actionTypes'
import * as S from "../elements"
import { IoAdd } from "react-icons/io5";

const CreateNewWordButton = () => {

    const dispatch = useDispatchStore()

    return (
        <S.Button $isDisabled={false} onClick={() => dispatch({ type: ACTION_TYPES.SET_ACTIVE_POPUP, payload: ENUM_POPUP.CREATE_WORD })} >
            <S.ButtonText>Create Word</S.ButtonText>
            <S.IconContainer>
                <IconContainer color="rgb(54, 2, 100)" icon={IoAdd} />
            </S.IconContainer>
        </S.Button>

    )
}

export default CreateNewWordButton