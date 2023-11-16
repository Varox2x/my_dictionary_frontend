import * as S from '../elements';
import { useLearnView } from '../Store/LearnViewProvider';
import { stagesComponents } from '../stages/stagesComponents';
import { ENUM_CARD_SIDE } from '../types';
import Stage from '../Stage';

const FrontSide = () => {

    const state = useLearnView()


    return (
        <S.FrontSide>
            {state.wordsArray[state.currentIndex].names.map((el, index) => {
                return el + ' '
            })}
            <Stage currentStage={state.currentFrontStage}>
                {stagesComponents[ENUM_CARD_SIDE.FRONT]}
            </Stage>
        </S.FrontSide>
    )
}

export default FrontSide