import * as S from "../elements"
import { UpdateWordType, WordType } from '../../../../../global/types'
import { ENUM_WORD_RESOURCE } from '../../types'
import { useEditView } from '../../Store/EditViewProvider'
import { useGetSetWords } from '../../../../../api/hooks/queries/useGetSetWords'
import { getSetWords } from '../../../../../api/setApi'
import { useUpdateWordsBulk } from '../../../../../api/hooks/mutations/useUpdateWordsBulk'
import IconContainer from "../../../../../global/hoc/IconContainer"
import { RiSave2Fill } from "react-icons/ri";
import { useMemo } from "react"


type Props = {
    setId: number
}

const SaveButton = ({ setId }: Props) => {
    const state = useEditView()
    const { data } = useGetSetWords<WordType[]>(getSetWords, 1, setId)
    const {
        mutate,
    } = useUpdateWordsBulk({ stateWords: state.words, setId: Number(setId) })



    //keeps difference between original data and modificated
    const buildedDiff = useMemo(() => {
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
        return diff;
    }, [data, state.words]);

    const handleSave = () => {
        const diff: UpdateWordType[] = buildedDiff
        if (diff.length > 0) {
            mutate({ data: diff, setId })
        }
    }

    const isButtonDisabled = (): boolean => {
        const diff: UpdateWordType[] = buildedDiff
        if (diff.length > 0) {
            return false
        }
        return true
    }

    return (
        <S.Button $isDisabled={isButtonDisabled()} disabled={isButtonDisabled()} onClick={() => handleSave()} >
            <S.ButtonText>SAVE</S.ButtonText>
            <S.IconContainer>
                <IconContainer color="rgb(54, 2, 100)" icon={RiSave2Fill} />
            </S.IconContainer>
        </S.Button>

    )
}

export default SaveButton