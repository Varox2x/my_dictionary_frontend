import { useEffect, useState } from 'react'
import * as S from '../elements/EditView/elements'
import { getSetWords } from '../../api/setApi'
import { UpdateWordType, WordType } from '../../global/types'
import List from '../elements/EditView/List'
import ListElement from '../elements/EditView/listElement/ListElement'
import { useDispatchEditView, useEditView } from '../elements/EditView/Store/EditViewProvider'
import { ACTION_TYPES } from '../elements/EditView/Store/actionTypes'
import { ENUM_WORD_RESOURCE } from '../elements/EditView/types'
import CreateWordElement from '../elements/EditView/modalContent/createWord/CreateWord'
import Modal from '../elements/global/Modal'
import { EditWordPopupType, ENUM_EDIT_VIEW_POPUP } from '../elements/EditView/types'
import SetSettings from '../elements/EditView/modalContent/setSettings/SetSettings'
import useHasPermission from '../../global/hooks/useHasPermission'
import { useUpdateWordsBulk } from '../../api/hooks/mutations/useUpdateWordsBulk'
import { useGetSetWords } from '../../api/hooks/queries/useGetSetWords'

type Props = {
    setId: number
}

const EditView = ({ setId }: Props) => {
    const state = useEditView()
    const dispatch = useDispatchEditView();
    const [activePopup, setActivePopup] = useState<EditWordPopupType>(ENUM_EDIT_VIEW_POPUP.NONE)
    const { data, isLoading, dataUpdatedAt } = useGetSetWords<WordType[]>(getSetWords, 1, setId)
    const { removable } = useHasPermission(Number(setId))


    const {
        mutate,
    } = useUpdateWordsBulk({ stateWords: state.words, setId: Number(setId) })

    useEffect(() => {
        if (data?.data) {
            dispatch({ type: ACTION_TYPES.SET_WORDS, payload: data.data })
        }
    }, [data, dispatch, dataUpdatedAt])

    const handleSave = () => {
        const resourcesToCheck = [...Object.values(ENUM_WORD_RESOURCE)]
        let diff: UpdateWordType[] = []
        data?.data.forEach((word) => {
            const checkWord: WordType | undefined = state.words.find(el => el.id == word.id)
            if (checkWord) {
                let isNewValue: boolean = false
                let wordDiff = { id: word.id }
                resourcesToCheck.forEach(resource => {
                    if (JSON.stringify(word[resource].filter(el => el !== "")) != JSON.stringify(checkWord[resource].filter(el => el !== ""))) {
                        wordDiff = { ...wordDiff, [resource]: checkWord[resource] }
                        isNewValue = true
                    }
                })
                if (isNewValue) return diff = [...diff, wordDiff]
            }
        })
        if (diff.length > 0) {
            mutate({ data: diff, setId })
        }
    }


    return (
        <S.Wrapper>
            {!isLoading && state.words && <List<WordType > items={state.words} itemComponent={ListElement} />}
            <button onClick={() => handleSave()} >SAVE</button>
            <button onClick={() => setActivePopup(ENUM_EDIT_VIEW_POPUP.CREATE_WORD)} >Create New Word</button>
            <button disabled={!removable} onClick={() => setActivePopup(ENUM_EDIT_VIEW_POPUP.SET_SETTINGS)} >Set's settings</button>
            <Modal shouldShow={activePopup === ENUM_EDIT_VIEW_POPUP.CREATE_WORD} onRequestClose={() => setActivePopup(ENUM_EDIT_VIEW_POPUP.NONE)} ><CreateWordElement /></Modal>
            <Modal shouldShow={activePopup === ENUM_EDIT_VIEW_POPUP.SET_SETTINGS} onRequestClose={() => setActivePopup(ENUM_EDIT_VIEW_POPUP.NONE)} ><SetSettings setId={setId} /></Modal>
        </S.Wrapper>

    );
}

export default EditView