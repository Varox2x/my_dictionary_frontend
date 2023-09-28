import { motion, AnimatePresence } from 'framer-motion';
import { useLearnView } from './Store/LearnViewProvider';
import * as S from './elements';


type Props = {
    children: JSX.Element[]
};

const Stage = ({ children }: Props) => {

    // const dispatch = useDispatchLearnView();
    const state = useLearnView()


    return (
        <AnimatePresence>
            <S.StageWrapper offset={0}>
                <motion.div style={{ width: "100%", height: "100%" }}
                    animate={{
                        x: 0,
                        y: state.currentFrontStage * -300 + 300,
                        // y: state.currentFrontStage + 300,
                    }}>
                    {children.map((stageComponent) => {
                        return (
                            <S.SingleStageWrapper>
                                {stageComponent}
                            </S.SingleStageWrapper>
                        )
                    })}
                </motion.div>
            </S.StageWrapper>
        </AnimatePresence>
    )
}

export default Stage