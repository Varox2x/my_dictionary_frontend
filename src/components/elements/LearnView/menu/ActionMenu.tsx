import { useDispatchLearnView, useLearnView } from "../Store/LearnViewProvider"
import { ACTION_TYPES } from "../Store/actionTypes"
import * as S from "../elements"
import { CardSideType, ENUM_CARD_SIDE, ENUM_STAGES_NAMES, StagesNamesType } from "../types"

const ActionMenu = () => {

    const dispatch = useDispatchLearnView()
    const state = useLearnView()

    const handleButton = (stageName: StagesNamesType) => {
        dispatch({ type: ACTION_TYPES.CHANGE_FRONT_STAGE, payload: stageName })
    }

    const handleHintButton = () => {
        if (state.currentBackStage !== ENUM_STAGES_NAMES.HINT) {
            dispatch({ type: ACTION_TYPES.REVERT_CARD })
            dispatch({ type: ACTION_TYPES.CHANGE_BACK_STAGE, payload: ENUM_STAGES_NAMES.HINT })
        } else {
            dispatch({ type: ACTION_TYPES.CHANGE_BACK_STAGE, payload: ENUM_STAGES_NAMES.DEFAULT })
        }
    }

    const handleShuffleButton = () => {
        dispatch({ type: ACTION_TYPES.SHUFFLE })
    }

    const buttonAccessibility = (requiredCardSide: CardSideType) => {
        if (state.cardSide === requiredCardSide) {
            return false
        }
        return true
    }

    return (
        <S.ActionMenuWrapper>
            <S.ActionMenuButton disabled={buttonAccessibility(ENUM_CARD_SIDE.FRONT)} onClick={() => handleButton(ENUM_STAGES_NAMES.INPUT)}>text</S.ActionMenuButton>
            <S.ActionMenuButton disabled={buttonAccessibility(ENUM_CARD_SIDE.FRONT)} onClick={() => handleButton(ENUM_STAGES_NAMES.EXAMPLE)}>example</S.ActionMenuButton>
            <S.ActionMenuButton disabled={buttonAccessibility(ENUM_CARD_SIDE.FRONT)} onClick={() => handleButton(ENUM_STAGES_NAMES.DEFAULT)}>hide</S.ActionMenuButton>
            <S.ActionMenuButton disabled={buttonAccessibility(ENUM_CARD_SIDE.FRONT)} onClick={() => handleHintButton()}>hint {state.currentBackStage == ENUM_STAGES_NAMES.HINT ? "active" : "no active"}</S.ActionMenuButton>
            <S.ActionMenuButton onClick={() => handleShuffleButton()}>shuffle</S.ActionMenuButton>
        </S.ActionMenuWrapper>
    )
}

export default ActionMenu