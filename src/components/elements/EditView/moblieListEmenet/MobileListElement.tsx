import { useState } from 'react'
import * as S from "./elements"
import { WordType } from '../../../../global/types'
import ResourceField from './ResourceField'
import SingleInput from './SingleInput'
import { ENUM_WORD_RESOURCE } from '../types'
import SingleTextArea from './SingleTextArea'

type Props = WordType


const MobileListElement = ({
    id,
}: Props) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <S.SingleElementWrapper onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
            <S.WordsFieldWrapper>
                <S.Column>
                    <ResourceField editComponent={SingleInput} wordId={id} wordResource={ENUM_WORD_RESOURCE.NAMES} />
                </S.Column>
                <S.Column>
                    <ResourceField editComponent={SingleInput} wordId={id} wordResource={ENUM_WORD_RESOURCE.DEFINITIONS} />
                </S.Column>
            </S.WordsFieldWrapper>
            <S.ExampleSentencesFieldWrapper>
                <ResourceField editComponent={SingleTextArea} wordId={id} wordResource={ENUM_WORD_RESOURCE.EXAMPLE_SENTENCE} />
            </S.ExampleSentencesFieldWrapper>
        </S.SingleElementWrapper>
    )
}

export default MobileListElement