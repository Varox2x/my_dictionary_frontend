import React from 'react'
import * as S from '../elements';
import { useLearnView } from '../Store/LearnViewProvider';
import { stagesComponents } from '../stages/stagesComponents';
import { ENUM_CARD_SIDE } from '../types';
import Stage from '../Stage';
import DefaultView from './DefaultView';
const BackSide = () => {

    const state = useLearnView()

    return (
        <S.BackSide>
            <DefaultView isrevert={true} data={state.wordsArray[state.currentIndex].definitions} />
            <Stage currentStage={state.currentBackStage}>
                {stagesComponents[ENUM_CARD_SIDE.BACK]}
            </Stage>
        </S.BackSide>
    )
}

export default BackSide