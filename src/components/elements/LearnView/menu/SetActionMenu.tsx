import * as S from "../elements"
import ActionMenuButton from "./ActionMenuButton"
import { useDispatchLearnView } from "../Store/LearnViewProvider"
import { ACTION_TYPES } from "../Store/actionTypes"
import { FaShuffle } from "react-icons/fa6";
import { DIRECTION_ENUM } from "../types";

const SetActionMenu = () => {
    const dispatch = useDispatchLearnView()

    const handleShuffleButton = async () => {
        dispatch({ type: ACTION_TYPES.SHUFFLE })
        await dispatch({ type: ACTION_TYPES.ROLL_CARD, payload: DIRECTION_ENUM.LEFT })
        await dispatch({ type: ACTION_TYPES.ROLL_CARD, payload: DIRECTION_ENUM.RIGHT })
    }

    return (
        <S.ActionMenuWrapper side="left">
            <ActionMenuButton isDisable={false} onClick={handleShuffleButton} icon={FaShuffle} />
        </S.ActionMenuWrapper>
    )
}

export default SetActionMenu