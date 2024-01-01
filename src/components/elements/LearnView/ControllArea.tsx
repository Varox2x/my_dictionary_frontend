import { useCallback, useEffect, useRef } from "react";
import * as S from "./elements"
import { ACTION_TYPES } from "./Store/actionTypes";
import { useDispatchLearnView, useLearnView } from './Store/LearnViewProvider';
import { DIRECTION_ENUM, DirectionType, ENUM_CARD_SIDE, ENUM_STAGES_NAMES } from "./types";


const ControllArea = () => {

    const dispatch = useDispatchLearnView();
    const state = useLearnView()
    const controllAreRef = useRef<HTMLDivElement>(null)

    const handleRollCard = useCallback((direction: DirectionType) => {
        dispatch({ type: ACTION_TYPES.ROLL_CARD, payload: direction })
    }, [dispatch])


    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (event.code === 'Space') {
            dispatch({ type: ACTION_TYPES.REVERT_CARD })
        }
        if (event.key === 'ArrowLeft') {
            handleRollCard(DIRECTION_ENUM.LEFT)
        }
        if (event.key === 'ArrowRight') {
            handleRollCard(DIRECTION_ENUM.RIGHT)
        }
        if (event.key === 'ArrowUp') {
            if (state.cardSide == ENUM_CARD_SIDE.FRONT) {
                if (state.currentFrontStage == ENUM_STAGES_NAMES.INPUT) {
                    dispatch({ type: ACTION_TYPES.CHANGE_FRONT_STAGE, payload: ENUM_STAGES_NAMES.DEFAULT })
                }
                else {
                    dispatch({ type: ACTION_TYPES.CHANGE_FRONT_STAGE, payload: ENUM_STAGES_NAMES.INPUT })
                }
            }
        }
    }, [dispatch, handleRollCard, state.cardSide, state.currentFrontStage])

    useEffect(() => {
        const currentRef = controllAreRef.current;

        if (currentRef) {
            currentRef.tabIndex = 0;
            currentRef.addEventListener('keydown', handleKeyPress);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('keydown', handleKeyPress);
            }
        };
    }, [handleKeyPress, state.currentFrontStage]);


    return (
        <S.ControllerAreaContainer ref={controllAreRef}>
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