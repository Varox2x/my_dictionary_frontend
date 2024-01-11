import { useMemo } from "react"
import { useDeleteWord } from "../../../../../api/hooks/mutations/useDeleteWord"
import { useUpdateSingleWord } from "../../../../../api/hooks/mutations/useUpdateSingleWord"
import { useGetSetWords } from "../../../../../api/hooks/queries/useGetSetWords"
import { getSetWords } from "../../../../../api/setApi"
import { UpdateSingleWordType, WordType } from "../../../../../global/types"
import { useEditView } from "../../Store/EditViewProvider"
import * as S from "./elements"
import { ENUM_WORD_RESOURCE } from "../../types"

type Props = {
    setId: number,
    wordId: number,
}

const ButtonsField = ({ setId, wordId }: Props) => {

    const state = useEditView()
    const { data } = useGetSetWords<WordType[]>(getSetWords, 1, setId)


    const {
        mutate
    } = useDeleteWord({ id: wordId, setId: setId })

    const { mutate: mutateSave } = useUpdateSingleWord({
        wordId,
        setId,
    })


    //keeps difference between original data and modificated
    const buildedDiff = useMemo(() => {
        if (data) {
            const word = data.data.find(word => word.id == wordId)
            if (!word) return []
            const resourcesToCheck = [...Object.values(ENUM_WORD_RESOURCE)]
            let diff: UpdateSingleWordType = {}
            const checkWord: WordType | undefined = state.words.find(el => el.id == word.id)
            if (checkWord) {
                let isNewValue: boolean = false
                let wordDiff = {}
                resourcesToCheck.forEach(resource => {
                    if (JSON.stringify(word[resource].filter(el => el !== "")) != JSON.stringify(checkWord[resource].filter(el => el !== ""))) {
                        wordDiff = { ...wordDiff, [resource]: checkWord[resource] }
                        isNewValue = true
                    }
                })
                if (isNewValue) return diff = { ...wordDiff }
            }
            return diff;
        }

    }, [data, state.words]);

    const checkAreChanges = () => {
        return !(JSON.stringify(buildedDiff) === '{}')
    }


    const handleSaveButton = () => {
        if (checkAreChanges()) {
            mutateSave(buildedDiff as UpdateSingleWordType)
        }
    }

    return (
        <S.ButtonsFieldWrapper>
            <S.SaveButton $isDisabled={!checkAreChanges()} disabled={!checkAreChanges()} onClick={() => handleSaveButton()} >Save</S.SaveButton>
            <S.DeleteButton onClick={() => mutate(wordId)} >DELETE</S.DeleteButton>
        </S.ButtonsFieldWrapper>
    )
}

export default ButtonsField