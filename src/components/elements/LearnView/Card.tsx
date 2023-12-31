import { motion } from 'framer-motion';
import * as S from './elements';
import { useDispatchLearnView, useLearnView } from './Store/LearnViewProvider';
import { ACTION_TYPES } from './Store/actionTypes';
import { DIRECTION_ENUM, ENUM_CARD_SIDE } from './types';
import BackSide from './card/BackSide';
import FrontSide from './card/FrontSide';


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
            }}
        >
            <S.CardContainer $isrevert={state.cardSide !== ENUM_CARD_SIDE.FRONT} onClick={() => revertCard()}>
                <FrontSide />
                <BackSide />
            </S.CardContainer>
        </motion.div>
    )
}

export default Card