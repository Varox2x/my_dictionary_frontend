import * as S from '../elements';
import { useLearnView } from '../Store/LearnViewProvider';
import { stagesComponents } from '../stages/stagesComponents';
import { ENUM_CARD_SIDE, ENUM_STAGES_NAMES } from '../types';
import Stage from '../Stage';
import DefaultView from './DefaultView';

const FrontSide = () => {

    const state = useLearnView()

    return (
        <S.FrontSide>
            <DefaultView isrevert={false} data={state.wordsArray[state.currentIndex].names} />
            {state.currentFrontStage !== ENUM_STAGES_NAMES.STAGE_DISABLE && <Stage cardSide={ENUM_CARD_SIDE.FRONT} currentStage={state.currentFrontStage}>
                {stagesComponents[ENUM_CARD_SIDE.FRONT]}
            </Stage>}
        </S.FrontSide>
    )
}

export default FrontSide