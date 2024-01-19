import * as S from './elements'
import { useDispatchLearnView, useLearnView } from '../Store/LearnViewProvider'
import { ENUM_CARD_SIDE, ENUM_STAGES_NAMES, StagesNamesType } from '../types'
import { ACTION_TYPES } from '../Store/actionTypes'
import IconContainer from '../../../../global/hoc/IconContainer';
import { useState } from 'react';

type Props = {
    onClick: () => void,
    stageName?: StagesNamesType,
    isDisable: boolean,
    icon: React.FunctionComponent,
}


const ActionMenuButton = ({ icon, onClick, stageName, isDisable }: Props) => {

    const state = useLearnView()
    const dispatch = useDispatchLearnView()
    const [isMouseOn, setIsMouseOn] = useState<boolean>(false)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        onClick()
        if (isActive()) {
            if (state.cardSide == ENUM_CARD_SIDE.FRONT) {
                dispatch({ type: ACTION_TYPES.CHANGE_FRONT_STAGE, payload: ENUM_STAGES_NAMES.DEFAULT })

            } else {
                dispatch({ type: ACTION_TYPES.CHANGE_BACK_STAGE, payload: ENUM_STAGES_NAMES.DEFAULT })

            }
        }
    }

    const isActive = (): boolean => {
        if (!stageName) return true
        return stageName == state.currentBackStage || stageName == state.currentFrontStage
    }

    return (
        <div style={{ position: 'relative' }}>
            <S.Button onMouseEnter={() => setIsMouseOn(true)} onMouseLeave={() => setIsMouseOn(false)} disabled={isDisable} onClick={(e) => handleClick(e)}>
                <IconContainer size={40} color={isDisable ? 'white' : (isActive() || isMouseOn) ? 'rgba(54, 2, 100, 1)' : 'rgba(0, 0, 0, 0.19)'} icon={icon} />
            </S.Button>
        </div>

    )
}

export default ActionMenuButton