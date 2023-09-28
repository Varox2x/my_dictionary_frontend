import * as S from "./elements"
import { ACTION_TYPES } from "./Store/actionTypes";
import { useDispatchLearnView } from './Store/LearnViewProvider';
import { DIRECTION_ENUM, DirectionType } from "./types";


const ControllArea = () => {

    const dispatch = useDispatchLearnView();
    // const state = useLearnView()

    const handleRollCard = (direction: DirectionType) => {
        console.log("click")
        dispatch({ type: ACTION_TYPES.ROLL_CARD, payload: direction })
    }


    return (
        <S.ControllerAreaContainer>
            <S.ControllerAreaWrapper>
                <S.ControllAreaTopSide />
                <S.ControllAreaBottomSide />
                <S.ControllAreaLeftSide onClick={() => handleRollCard(DIRECTION_ENUM.LEFT)} />
                <S.ControllAreaRightSide onClick={() => handleRollCard(DIRECTION_ENUM.RIGHT)} />
            </S.ControllerAreaWrapper>
        </S.ControllerAreaContainer>
    )
}

export default ControllArea