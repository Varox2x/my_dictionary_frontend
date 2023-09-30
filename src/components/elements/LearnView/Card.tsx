import { motion } from 'framer-motion';
import * as S from './elements';
import { useDispatchLearnView, useLearnView } from './Store/LearnViewProvider';
import { ACTION_TYPES } from './Store/actionTypes';
import { DIRECTION_ENUM, ENUM_CARD_SIDE } from './types';
import Stage from './Stage';
import { stagesComponents } from './stages/stagesComponents';


const Card = () => {

    const dispatch = useDispatchLearnView();
    const state = useLearnView()

    const revertCard = () => {
        dispatch({ type: ACTION_TYPES.REVERT_CARD })
    }

    const calculateInitialPosition = () => {
        switch (state.enterDirection) {
            case DIRECTION_ENUM.RIGHT:
                return 500
            case DIRECTION_ENUM.LEFT:
                return -500
            default:
                return 0
        }
    }

    return (
        <motion.div
            key={state.currentIndex}
            initial={{ opacity: 0, x: calculateInitialPosition() }}
            animate={{ opacity: 1, x: 0 }}
            style={{
                zIndex: 5,
                transformStyle: 'preserve-3d',
                perspective: '600px',
                border: "2px solid pink"

            }}
        >
            <S.CardContainer $isrevert={state.cardSide !== ENUM_CARD_SIDE.FRONT} onClick={() => revertCard()}>
                <S.FrontSide>
                    {state.wordsArray[state.currentIndex].name}
                    <Stage currentStage={state.currentFrontStage}>
                        {stagesComponents[ENUM_CARD_SIDE.FRONT]}
                    </Stage>
                </S.FrontSide>
                <S.BackSide>
                    {state.wordsArray[state.currentIndex].definition}
                    <Stage currentStage={state.currentBackStage}>
                        {stagesComponents[ENUM_CARD_SIDE.BACK]}
                    </Stage>
                </S.BackSide>
            </S.CardContainer>
        </motion.div>
    )
}

export default Card