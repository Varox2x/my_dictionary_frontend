import { useDispatchLearnView, useLearnView } from "../Store/LearnViewProvider"
import { ACTION_TYPES } from "../Store/actionTypes"
import * as S from "../elements"
import { CardSideType, ENUM_CARD_SIDE, ENUM_STAGES_NAMES, StagesNamesType } from "../types"
import ActionMenuButton from "./ActionMenuButton"
import { FaRegLightbulb } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { CiTextAlignCenter } from "react-icons/ci";

const ActionMenu = () => {

    const dispatch = useDispatchLearnView()
    const state = useLearnView()

    const handleButton = (stageName: StagesNamesType) => {
        dispatch({ type: ACTION_TYPES.CHANGE_FRONT_STAGE, payload: stageName })
    }

    const handleExampleButton = () => {
        dispatch({ type: ACTION_TYPES.CHANGE_BACK_STAGE, payload: ENUM_STAGES_NAMES.EXAMPLE })
    }

    const handleHintButton = () => {
        if (state.currentBackStage !== ENUM_STAGES_NAMES.HINT) {
            dispatch({ type: ACTION_TYPES.REVERT_CARD })
            dispatch({ type: ACTION_TYPES.CHANGE_BACK_STAGE, payload: ENUM_STAGES_NAMES.HINT })
        } else {
            dispatch({ type: ACTION_TYPES.CHANGE_BACK_STAGE, payload: ENUM_STAGES_NAMES.DEFAULT })
        }
    }



    const buttonAccessibility = (requiredCardSide: CardSideType) => {
        if (state.cardSide === requiredCardSide) {
            return false
        }
        return true
    }

    const isExampleSentence = () => {
        if (state.wordsArray[state.currentIndex].exampleSentence && state.wordsArray[state.currentIndex].exampleSentence.length > 0) {
            return false
        }
        return true
    }

    return (
        <S.ActionMenuWrapper side="right">
            <ActionMenuButton isDisable={state.cardSide == ENUM_CARD_SIDE.BACK} stageName={ENUM_STAGES_NAMES.HINT} onClick={() => handleHintButton()} icon={FaRegLightbulb} />
            <ActionMenuButton isDisable={buttonAccessibility(ENUM_CARD_SIDE.FRONT)} stageName={ENUM_STAGES_NAMES.INPUT} onClick={() => handleButton(ENUM_STAGES_NAMES.INPUT)} icon={CiCircleCheck} />
            <ActionMenuButton isDisable={buttonAccessibility(ENUM_CARD_SIDE.BACK) || isExampleSentence()} stageName={ENUM_STAGES_NAMES.EXAMPLE} onClick={() => handleExampleButton()} icon={CiTextAlignCenter} />
        </S.ActionMenuWrapper>
    )
}

export default ActionMenu