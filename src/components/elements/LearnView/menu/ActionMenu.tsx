import { useDispatchLearnView } from "../Store/LearnViewProvider"
import { ACTION_TYPES } from "../Store/actionTypes"
import * as S from "../elements"

const ActionMenu = () => {

    const dispatch = useDispatchLearnView()

    const handleButton = (stageIndex: number) => {
        dispatch({ type: ACTION_TYPES.CHANGE_FRONT_STAGE, payload: stageIndex })
    }

    return (
        <S.ActionMenuWrapper>
            <S.ActionMenuButton onClick={() => handleButton(1)}>text</S.ActionMenuButton>
            <S.ActionMenuButton onClick={() => handleButton(2)}>example</S.ActionMenuButton>
            <S.ActionMenuButton onClick={() => handleButton(0)}>hide</S.ActionMenuButton>
        </S.ActionMenuWrapper>
    )
}

export default ActionMenu