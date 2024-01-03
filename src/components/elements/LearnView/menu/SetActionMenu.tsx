import * as S from "../elements"
import ActionMenuButton from "./ActionMenuButton"
import { useDispatchLearnView } from "../Store/LearnViewProvider"
import { ACTION_TYPES } from "../Store/actionTypes"
import { FaShuffle } from "react-icons/fa6";

const SetActionMenu = () => {
    const dispatch = useDispatchLearnView()

    const handleShuffleButton = () => {
        dispatch({ type: ACTION_TYPES.SHUFFLE })
    }

    return (
        <S.ActionMenuWrapper side="left">
            <ActionMenuButton isDisable={false} onClick={handleShuffleButton} icon={FaShuffle} />
        </S.ActionMenuWrapper>
    )
}

export default SetActionMenu