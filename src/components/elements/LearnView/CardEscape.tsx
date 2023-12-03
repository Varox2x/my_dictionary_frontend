import { motion } from 'framer-motion';
import * as S from './elements';
import { useLearnView } from './Store/LearnViewProvider';
import { DIRECTION_ENUM, ENUM_CARD_SIDE } from './types';
import DefaultView from './card/DefaultView';

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

    const calculatePreviousIndex = () => {
        switch (state.enterDirection) {
            case DIRECTION_ENUM.RIGHT:
                return state.currentIndex + 1 == state.wordsArray.length ? 0 : state.currentIndex + 1
            case DIRECTION_ENUM.LEFT:
                return state.currentIndex - 1 < 0 ? state.wordsArray.length - 1 : state.currentIndex - 1
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
            <S.CardContainer $isrevert={state.previousCardSide !== ENUM_CARD_SIDE.FRONT} >
                <S.FrontSide>
                    <DefaultView data={state.wordsArray[calculatePreviousIndex()].names} />
                </S.FrontSide>
                <S.BackSide>
                    <DefaultView data={state.wordsArray[calculatePreviousIndex()].definitions} />

                </S.BackSide>
            </S.CardContainer>
        </motion.div>
    )
}

export default CardEscape