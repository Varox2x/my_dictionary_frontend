import { useEffect } from 'react'
import * as S from '../elements/EditView/elements'
import * as GlobalStyles from '../elements/global/elements'
import { getSetWords } from '../../api/setApi'
import { ENUM_POPUP, WordType } from '../../global/types'
import List from '../elements/EditView/List'
import { useDispatchEditView, useEditView } from '../elements/EditView/Store/EditViewProvider'
import { ACTION_TYPES as ACTION_TYPES_EDIT } from '../elements/EditView/Store/actionTypes'
import CreateWordElement from '../elements/EditView/modalContent/createWord/CreateWord'
import Modal from '../elements/global/Modal'
import SetSettings from '../elements/EditView/modalContent/setSettings/SetSettings'
import { useGetSetWords } from '../../api/hooks/queries/useGetSetWords'
import MobileListElement from '../elements/EditView/moblieListEmenet/MobileListElement'
import { useDispatchStore, useStore } from '../../store/StoreProvider'
import { ACTION_TYPES } from '../../store/actionTypes'
import PageButtons from '../elements/EditView/pageButtons/PageButtons'
import LoadingSpinner from '../../global/loadingSpinner/LoadingSpinner'

type Props = {
    setId: number
}

const EditView = ({ setId }: Props) => {
    const state = useEditView()
    const dispatch = useDispatchEditView();
    const globalState = useStore()
    const dispatchGlobal = useDispatchStore()
    const { data, isLoading, dataUpdatedAt } = useGetSetWords<WordType[]>(getSetWords, 1, setId)

    useEffect(() => {
        if (data?.data) {
            dispatch({ type: ACTION_TYPES_EDIT.SET_WORDS, payload: data.data })
        }
    }, [data, dispatch, dataUpdatedAt])

    if (isLoading) {
        return <GlobalStyles.LoadingWrapper ><LoadingSpinner isLoading={true} isWhite={false} /></GlobalStyles.LoadingWrapper>
    }


    return (
        <S.Wrapper>
            {!isLoading && state.words && <List<WordType > items={state.words} itemComponent={MobileListElement} />}
            <PageButtons setId={setId} />
            <Modal shouldShow={globalState.activePopup === ENUM_POPUP.CREATE_WORD} onRequestClose={() => dispatchGlobal({ type: ACTION_TYPES.SET_ACTIVE_POPUP, payload: ENUM_POPUP.NONE })} ><CreateWordElement /></Modal>
            <Modal shouldShow={globalState.activePopup === ENUM_POPUP.SET_SETTINGS} onRequestClose={() => dispatchGlobal({ type: ACTION_TYPES.SET_ACTIVE_POPUP, payload: ENUM_POPUP.NONE })} ><SetSettings setId={setId} /></Modal>
        </S.Wrapper>

    );
}

export default EditView