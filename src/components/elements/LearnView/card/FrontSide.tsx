import * as S from '../elements';
import { useLearnView } from '../Store/LearnViewProvider';
import { stagesComponents } from '../stages/stagesComponents';
import { ENUM_CARD_SIDE, ENUM_STAGES_NAMES } from '../types';
import Stage from '../Stage';
import DefaultView from './DefaultView';
import { useEffect, useState } from 'react';

const FrontSide = () => {

    const state = useLearnView()
    const [stagesAvaible, setStagesAvaible] = useState<boolean>(false)

    useEffect(() => {
        if (state.currentFrontStage !== ENUM_STAGES_NAMES.DEFAULT) {
            setStagesAvaible(true)
        }
    }, [state.currentFrontStage])

    return (
        <S.FrontSide>
            <DefaultView isrevert={false} data={state.wordsArray[state.currentIndex].names} />
            {stagesAvaible && <Stage currentStage={state.currentFrontStage}>
                {stagesComponents[ENUM_CARD_SIDE.FRONT]}
            </Stage>}
        </S.FrontSide>
    )
}

export default FrontSide