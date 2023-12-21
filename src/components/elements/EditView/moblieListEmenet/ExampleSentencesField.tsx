import { ENUM_WORD_RESOURCE } from "../types"
import ResourceField from "./ResourceField"
import SingleTextArea from "./SingleTextArea"
import * as S from "./elements"

type Props = {
    id: number
}

const ExampleSentencesField = ({ id }: Props) => {
    return (
        <S.ExampleSentencesFieldWrapper>
            <ResourceField editComponent={SingleTextArea} wordId={id} wordResource={ENUM_WORD_RESOURCE.EXAMPLE_SENTENCE} />
        </S.ExampleSentencesFieldWrapper>
    )
}

export default ExampleSentencesField