import { motion } from 'framer-motion';
import * as S from './elements';
import { useLearnView } from './Store/LearnViewProvider';
import { DIRECTION_ENUM, ENUM_CARD_SIDE } from './types';

const CardEscape = () => {

    const state = useLearnView()

    const calculateEscapePosition = () => {
        switch (state.enterDirection) {
            case DIRECTION_ENUM.RIGHT:
                return -500
            case DIRECTION_ENUM.LEFT:
                return 500
            default:
                return 0
        }
    }

    return (
        <motion.div
            key={state.currentIndex}
            animate={{ opacity: 0, x: calculateEscapePosition() }}
            initial={{ opacity: 1, x: 0 }}
        >
            <S.CardContainer $isrevert={state?.previousCardSide !== ENUM_CARD_SIDE.FRONT} >
                <S.FrontSide>
                    {state.wordsArray[state.currentIndex].name}
                </S.FrontSide>
                <S.BackSide>
                    {state.wordsArray[state.currentIndex].definition}
                </S.BackSide>
            </S.CardContainer>
        </motion.div>
    )
}

export default CardEscape