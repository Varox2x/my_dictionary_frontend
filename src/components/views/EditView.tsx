import { useEffect, useState } from 'react'
import * as S from '../elements/EditView/elements'
import { getSetWords, updateWordsBulk } from '../../api/setApi'
import { CreateWordApiArgsType, ResponseDataType, UpdateBulkWordApiArgsType, UpdateWordType, WordType } from '../../global/types'
import List from '../elements/EditView/List'
import ListElement from '../elements/EditView/listElement/ListElement'
import { useDispatchEditView, useEditView } from '../elements/EditView/Store/EditViewProvider'
import { ACTION_TYPES } from '../elements/EditView/Store/actionTypes'
import { ENUM_WORD_RESOURCE } from '../elements/EditView/types'
import CreateWordElement from '../elements/EditView/createWord/CreateWord'
import Modal from '../elements/global/Modal'
import { useGetSetWords } from '../../api/hooks/useGet'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

type Props = {
    setId: number
}

const EditView = ({ setId }: Props) => {
    const state = useEditView()
    const dispatch = useDispatchEditView();
    const queryClient = useQueryClient()
    const [displayCreateWordPopup, setDisplayCreateWordPopup] = useState<boolean>(false)
    const { data, isLoading, dataUpdatedAt } = useGetSetWords<WordType[]>(getSetWords, 1, setId)

    const {
        mutate,
    } = useMutation<AxiosResponse, Error, UpdateBulkWordApiArgsType>({
        mutationFn: updateWordsBulk,
        onSuccess: () => {
            queryClient.setQueryData<ResponseDataType<WordType[]>>(
                ['setswords', setId],
                (data: ResponseDataType<WordType[]> | undefined) => {
                    if (!data) return undefined
                    data.data = state.words
                    return data
                }
            )
        },
    })

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
            {!isLoading && state.words && <List<WordType> items={state.words} itemComponent={ListElement} />}
            <button onClick={() => handleSave()} >SAVE</button>
            <button onClick={() => setDisplayCreateWordPopup(prev => !prev)} >Create New Word</button>
            <Modal shouldShow={displayCreateWordPopup} onRequestClose={() => setDisplayCreateWordPopup(false)} ><CreateWordElement /></Modal>
        </S.Wrapper>

    );
}

export default EditView