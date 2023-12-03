import * as S from '../elements';
import { useLearnView } from '../Store/LearnViewProvider';
import { stagesComponents } from '../stages/stagesComponents';
import { ENUM_CARD_SIDE } from '../types';
import Stage from '../Stage';
import DefaultView from './DefaultView';

const FrontSide = () => {

    const state = useLearnView()

    return (
        <S.FrontSide>
            <DefaultView data={state.wordsArray[state.currentIndex].names} />
            <Stage currentStage={state.currentFrontStage}>
                {stagesComponents[ENUM_CARD_SIDE.FRONT]}
            </Stage>
        </S.FrontSide>
    )
}

export default FrontSide