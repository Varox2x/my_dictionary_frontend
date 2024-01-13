import { useDispatchEditView, useEditView } from '../../Store/EditViewProvider'
import * as S from './elements'
import { ACTION_TYPES } from '../../Store/actionTypes'

type Props = {
    wordId: number
}


export const ClickedBackgdound = ({ wordId }: Props) => {

    const state = useEditView()
    const dispatch = useDispatchEditView();

    const handleClick = () => {
        if (state.currentlyEditingWord == wordId) {
            dispatch({
                type: ACTION_TYPES.SET_CURRENTLY_EDITING_WORD, payload: false
            })
        } else {
            dispatch({
                type: ACTION_TYPES.SET_CURRENTLY_EDITING_WORD, payload: wordId
            })
        }
    }

    return (
        <S.Wrapper onClick={() => handleClick()} $display={state.currentlyEditingWord == wordId}></S.Wrapper>
    )
}
