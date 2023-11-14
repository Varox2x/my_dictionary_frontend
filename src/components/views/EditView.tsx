import { useEffect, useState } from 'react'
import * as S from '../elements/EditView/elements'
import { getSetWords, updateWordsBulk } from '../../api/setApi'
import { useGetSetWords } from '../../api/hooks/useGet'
import { UpdateWordType, WordType } from '../../global/types'
import List from '../elements/EditView/List'
import ListElement from '../elements/EditView/listElement/ListElement'
import { useDispatchEditView, useEditView } from '../elements/EditView/Store/EditViewProvider'
import { ACTION_TYPES } from '../elements/EditView/Store/actionTypes'
import { ENUM_WORD_RESOURCE } from '../elements/EditView/types'
import CreateWordElement from '../elements/EditView/createWord/CreateWord'
import Modal from '../elements/global/Modal'



const EditView = () => {
    const state = useEditView()
    const dispatch = useDispatchEditView();
    const { data, isLoading, dataUpdatedAt } = useGetSetWords<WordType[]>(getSetWords, 1, 87)
    const [displayCreateWordPopup, setDisplayCreateWordPopup] = useState<boolean>(false)

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
        console.log(diff)
        if (diff.length > 0) {
            updateWordsBulk(diff, 87).then(r => {
                console.log(r)
            })
        }
    }


    return (
        <S.Wrapper>
            {!isLoading && state.words && <List<WordType> items={state.words} itemComponent={ListElement} />}
            <button onClick={() => handleSave()} >SAVE</button>
            <button onClick={() => setDisplayCreateWordPopup(prev => !prev)} >Create New Word</button>
            {/* {displayCreateWordPopup && <CreateWordElement />} */}
            <Modal shouldShow={displayCreateWordPopup} onRequestClose={() => setDisplayCreateWordPopup(false)} ><CreateWordElement /></Modal>
        </S.Wrapper>

    );
}

export default EditView