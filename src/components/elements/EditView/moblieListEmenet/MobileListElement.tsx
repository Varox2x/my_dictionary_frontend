import * as S from "./elements"
import { WordType } from '../../../../global/types'
import ResourceField from './ResourceField'
import SingleInput from './inputs/SingleInput'
import { ENUM_WORD_RESOURCE } from '../types'
import SingleTextArea from './inputs/SingleTextArea'
import { useEditView } from '../Store/EditViewProvider'
import { MdExpandMore } from "react-icons/md";
import IconContainer from "../../../../global/hoc/IconContainer"
import { useParams } from "react-router-dom"
import ButtonsField from "./buttonsField/ButtonsField"
import AnimateHeight from 'react-animate-height';
import { useMemo, } from "react"
import { ClickedBackgdound } from "./clickedBackgdound/ClickedBackgdound"

type Props = WordType


const MobileListElement = ({
    id: wordId,
}: Props) => {

    const state = useEditView()
    const { id: setId } = useParams();

    const isThisWordCurrentlyEditing = useMemo(() => {
        return state.currentlyEditingWord == wordId
    }, [wordId, state.currentlyEditingWord]);


    return (

        <S.SingleElementWrapper $isOpen={isThisWordCurrentlyEditing}>
            <IconContainer color={!isThisWordCurrentlyEditing ? "#3E2265" : "transparent"} icon={MdExpandMore} style={{ position: 'absolute', right: "10px", top: '15px' }} />
            <ClickedBackgdound wordId={wordId} />
            <AnimateHeight
                style={{ width: "100%" }}
                duration={800}
                height={isThisWordCurrentlyEditing ? 'auto' : 50}
            > <S.WordsFieldWrapper>
                    <S.Column $isBorder={true} $isOpen={isThisWordCurrentlyEditing}>
                        <ResourceField editComponent={SingleInput} wordId={wordId} wordResource={ENUM_WORD_RESOURCE.NAMES} />
                    </S.Column>
                    <S.Column>
                        <ResourceField editComponent={SingleInput} wordId={wordId} wordResource={ENUM_WORD_RESOURCE.DEFINITIONS} />
                    </S.Column>
                </S.WordsFieldWrapper>
                <S.ExampleSentencesFieldWrapper>
                    <ResourceField editComponent={SingleTextArea} wordId={wordId} wordResource={ENUM_WORD_RESOURCE.EXAMPLE_SENTENCE} />
                </S.ExampleSentencesFieldWrapper>
                <ButtonsField setId={Number(setId)} wordId={wordId} />
            </AnimateHeight>

        </S.SingleElementWrapper>

    )
}

export default MobileListElement