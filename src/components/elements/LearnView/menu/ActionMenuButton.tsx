import * as S from './elements'
import { useDispatchLearnView, useLearnView } from '../Store/LearnViewProvider'
import { ENUM_CARD_SIDE, ENUM_STAGES_NAMES, StagesNamesType } from '../types'
import { ACTION_TYPES } from '../Store/actionTypes'

type Props = {
    icon: string,
    onClick: () => void,
    stageName?: StagesNamesType
    isDisable: boolean
}


const ActionMenuButton = ({ icon, onClick, stageName, isDisable }: Props) => {

    const state = useLearnView()
    const dispatch = useDispatchLearnView()

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
            {/* <S.FiltrMask isActive={!isDisable} /> */}
            <S.Button disabled={isDisable} onClick={(e) => handleClick(e)}>
                <S.Icon $isDisable={isDisable} $isActive={isActive()} src={icon} />
            </S.Button>
        </div>

    )
}

export default ActionMenuButton