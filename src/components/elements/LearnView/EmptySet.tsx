import { MODE_ENUM } from '../../../global/types'
import { useDispatchStore } from '../../../store/StoreProvider'
import { ACTION_TYPES } from '../../../store/actionTypes'
import * as GlobalStyles from '../global/elements'
import * as S from './elements'

const EmptySet = () => {

    const dispatch = useDispatchStore()

    return (
        <GlobalStyles.FullPageWrapper>
            <S.EmptySetWarning onClick={() => dispatch({ type: ACTION_TYPES.CHANGE_MODE, payload: MODE_ENUM.EDIT })} >Go to edit mode to add new words</S.EmptySetWarning>
        </GlobalStyles.FullPageWrapper>
    )
}

export default EmptySet