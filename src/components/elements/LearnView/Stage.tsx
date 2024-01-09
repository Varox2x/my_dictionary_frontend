import { motion, AnimatePresence } from 'framer-motion';
import * as S from './elements';
import { CardSideType, ENUM_CARD_SIDE, ENUM_STAGES_NAMES, StagesNamesType } from './types';


type Props = {
    children: { name: StagesNamesType, component: JSX.Element }[],
    currentStage: StagesNamesType,
    cardSide: CardSideType
};

const Stage = ({ children, currentStage, cardSide }: Props) => {


    function findIndexByName(): number {
        if (currentStage == ENUM_STAGES_NAMES.DEFAULT) return 0
        for (let i = 0; i < children.length; i++) {
            if (children[i].name === currentStage) {
                return i + 1;
            }
        }
        throw new Error(`No stage with this name`)
    }

    function calculateY(): number {
        if (cardSide == ENUM_CARD_SIDE.FRONT) {
            return findIndexByName() * 300 + -300
        } else {
            return findIndexByName() * -300 + 300
        }
    }

    if (currentStage == ENUM_STAGES_NAMES.STAGE_DISABLE) {
        return null
    }

    return (
        <AnimatePresence>
            <S.StageWrapper offset={0}>
                <motion.div style={{ width: "100%", height: "100%" }}
                    initial={{ x: 0, y: (cardSide == ENUM_CARD_SIDE.FRONT ? -300 : 300) }}
                    animate={{
                        x: 0,
                        y: calculateY()
                    }}>
                    {children.map(({ component }, index) => {
                        return (
                            <S.SingleStageWrapper key={index}>
                                {component}
                            </S.SingleStageWrapper>
                        )
                    })}
                </motion.div>
            </S.StageWrapper>
        </AnimatePresence>
    )
}

export default Stage